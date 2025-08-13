import type { Handle } from '@sveltejs/kit';

const fonts = ['baskervville-latin-wght-normal', 'ibm-plex-sans-latin-wght-normal'];

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		preload: ({ type, path }) => type === 'font' && fonts.some((font) => path.includes(font))
	});

	return response;
};
