import * as listeners from "./listeners/index.mjs";

const path = location.pathname;

if (path === "/" || path === "/index.html") {
  listeners.setMenuListener();
  listeners.logoutListener();
  listeners.getHomeFeedPosts();
  listeners.searchHomeFeedPosts();
}
if (path === "/register/" || path === "/register/index.html") {
  listeners.setRegisterFormListener();
}
if (path === "/login/" || path === "/login/index.html") {
  listeners.setLoginListener();
}
if (path === "/listing/create/" || path === "/listing/create/index.html") {
  listeners.setMenuListener();
  listeners.setCreatePostListener();
}
if (path === "/listing/update/" || path === "/listing/update/index.html") {
  listeners.setMenuListener();
}
if (path === "/listing/" || path === "/listing/index.html") {
  listeners.setMenuListener();
  listeners.getSinglePost();
  listeners.getBids();
}

// if (load("token") !== null || load("token") !== undefined) {
//   console.log(`Logged in`);
// } else {
//   console.log(`Not logged in`);
// }
