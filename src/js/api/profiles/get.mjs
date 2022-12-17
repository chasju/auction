import { baseURL } from "../apiBase.mjs";
import { authFetch } from "../headers.mjs";

/**
 * Will get a users profile
 * @param {string} name Username
 * @returns profile information
 * @example 
 *```js
 try {
    const profile = await getUserProfile(userName);
    console.log(profile)
  } catch (error) {
    console.log(error);
  }
  ```
 */

export async function getUserProfile(name) {
  const getPostsURL = `${baseURL}/profiles/${name}`;
  const response = await authFetch(getPostsURL);
  const profile = await response.json();
  return profile;
}

/**
 * Will get a users listings
 * @param {string} name Username
 * @returns all users listings
 * @example 
 *```js
 try {
    const listings = await getUserListings(userName);
    console.log(listings)
  } catch (error) {
    console.log(error);
  }
  ```
 */

export async function getUserListings(name) {
  const getPostsURL = `${baseURL}/profiles/${name}/listings?_seller=true&_bids=true&sort=created&sortOrder=desc`;
  const response = await authFetch(getPostsURL);
  const listings = await response.json();
  return listings;
}
