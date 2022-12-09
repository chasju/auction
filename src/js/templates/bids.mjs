/**
 * Function will insert values from postData and is a template for how a bid should look like.
 *
 * @param {object} postData
 *
 * @returns The function returns the bids template and is being used in the renderBidsTemplate function.
 */

export function bidsTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post", "mx-2");
  postData.reverse();

  if (postData.length === 0) {
    post.innerHTML += `<div class="mt-4 d-flex justify-content-between">
    <div class="d-flex gap-3 align-items-center">
      <p class="mb-0">No bids yet</p>
    </div>
  </div>`;
  }

  postData.forEach((bid) => {
    // // Destructuring API into variables

    let { bidderName, amount } = bid;

    // Post template

    post.innerHTML += `<div class="mt-4 d-flex justify-content-between">
    <div class="d-flex gap-3 align-items-center">
      <p class="mb-0">${bidderName}</p>
    </div>
    <div class="cookies d-flex align-items-baseline gap-1">
      <i class="fa-solid fa-cookie-bite"></i>
      <p class="mb-0 fs-5">${amount}</p>
    </div>
  </div>`;
  });

  return post;
}

/**
 * Function will render a bid based on its parameters.
 *
 * @param {object, array} postData This is post information that will be inserted into its parent container
 * @param {Element} parent This is the parent container
 *
 * @returns renders the bids template
 */

export function renderBidsTemplate(postData, parent) {
  parent.append(bidsTemplate(postData));
}
