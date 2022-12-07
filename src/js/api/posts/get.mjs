import { baseURL } from "../apiBase.mjs";
import { authFetch } from "../headers.mjs";

export async function getPosts() {
  const getPostsURL = `${baseURL}/listings?_seller=true&_bids=true`;
  const response = await authFetch(getPostsURL);
  const result = await response.json();
  return result;
}

/**
 * Function will GET a single post based on ID provided.
 * 
 * @param {number} id This is the id information provided based on API post id

 * @returns returns one post from API results.
 * @example
 * ```js
 * async function getOnePost() {
 *  const post = await getPost(id);
    console.log(post)
 * }
 * ```
 */

export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires post ID");
  }

  const getPostURL = `${baseURL}/listings/${id}?_seller=true&_bids=true`;
  const response = await authFetch(getPostURL);

  const post = await response.json();
  return post;
}
