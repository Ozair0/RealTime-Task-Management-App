import * as grpcWeb from 'grpc-web';

import * as protos_task_pb from '../protos/task_pb';


export class TaskServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getTask(
    request: protos_task_pb.TaskRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: protos_task_pb.TaskResponse) => void
  ): grpcWeb.ClientReadableStream<protos_task_pb.TaskResponse>;

  addTask(
    request: protos_task_pb.AddTaskRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: protos_task_pb.AddTaskResponse) => void
  ): grpcWeb.ClientReadableStream<protos_task_pb.AddTaskResponse>;

  deleteTask(
    request: protos_task_pb.DeleteTaskRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: protos_task_pb.DeleteTaskResponse) => void
  ): grpcWeb.ClientReadableStream<protos_task_pb.DeleteTaskResponse>;

  updateTask(
    request: protos_task_pb.UpdateTaskRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: protos_task_pb.UpdateTaskResponse) => void
  ): grpcWeb.ClientReadableStream<protos_task_pb.UpdateTaskResponse>;

  deleteUnUsedConnections(
    request: protos_task_pb.EmptyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: protos_task_pb.EmptyResponse) => void
  ): grpcWeb.ClientReadableStream<protos_task_pb.EmptyResponse>;

  getAllTasks(
    request: protos_task_pb.TasksRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<protos_task_pb.TasksResponse>;

}

export class TaskServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getTask(
    request: protos_task_pb.TaskRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<protos_task_pb.TaskResponse>;

  addTask(
    request: protos_task_pb.AddTaskRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<protos_task_pb.AddTaskResponse>;

  deleteTask(
    request: protos_task_pb.DeleteTaskRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<protos_task_pb.DeleteTaskResponse>;

  updateTask(
    request: protos_task_pb.UpdateTaskRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<protos_task_pb.UpdateTaskResponse>;

  deleteUnUsedConnections(
    request: protos_task_pb.EmptyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<protos_task_pb.EmptyResponse>;

  getAllTasks(
    request: protos_task_pb.TasksRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<protos_task_pb.TasksResponse>;

}

