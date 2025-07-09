<script lang="ts">
	import Header from '$lib/Header.svelte';
	import '@fontsource-variable/baskervville';
	import accentWoff2 from '@fontsource-variable/baskervville/files/baskervville-latin-wght-normal.woff2?url';
	import '@fontsource-variable/ibm-plex-sans';
	import primaryWoff2 from '@fontsource-variable/ibm-plex-sans/files/ibm-plex-sans-latin-wght-normal.woff2?url';
	import '../app.css';

	const { children } = $props();
</script>

<svelte:head>
	<link rel="preload" as="font" type="font/woff2" href={primaryWoff2} crossorigin="anonymous" />
	<link rel="preload" as="font" type="font/woff2" href={accentWoff2} crossorigin="anonymous" />
</svelte:head>

<div class="grid text-xl">
	<Header />
	<main class="pb-24">
		{@render children()}
	</main>
	<footer class="text-center text-lg text-primary/90 pb-8 px-10">
		&copy; {new Date().getFullYear()} Alvaro Raditya Soewardono. All rights reserved.
	</footer>
</div>
