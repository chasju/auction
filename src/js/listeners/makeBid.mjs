import { sendBid } from "../api/posts/bids/makeBid.mjs";

export async function makeBidListener() {
  const input = document.querySelector("#bidInput");
  const button = document.querySelector(".bidButton");

  button.addEventListener("click", async (e) => {
    e.preventDefault();
    const bid = {
      amount: Number(input.value),
    };

    await sendBid(bid);
  });
}
