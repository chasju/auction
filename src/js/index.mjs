import * as listeners from "./listeners/index.mjs";
import * as posts from "../js/api/posts/index.mjs";
import { load } from "./storage/load.mjs";

const path = location.pathname;

if (path === "/" || path === "/index.html") {
  listeners.setMenuListener();
  listeners.logoutListener();
  posts.getPosts();
}
if (path === "/register/" || path === "/register/index.html") {
  listeners.setRegisterFormListener();
}
if (path === "/login/" || path === "/login/index.html") {
  listeners.setLoginListener();
}

// if (load("token") !== null || load("token") !== undefined) {
//   console.log(`Email address exists`);
// } else {
//   console.log(`Email address not found`);
// }
