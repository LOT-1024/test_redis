import { Worker } from "bullmq";
import redis from "./lib/redis";

const worker = new Worker(
  "my-job-queue",
  async (job) => {
    console.log(`Processing job ${job.id}:`, job.data);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating work
    console.log(`Job ${job.id} completed!`);
  },
  { connection: redis }
);

worker.on("completed", (job) => {
  console.log(`Job ${job.id} has been processed`);
});

worker.on("failed", (job, err) => {
  console.error(`Job ${job?.id} failed with error: ${err.message}`);
});

export default worker;
