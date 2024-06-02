import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://www.elborium.com",
  trailingSlash: "always",
  integrations: [tailwind(), mdx(), react(), partytown()],
  // adapter: netlify(),
  // prefetch: { prefetchAll: true },
  // experimental: {
  //   viewTransitions: true,
  // },
});
