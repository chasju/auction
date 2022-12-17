import { load } from "../storage/load.mjs";

/**
 * Checks to see if user is logged in, if not disables all bid buttons
 */

export function checkBidButton() {
  const buttons = document.querySelectorAll(".bidButton");
  const isLoggedIn = load("profile");

  buttons.forEach((button) => {
    button.disabled = true;
    if (!isLoggedIn) {
      button.innerText = "Login to place bid";
    }
    if (isLoggedIn) {
      button.disabled = false;
    }
  });
}
