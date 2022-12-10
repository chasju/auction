import { getUserProfile } from "../api/profiles/get.mjs";
import { load } from "../storage/load.mjs";

export async function loginCheck() {
  const isLoggedIn = load("profile");
  if (!isLoggedIn) {
    // Hide/show nav when logged/not logged in
    const loggedInNav = document.querySelector("#logged-in-nav");
    const notLoggedInNav = document.querySelector("#not-logged-in-nav");
    console.log(loggedInNav, notLoggedInNav);

    notLoggedInNav.classList.remove("d-none");
    notLoggedInNav.classList.add("d-flex");

    loggedInNav.classList.remove("d-flex");
    loggedInNav.classList.add("d-none");
  }

  // Display correct information

  if (isLoggedIn) {
    const profile = await getUserProfile(isLoggedIn.name);
    const imgLoggedIn = document.querySelector("#imgLoggedIn");
    const cookiesLoggedIn = document.querySelector("#cookiesLoggedIn");
    imgLoggedIn.src = profile.avatar;
    cookiesLoggedIn.innerText = profile.credits;
  }
}
