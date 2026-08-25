// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkAttr from 'remark-attr';
import cloudflare from "@astrojs/cloudflare";
import { unified } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [mdx(), sitemap()],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
	markdown: {
		processor: unified({
			remarkPlugins: [remarkAttr, {mdx: true}],
		}),
	},
});
