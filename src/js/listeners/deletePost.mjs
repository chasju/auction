import { deleteItem } from "../api/posts/delete.mjs";
import { setProfileListingsListener } from "./profile.mjs";

/**
 * Will delete post on click
 */

export function deleteListing() {
  const deletePost = document.querySelectorAll(".deletePost");

  deletePost.forEach((button) => {
    button.addEventListener("click", async (e) => {
      const id = e.target.id;
      await deleteItem(id);
      await setProfileListingsListener();
    });
  });
}
