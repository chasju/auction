import * as listeners from "./listeners/index.mjs";
import * as view from "./views/index.mjs";
import * as components from "./components/index.mjs";
import * as auth from "./api/auth/index.mjs";

const path = location.pathname;

if (path === "/" || path === "/index.html") {
  listeners.setMenuListener();
  listeners.logoutListener();
  listeners.getHomeFeedPosts();
  listeners.searchHomeFeedPosts();
  view.loginCheck();
  components.sortTags();
  listeners.sortBy();
  auth.logout();
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
  view.reDirect();
  auth.logout();
}
if (path === "/listing/update/" || path === "/listing/update/index.html") {
  listeners.setMenuListener();
  listeners.setUpdatePostListener();
  view.loginCheck();
  view.reDirect();
  auth.logout();
}
if (path === "/listing/" || path === "/listing/index.html") {
  listeners.setMenuListener();
  listeners.getSinglePost();
  listeners.getBids();
  view.loginCheck();
  auth.logout();
}
if (path === "/profile/user/" || path === "/profile/user/index.html") {
  listeners.setMenuListener();
  listeners.setGetProfileListener();
  listeners.setGetProfileListingsListener();
  listeners.searchProfilePosts();
  view.loginCheck();
  view.reDirect();
  auth.logout();
}
if (path === "/profile/" || path === "/profile/index.html") {
  listeners.setMenuListener();
  listeners.setProfileListener();
  listeners.setProfileListingsListener();
  view.loginCheck();
  view.reDirect();
  auth.logout();
}
if (path === "/profile/update/" || path === "/profile/update/index.html") {
  listeners.setMenuListener();
  listeners.updateProfileListener();
  view.loginCheck();
  view.reDirect();
  auth.logout();
}
