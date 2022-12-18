import { baseURL } from "../apiBase.mjs";
import * as storage from "../../storage/index.mjs";

/**
 * Function will login in user and save API result
 * to localStorage if the user is already registered.
 *
 * @param {object} email
 * @param {object} password
 * @returns
 * @example
 * ```js
 * if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      const { email, password } = profile;

      console.log(login(email, password));
    });
  }
 * ```
 */

export async function login(email, password) {
  const loginURL = `${baseURL}/auth/login`;

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const result = await response.json();

    storage.save("token", result.accessToken);
    storage.save("profile", result);
    return result;
  }
  if (!response.ok) {
    const errorMessage = document.querySelector("#errorMessage");
    errorMessage.classList.remove("d-none");
  }
}
