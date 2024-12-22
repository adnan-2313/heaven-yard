import supabaseClient from "@/utils/supabase";

// Fetch Properties
export async function getProperty(
  token
  // { locality, city, state, price, searchQuery }
) {
  // Initialize Supabase with the Clerk token
  const supabase = await supabaseClient(token);

  // Start building the query
  let query = supabase.from("property").select(`*`); // Join the location table using the location_id foreign key
  // location:location_id (locality, city, state)

  // Apply location filters
  // if (locality) {
  //   query = query.eq("location.locality", locality);
  // }

  // if (city) {
  //   query = query.eq("location.city", city);
  // }

  // if (state) {
  //   query = query.eq("location.state", state);
  // }

  // // Apply property-specific filters
  // if (price) {
  //   query = query.eq("price", price);
  // }

  // if (searchQuery) {
  //   query = query.ilike("title", `%${searchQuery}%`);
  // }

  // Execute the query
  const { data, error } = await query;

  if (error) {
    console.error("Error fetching properties:", error);
    return null;
  }

  return data;
}
