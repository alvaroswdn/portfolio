import type { Handle } from '@sveltejs/kit/hooks';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/assets/')) {
		return new Response(null, {
			status: 301,
			headers: { location: event.url.pathname.replace('/assets/', '/_app/immutable/assets/') }
		});
	}

	const response = await resolve(event, {
		preload: ({ type, path }) => {
			if (type === 'font') return path.endsWith('.woff2');
			return type === 'js' || type === 'css';
		}
	});

	if (response.status === 404) {
		return new Response(null, {
			status: 303,
			headers: { location: '/' }
		});
	}

	return response;
};
