import { useSanityClient, groq } from "astro-sanity";

export async function getAllPosts() {
  const query = groq`*[_type == "post"]`;
  const allPosts = await useSanityClient().fetch(query);
  return allPosts;
}
