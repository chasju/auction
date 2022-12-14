/**
 * Function will log out in user and remove API result
 * from localStorage.
 *
 * @returns returns nothing but sends the user to /pages/login/
 *
 */

import { deleteFromLocalStorage } from "../../storage/delete.mjs";

export function logout() {
  const buttons = document.querySelectorAll(".logout");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      deleteFromLocalStorage("token");
      deleteFromLocalStorage("profile");
      window.location = "/";
    });
  });
}
