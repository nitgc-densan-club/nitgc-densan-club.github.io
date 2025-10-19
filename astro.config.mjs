// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://nitgc-densan-club.github.io",
  image: {
    domains: ["images.microcms-assets.io"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
