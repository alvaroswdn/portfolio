<script lang="ts">
	import Header from '$lib/Header.svelte';
	import '../app.css';

	import { gsap } from 'gsap';
	import { ScrollSmoother } from 'gsap/ScrollSmoother';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	const { children } = $props();

	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
</script>

<div class="grid text-xl">
	<Header />
	<div id="smooth-wrapper">
		<div id="smooth-content" class="pt-18 sm:pt-22">
			<main class="mb-24">
				{@render children()}
			</main>
			<footer class="text-center leading-tight text-lg text-primary/90 pb-22 px-8 lg:pb-8">
				&copy; {new Date().getFullYear()} Alvaro Raditya Soewardono. All rights reserved.
			</footer>
		</div>
	</div>
</div>
