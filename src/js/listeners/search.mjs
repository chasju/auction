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
    const resultContainer = document.querySelector("#searchInfo");

    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const filterPosts = posts.filter((post) => {
        const title = post.title.toLowerCase();

        const searchValue = searchInput.value.toLowerCase();

        if (title.includes(searchValue)) {
          container.innerHTML = "";
          return true;
        }
      });

      if (searchInput.value) {
        resultContainer.classList.remove("d-none");
        resultContainer.classList.add("d-block");
        resultContainer.innerText = `We found ${filterPosts.length} that matches '${searchInput.value}'`;
      } else {
        resultContainer.classList.add("d-none");
      }

      if (filterPosts.length === 0) {
        container.innerHTML = `<div class="bg-secondary m-auto" style="max-width: 475px;"><p class="p-4 text-center text-white fw-semibold">No matches 
                            for what you are searching for</p></div>`;
      }

      renderPostTemplate(filterPosts, container);
    });
  } catch (error) {
    const container = document.querySelector("#container");
    container.innerHTML = `<div class="bg-primary p-4 mt-5 m-auto rounded-1 text-center" style="max-width: 475px">
                <p class="text-white fw-semibold mb-0">There was an error searching the listings. If the problem persist please contact us on +123456789</p>
              </div>`;
    console.log(error);
  }
}
