// @ts-check
import { defineConfig } from 'astro/config';
import paraglide from '@inlang/paraglide-astro';

import tailwind from '@astrojs/tailwind';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	i18n: {
		locales: ['da', 'en', 'es', 'fi', 'fr', 'nb', 'sv'],
		defaultLocale: 'en'
	},
	integrations: [
		paraglide({
			// recommended settings
			project: './project.inlang',
			outdir: './src/paraglide'
		}),
		tailwind(),
		svelte()
	]
});
