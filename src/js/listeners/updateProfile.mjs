import { getUserProfile } from "../api/profiles/get.mjs";
import { updateProfile } from "../api/profiles/update.mjs";

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
      await updateProfile(avatar);
      window.location.reload();
    });
  }
}
