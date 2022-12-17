/**
 * Gets information from localStorage
 * @param {*} key The item you want to get
 * @returns
 */

export const load = (key) => {
  try {
    key = localStorage.getItem(key);
    return JSON.parse(key);
  } catch {
    console.log("no key");
    return null;
  }
};
