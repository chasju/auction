import { baseURL } from "../apiBase.mjs";
import { authFetch } from "../headers.mjs";

export async function updateProfile(postData) {
  if (!postData.name) {
    throw new Error("Update requires name");
  }
  const updatePostURL = `${baseURL}/profiles/${postData.name}/media`;

  const response = await authFetch(updatePostURL, {
    method: "PUT",
    body: JSON.stringify(postData),
  });

  const photo = await response.json();

  return photo;
}
