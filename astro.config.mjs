// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkAttributes from 'remark-attributes';
import cloudflare from "@astrojs/cloudflare";
import { unified } from '@astrojs/markdown-remark';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: "https://new.iotaspencer.me",
    integrations: [mdx(), sitemap(), icon()],
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
});