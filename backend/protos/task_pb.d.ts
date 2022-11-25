// package: task
// file: protos/task.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Task extends jspb.Message { 
    getId(): number;
    setId(value: number): Task;
    getTitle(): string;
    setTitle(value: string): Task;
    getBody(): string;
    setBody(value: string): Task;
    getStatus(): string;
    setStatus(value: string): Task;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Task.AsObject;
    static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Task;
    static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
    export type AsObject = {
        id: number,
        title: string,
        body: string,
        status: string,
    }
}

export class TaskRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): TaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TaskRequest): TaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskRequest;
    static deserializeBinaryFromReader(message: TaskRequest, reader: jspb.BinaryReader): TaskRequest;
}

export namespace TaskRequest {
    export type AsObject = {
        id: number,
    }
}

export class TaskResponse extends jspb.Message { 

    hasTask(): boolean;
    clearTask(): void;
    getTask(): Task | undefined;
    setTask(value?: Task): TaskResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TaskResponse): TaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskResponse;
    static deserializeBinaryFromReader(message: TaskResponse, reader: jspb.BinaryReader): TaskResponse;
}

export namespace TaskResponse {
    export type AsObject = {
        task?: Task.AsObject,
    }
}

export class EmptyRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmptyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EmptyRequest): EmptyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmptyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmptyRequest;
    static deserializeBinaryFromReader(message: EmptyRequest, reader: jspb.BinaryReader): EmptyRequest;
}

export namespace EmptyRequest {
    export type AsObject = {
    }
}

export class EmptyResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): EmptyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmptyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EmptyResponse): EmptyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmptyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmptyResponse;
    static deserializeBinaryFromReader(message: EmptyResponse, reader: jspb.BinaryReader): EmptyResponse;
}

export namespace EmptyResponse {
    export type AsObject = {
        message: string,
    }
}

export class TasksRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TasksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TasksRequest): TasksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TasksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TasksRequest;
    static deserializeBinaryFromReader(message: TasksRequest, reader: jspb.BinaryReader): TasksRequest;
}

export namespace TasksRequest {
    export type AsObject = {
    }
}

export class TasksResponse extends jspb.Message { 
    clearTasksList(): void;
    getTasksList(): Array<Task>;
    setTasksList(value: Array<Task>): TasksResponse;
    addTasks(value?: Task, index?: number): Task;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TasksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TasksResponse): TasksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TasksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TasksResponse;
    static deserializeBinaryFromReader(message: TasksResponse, reader: jspb.BinaryReader): TasksResponse;
}

export namespace TasksResponse {
    export type AsObject = {
        tasksList: Array<Task.AsObject>,
    }
}

export class AddTaskRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): AddTaskRequest;
    getBody(): string;
    setBody(value: string): AddTaskRequest;
    getStatus(): string;
    setStatus(value: string): AddTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddTaskRequest): AddTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddTaskRequest;
    static deserializeBinaryFromReader(message: AddTaskRequest, reader: jspb.BinaryReader): AddTaskRequest;
}

export namespace AddTaskRequest {
    export type AsObject = {
        title: string,
        body: string,
        status: string,
    }
}

export class AddTaskResponse extends jspb.Message { 

    hasTask(): boolean;
    clearTask(): void;
    getTask(): Task | undefined;
    setTask(value?: Task): AddTaskResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddTaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddTaskResponse): AddTaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddTaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddTaskResponse;
    static deserializeBinaryFromReader(message: AddTaskResponse, reader: jspb.BinaryReader): AddTaskResponse;
}

export namespace AddTaskResponse {
    export type AsObject = {
        task?: Task.AsObject,
    }
}

export class DeleteTaskRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): DeleteTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTaskRequest): DeleteTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTaskRequest;
    static deserializeBinaryFromReader(message: DeleteTaskRequest, reader: jspb.BinaryReader): DeleteTaskRequest;
}

export namespace DeleteTaskRequest {
    export type AsObject = {
        id: number,
    }
}

export class DeleteTaskResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): DeleteTaskResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTaskResponse): DeleteTaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTaskResponse;
    static deserializeBinaryFromReader(message: DeleteTaskResponse, reader: jspb.BinaryReader): DeleteTaskResponse;
}

export namespace DeleteTaskResponse {
    export type AsObject = {
        message: string,
    }
}

export class UpdateTaskRequest extends jspb.Message { 

    hasTask(): boolean;
    clearTask(): void;
    getTask(): Task | undefined;
    setTask(value?: Task): UpdateTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTaskRequest): UpdateTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTaskRequest;
    static deserializeBinaryFromReader(message: UpdateTaskRequest, reader: jspb.BinaryReader): UpdateTaskRequest;
}

export namespace UpdateTaskRequest {
    export type AsObject = {
        task?: Task.AsObject,
    }
}

export class UpdateTaskResponse extends jspb.Message { 

    hasTask(): boolean;
    clearTask(): void;
    getTask(): Task | undefined;
    setTask(value?: Task): UpdateTaskResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTaskResponse): UpdateTaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTaskResponse;
    static deserializeBinaryFromReader(message: UpdateTaskResponse, reader: jspb.BinaryReader): UpdateTaskResponse;
}

export namespace UpdateTaskResponse {
    export type AsObject = {
        task?: Task.AsObject,
    }
}
