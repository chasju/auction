import { getUserListings, getUserProfile } from "../api/profiles/get.mjs";
import { renderUserProfileTemplate } from "../templates/userProfile.mjs";
import { renderUserProfileListingsTemplate } from "../templates/userProfileListings.mjs";

const url = new URL(location.href);
const userName = url.searchParams.get("name");

export async function setGetProfileListener() {
  try {
    const profile = await getUserProfile(userName);
    const container = document.querySelector("#profileContainer");
    container.innerHTML = "";
    renderUserProfileTemplate(profile, container);
  } catch (error) {
    console.log("error");
  }
}

export async function setGetProfileListingsListener() {
  try {
    const profile = await getUserListings(userName);
    const container = document.querySelector("#listingContainer");

    container.innerHTML = "";
    renderUserProfileListingsTemplate(profile, container);
  } catch (error) {
    console.log("error");
  }
}
