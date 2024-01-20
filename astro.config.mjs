import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [react()],
  vite: {
    plugins: [vanillaExtractPlugin()]
  }
});