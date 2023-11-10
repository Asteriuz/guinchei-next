import { NextResponse } from "next/server";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export async function GET() {
  const res = await fetch("https://127.0.0.1:8080");
  const data: Dados[] = await res.json();
  return NextResponse.json(data);
}
