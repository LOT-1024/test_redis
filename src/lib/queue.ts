import { Queue } from "bullmq";
import redis from "./redis";

export const myQueue = new Queue("my-job-queue", {
  connection: redis,
});
