import * as listeners from "./listeners/index.mjs";
import * as view from "./views/index.mjs";

const path = location.pathname;

if (path === "/" || path === "/index.html") {
  listeners.setMenuListener();
  listeners.logoutListener();
  listeners.getHomeFeedPosts();
  listeners.searchHomeFeedPosts();
  view.loginCheck();
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
  view.loginCheck();
}
if (path === "/listing/update/" || path === "/listing/update/index.html") {
  listeners.setMenuListener();
  listeners.setUpdatePostListener();
  view.loginCheck();
}
if (path === "/listing/" || path === "/listing/index.html") {
  listeners.setMenuListener();
  listeners.getSinglePost();
  listeners.getBids();
  view.loginCheck();
}
if (path === "/profile/user/" || path === "/profile/user/index.html") {
  listeners.setMenuListener();
  listeners.setGetProfileListener();
  listeners.setGetProfileListingsListener();
  view.loginCheck();
}
if (path === "/profile/" || path === "/profile/index.html") {
  listeners.setMenuListener();
  listeners.setProfileListener();
  listeners.setProfileListingsListener();
  view.loginCheck();
}
if (path === "/profile/update/" || path === "/profile/update/index.html") {
  listeners.setMenuListener();
  listeners.updateProfileListener();
  view.loginCheck();
}

// if (load("token") !== null || load("token") !== undefined) {
//   console.log(`Logged in`);
// } else {
//   console.log(`Not logged in`);
// }
