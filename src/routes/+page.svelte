<script lang="ts">
	import HeroSection from '$lib/HeroSection.svelte';
	import ProjectSection from '$lib/ProjectSection.svelte';
	import { gsap } from 'gsap';
	import { ScrollSmoother } from 'gsap/ScrollSmoother';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	$effect(() => {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
	});
</script>

<svelte:head>
	<title>Home - alvaroswdn</title>
</svelte:head>

<HeroSection />
<hr class="mt-16 lg:mt-28 max-w-6xl mx-auto text-primary/20" />
<ProjectSection />
