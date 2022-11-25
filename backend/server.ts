import * as dotenv from "dotenv";
import { Server, ServerCredentials } from "@grpc/grpc-js";
import { PrismaClient } from "@prisma/client";
import { TaskServiceService } from "./protos/task_grpc_pb";
import {
  addTask,
  deleteTask,
  deleteUnUsedConnections,
  getAllTasks,
  getTask,
  updateTask,
} from "./controllers/task";

dotenv.config();

export const prisma = new PrismaClient();
const port = 9090;

async function main() {
  const server = new Server();
  server.addService(TaskServiceService, {
    addTask: addTask,
    getTask: getTask,
    updateTask: updateTask,
    deleteTask: deleteTask,
    getAllTasks: getAllTasks,
    deleteUnUsedConnections: deleteUnUsedConnections,
  });
  server.bindAsync(
    "0.0.0.0:" + 9090,
    ServerCredentials.createInsecure(),
    () => {
      console.log("server running on port 127.0.0.1:" + 9090);
      server.start();
    }
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
