import { useSanityClient, groq } from "astro-sanity";

let allPosts;
let allIllustrations;

export async function getAllPosts() {
  if (allPosts) return allPosts;
  const query = groq`*[_type == "post"] {
  ...,
  illustration->{
    ...,
    "size":image.asset->metadata.dimensions
  },
    tags[]->,
    "tagSlugs":tags[]->slug.current
}
| order(date desc)`;
  allPosts = await useSanityClient().fetch(query);
  return allPosts;
}

export async function getAllIllustrations() {
  if (allIllustrations) return allIllustrations;
  const query = groq`*[_type == "illustration" && inGallery == true] {
  ...,
  "size": image.asset->metadata.dimensions,
    tags[]->,
    "tagSlugs":tags[]->slug.current
}
| order(_createdAt desc)`;
  allIllustrations = await useSanityClient().fetch(query);
  return allIllustrations;
}

export async function getAllTags(type) {
  const query = `*[_type == "tag" && count(*[ _type == "${type}" && ^._id in tags[]._ref ]) > 0] 
| order(title asc)`;
  const allTags = await useSanityClient().fetch(query);
  return allTags;
}

export async function getSiteSettings() {
  const query = groq`*[_type == "siteSettings" && _id == "siteSettings"][0]{
    ...,
    aboutMeImage->,
    pinnedPost->{
      "image":illustration->image,
      "slug":slug.current
    }
  }`;
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

*[_type == "tag" && count(*[ _type == "illustration" && ^._id in tags[]._ref ]) > 0]

*/
