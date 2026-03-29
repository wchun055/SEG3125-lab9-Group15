"use server";
import { supabase } from "../lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";

export async function createBooking(formData) {
  const data = Object.fromEntries(formData);

  console.log("Form data submitted:", data);

  if (!data.location || !data.technician || !data.date || !data.notes) {
    throw new Error("Location, technician, date and notes are required");
  }

  const id = uuidv4();

  const { error } = await supabase
    .from("bookings")
    .insert([
      {
        id: id,  
        location: data.location,
        technician: data.technician,
        date: data.date,
        notes: data.notes || null,
      },
    ]);

  if (error) {
    console.error("Supabase error details:", error);
    throw new Error(`Failed to create booking: ${error.message}`);
  }

  console.log("Booking saved!", data);
  return { success: true };
}