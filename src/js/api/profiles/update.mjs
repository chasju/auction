import { baseURL } from "../apiBase.mjs";
import { authFetch } from "../headers.mjs";

/**
 * Will update profile image
 * @param {string} postData avatar and userName, where userName must be used to identify which user profile to update 
 * @returns photo
 * @example
 * ```js
 * form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const avatar = Object.fromEntries(formData.entries());
      avatar.name = name;

      await updateProfile(avatar);
    });
 * ```
 */

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
