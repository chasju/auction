import { getUserListings, getUserProfile } from "../api/profiles/get.mjs";
import { renderProfileTemplate } from "../templates/profile.mjs";

const url = new URL(location.href);
const userName = url.searchParams.get("name");

export async function setProfileListener() {
  try {
    const profile = await getUserProfile(userName);

    const container = document.querySelector("#profileContainer");
    container.innerHTML = "";
    renderProfileTemplate(profile, container);
  } catch (error) {
    console.log("error");
  }
}

export async function setProfileListingsListener() {
  try {
    const profile = await getUserListings(userName);
    console.log(profile);
  } catch (error) {
    console.log("error");
  }
}
