"use server";
import { supabase } from "../lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";

export async function createFeedback(formData) {
  const data = Object.fromEntries(formData);

  console.log("Form data submitted:", data);

  if (!data.rating || !data.location || !data.technician || !data.feedback) {
    throw new Error("Rating, location, technician, and date are required");
  }

  const id = uuidv4();

  const { error } = await supabase
    .from("feedback")
    .insert([
      {
        id: id, 
        rating: data.rating,
        location: data.location,
        technician: data.technician,
        feedback: data.feedback
      },
    ]);

  if (error) {
    console.error("Supabase error details:", error);
    throw new Error(`Failed to create feedback: ${error.message}`);
  }

  console.log("Feedback saved!", data);
  return { success: true };
}