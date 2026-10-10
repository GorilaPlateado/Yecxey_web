import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Sitemap is generated as a static file (public/sitemap-index.xml)
// to avoid version compatibility issues with @astrojs/sitemap.
// See public/sitemap-0.xml for the full sitemap.

export default defineConfig({
  site: "https://gyroadsidesolutions.com",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "static",
  build: {
    format: "directory",
  },
});
