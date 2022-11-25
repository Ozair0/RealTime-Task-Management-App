// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_task_pb = require('../protos/task_pb.js');

function serialize_task_AddTaskRequest(arg) {
  if (!(arg instanceof protos_task_pb.AddTaskRequest)) {
    throw new Error('Expected argument of type task.AddTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_task_AddTaskRequest(buffer_arg) {
  return protos_task_pb.AddTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_task_AddTaskResponse(arg) {
  if (!(arg instanceof protos_task_pb.AddTaskResponse)) {
    throw new Error('Expected argument of type task.AddTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_task_AddTaskResponse(buffer_arg) {
  return protos_task_pb.AddTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_task_DeleteTaskRequest(arg) {
  if (!(arg instanceof protos_task_pb.DeleteTaskRequest)) {
    throw new Error('Expected argument of type task.DeleteTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_task_DeleteTaskRequest(buffer_arg) {
  return protos_task_pb.DeleteTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_task_DeleteTaskResponse(arg) {
  if (!(arg instanceof protos_task_pb.DeleteTaskResponse)) {
    throw new Error('Expected argument of type task.DeleteTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_task_DeleteTaskResponse(buffer_arg) {
  return protos_task_pb.DeleteTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_task_EmptyRequest(arg) {
  if (!(arg instanceof protos_task_pb.EmptyRequest)) {
    throw new Error('Expected argument of type task.EmptyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_task_EmptyRequest(buffer_arg) {
  return protos_task_pb.EmptyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_task_EmptyResponse(arg) {
  if (!(arg instanceof protos_task_pb.EmptyResponse)) {
    throw new Error('Expected argument of type task.EmptyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_task_EmptyResponse(buffer_arg) {
  return protos_task_pb.EmptyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_task_TaskRequest(arg) {
  if (!(arg instanceof protos_task_pb.TaskRequest)) {
    throw new Error('Expected argument of type task.TaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_task_TaskRequest(buffer_arg) {
  return protos_task_pb.TaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_task_TaskResponse(arg) {
  if (!(arg instanceof protos_task_pb.TaskResponse)) {
    throw new Error('Expected argument of type task.TaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_task_TaskResponse(buffer_arg) {
  return protos_task_pb.TaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_task_TasksRequest(arg) {
  if (!(arg instanceof protos_task_pb.TasksRequest)) {
    throw new Error('Expected argument of type task.TasksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_task_TasksRequest(buffer_arg) {
  return protos_task_pb.TasksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_task_TasksResponse(arg) {
  if (!(arg instanceof protos_task_pb.TasksResponse)) {
    throw new Error('Expected argument of type task.TasksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_task_TasksResponse(buffer_arg) {
  return protos_task_pb.TasksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_task_UpdateTaskRequest(arg) {
  if (!(arg instanceof protos_task_pb.UpdateTaskRequest)) {
    throw new Error('Expected argument of type task.UpdateTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_task_UpdateTaskRequest(buffer_arg) {
  return protos_task_pb.UpdateTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_task_UpdateTaskResponse(arg) {
  if (!(arg instanceof protos_task_pb.UpdateTaskResponse)) {
    throw new Error('Expected argument of type task.UpdateTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_task_UpdateTaskResponse(buffer_arg) {
  return protos_task_pb.UpdateTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TaskServiceService = exports.TaskServiceService = {
  getTask: {
    path: '/task.TaskService/GetTask',
    requestStream: false,
    responseStream: false,
    requestType: protos_task_pb.TaskRequest,
    responseType: protos_task_pb.TaskResponse,
    requestSerialize: serialize_task_TaskRequest,
    requestDeserialize: deserialize_task_TaskRequest,
    responseSerialize: serialize_task_TaskResponse,
    responseDeserialize: deserialize_task_TaskResponse,
  },
  addTask: {
    path: '/task.TaskService/AddTask',
    requestStream: false,
    responseStream: false,
    requestType: protos_task_pb.AddTaskRequest,
    responseType: protos_task_pb.AddTaskResponse,
    requestSerialize: serialize_task_AddTaskRequest,
    requestDeserialize: deserialize_task_AddTaskRequest,
    responseSerialize: serialize_task_AddTaskResponse,
    responseDeserialize: deserialize_task_AddTaskResponse,
  },
  deleteTask: {
    path: '/task.TaskService/DeleteTask',
    requestStream: false,
    responseStream: false,
    requestType: protos_task_pb.DeleteTaskRequest,
    responseType: protos_task_pb.DeleteTaskResponse,
    requestSerialize: serialize_task_DeleteTaskRequest,
    requestDeserialize: deserialize_task_DeleteTaskRequest,
    responseSerialize: serialize_task_DeleteTaskResponse,
    responseDeserialize: deserialize_task_DeleteTaskResponse,
  },
  updateTask: {
    path: '/task.TaskService/UpdateTask',
    requestStream: false,
    responseStream: false,
    requestType: protos_task_pb.UpdateTaskRequest,
    responseType: protos_task_pb.UpdateTaskResponse,
    requestSerialize: serialize_task_UpdateTaskRequest,
    requestDeserialize: deserialize_task_UpdateTaskRequest,
    responseSerialize: serialize_task_UpdateTaskResponse,
    responseDeserialize: deserialize_task_UpdateTaskResponse,
  },
  deleteUnUsedConnections: {
    path: '/task.TaskService/DeleteUnUsedConnections',
    requestStream: false,
    responseStream: false,
    requestType: protos_task_pb.EmptyRequest,
    responseType: protos_task_pb.EmptyResponse,
    requestSerialize: serialize_task_EmptyRequest,
    requestDeserialize: deserialize_task_EmptyRequest,
    responseSerialize: serialize_task_EmptyResponse,
    responseDeserialize: deserialize_task_EmptyResponse,
  },
  getAllTasks: {
    path: '/task.TaskService/GetAllTasks',
    requestStream: false,
    responseStream: true,
    requestType: protos_task_pb.TasksRequest,
    responseType: protos_task_pb.TasksResponse,
    requestSerialize: serialize_task_TasksRequest,
    requestDeserialize: deserialize_task_TasksRequest,
    responseSerialize: serialize_task_TasksResponse,
    responseDeserialize: deserialize_task_TasksResponse,
  },
};

exports.TaskServiceClient = grpc.makeGenericClientConstructor(TaskServiceService);
