import { NextResponse } from "next/server";

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const res = await fetch(`http://127.0.0.1:8080/${id}`);
  const data: Dados = await res.json();
  return NextResponse.json(data);
}
