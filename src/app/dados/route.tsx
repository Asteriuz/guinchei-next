import { NextResponse } from "next/server";

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; caso for usar https

export async function GET() {
  try {
    const res = await fetch("http://http://127.0.0.1:8080");
    const data: Dados[] = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json([]);
  }
}
