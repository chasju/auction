import { authFetch } from "../headers.mjs";
import { baseURL } from "../apiBase.mjs";

/**
 * Function will update post of logged in user.
 *
 * @param {object} postData This is the information provided by update form
 * @returns returns the post
 * @example
 * ```js
 * form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      console.log(post);

      updatePost(post);
    });
 * ```
 */

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Update requires post ID");
  }
  const updatePostURL = `${baseURL}/listings/${postData.id}`;

  const response = await authFetch(updatePostURL, {
    method: "PUT",
    body: JSON.stringify(postData),
  });

  const post = await response.json();

  return post;
}
