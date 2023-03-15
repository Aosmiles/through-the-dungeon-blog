import { useSanityClient, groq } from "astro-sanity";

export async function getAllPosts() {
  const query = groq`*[_type == "post"]{
  ...,
   illustration->{
    ...,
    "size": image.asset->metadata.dimensions
  }
}
| order(_createdAt desc)`;
  const allPosts = await useSanityClient().fetch(query);
  return allPosts;
}

export async function getAllIllustrations() {
  const query = groq`*[_type == "illustration"] {
  ...,
  "size": image.asset->metadata.dimensions
}
| order(_createdAt desc)`;
  const illustrations = await useSanityClient().fetch(query);
  return illustrations;
}

export async function getSiteSettings() {
  const query = groq`*[_type == "siteSettings" && _id == "siteSettings"][0]`;
  const siteSettings = await useSanityClient().fetch(query);
  return siteSettings;
}
