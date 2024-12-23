import supabaseClient, { supabaseUrl } from "@/utils/supabase";

// Fetch Properties
export async function getProperty(token, { locality, price, searchQuery }) {
  // Initialize Supabase with the Clerk token
  const supabase = await supabaseClient(token);

  // Start building the query
  let query = supabase.from("property").select(`*`); // Join the location table using the location_id foreign key

  if (locality) {
    query = query.eq("locality", locality);
  }

  // Apply property-specific filters
  if (price) {
    query = query.eq("price", price);
  }

  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`);
  }

  // Execute the query
  const { data, error } = await query;

  if (error) {
    console.error("Error fetching properties:", error);
    return null;
  }

  return data;
}
export async function addNewProperty(token, _, propertyData) {
  try {
    const supabase = await supabaseClient(token);

    const random = Math.floor(Math.random() * 90000);
    const fileName = `image-${random}-${propertyData.title}`;

    // Upload the image to Supabase Storage
    const { error: storageError } = await supabase.storage
      .from("image") // Ensure bucket name matches
      .upload(fileName, propertyData.image, {
        cacheControl: "3600",
        upsert: false, // Prevent overwriting files
      });

    if (storageError) {
      console.error("Error uploading image:", storageError);
      throw new Error("Image upload failed.");
    }

    // Generate public URL for the uploaded image
    const image = `${supabaseUrl}/storage/v1/object/public/image/${fileName}`;

    // Insert property details into the database
    const { data, error } = await supabase
      .from("property")
      .insert([{ ...propertyData, image }])
      .select();

    if (error) throw error;

    return data;
  } catch (err) {
    console.error("Error creating property:", err.message);
    throw new Error("Property creation failed.");
  }
}
