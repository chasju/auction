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
    container.innerHTML = "";
    renderPostTemplate(post, container);
  } catch (error) {
    const container = document.querySelector("#container");

    container.innerHTML = "There was an error loading the feed" + error;
    console.log(error);
  }
}
