import { useSanityClient, groq } from "astro-sanity";

async function getAllPosts() {
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
export const allPosts = await getAllPosts();

async function getAllIllustrations() {
  const query = groq`*[_type == "illustration"] {
  ...,
  "size": image.asset->metadata.dimensions
}
| order(_createdAt desc)`;
  const illustrations = await useSanityClient().fetch(query);
  return illustrations;
}
export const allIllustrations = await getAllIllustrations();

async function getAllCatagories() {
  const query = groq`*[_type == "catagory"] 
| order(title asc)`;
  const catagories = await useSanityClient().fetch(query);
  return catagories;
}
export const allCatagories = await getAllCatagories();

export async function getPostsByCatagory(catagoryID) {
  const query = groq`*[_type == "post" && '${catagoryID}' in catagories[]._ref]{
  ...,
   illustration->{
    ...,
    "size": image.asset->metadata.dimensions
  }
}
| order(_createdAt desc)`;
  return await useSanityClient().fetch(query);
}

export async function getSiteSettings() {
  const query = groq`*[_type == "siteSettings" && _id == "siteSettings"][0]`;
  const siteSettings = await useSanityClient().fetch(query);
  return siteSettings;
}
