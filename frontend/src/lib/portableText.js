import { portableTextToHtml } from "astro-sanity";

const customComponents = {
  block: {
    h3: (value) => `<h3 class="uppercase font-semibold">${value.children}</h3>`,
  },
};

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}
