import { baseURL } from "../apiBase.mjs";
import { authFetch } from "../headers.mjs";

/**
 *
 * @param {number} id This is the post id provided when using the function
 */

export async function deleteItem(id) {
  if (!id) {
    throw new Error("Delete requires post ID");
  }

  const deleteUrl = `${baseURL}/listings/${id}`;

  const response = await authFetch(deleteUrl, {
    method: "DELETE",
  });

  if (response.ok) {
    return response;
  }

  if (!response.ok) {
    const container = document.querySelector("#deleteProblem");
    container.classList.remove("d-none");
    container.classList.add("d-block");
  }
}
