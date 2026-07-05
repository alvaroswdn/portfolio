import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
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
