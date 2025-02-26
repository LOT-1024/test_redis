import { NextResponse } from "next/server";
import { myQueue } from "@/lib/queue";

export async function POST() {
  try {
    const job = await myQueue.add("process-data", { message: "Hello, BullMQ!" });
    return NextResponse.json({ success: true, jobId: job.id });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
