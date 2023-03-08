import { defineConfig } from 'astro/config';

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'psk67h6g',
    dataset: "production",
    apiVersion: "2023-03-08",
    useCdn: false
  })]
});