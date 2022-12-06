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

// if (load("token") !== null || load("token") !== undefined) {
//   console.log(`Logged in`);
// } else {
//   console.log(`Not logged in`);
// }
