import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import { vanillaExractPlugin } from "@vanilla-extract/vite-plugin";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [react()],
  vite: {
    plugins: [vanillaExractPlugin()]
  }
});