<script lang="ts">
	import Header from '$lib/Header.svelte';
	import '@fontsource-variable/baskervville';
	import '@fontsource-variable/ibm-plex-sans';
	import '../app.css';

	const { children } = $props();
</script>

<div class="grid text-xl">
	<Header />
	<main class="pb-24">
		{@render children()}
	</main>
	<footer class="text-center leading-tight text-lg text-primary/90 pb-22 px-8 lg:pb-8">
		&copy; {new Date().getFullYear()} Alvaro Raditya Soewardono. All rights reserved.
	</footer>
</div>
