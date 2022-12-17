import { getUserProfile } from "../api/profiles/get.mjs";
import { load } from "../storage/load.mjs";

/**
 * Conditions when a user is logged in or not
 */

export async function loginCheck() {
  const isLoggedIn = load("profile");
  if (isLoggedIn) {
    // Hide/show nav when logged/not logged in
    const loggedInNav = document.querySelector("#logged-in-nav");
    const notLoggedInNav = document.querySelector("#not-logged-in-nav");
    const frontLoggedIn = document.querySelector("#frontLoggedIn");
    const logout = document.querySelector("#logout");
    const profileLink = document.querySelector("#profileLink");

    notLoggedInNav.classList.remove("d-flex");
    notLoggedInNav.classList.add("d-none");

    loggedInNav.classList.remove("d-none");
    loggedInNav.classList.add("d-flex");

    frontLoggedIn.classList.remove("d-none");
    frontLoggedIn.classList.add("d-block");

    logout.classList.remove("d-none");
    logout.classList.add("d-block");

    profileLink.classList.remove("d-none");
    profileLink.classList.add("d-block");
  }

  // Display correct information

  if (isLoggedIn) {
    const profile = await getUserProfile(isLoggedIn.name);
    const loggedInProfile = document.querySelector("#loggedInProfile");
    const imgLoggedIn = document.querySelector("#imgLoggedIn");
    const cookiesLoggedIn = document.querySelector("#cookiesLoggedIn");
    const frontLoggedInLink = document.querySelector("#frontLoggedInLink");
    const frontImage = document.querySelector("#frontImage");
    const frontCookies = document.querySelector("#frontCookies");

    loggedInProfile.href = `/profile/?name=${profile.name}`;
    imgLoggedIn.src = profile.avatar;
    cookiesLoggedIn.innerText = profile.credits;
    frontImage.src = profile.avatar;
    frontCookies.innerText = profile.credits;
    frontLoggedInLink.href = `/profile/?name=${profile.name}`;
  }
}
