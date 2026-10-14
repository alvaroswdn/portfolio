import adapter from '@sveltejs/adapter-static';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { FontaineTransform } from 'fontaine';
import { defineConfig } from 'vite';

export default defineConfig({
	css: {
		transformer: 'lightningcss'
	},
	build: {
		cssMinify: 'lightningcss',
		assetsInlineLimit: 100000000
	},
	plugins: [
		enhancedImages(),
		sveltekit({
			preprocess: vitePreprocess(),
			adapter: adapter(),
			output: { bundleStrategy: 'inline' },
			csp: {
				directives: {
					'default-src': ['none'],
					'img-src': ['self', 'data:'],
					'style-src': ['self', 'unsafe-inline'],
					'script-src': ['self', 'https://static.cloudflareinsights.com', 'unsafe-inline'],
					'connect-src': ['self', 'https://cloudflareinsights.com'],
					'font-src': ['self', 'data:'],
					'manifest-src': ['self'],
					'frame-ancestors': ['none'],
					'object-src': ['none'],
					'base-uri': ['self'],
					'form-action': ['self']
				}
			}
		}),
		tailwindcss(),
		FontaineTransform.vite({
			fallbacks: {
				'IBM Plex Sans': [
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
