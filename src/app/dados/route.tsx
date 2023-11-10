import { NextResponse } from "next/server";

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export async function GET() {
  const res = await fetch("http://127.0.0.1:8080");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: Dados[] = await res.json();

  return NextResponse.json(data);
}
