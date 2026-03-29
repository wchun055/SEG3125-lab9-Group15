"use server";

export async function createMessage(formData) {
  const data = Object.fromEntries(formData);

  console.log(data);
}