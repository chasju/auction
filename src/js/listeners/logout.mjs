import { deleteFromLocalStorage } from "../storage/delete.mjs";

/**
 * Logs out a logged in user
 */

export function logoutListener() {
  const logoutButton = document.querySelector("#logout");

  logoutButton.addEventListener("click", () => {
    deleteFromLocalStorage("token");
    deleteFromLocalStorage("profile");
  });
}
