import { portableTextToHtml } from "astro-sanity";

const customComponents = {};

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}
