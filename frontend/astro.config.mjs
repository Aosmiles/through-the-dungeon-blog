import { defineConfig } from 'astro/config';
import sanity from "astro-sanity";
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'v15pu7z1',
    dataset: "production",
    apiVersion: "2023-03-09",
    useCdn: false
  }), tailwind(), image()]
});