import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { FontaineTransform } from 'fontaine';
import { defineConfig } from 'vite';

export default defineConfig({
	css: {
		transformer: 'lightningcss'
	},
	build: {
		cssMinify: 'lightningcss'
	},
	plugins: [
		enhancedImages(),
		sveltekit(),
		tailwindcss(),
		FontaineTransform.vite({
			fallbacks: {
				'IBM Plex Sans Variable': [
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'Noto Sans',
					'sans-serif'
				],
				Baskervville: [
					'Baskerville',
					'Hoefler Text',
					'Garamond',
					'Times New Roman',
					'Times',
					'Georgia',
					'Noto Serif',
					'serif'
				]
			}
		})
	]
});
