import { getPosts } from "../api/posts/get.mjs";

export async function sortTags() {
  const posts = await getPosts();
  let tagsArray = [];
  posts.forEach((post) => {
    const tags = [...post.tags];
    for (let i = 0; i < tags.length; i++) {
      if (tags[i] === "") {
        continue;
      }
      tagsArray.push(tags[i].trim().toLowerCase());
    }
  });
  let uniqueItems = [...new Set(tagsArray)];
  const sortedArray = sortTagDesc(uniqueItems);

  return sortedArray;
}

export function sortTagDesc(array) {
  const sortedArray = array.sort(function (a, b) {
    const tagA = a.toLowerCase();
    const tagB = b.toLowerCase();
    if (tagA <= tagB) {
      return -1;
    }
    if (tagA >= tagB) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}
