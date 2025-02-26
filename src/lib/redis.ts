import { Redis } from "ioredis";

const redis = new Redis({
  host: "127.0.0.1", // Change this if using a remote Redis server
  port: 6379, // Default Redis port
});

export default redis;
