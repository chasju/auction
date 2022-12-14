import { getPosts } from "../api/posts/get.mjs";
import { sortTags } from "../components/sortTags.mjs";
import { renderPostTemplate } from "../templates/posts.mjs";
import { getHomeFeedPosts } from "./posts.mjs";

export async function sortBy() {
  const button = document.querySelector("#sortButton");
  const openSort = document.querySelector("#openSort");
  const container = document.querySelector("#tags");
  const postContainer = document.querySelector("#container");
  const allTags = document.querySelector("#allTags");

  const tags = await sortTags();
  const posts = await getPosts();

  tags.forEach((tag) => {
    container.innerHTML += `<p role="button">${tag}</p>`;
  });

  button.addEventListener("click", () => {
    openSort.classList.toggle("d-none");
  });

  const p = document.querySelectorAll("#tags p");
  p.forEach((tag) => {
    tag.addEventListener("click", (e) => {
      const filterPosts = posts.filter((post) => {
        const tag = post.tags;
        const tagString = tag.toString();
        const target = e.target.innerText.toLowerCase();

        if (tagString.includes(target)) {
          postContainer.innerHTML = "";
          return true;
        }
      });
      if (filterPosts.length === 0) {
        openSort.classList.add("d-none");
        postContainer.innerHTML = `<div class="bg-primary p-2 m-auto rounded-1 text-center" style="max-width: 475px"><p class="text-white fw-semibold mb-0">No posts</p></div>`;
      }

      renderPostTemplate(filterPosts, postContainer);
    });
  });

  allTags.addEventListener("click", async () => {
    openSort.classList.add("d-none");
    await getHomeFeedPosts();
  });
}
