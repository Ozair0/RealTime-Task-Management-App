import { TaskServiceClient } from "../protos/task_grpc_web_pb";

const grpcTaskClient = new TaskServiceClient("http://127.0.0.1:8080");

export { grpcTaskClient };
