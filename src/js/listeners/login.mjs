import { login } from "../api/auth/login.mjs";

export function setLoginListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      const { email, password } = profile;

      await login(email, password);
    });
  }
}
