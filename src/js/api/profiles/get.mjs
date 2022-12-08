import { baseURL } from "../apiBase.mjs";
import { authFetch } from "../headers.mjs";

export async function getUserProfile(name) {
  const getPostsURL = `${baseURL}/profiles/${name}`;
  const response = await authFetch(getPostsURL);
  const profile = await response.json();
  return profile;
}

export async function getUserListings(name) {
  const getPostsURL = `${baseURL}/profiles/${name}/listings`;
  const response = await authFetch(getPostsURL);
  const listings = await response.json();
  return listings;
}
