import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

// import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://maxelbo.dev",
  trailingSlash: "always",

  // prefetch: { prefetchAll: true },
  // experimental: {
  //   viewTransitions: true,
  // },
  integrations: [tailwind(), mdx(), react(), partytown()],

  // output: "server",
  // adapter: netlify(),
});