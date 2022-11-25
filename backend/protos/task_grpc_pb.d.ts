// package: task
// file: protos/task.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as protos_task_pb from "../protos/task_pb";

interface ITaskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTask: ITaskServiceService_IGetTask;
    addTask: ITaskServiceService_IAddTask;
    deleteTask: ITaskServiceService_IDeleteTask;
    updateTask: ITaskServiceService_IUpdateTask;
    deleteUnUsedConnections: ITaskServiceService_IDeleteUnUsedConnections;
    getAllTasks: ITaskServiceService_IGetAllTasks;
}

interface ITaskServiceService_IGetTask extends grpc.MethodDefinition<protos_task_pb.TaskRequest, protos_task_pb.TaskResponse> {
    path: "/task.TaskService/GetTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_task_pb.TaskRequest>;
    requestDeserialize: grpc.deserialize<protos_task_pb.TaskRequest>;
    responseSerialize: grpc.serialize<protos_task_pb.TaskResponse>;
    responseDeserialize: grpc.deserialize<protos_task_pb.TaskResponse>;
}
interface ITaskServiceService_IAddTask extends grpc.MethodDefinition<protos_task_pb.AddTaskRequest, protos_task_pb.AddTaskResponse> {
    path: "/task.TaskService/AddTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_task_pb.AddTaskRequest>;
    requestDeserialize: grpc.deserialize<protos_task_pb.AddTaskRequest>;
    responseSerialize: grpc.serialize<protos_task_pb.AddTaskResponse>;
    responseDeserialize: grpc.deserialize<protos_task_pb.AddTaskResponse>;
}
interface ITaskServiceService_IDeleteTask extends grpc.MethodDefinition<protos_task_pb.DeleteTaskRequest, protos_task_pb.DeleteTaskResponse> {
    path: "/task.TaskService/DeleteTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_task_pb.DeleteTaskRequest>;
    requestDeserialize: grpc.deserialize<protos_task_pb.DeleteTaskRequest>;
    responseSerialize: grpc.serialize<protos_task_pb.DeleteTaskResponse>;
    responseDeserialize: grpc.deserialize<protos_task_pb.DeleteTaskResponse>;
}
interface ITaskServiceService_IUpdateTask extends grpc.MethodDefinition<protos_task_pb.UpdateTaskRequest, protos_task_pb.UpdateTaskResponse> {
    path: "/task.TaskService/UpdateTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_task_pb.UpdateTaskRequest>;
    requestDeserialize: grpc.deserialize<protos_task_pb.UpdateTaskRequest>;
    responseSerialize: grpc.serialize<protos_task_pb.UpdateTaskResponse>;
    responseDeserialize: grpc.deserialize<protos_task_pb.UpdateTaskResponse>;
}
interface ITaskServiceService_IDeleteUnUsedConnections extends grpc.MethodDefinition<protos_task_pb.EmptyRequest, protos_task_pb.EmptyResponse> {
    path: "/task.TaskService/DeleteUnUsedConnections";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_task_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<protos_task_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<protos_task_pb.EmptyResponse>;
    responseDeserialize: grpc.deserialize<protos_task_pb.EmptyResponse>;
}
interface ITaskServiceService_IGetAllTasks extends grpc.MethodDefinition<protos_task_pb.TasksRequest, protos_task_pb.TasksResponse> {
    path: "/task.TaskService/GetAllTasks";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<protos_task_pb.TasksRequest>;
    requestDeserialize: grpc.deserialize<protos_task_pb.TasksRequest>;
    responseSerialize: grpc.serialize<protos_task_pb.TasksResponse>;
    responseDeserialize: grpc.deserialize<protos_task_pb.TasksResponse>;
}

export const TaskServiceService: ITaskServiceService;

export interface ITaskServiceServer extends grpc.UntypedServiceImplementation {
    getTask: grpc.handleUnaryCall<protos_task_pb.TaskRequest, protos_task_pb.TaskResponse>;
    addTask: grpc.handleUnaryCall<protos_task_pb.AddTaskRequest, protos_task_pb.AddTaskResponse>;
    deleteTask: grpc.handleUnaryCall<protos_task_pb.DeleteTaskRequest, protos_task_pb.DeleteTaskResponse>;
    updateTask: grpc.handleUnaryCall<protos_task_pb.UpdateTaskRequest, protos_task_pb.UpdateTaskResponse>;
    deleteUnUsedConnections: grpc.handleUnaryCall<protos_task_pb.EmptyRequest, protos_task_pb.EmptyResponse>;
    getAllTasks: grpc.handleServerStreamingCall<protos_task_pb.TasksRequest, protos_task_pb.TasksResponse>;
}

export interface ITaskServiceClient {
    getTask(request: protos_task_pb.TaskRequest, callback: (error: grpc.ServiceError | null, response: protos_task_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    getTask(request: protos_task_pb.TaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_task_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    getTask(request: protos_task_pb.TaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_task_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    addTask(request: protos_task_pb.AddTaskRequest, callback: (error: grpc.ServiceError | null, response: protos_task_pb.AddTaskResponse) => void): grpc.ClientUnaryCall;
    addTask(request: protos_task_pb.AddTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_task_pb.AddTaskResponse) => void): grpc.ClientUnaryCall;
    addTask(request: protos_task_pb.AddTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_task_pb.AddTaskResponse) => void): grpc.ClientUnaryCall;
    deleteTask(request: protos_task_pb.DeleteTaskRequest, callback: (error: grpc.ServiceError | null, response: protos_task_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    deleteTask(request: protos_task_pb.DeleteTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_task_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    deleteTask(request: protos_task_pb.DeleteTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_task_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    updateTask(request: protos_task_pb.UpdateTaskRequest, callback: (error: grpc.ServiceError | null, response: protos_task_pb.UpdateTaskResponse) => void): grpc.ClientUnaryCall;
    updateTask(request: protos_task_pb.UpdateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_task_pb.UpdateTaskResponse) => void): grpc.ClientUnaryCall;
    updateTask(request: protos_task_pb.UpdateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_task_pb.UpdateTaskResponse) => void): grpc.ClientUnaryCall;
    deleteUnUsedConnections(request: protos_task_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: protos_task_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    deleteUnUsedConnections(request: protos_task_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_task_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    deleteUnUsedConnections(request: protos_task_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_task_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    getAllTasks(request: protos_task_pb.TasksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_task_pb.TasksResponse>;
    getAllTasks(request: protos_task_pb.TasksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_task_pb.TasksResponse>;
}

export class TaskServiceClient extends grpc.Client implements ITaskServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getTask(request: protos_task_pb.TaskRequest, callback: (error: grpc.ServiceError | null, response: protos_task_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    public getTask(request: protos_task_pb.TaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_task_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    public getTask(request: protos_task_pb.TaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_task_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    public addTask(request: protos_task_pb.AddTaskRequest, callback: (error: grpc.ServiceError | null, response: protos_task_pb.AddTaskResponse) => void): grpc.ClientUnaryCall;
    public addTask(request: protos_task_pb.AddTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_task_pb.AddTaskResponse) => void): grpc.ClientUnaryCall;
    public addTask(request: protos_task_pb.AddTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_task_pb.AddTaskResponse) => void): grpc.ClientUnaryCall;
    public deleteTask(request: protos_task_pb.DeleteTaskRequest, callback: (error: grpc.ServiceError | null, response: protos_task_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    public deleteTask(request: protos_task_pb.DeleteTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_task_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    public deleteTask(request: protos_task_pb.DeleteTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_task_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    public updateTask(request: protos_task_pb.UpdateTaskRequest, callback: (error: grpc.ServiceError | null, response: protos_task_pb.UpdateTaskResponse) => void): grpc.ClientUnaryCall;
    public updateTask(request: protos_task_pb.UpdateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_task_pb.UpdateTaskResponse) => void): grpc.ClientUnaryCall;
    public updateTask(request: protos_task_pb.UpdateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_task_pb.UpdateTaskResponse) => void): grpc.ClientUnaryCall;
    public deleteUnUsedConnections(request: protos_task_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: protos_task_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    public deleteUnUsedConnections(request: protos_task_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_task_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    public deleteUnUsedConnections(request: protos_task_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_task_pb.EmptyResponse) => void): grpc.ClientUnaryCall;
    public getAllTasks(request: protos_task_pb.TasksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_task_pb.TasksResponse>;
    public getAllTasks(request: protos_task_pb.TasksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<protos_task_pb.TasksResponse>;
}
