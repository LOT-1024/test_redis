import { NextResponse } from "next/server";
import redis from "@/lib/redis";

export async function GET() {
  try {
    // Set a value in Redis
    await redis.set("message", "Hello from Redis!");

    // Get the value
    const message = await redis.get("message");

    return NextResponse.json({ success: true, message });
  } catch (error:any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
