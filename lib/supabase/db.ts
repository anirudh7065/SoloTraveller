
import { createServerSupabase } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export async function fetchData(type: "locations" | "blogs" | "guide") {
  const supabase = createServerSupabase();
    const { data, error } = await supabase.from(type).select("*");

  if (error) throw error;
  return data;
}

