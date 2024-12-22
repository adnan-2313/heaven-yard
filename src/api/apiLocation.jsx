import supabaseClient from "@/utils/supabase";

// Fetch Properties
export async function getLocation(token) {
  const supabase = await supabaseClient(token);

  let query = supabase.from("location").select(`*`);

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching properties:", error);
    return null;
  }

  return data;
}
