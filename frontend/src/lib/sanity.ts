import { useSanityClient, groq } from "astro-sanity";

export async function getAllPosts() {
  const query = groq`*[_type == "post"]`;
  const allPosts = await useSanityClient().fetch(query);
  return allPosts;
}

export async function getSiteSettings() {
  const query = groq`*[_type == "siteSettings" && _id == "siteSettings"][0]`;
  const siteSettings = await useSanityClient().fetch(query);
  return siteSettings;
}
