/**
 * Function will insert values from postData and is a template for how a post should look like.
 *
 * @param {object} postData
 *
 * @returns The function returns the post template and is being used in the renderPostTemplate function.
 */

import { formatDate } from "../components/formatDate.mjs";

export function postTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post", "w-100", "my-5", "d-lg-flex", "flex-lg-wrap", "justify-content-between");

  for (let i = 0; i < postData.length; i++) {
    if (i >= 20) {
      break;
    }

    // Destructuring API into variables

    const { title, description, seller, bids, id } = postData[i];
    let media = postData[i].media[0];
    let endsAt = postData[i].endsAt;
    let sellerImage = seller.avatar;

    // Determine media undefined

    let isMedia;
    let isSellerImage;

    if (sellerImage === null || sellerImage === "") {
      isSellerImage = "https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png";
    } else {
      isSellerImage = sellerImage;
    }

    if (media !== undefined) {
      isMedia = media;
    } else {
      isMedia = "https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png";
    }

    // Determine bid undefined

    let isBid;
    let bidName;

    if (bids[0] !== undefined) {
      isBid = bids[0].amount;
      bidName = bids[0].bidderName;
    } else {
      isBid = "No bids yet";
      bidName = "";
    }

    // Get end-date

    const dateToBeUsed = formatDate(endsAt);

    // Post template

    post.innerHTML += `<section class="w-100 flex-grow-1 shadow-lg rounded-4 m-auto mb-6" style="max-width: 475px">
                <div>
                  <a href="./listing/?id=${id}" class="text-decoration-none">
                    <h2 class="px-4 pt-5 fst-italic fw-semibold">${title}</h2>
                  </a>
                </div>
                <div class="ratio ratio-16x9 mt-3">
                  <img src="${isMedia}" alt="" class="img-fluid" />
                </div>
                <div>
                  <div class="px-4 mt-3 d-flex justify-content-end gap-2">
                    <span><i class="fa-regular fa-clock"></i></span>
                    <div>${dateToBeUsed}</div>
                  </div>
                  <div class="px-4 mt-5">
                    <p>${description}</p>
                  </div>
                  <div class="px-4 mt-5 d-flex justify-content-between">
                    <p class="fw-semibold">Current bid</p>
                    <div class="d-flex gap-2">
                    <p class="mb-0">${bidName}</p>
                      <div class="cookies d-flex align-items-baseline gap-1">
                        <i class="fa-solid fa-cookie-bite"></i>
                        <p class="mb-0">${isBid}</p>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 d-flex gap-2 justify-content-end align-items-center">
                    <div class="cookies d-flex align-items-baseline gap-1">
                      <i class="fa-solid fa-cookie-bite"></i>
                      <input type="number" name="bid" id="bidInput" placeholder="0" style="width: 60px" class="text-end px-2 py-1" />
                    </div>
                  </div>
                  <div class="px-4">
                    <button class="w-100 mt-3 btn btn-lg fw-light btn-secondary align-self-center">Place bid</button>
                  </div>
                  <div class="px-4 py-4 d-flex gap-2 justify-content-end">
                    <a href="./profile/user/?id=${seller.name}">
                      <p class="fst-italic">See all of ${seller.name}'s listings >></p>
                    </a>
                    <div class="ratio ratio-1x1" style="width: 25px; height: 25px">
                      <img src="${isSellerImage}" alt="profile" class="rounded-circle" style="object-fit: cover" />
                    </div>
                  </div>
                </div>
              </section>`;
  }

  return post;
}

/**
 * Function will render a post based on its parameters.
 *
 * @param {object, array} postData This is post information that will be inserted into its parent container
 * @param {Element} parent This is the parent container
 *
 * @returns renders the post template
 */

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}
