import { useSanityClient, groq } from "astro-sanity";

export async function getAllPosts() {
  const query = groq`*[_type == "post"]{
  ...,
  images[]{
    ...,
    asset-> {...,
      "width": metadata.dimensions.width,
      "height": metadata.dimensions.height,
      "ratio": metadata.dimensions.aspectRatio  
    }}
} | order(_createdAt desc)`;
  const allPosts = await useSanityClient().fetch(query);
  return allPosts;
}

export async function getAllPostImages() {
  const query = groq`*[_type == "post"]{
  images[0]{
    ...,
    asset}
} | order(_createdAt desc)`;
  const allPostImages = await useSanityClient().fetch(query);
  return allPostImages;
}

export async function getSiteSettings() {
  const query = groq`*[_type == "siteSettings" && _id == "siteSettings"][0]`;
  const siteSettings = await useSanityClient().fetch(query);
  return siteSettings;
}
