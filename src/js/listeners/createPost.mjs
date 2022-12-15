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
      const imageInputs = document.querySelectorAll('input[name="media"]');
      let mediaArray = [];

      imageInputs.forEach((media) => {
        if (media.value !== "") {
          mediaArray.push(media.value);
          console.log(mediaArray);
        }
      });

      postData.media = mediaArray;

      console.log(postData);

      await createPost(postData);

      window.location = "./../../";
    });

    // Updating preview

    const title = document.querySelector("#previewTitle");
    const description = document.querySelector("#previewDescription");
    let image = document.querySelector("#previewImage");
    const deadline = document.querySelector("#previewTimer");
    const addInputButtons = document.querySelectorAll(".addInput");

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

    addInputButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const div = document.createElement("div");
        const insertHere = document.querySelector("#deadlineDiv");
        div.classList.add("form-floating", "mt-4", "input-group");

        div.innerHTML = `<input type="url" name="media" class="form-control form-control-auth" id="image" placeholder="Image https://img.service.com/avatar.jpg"  />
                <label for="image">Image <span class="fs-8 fst-italic">https://img.service.com/avatar.jpg</span></label>
                `;

        form.insertBefore(div, insertHere);
      });
    });
  }
}
