import { FormEvent, useState } from "react";
import { AddTaskRequest, AddTaskResponse } from "../../protos/task_pb";
import { grpcTaskClient } from "../../util/grpc-connection";
import * as grpc_web from "grpc-web";
import { useRouter } from "next/router";

export default function Add() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();
  const addTask = () => {
    const task = new AddTaskRequest();
    task.setTitle(title.trim());
    task.setBody(body.trim());
    task.setStatus(status.trim());
    grpcTaskClient.addTask(
      task,
      undefined,
      (err: grpc_web.RpcError, response: AddTaskResponse) => {
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
            required
            onInput={(e: FormEvent<HTMLInputElement>) =>
              setTitle(e.currentTarget.value)
            }
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
            required
            onInput={(e: FormEvent<HTMLInputElement>) =>
              setBody(e.currentTarget.value)
            }
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
            required
            onInput={(e: FormEvent<HTMLInputElement>) =>
              setStatus(e.currentTarget.value)
            }
          />
        </div>
      </div>
      <div className="mx-auto w-max mt-20">
        <button
          onClick={addTask}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
