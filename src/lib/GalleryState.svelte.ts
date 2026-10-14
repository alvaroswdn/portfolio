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
	document.documentElement.classList.add('overflow-hidden');
}

export function hideGallery() {
	galleryState.show = false;
	document.documentElement.classList.remove('overflow-hidden');
}
