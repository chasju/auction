import { getUserListings } from "../api/profiles/get.mjs";
import { renderUserProfileListingsTemplate } from "../templates/index.mjs";

/**
 * Function that will search through Home feed posts.
 *
 * @returns const filterPosts will return posts that include input value.
 * If there are no posts matching filterPosts will return UI message
 * If no input filterPosts will return all posts.
 * @example
 * ```js
 
 * ```
 */

const url = new URL(location.href);
const userName = url.searchParams.get("name");

export async function searchProfilePosts() {
  try {
    const posts = await getUserListings(userName);

    const searchInput = document.querySelector("#searchHomePage");
    const searchForm = document.querySelector("#searchForm");
    const container = document.querySelector("#listingContainer");

    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let filterPosts = posts.filter((post) => {
        const title = post.title.toLowerCase();

        const searchValue = searchInput.value.toLowerCase();

        if (title.includes(searchValue)) {
          container.innerHTML = "";
          return true;
        }
      });

      if (filterPosts.length === 0) {
        container.innerHTML = `<div class="bg-secondary m-auto" style="max-width: 475px;"><p class="p-4 text-center text-white fw-semibold">No matches 
                            for what you are searching for</p></div>`;
      }

      renderUserProfileListingsTemplate(filterPosts, container);
    });
  } catch (error) {
    const container = document.querySelector("#listingContainer");

    container.innerHTML = "There was an error searching the feed" + error;
    console.log(error);
  }
}
