/**
 * Saves information to localStorage
 * @param {*} key The name you provide
 * @param {*} value The value you want to save
 */

export const save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
