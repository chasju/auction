import { baseURL } from "../apiBase.mjs";
import { authFetch } from "../headers.mjs";

/**
 * Function will take in the postData provided from inputs.
 * 
 * @param {object} postData This is the input information provided in an input and handled in /handlers/createPost.mjs
 * @returns returns the post
 * @example
 * ```js
 * button.addEventListener("click", (e) => {
    e.preventDefault();

    const bodyText = {
      title: "No title",
      body: input.value,
    };
    createPost(bodyText);
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

    const post = await response.json();
    console.log(post);
    // return post;
  } catch (error) {
    console.log(error);
  }
}
