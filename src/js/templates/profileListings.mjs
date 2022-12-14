import { deleteListing } from "../listeners/deletePost.mjs";

export function profileListingsTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post", "m-auto", "d-lg-flex", "flex-lg-wrap", "justify-content-between");

  for (let i = 0; i < postData.length; i++) {
    // Destructuring API into variables

    const { title, id } = postData[i];
    let media = postData[i].media[0];

    // Determine media undefined

    let isMedia;

    if (media !== undefined) {
      isMedia = media;
    } else {
      isMedia = "https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png";
    }

    // Post template

    post.innerHTML += `<section class="w-100 shadow-lg rounded-4 m-auto my-4" style="max-width: 475px">
                  <div>
                    <a href="/listing/?id=${id}" class="text-decoration-none">
                      <h2 class="px-4 pt-5 fst-italic fw-semibold">${title}</h2>
                    </a>
                  </div>
                  <div class="ratio ratio-16x9 mt-3">
                    <img src="${isMedia}" alt="" class="img-fluid" />
                  </div>
                  <div class="p-4">
                    <div class="d-flex justify-content-end gap-3">
                      <a href="./../listing/update/?id=${id}"><i class="fa-solid fa-pen fs-4"></i></a>
                      <i id="${id}" class="fa-solid fa-trash fs-4 deletePost"></i>
                    </div>
                  </div>
                </section>`;
  }

  return post;
}

export function renderProfileListingsTemplate(postData, parent) {
  parent.append(profileListingsTemplate(postData));
  deleteListing();
}
