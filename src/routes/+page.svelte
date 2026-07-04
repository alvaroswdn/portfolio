<script lang="ts">
	import { asset } from '$app/paths';
	import DownloadIcon from '$lib/icon/download.svelte';
	import LinkIcon from '$lib/icon/link.svelte';
	import ProjectSection from '$lib/ProjectSection.svelte';

	import { gsap } from 'gsap';
	import { ScrollSmoother } from 'gsap/ScrollSmoother';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	$effect(() => {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

		ScrollSmoother.create({
			smooth: 1,
			effects: true
		});
	});
</script>

<svelte:head>
	<title>Home - alvaroswdn</title>
</svelte:head>

<section id="hero" class="grid gap-14 max-w-7xl mx-auto lg:mt-12 sm:px-4">
	<div
		class="w-full flex flex-col gap-12 justify-between max-w-6xl mx-auto px-8 not-first:pt-18 lg:flex-row"
	>
		<div class="max-w-2xl">
			<h1 class="text-4xl lg:text-5xl font-accent font-semibold mt-6 mb-1">
				Alvaro Raditya Soewardono
			</h1>
			<span class="text-2xl text-accent font-semibold">Fullstack Developer</span>

			<p class="text-justify mt-6 lg:pr-8">
				I'm a highly committed learner with a growing interest in the field of technology. With an
				extensive list of skills, seeking to continuously gain new experiences all over the world.
			</p>
		</div>
		<div class="flex items-end px-4 lg:px-0">
			<a
				href={asset('/cv.pdf')}
				download
				class="flex w-full items-center justify-between gap-4 px-5 py-4 bg-accent text-white hover:scale-[102%] transition-all duration-400 ease-out lg:px-6 lg:py-5"
			>
				Download CV
				<DownloadIcon />
			</a>
		</div>
	</div>

	<div
		class="relative sm:rounded-sm flex items-center w-full aspect-10/5 sm:aspect-10/3 overflow-hidden bg-slate-200"
	>
		<enhanced:img
			data-speed="0.97"
			src="./img/hero.webp"
			alt="a random photograph by me"
			draggable="false"
			fetchpriority="high"
			sizes="min(1536px, 100vw)"
		/>
	</div>
</section>

<hr class="mt-16 lg:mt-28 max-w-6xl mx-auto text-primary/20" />

<section id="projects" class="mt-8 lg:mt-14">
	<h1 class="mx-auto w-fit font-accent font-semibold text-4xl lg:text-5xl mb-12 lg:mb-16">
		Recent Projects
	</h1>
	<div class="grid gap-16 lg:gap-36">
		<ProjectSection id="aerobase" color="border-cyan-600">
			{#snippet title()}
				<a class="flex items-center gap-1.5" href="https://aerobase.id" target="_blank">
					AeroBASE <LinkIcon />
				</a>
			{/snippet}

			{#snippet description()}
				<ul class="list-disc pl-6 text-justify *:mb-2">
					<li>Developed a drone control system utilizing PID for stabilization and navigation</li>
					<li>Developed team website with Astro for team information and competition updates</li>
					<li>Created software documentation and tutorials for future team members</li>
				</ul>
			{/snippet}

			{#snippet images()}
				<enhanced:img
					src="./img/aerobase.png"
					alt="screenshot of the AeroBASE website landing page"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
				<enhanced:img
					src="./img/aerobase2.png"
					alt="screenshot of AeroBASE website about page"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
				<enhanced:img
					src="./img/aerobase3.png"
					alt="screenshot of the AeroBASE website news page"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
		</ProjectSection>

		<ProjectSection id="lucky_network" color="border-amber-400">
			{#snippet title()}
				<a class="flex items-center gap-1.5" href="https://www.luckynetwork.net/" target="_blank">
					Lucky Network <LinkIcon />
				</a>
			{/snippet}

			{#snippet description()}
				<ul class="list-disc pl-6 text-justify *:mb-2">
					<li>
						Developed an authentication system with data protection and high performance in mind
					</li>
					<li>
						Improved infrastructure security to prevent access to internal systems from unauthorized
						parties
					</li>
					<li>
						Developed a website to receive donations from players, along with a payment system to go
						with it
					</li>
				</ul>
			{/snippet}

			{#snippet images()}
				<enhanced:img
					src="./img/lucky_appeals.png"
					alt="screenshot of the Lucky Network Appeals page"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
				<enhanced:img
					src="./img/lucky_store.png"
					alt="screenshot of the Lucky Network Store page"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
		</ProjectSection>
	</div>
</section>
