import { baseURL } from "../apiBase.mjs";
import { authFetch } from "../headers.mjs";

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
  const container = document.querySelector("#deleteProblem");
  container.classList.remove("d-none");
  container.classList.add("d-block");
}
