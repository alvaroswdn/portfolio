import { scroller } from '#lib/Scroller.svelte.ts';
import type { Snippet } from 'svelte';

export const galleryState = $state({
	title: 'Gallery',
	images: undefined as Snippet | undefined,
	show: false
});

export function setGallery(title: string, images: Snippet) {
	galleryState.title = title;
	galleryState.images = images;
	galleryState.show = true;
	scroller.window?.stop();
	document.documentElement.style.overflow = 'hidden';
}

export function hideGallery() {
	galleryState.show = false;
	scroller.window?.start();
	document.documentElement.style.overflow = 'hidden';
}
