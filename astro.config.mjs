import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";

export default defineConfig({
  integrations: [
    tailwind(),
    mdx({
      optimize: true,
    }),
    partytown(),
  ],
});
