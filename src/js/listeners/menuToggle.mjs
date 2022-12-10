import { getUserProfile } from "../api/profiles/get.mjs";
import { load } from "../storage/load.mjs";

export function setMenuListener() {
  const burgerOpen = document.querySelector("#hamburger");

  burgerOpen.addEventListener("click", async () => {
    const menu = document.querySelector("#menu");

    menu.classList.toggle("d-block");

    const isLoggedIn = load("profile");
    const navProfile = document.querySelector("#navProfile");
    const profileImage = document.querySelector("#navProfileImage");
    const cookies = document.querySelector("#navCookies");

    if (isLoggedIn) {
      const userProfile = await getUserProfile(isLoggedIn.name);
      const profileLink = document.querySelector("#profileLink");

      profileImage.src = userProfile.avatar;
      cookies.innerText = userProfile.credits;

      profileLink.href = `/profile/?name=${userProfile.name}`;
      navProfile.href = `/profile/?name=${userProfile.name}`;
    } else {
      navProfile.classList.remove("d-block");
      navProfile.classList.add("d-none");
    }
  });
}
