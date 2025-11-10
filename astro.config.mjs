import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
	site: "https://moisesrj.dev/",
	integrations: [
		tailwind(),
		sitemap({
			changefreq: "weekly",
			priority: 0.7,
			lastmod: new Date(),
			entryLimit: 10000,
		}),
		robotsTxt(),
	],
});
