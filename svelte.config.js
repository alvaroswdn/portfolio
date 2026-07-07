import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		csp: {
			directives: {
				'default-src': ['none'],
				'img-src': ['self', 'data:'],
				'style-src': ['self', 'unsafe-inline'],
				'script-src': ['self', 'https://static.cloudflareinsights.com', 'https://va.vercel-scripts.com', 'unsafe-inline'],
				'connect-src': ['self', 'https://cloudflareinsights.com'],
				'font-src': ['self'],
				'manifest-src': ['self'],
				'frame-ancestors': ['none'],
				'object-src': ['none'],
				'base-uri': ['self'],
				'form-action': ['self']
			}
		}
	}
}

export default config
