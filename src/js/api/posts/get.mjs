import { renderPostTemplate } from "../../templates/index.mjs";
import { baseURL } from "../apiBase.mjs";
import { authFetch } from "../headers.mjs";

export async function getPosts() {
  const getPostsURL = `${baseURL}/listings?_seller=true&_bids=true`;
  const response = await authFetch(getPostsURL);
  const result = await response.json();

  const container = document.querySelector("#container");
  container.innerHTML = "";
  renderPostTemplate(result, container);
}
