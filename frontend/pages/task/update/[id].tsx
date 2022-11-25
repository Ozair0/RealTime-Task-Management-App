import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { grpcTaskClient } from "../../../util/grpc-connection";
import {
  Task,
  TaskRequest,
  TaskResponse,
  UpdateTaskRequest,
  UpdateTaskResponse,
} from "../../../protos/task_pb";
import * as grpc_web from "grpc-web";

export default function Id() {
  const router = useRouter();
  const { id } = router.query;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (id) {
      const task = new TaskRequest();
      task.setId(parseInt(id.toString().trim()));
      grpcTaskClient.getTask(
        task,
        undefined,
        (err: grpc_web.RpcError, response: TaskResponse) => {
          if (!err) {
            // @ts-ignore
            setTitle(response.getTask()?.getTitle());
            // @ts-ignore
            setBody(response.getTask()?.getBody());
            // @ts-ignore
            setStatus(response.getTask()?.getStatus());
          } else {
            console.log(err);
          }
        }
      );
    }
  }, [id]);

  const updateTask = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const taskRequest = new UpdateTaskRequest();
    const task = new Task();
    // @ts-ignore
    task.setId(parseInt(id.toString().trim()));
    task.setTitle(title.trim());
    task.setBody(body.trim());
    task.setStatus(status.trim());
    taskRequest.setTask(task);
    grpcTaskClient.updateTask(
      taskRequest,
      undefined,
      (err: grpc_web.RpcError, response: UpdateTaskResponse) => {
        if (!err) {
          router.push("/tasks");
        } else {
          console.log(err);
        }
      }
    );
  };

  return (
    <div className="w-11/12 mx-auto mt-14">
      <div className="flex flex-wrap justify-between">
        <div className="mb-6 w-[45%]">
          <label
            htmlFor="Title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Task Name
          </label>
          <input
            type="text"
            id="Title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Task title"
            value={title}
            onInput={(e: FormEvent<HTMLInputElement>) =>
              setTitle(e.currentTarget.value)
            }
            required
          />
        </div>
        <div className="mb-6 w-[45%]">
          <label
            htmlFor="Body"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Task Body
          </label>
          <input
            type="text"
            id="Body"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Task body"
            value={body}
            onInput={(e: FormEvent<HTMLInputElement>) =>
              setBody(e.currentTarget.value)
            }
            required
          />
        </div>
        <div className="mb-6 w-[45%]">
          <label
            htmlFor="Status"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Task Status
          </label>
          <input
            type="text"
            id="Status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Status"
            value={status}
            onInput={(e: FormEvent<HTMLInputElement>) =>
              setStatus(e.currentTarget.value)
            }
            required
          />
        </div>
      </div>
      <div className="mx-auto w-max mt-20">
        <button
          onClick={(event: FormEvent<HTMLButtonElement>) => updateTask(event)}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Update Task
        </button>
      </div>
    </div>
  );
}
