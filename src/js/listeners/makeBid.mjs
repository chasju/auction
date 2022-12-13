import { sendBid } from "../api/posts/bids/makeBid.mjs";
import { load } from "../storage/load.mjs";
import { save } from "../storage/save.mjs";

export async function makeBidListener() {
  const input = document.querySelector("#bidInput");
  const button = document.querySelector(".bidButton");

  button.addEventListener("click", async (e) => {
    e.preventDefault();
    const bid = {
      amount: Number(input.value),
    };

    let profileExists = load("profile");
    profileExists["credits"] = profileExists.credits - input.value;
    save("profile", profileExists);

    await sendBid(bid);
  });
}
