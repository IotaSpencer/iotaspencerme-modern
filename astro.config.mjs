// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkAttributes from 'remark-attributes';
import cloudflare from "@astrojs/cloudflare";
import { unified } from '@astrojs/markdown-remark';
import Icons from 'unplugin-icons/vite'


// https://astro.build/config
export default defineConfig({
    site: "https://new.iotaspencer.me",
    integrations: [mdx(), sitemap(), ],
    adapter: cloudflare({
        platformProxy: {
            enabled: true,
        },
    }),
    markdown: {
        processor: unified({
            remarkPlugins: [
                [remarkAttributes, {}]
            ],
        }),
    },
    vite: {
    plugins: [
      Icons({
        compiler: 'astro',
        autoInstall: true,
      }),
    ],
  },
});