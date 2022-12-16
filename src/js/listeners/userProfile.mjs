import { getUserListings, getUserProfile } from "../api/profiles/get.mjs";
import { renderUserProfileTemplate } from "../templates/userProfile.mjs";
import { renderUserProfileListingsTemplate } from "../templates/userProfileListings.mjs";

const url = new URL(location.href);
const userName = url.searchParams.get("name");

export async function setGetProfileListener() {
  try {
    const profile = await getUserProfile(userName);
    document.title = `${profile.name}'s listings | find.no`;

    const container = document.querySelector("#profileContainer");
    container.innerHTML = "";
    renderUserProfileTemplate(profile, container);
  } catch (error) {
    const container = document.querySelector("#profileContainer");
    console.log(error);
    container.innerHTML = `<div class="bg-primary p-4 mt-5 m-auto rounded-1 text-center" style="max-width: 475px">
                <p class="text-white fw-semibold mb-0">There was an error loading the content. If the problem persist please contact us on +123456789</p>
              </div>`;
  }
}

export async function setGetProfileListingsListener() {
  try {
    const profile = await getUserListings(userName);
    const container = document.querySelector("#listingContainer");

    container.innerHTML = "";
    renderUserProfileListingsTemplate(profile, container);
  } catch (error) {
    const container = document.querySelector("#profileContainer");
    console.log(error);
    container.innerHTML = `<div class="bg-primary p-4 mt-5 m-auto rounded-1 text-center" style="max-width: 475px">
                <p class="text-white fw-semibold mb-0">There was an error loading the content. If the problem persist please contact us on +123456789</p>
              </div>`;
  }
}
