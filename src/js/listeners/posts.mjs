import { getPosts } from "../api/posts/get.mjs";
import { renderPostTemplate } from "../templates/posts.mjs";

/**
 * Function that will GET all post for Homepage.
 *
 * @returns returns all posts.
 *
 */

export async function getHomeFeedPosts() {
  try {
    const post = await getPosts();
    const container = document.querySelector("#container");

    if (post.length > 0) {
      container.innerHTML = "";
      renderPostTemplate(post, container);
    } else {
      container.innerHTML = `<div class="bg-primary p-2 mt-5 m-auto rounded-1 text-center" style="max-width: 475px">
                <p class="text-white fw-semibold mb-0">No posts yet</p>
              </div>`;
    }
  } catch (error) {
    const container = document.querySelector("#container");

    container.innerHTML = `<div class="bg-primary p-2 mt-5 m-auto rounded-1 text-center" style="max-width: 475px">
                <p class="text-white fw-semibold mb-0">There was an error loading the feed</p>
              </div>`;
    console.log(error);
  }
}
