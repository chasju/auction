import { createPost } from "../api/posts/create.mjs";

/**
 * Function with create post listener.
 *
 * @returns Listens for a button and creates post.
 *
 */

export async function setCreatePostListener() {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const postData = Object.fromEntries(formData.entries());
      postData.tags = postData.tags.split(",").map((item) => item.trim());
      postData.media = postData.media.split(",").map((item) => item.trim());

      await createPost(postData);

      window.location = "./../../";
    });
  }
}
