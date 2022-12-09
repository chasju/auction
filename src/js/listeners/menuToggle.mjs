import { getUserProfile } from "../api/profiles/get.mjs";
import { load } from "../storage/load.mjs";

export function setMenuListener() {
  const burgerOpen = document.querySelector("#hamburger");
  const burgerClose = document.querySelector("#inside-hamburger");

  burgerOpen.addEventListener("click", async () => {
    const menu = document.querySelector("#menu");

    menu.classList.add("d-block");

    const isLoggedIn = load("profile");
    const userProfile = await getUserProfile(isLoggedIn.name);
    const profileLink = document.querySelector("#profileLink");
    profileLink.href = `/profile/?name=${userProfile.name}`;
  });

  burgerClose.addEventListener("click", () => {
    const menu = document.querySelector("#menu");

    menu.classList.remove("d-block");
  });
}
