import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import { loadEnv } from "vite";
const { PUBLIC_ENV } = loadEnv(import.meta.env.MODE, process.cwd(), "");

import cloudflare from "@astrojs/cloudflare";

const isPreview = PUBLIC_ENV === "Preview";

// https://astro.build/config
export default defineConfig({
  output: isPreview ? "server" : "hybrid",
  adapter: cloudflare(),
  integrations: [
    sanity({
      projectId: "wx9xhwt1",
      dataset: "production",
      useCdn: isPreview,
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
