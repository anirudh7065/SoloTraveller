import { getData, DataType } from "@/lib/getdata";
import { NextRequest, NextResponse } from "next/server";

// type DataType = "locations" | "blogs" | "guide";
export async function POST(req: NextRequest) {
  const { type }: { type: DataType } = await req.json();
  const data = await getData(type);
  return NextResponse.json({ data });
}
