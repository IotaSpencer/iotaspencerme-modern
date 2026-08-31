// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkAttributes from "remark-attributes";
import cloudflare from "@astrojs/cloudflare";
import { unified } from "@astrojs/markdown-remark";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://new.iotaspencer.me",
  integrations: [mdx(), sitemap()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  markdown: {
    processor: unified({
      remarkPlugins: [[remarkAttributes, {}]],
    }),
  },
  vite: {
    plugins: [
      Icons({
        autoInstall: true,
        // Icon sizing
        scale: 1.2, // Scale factor relative to 1em (default: 1.2)

        // Default styling
        defaultStyle: "", // CSS styles applied to all icons
        defaultClass: "", // CSS classes applied to all icons

        // Compiler configuration
        compiler: "astro", // "vue" | "react" | "svelte" | "solid" | "astro" | etc.
        jsx: "react", // "vue" | "react" | "svelte" | "solid" | "preact" | etc.

        // Custom icon collections
        customCollections: {},

        iconCustomizer: () => {}, // See [Icon Customization](#icon-customization)
        //transform: undefined,   // See [Global Icon Transformation](#global-icon-transformation)
        transform(svg, collection, icon) {
          // apply fill to this icon on this collection
          if (collection === "my-icons" && icon === "account")
            return svg.replace(/^<svg /, '<svg fill="currentColor" ');
          else
            return svg.replace(/^<svg /, '<svg fill="currentColor" ');
          return svg;
        },
      }),
    ],
  },
});
