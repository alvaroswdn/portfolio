<script lang="ts">
	import Header from '$lib/Header.svelte';
	import '@fontsource-variable/baskervville';
	import '@fontsource-variable/ibm-plex-sans';
	import '../app.css';

	const { children } = $props();
</script>

<div class="grid text-xl">
	<Header />
	<div id="smooth-wrapper">
		<div id="smooth-content" class="pt-22">
			<main class="mb-24">
				{@render children()}
			</main>
			<footer class="text-center leading-tight text-lg text-primary/90 pb-22 px-8 lg:pb-8">
				&copy; {new Date().getFullYear()} Alvaro Raditya Soewardono. All rights reserved.
			</footer>
		</div>
	</div>
</div>
