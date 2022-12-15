import { register } from "../api/auth/register.mjs";
import { login } from "../api/auth/login.mjs";

/**
 * Function that will register user and then login.
 *
 */

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      const { email, password } = profile;

      await register(profile);

      try {
        await login(email, password);
      } catch (error) {
        return alert("There was a problem logging into your new account");
      }
    });
  }
}
