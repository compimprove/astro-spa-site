import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: cloudflare(),
  integrations: [
    sanity({
      projectId: "wx9xhwt1",
      dataset: "production",
      useCdn: false,
      // See note on using the CDN
      apiVersion: "2024-07-24",
      // insert the current date to access the latest version of the API
      studioBasePath: "/admin",
    }),
    react(),
  ],
  image: {
    domains: ["cdn.sanity.io"],
  },
  adapter: cloudflare(),
});
