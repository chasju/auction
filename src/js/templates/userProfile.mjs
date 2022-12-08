export function userProfileTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post", "m-auto", "d-flex", "gap-3", "align-items-center");

  post.innerHTML += `<div class="ratio ratio-1x1" style="width: 50px">
              <img src="${postData.avatar}" alt="profile" class="rounded-circle" style="object-fit: cover" />
            </div>
            <h1 class="fw-bolder mb-0">${postData.name}'s listings</h1>`;
  return post;
}

export function renderUserProfileTemplate(postData, parent) {
  parent.append(userProfileTemplate(postData));
}
