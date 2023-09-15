import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), react(), partytown()],
  // experimental: {
  //   viewTransitions: true,
  // },
});
