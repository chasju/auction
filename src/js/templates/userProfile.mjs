export function userProfileTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post", "m-auto", "d-flex", "gap-3", "align-items-center");

  const avatar = postData.avatar;
  let isAvatar;

  if (avatar === null || avatar === "") {
    isAvatar = "https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png";
  } else {
    isAvatar = avatar;
  }

  post.innerHTML += `<div class="ratio ratio-1x1" style="width: 50px">
              <img src="${isAvatar}" alt="profile picture" class="rounded-circle" style="object-fit: cover" />
            </div>
            <h1 class="fw-bolder mb-0 fs-3">${postData.name}'s listings</h1>`;
  return post;
}

export function renderUserProfileTemplate(postData, parent) {
  parent.append(userProfileTemplate(postData));
}
