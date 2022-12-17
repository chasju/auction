import { baseURL } from "../apiBase.mjs";
import { authFetch } from "../headers.mjs";

/**
 * Function will take in the postData provided from inputs.
 * 
 * @param {object} postData This is the input information provided in an input and handled in /handlers/createPost.mjs
 * @returns returns the post
 * @example
 * ```js
 *  form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const postData = Object.fromEntries(formData.entries());

      await createPost(postData);
    });
  ```
 */

export async function createPost(postData) {
  try {
    const createPostURL = `${baseURL}/listings`;

    const response = await authFetch(createPostURL, {
      method: "POST",
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      const post = await response.json();
      return post;
    }
  } catch (error) {
    console.log(error);
    const errorMessage = document.querySelector("#errorMessage");
    errorMessage.classList.remove("d-none");
  }
}
