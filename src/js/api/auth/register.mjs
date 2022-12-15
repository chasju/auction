import { baseURL } from "../apiBase.mjs";

/**
 * Function will register user and send information to API 
 * 
 * @param {object} profile This is the input information provided in the register form and handled in /handlers/register.mjs
 * @returns returns result and sends the user to /pages/login/ so user can login and API information stored to localStorage
 * @example
 * ```js
 * if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      register(profile);
    });
  }
 * ```
 */

export async function register(profile) {
  const registerURL = `${baseURL}/auth/register`;

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(profile),
  });
  const result = await response.json();

  if (response.ok) {
    return result;
  }

  if (result.errors[0].message === "Profile already exists") {
    const container = document.querySelector("#errorMessage");
    container.classList.remove("d-none");
  }
}
