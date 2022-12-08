import { createPost } from "../api/posts/create.mjs";
import { formatDate } from "../components/formatDate.mjs";

/**
 * Function with create post listener.
 *
 * @returns Listens for a submit and creates post.
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

    // Updating preview

    const title = document.querySelector("#previewTitle");
    const description = document.querySelector("#previewDescription");
    let image = document.querySelector("#previewImage");
    const deadline = document.querySelector("#previewTimer");

    form.addEventListener("change", (e) => {
      e.preventDefault();
      if (e.target.id === "title") {
        title.textContent = e.target.value;
      }
      if (e.target.id === "description") {
        description.textContent = e.target.value;
      }
      if (e.target.id === "image") {
        image.src = e.target.value;
      }
      if (e.target.id === "deadline") {
        deadline.textContent = formatDate(form.endsAt.value);
      }
    });
  }
}
