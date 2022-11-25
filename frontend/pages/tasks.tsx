import { FormEvent, useState } from "react";
import {
  DeleteTaskRequest,
  DeleteTaskResponse,
  Task,
  TasksRequest,
  TasksResponse,
} from "../protos/task_pb";
import Link from "next/link";
import { useOnceCall } from "../util/useOnceCall";
import { grpcTaskClient } from "../util/grpc-connection";
import * as grpc_web from "grpc-web";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useOnceCall(() => {
    const emptyRequest = new TasksRequest();
    const req = grpcTaskClient.getAllTasks(emptyRequest, undefined);
    req.on("data", function (callback: TasksResponse) {
      setTasks((prev) => [...callback.getTasksList(), ...prev]);
    });
  });

  const deleteTask = (id: number, event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const task = new DeleteTaskRequest();
    task.setId(id);
    grpcTaskClient.deleteTask(
      task,
      undefined,
      (err: grpc_web.RpcError, response: DeleteTaskResponse) => {
        if (!err) {
          setTasks((prevState) => [
            ...prevState.filter((item) => item.getId() !== id),
          ]);
          console.log(response.toObject().message);
        } else {
          console.log(err);
        }
      }
    );
  };

  return (
    <div className="bg-gray-50 flex items-start justify-center px-16 h-[100vh]">
      <div className="w-full">
        <div className="flex justify-center mt-10">
          <Link className="p-2 bg-blue-400 text-white rounded-md" href={"/"}>
            Go to home page
          </Link>
        </div>
        <div className="flex justify-center mt-10">
          <p className="w-max font-semibold text-3xl text-blue-900">
            All Tasks
          </p>
        </div>
        <div className="relative space-y-16 w-[60vw] mx-auto mt-10">
          {tasks.length > 0 ? (
            tasks.map((item: Task, index: number) => (
              <div
                key={item.getId()}
                className="relative p-5 bg-white rounded-lg flex items-center justify-between"
              >
                <button
                  onClick={(event: FormEvent<HTMLButtonElement>) =>
                    deleteTask(item.getId(), event)
                  }
                  className="absolute -right-3 -top-3 bg-red-500 text-white text-center rounded-[50px] shadow-lg p-1 hover:bg-red-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <Link
                  href={`/task/update/${item.getId()}`}
                  className="absolute -right-3 -bottom-3 bg-blue-500 text-white text-center rounded-[50px] shadow-lg p-1 hover:bg-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </Link>
                <p className="bg-gray-600 rounded-[100%] text-white px-3 py-1">
                  {index + 1}
                </p>
                <div className="flex-1 flex justify-between items-center ml-4">
                  <div className="w-[25%] rounded-lg bg-purple-300 py-1 flex justify-center mr-5">
                    <p className="text-center px-1">{item.getTitle()}</p>
                  </div>
                  <div className="w-[75%] bg-gray-300 rounded py-1 flex justify-center">
                    <p className="text-center">{item.getBody()}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center">
              <p className="w-max font-semibold text-2xl text-black">
                No tasks available
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
