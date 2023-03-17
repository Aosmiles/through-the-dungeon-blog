import { useSanityClient, groq } from "astro-sanity";

//get all post with refs
//get all illustrations with size
//get all tags

let allPosts;
let allIllustrations;
let allTags;

export async function getAllPosts() {
  if (allPosts) return allPosts;
  const query = groq`*[_type == "post"] {
  ...,
  illustration->{
    ...,
    "size":image.asset->metadata.dimensions
  },
    tags[]->,
    "allTags": array::unique([...illustration->tags[]->{color, slug},...tags[]->{color, slug}])
}`;
  allPosts = await useSanityClient().fetch(query);
  return allPosts;
}

export async function getAllIllustrations() {
  if (allIllustrations) return allIllustrations;
  const query = groq`*[_type == "illustration"] {
  ...,
  "size": image.asset->metadata.dimensions
}
| order(_createdAt desc)`;
  allIllustrations = await useSanityClient().fetch(query);
  return allIllustrations;
}

export async function getAllTags() {
  if (allTags) return allTags;
  const query = groq`*[_type == "tag"] 
| order(title asc)`;
  allTags = await useSanityClient().fetch(query);
  return allTags;
}

export async function getSiteSettings() {
  const query = groq`*[_type == "siteSettings" && _id == "siteSettings"][0]`;
  const siteSettings = await useSanityClient().fetch(query);
  return siteSettings;
}

/*

tags
*[_type == "post"] {
    "allTags": array::unique([...illustration->tags[]->slug.current,...tags[]->slug.current])
}
| order(_createdAt desc)


----ALL POSTS----
*[_type == "post"] {
  ...,
  illustration->{
    ...,
    "size":image.asset->metadata.dimensions
  },
    tags[]->,
    "allTags": array::unique([...illustration->tags[]->slug.current,...tags[]->slug.current])
}
| order(_createdAt desc)

*/
