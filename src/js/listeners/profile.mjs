import { getUserListings, getUserProfile } from "../api/profiles/get.mjs";
import { renderProfileTemplate } from "../templates/profile.mjs";
import { renderProfileListingsTemplate } from "../templates/profileListings.mjs";

const url = new URL(location.href);
const userName = url.searchParams.get("name");

/**
 * Will show user information on profile page and update page title
 */

export async function setProfileListener() {
  try {
    const profile = await getUserProfile(userName);
    document.title = `${profile.name}'s profile page | find.no`;

    const container = document.querySelector("#profileContainer");
    container.innerHTML = "";
    renderProfileTemplate(profile, container);
  } catch (error) {
    console.log("error");
  }
}

/**
 * Will show user listings in profile page if there is any
 */

export async function setProfileListingsListener() {
  try {
    const profile = await getUserListings(userName);

    const container = document.querySelector("#listingsContainer");
    if (profile.length > 0) {
      container.innerHTML = "";
      renderProfileListingsTemplate(profile, container);
    } else {
      container.innerHTML = `<div class="bg-primary p-2 mt-5 m-auto rounded-1 text-center" style="max-width: 475px">
                      <p class="text-white fw-semibold mb-0">No posts yet</p>
                    </div>`;
    }
  } catch (error) {
    console.log("error");
  }
}
