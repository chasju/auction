import { load } from "./../../js/storage/load.mjs";

export async function reDirect() {
  const isLoggedIn = load("profile");
  const redirectMessage = document.querySelector("#redirectMessage");
  const article = document.querySelector("article");
  if (!isLoggedIn) {
    redirectMessage.classList.remove("d-none");
    article.classList.add("d-none");
  }
}
