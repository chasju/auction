export function profileTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post", "m-auto", "d-flex", "gap-3", "align-items-center");

  const { name, email } = postData;
  let avatar = postData.avatar;
  let credits = postData.credits;

  let isAvatar;
  let isCredits = credits;

  if (avatar !== undefined) {
    isAvatar = avatar;
  } else {
    isAvatar = "https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png";
  }

  if (credits === 0) {
    isCredits = "No cookies left";
  }

  post.innerHTML = `<section class="m-auto mb-6" style="max-width: 475px">
                <div class="mt-6 text-center">
                  <h1 class="fw-bolder">PROFILE</h1>
                </div>
                <div class="mt-6 d-flex flex-column gap-3 align-items-center gap-2 position-relative">
                  <div class="ratio ratio-1x1" style="width: 10rem">
                    <img src="${isAvatar}" alt="profile" class="rounded-circle" style="object-fit: cover" />
                    <a href="./update/?name=${name}"><i class="fa-solid fa-pen fs-4 text-success"></i></a>
                  </div>
                  <div class="mt-4 cookies d-flex gap-2 align-items-center gap-1">
                    <i class="fa-solid fa-cookie fs-3"></i>
                    <p class="mb-0 fs-3">${isCredits}</p>
                  </div>
                  <div class="mt-4 text-center text-secondary">
                    <p>${name}</p>
                    <p>${email}</p>
                  </div>
                </div>
              </section>`;

  return post;
}

export function renderProfileTemplate(postData, parent) {
  parent.append(profileTemplate(postData));
}
