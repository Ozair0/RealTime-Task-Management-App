import {
  AddTaskRequest,
  AddTaskResponse,
  DeleteTaskRequest,
  DeleteTaskResponse,
  EmptyRequest,
  EmptyResponse,
  Task,
  TaskRequest,
  TaskResponse,
  TasksRequest,
  TasksResponse,
  UpdateTaskRequest,
  UpdateTaskResponse,
} from "../protos/task_pb";
import {
  sendUnaryData,
  ServerUnaryCall,
  ServerWritableStream,
} from "@grpc/grpc-js";
import { prisma } from "../server";
import { Status } from "@grpc/grpc-js/build/src/constants";

let connectedClientsForTasks: any[] = [];

function setTask(task: any) {
  const realtask = new Task();
  realtask.setId(task.id);
  realtask.setTitle(task.title);
  realtask.setBody(task.body);
  realtask.setStatus(task.status);
  return realtask;
}

async function addTask(
  call: ServerUnaryCall<AddTaskRequest, AddTaskResponse>,
  callback: sendUnaryData<AddTaskResponse>
) {
  try {
    console.log(call.request.getTitle());
    const task = await prisma.task.create({
      data: {
        title: call.request.getTitle(),
        body: call.request.getBody(),
        status: call.request.getStatus(),
      },
    });
    if (task) {
      const requestResponse = new AddTaskResponse();
      requestResponse.setTask(setTask(task));
      const taskRequestResponse = new TasksResponse();
      taskRequestResponse.setTasksList([setTask(task)]);
      connectedClientsForTasks.map((item) => {
        item.write(taskRequestResponse);
      });
      callback(null, requestResponse);
    } else {
      callback({
        code: Status.INVALID_ARGUMENT,
        message: "Unable to add task data into database!",
      });
    }
  } catch (e: any) {
    if (e.code == "P2003") {
      callback({
        code: Status.UNKNOWN,
        message: "foreign key violation!",
      });
    } else {
      callback({
        code: Status.UNKNOWN,
        message: e.message.toString(),
      });
    }
  }
}
async function getTask(
  call: ServerUnaryCall<TaskRequest, TaskResponse>,
  callback: sendUnaryData<TaskResponse>
) {
  const task = await prisma.task.findUnique({
    where: {
      id: call.request.getId(),
    },
  });
  if (task) {
    const requestResponse = new TaskResponse();
    requestResponse.setTask(setTask(task));
    callback(null, requestResponse);
  } else {
    callback({
      code: Status.INVALID_ARGUMENT,
      message: "task with given ID is not found!",
    });
  }
}

async function updateTask(
  call: ServerUnaryCall<UpdateTaskRequest, UpdateTaskResponse>,
  callback: sendUnaryData<UpdateTaskResponse>
) {
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: call.request.getTask()?.getId(),
      },
    });
    if (task) {
      const updateTask = await prisma.task.update({
        where: {
          id: call.request.getTask()?.getId(),
        },
        data: {
          title: call.request.getTask()?.getTitle(),
          body: call.request.getTask()?.getBody(),
          status: call.request.getTask()?.getStatus(),
        },
      });
      const requestResponse = new UpdateTaskResponse();
      requestResponse.setTask(setTask(updateTask));
      callback(null, requestResponse);
    } else {
      callback({
        code: Status.UNAVAILABLE,
        message: "Failed to update, task with given ID is not found!",
      });
    }
  } catch (e: any) {
    if (e.code == "P2003") {
      callback({
        code: Status.UNKNOWN,
        message: "foreign key violation!",
      });
    } else {
      callback({
        code: Status.UNKNOWN,
        message: e.message.toString(),
      });
    }
  }
}
async function deleteTask(
  call: ServerUnaryCall<DeleteTaskRequest, DeleteTaskResponse>,
  callback: sendUnaryData<DeleteTaskResponse>
) {
  try {
    const deleteTask = await prisma.task.delete({
      where: {
        id: call.request.getId(),
      },
    });
    if (deleteTask) {
      const requestResponse = new DeleteTaskResponse();
      requestResponse.setMessage(
        "Task with ID: " + call.request.getId() + " delete successfully!"
      );
      callback(null, requestResponse);
    } else {
      callback({
        code: Status.UNAVAILABLE,
        message: "Unable to delete task with the given ID!",
      });
    }
  } catch (e: any) {
    if (e.code == "P2003") {
      callback({
        code: Status.UNKNOWN,
        message: "foreign key violation!",
      });
    } else if (e.code == "P2025") {
      callback({
        code: Status.UNKNOWN,
        message: "Record to delete does not exist",
      });
    } else {
      callback({
        code: Status.UNKNOWN,
        message: e.message.toString(),
      });
    }
  }
}
async function getAllTasks(
  call: ServerWritableStream<TasksRequest, TasksResponse>
) {
  connectedClientsForTasks.push(call);
  const tasks = await prisma.task.findMany({
    orderBy: [
      {
        id: "desc",
      },
    ],
  });
  const requestResponse = new TasksResponse();
  tasks.map((item) => {
    requestResponse.addTasks(setTask(item));
  });
  call.write(requestResponse);
}

async function deleteUnUsedConnections(
  call: ServerUnaryCall<EmptyRequest, EmptyResponse>,
  callback: sendUnaryData<EmptyResponse>
) {
  let connectedClientsCancelled = 0;
  connectedClientsForTasks = connectedClientsForTasks.filter((item) => {
    if (item.cancelled) connectedClientsCancelled++;
    return !item.cancelled;
  });
  const empty = new EmptyResponse();
  empty.setMessage(
    "Total unused clients connections cancelled: " + connectedClientsCancelled
  );
  callback(null, empty);
}

export {
  addTask,
  getTask,
  updateTask,
  deleteTask,
  getAllTasks,
  deleteUnUsedConnections,
};
