import { formatDate } from "../components/formatDate.mjs";

export function userProfileListingsTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post", "m-auto", "d-lg-flex", "flex-lg-wrap", "justify-content-between");

  for (let i = 0; i < postData.length; i++) {
    // Destructuring API into variables

    const { title, description, endsAt, bids, id } = postData[i];
    let media = postData[i].media[0];
    bids.reverse();

    // Determine media undefined

    let isMedia;

    if (media !== undefined) {
      isMedia = media;
    } else {
      isMedia = "https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png";
    }

    // // Determine bid undefined

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

    post.innerHTML += `<section class="w-100 shadow-lg rounded-4 m-auto mb-6" style="max-width: 475px">
                <div>
                  <a href="/listing/?id=${id}" class="text-decoration-none">
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
                  <div class="px-4 pb-5">
                    <button class="w-100 mt-3 btn btn-lg fw-light btn-secondary align-self-center">Place bid</button>
                  </div>
                </div>
              </section>`;
  }

  return post;
}

export function renderUserProfileListingsTemplate(postData, parent) {
  parent.append(userProfileListingsTemplate(postData));
}
