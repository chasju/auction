import { getUserProfile } from "../api/profiles/get.mjs";
import { updateProfile } from "../api/profiles/update.mjs";
import { load } from "../storage/load.mjs";
import { save } from "../storage/save.mjs";

/**
 * Updates profile image on submit if inputs are validated
 */

export async function updateProfileListener() {
  const url = new URL(location.href);
  const name = url.searchParams.get("name");

  const user = await getUserProfile(name);
  const form = document.querySelector("#editProfile");
  const image = document.querySelector("#profileImage");
  image.src = user.avatar;

  if (form) {
    form.avatar.placeholder = user.avatar;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const avatar = Object.fromEntries(formData.entries());
      avatar.name = name;
      let profileExists = load("profile");
      profileExists["avatar"] = avatar.avatar;
      save("profile", profileExists);
      await updateProfile(avatar);
      window.location.reload();
    });
  }
}
