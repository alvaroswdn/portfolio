import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	css: {
		transformer: 'lightningcss'
	},
	build: {
		cssMinify: 'lightningcss'
	},
	experimental: {
		enableNativePlugin: true
	},
	plugins: [enhancedImages(), sveltekit(), tailwindcss()]
});
