import { deleteFromLocalStorage } from "../storage/delete.mjs";

export function logoutListener() {
  const logoutButton = document.querySelector("#logout");

  logoutButton.addEventListener("click", () => {
    deleteFromLocalStorage("token");
    deleteFromLocalStorage("profile");
  });
}
