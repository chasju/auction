import { getPosts } from "../api/posts/get.mjs";
import { renderPostTemplate } from "../templates/index.mjs";

/**
 * Function that will search through Home feed posts.
 *
 * @returns const filterPosts will return posts that include input value.
 * If there are no posts matching
 * filterPosts will return all posts.
 * @example
 * ```js
 
 * ```
 */

export async function searchHomeFeedPosts() {
  try {
    const posts = await getPosts();
    const searchInput = document.querySelector("#searchHomePage");
    const searchForm = document.querySelector("#searchForm");
    const container = document.querySelector("#container");

    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const filterPosts = posts.filter((post) => {
        const title = post.title.toLowerCase();

        const searchValue = searchInput.value.toLowerCase();

        if (title.includes(searchValue)) {
          return true;
        }
      });

      container.innerHTML = "";
      renderPostTemplate(filterPosts, container);
    });
  } catch (error) {
    const container = document.querySelector("#container");

    container.innerHTML = "There was an error searching the feed" + error;
    console.log(error);
  }
}
