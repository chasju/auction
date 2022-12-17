import { getPost } from "../api/posts/get.mjs";
import { load } from "../storage/load.mjs";
import { renderBidsTemplate } from "../templates/bids.mjs";
import { renderUserListingTemplate } from "../templates/userListing.mjs";

const url = new URL(location.href);
const id = url.searchParams.get("id");

/**
 * Function that will GET a single post.
 *
 * @returns Gets post by id and displays a single result.
 *
 */

export async function getSinglePost() {
  try {
    let post = await getPost(id);
    post = [post];

    const container = document.querySelector("#container");
    container.innerHTML = "";
    renderUserListingTemplate(post, container);
  } catch (error) {
    const container = document.querySelector("#container");

    console.log(error);
    container.innerHTML = `<div class="bg-primary p-4 mt-5 m-auto rounded-1 text-center" style="max-width: 475px">
                <p class="text-white fw-semibold mb-0">There was an error loading the content. If the problem persist please contact us on +123456789</p>
              </div>`;
  }
}

/**
 * Gets the bids made on a single post if user is logged in
 */

export async function getBids() {
  try {
    const posts = await getPost(id);
    const bids = posts.bids;

    const container = document.querySelector("#bidContainer");
    document.title = `${posts.title} | Find.no`;
    const isLoggedIn = load("profile");
    const bidHeadline = document.querySelector("h3");
    container.innerHTML = "";
    if (isLoggedIn) {
      renderBidsTemplate(bids, container);
    }
    if (!isLoggedIn) {
      bidHeadline.remove();
    }
  } catch (error) {
    const container = document.querySelector("#container");

    console.log(error);
    container.innerHTML = `<div class="bg-primary p-4 mt-5 m-auto rounded-1 text-center" style="max-width: 475px">
                <p class="text-white fw-semibold mb-0">There was an error loading the content. If the problem persist please contact us on +123456789</p>
              </div>`;
  }
}
