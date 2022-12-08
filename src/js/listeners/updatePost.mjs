import { updatePost } from "../api/posts/update.mjs";
import { getPost } from "../api/posts/get.mjs";
import { formatDate } from "../components/formatDate.mjs";

/**
 * Function will GET post based on id and update listing.
 *
 * @returns takes in the id and input information and updates post.
 */

export async function setUpdatePostListener() {
  const form = document.querySelector("#editPost");
  const title = document.querySelector("#previewTitle");
  const description = document.querySelector("#previewDescription");
  let image = document.querySelector("#previewImage");
  const deadline = document.querySelector("#previewTimer");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const post = await getPost(id);
    form.title.value = post.title;
    form.description.value = post.description;
    form.tags.value = post.tags;
    form.media.value = post.media;
    form.endsAt.value = formatDate(post.endsAt);
    title.innerText = post.title;
    description.innerText = post.description;
    image.src = post.media;
    deadline.innerText = formatDate(post.endsAt);

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;
      post.tags = post.tags.split(",").map((item) => item.trim());
      post.media = post.media.split(",").map((item) => item.trim());

      await updatePost(post);
      window.location = `./../?id=${post.id}`;
    });
  }
  // Updating preview

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
