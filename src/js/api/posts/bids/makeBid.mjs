import { getBids, getSinglePost } from "../../../listeners/userListing.mjs";
import { loginCheck } from "../../../views/isLoggedIn.mjs";
import { baseURL } from "../../apiBase.mjs";
import { authFetch } from "../../headers.mjs";

/**
 * Function will take in the postData provided from bid input.
 * 
 * @param {object} postData This is the input information provided in an input
 * @example
 * ```js
 *  button.addEventListener("click", async (e) => {
    e.preventDefault();
    const bid = {
      amount: Number(input.value),
    };

    await sendBid(bid);
  });
  ```
 */

const url = new URL(location.href);
const id = url.searchParams.get("id");

export async function sendBid(postData) {
  try {
    const bidUrl = `${baseURL}/listings/${id}/bids`;

    const response = await authFetch(bidUrl, {
      method: "POST",
      body: JSON.stringify(postData),
    });
    const errorMessage = document.querySelector("#errorMessage");

    if (response.ok) {
      errorMessage.classList.add("d-none");
      await getSinglePost(id);
      await getBids();
      await loginCheck();
      const post = await response.json();
      return post;
    }
    errorMessage.classList.remove("d-none");
    errorMessage.innerText = "Could not place bid";
  } catch (error) {
    console.log(error);
  }
}
