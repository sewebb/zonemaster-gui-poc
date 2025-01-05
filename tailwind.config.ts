import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: colors.blue,
				secondary: colors.gray
			}
		},
	},
	plugins: [typography, forms]
} satisfies Config;
