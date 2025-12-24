import { fetchData } from "@/lib/supabase/db";
import { NextRequest, NextResponse } from "next/server";

// type DataType = "locations" | "blogs" | "guide";
export async function POST(req: NextRequest) {
  try {
    const { type }: {type: "locations" | "blogs" | "guide" } = await req.json();
    const data = await fetchData(type);
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
