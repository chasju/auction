import { getPost } from "../api/posts/get.mjs";
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
    container.innerHTML = "<div><p>There was an error loading the content<p></div>" + error;
  }
}

export async function getBids() {
  try {
    const posts = await getPost(id);
    const bids = posts.bids;

    const container = document.querySelector("#bidContainer");
    document.title = `${posts.title} | Find.no`;
    container.innerHTML = "";
    renderBidsTemplate(bids, container);
  } catch (error) {
    const container = document.querySelector("#container");

    console.log(error);
    container.innerHTML = "<div><p>There was an error loading the content<p></div>" + error;
  }
}
