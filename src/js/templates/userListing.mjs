/**
 * Function will insert values from postData and is a template for how a specific user listing should look like.
 *
 * @param {object} postData
 *
 * @returns The function returns the post template and is being used in the renderUserListingTemplate function.
 */

import { checkBidButton } from "../components/bidButton.mjs";
import { makeBidListener } from "../listeners/makeBid.mjs";

export function userListingTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post", "w-100", "my-5", "d-lg-flex", "flex-lg-wrap", "justify-content-between");

  postData.forEach((userPost) => {
    // Destructuring API into variables

    const { title, description, bids } = userPost;
    let media = userPost.media[0];
    let endsAt = userPost.endsAt;
    bids.reverse();

    // Determine media undefined

    let isMedia;

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

    const todaysDate = new Date().getTime();
    const endDate = new Date(endsAt).getTime();
    const distance = endDate - todaysDate;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    let dateToBeUsed;

    dateToBeUsed = `${days}d ${hours}h ${minutes}m`;

    if (minutes < 1) {
      dateToBeUsed = "Ending Now";
    }

    if (distance <= 0) {
      dateToBeUsed = "Ended";
    }

    // Post template

    post.innerHTML += `
          <section class="flex-grow-1 m-auto mb-6" style="max-width: 475px">
            <div class="mt-6 ps-3">
              <h1 class="fw-bolder">${title}</h1>
            </div>
            <div id="carousel" class="carousel slide" data-bs-ride="carousel">
              <div class="ratio ratio-16x9 mt-3 carousel-inner">
                <div class="carousel-item active ratio ratio-16x9">
                  <img src="${isMedia}" alt="Image for post titled ${title}" class="img-fluid d-block" style="object-fit: cover;"/>
                </div>
                <div class="carousel-extra">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
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
                  <div>${bidName}</div>
                  <div class="cookies d-flex align-items-baseline gap-1">
                    <i class="fa-solid fa-cookie-bite"></i>
                    <p class="mb-0">${isBid}</p>
                  </div>
                </div>
              </div>
              <div class="px-4 d-flex justify-content-end align-items-center">
                  <p id="errorMessage" class="d-none bg-danger text-white p-2 rounded-1">Error</p>
                </div>
              <div class="px-4 d-flex gap-2 justify-content-end align-items-center">
                <div class="cookies d-flex align-items-baseline gap-1">
                  <i class="fa-solid fa-cookie-bite"></i>
                  <input type="number" aria-label="Input for bid amount" name="amount" id="bidInput" placeholder="0" style="width: 60px" class="text-end px-2 py-1" />
                </div>
              </div>
              <div class="px-4">
                <button class="w-100 mt-3 btn btn-lg fw-light btn-secondary align-self-center bidButton">Place bid</button>
              </div>
            </div>
          </section>
          `;
  });

  return post;
}

/**
 * Function will render a user listing post based on its parameters.
 *
 * @param {object, array} postData This is post information that will be inserted into its parent container
 * @param {Element} parent This is the parent container
 *
 * @returns renders the user listing template
 */

export function renderUserListingTemplate(postData, parent) {
  parent.append(userListingTemplate(postData));
  checkBidButton();
  makeBidListener();
  imageCarousel(postData);
}

// Handle more images in carousel

async function imageCarousel(postData) {
  const carousel = document.querySelector(".carousel-extra");
  const images = postData[0].media;
  images.forEach((image) => {
    carousel.innerHTML = "";
    carousel.innerHTML += `<div class="carousel-item ratio ratio-16x9">
                  <img src="${image}" alt="Image for post titled ${postData[0].title}" class="img-fluid" style="object-fit: cover"/>
                </div>`;
  });
}
