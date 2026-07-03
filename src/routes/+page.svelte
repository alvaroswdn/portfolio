<script lang="ts">
	import { asset } from '$app/paths';
	import DownloadIcon from '$lib/icon/download.svelte';
	import ProjectSection from '$lib/ProjectSection.svelte';
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

	<enhanced:img
		class="sm:rounded-lg w-full max-h-96 object-cover object-center bg-slate-200"
		src="./img/hero.webp?w=1536;1024;720;560"
		alt="a random photograph by me"
		draggable="false"
		fetchpriority="high"
		sizes="(min-width:1024px) 1536px, (min-width:960px) 1024px, (min-width:720px) 720px, 560px"
	/>
</section>

<hr class="mt-16 lg:mt-28 max-w-6xl mx-auto text-primary/30" />

<section id="projects" class="mt-8 lg:mt-14">
	<h1 class="mx-auto w-fit font-accent font-semibold text-4xl lg:text-5xl mb-12 lg:mb-16">
		Recent Projects
	</h1>
	<div class="grid gap-16 lg:gap-36">
		<ProjectSection id="aerobase" color="border-cyan-600">
			{#snippet title()}
				<a href="https://aerobase.id" target="_blank"> AeroBASE &#x2197; </a>
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
					class="rounded-lg w-full bg-slate-200"
					src="./img/aerobase.png"
					alt="screenshot of the AeroBASE page"
					draggable="false"
					sizes="(min-width:1024px) 540px, (min-width:960px) 1024px, (min-width:720px) 720px, 560px"
				/>
				<enhanced:img
					class="rounded-lg w-full bg-slate-200"
					src="./img/aerobase2.png"
					alt="continued screenshot of the AeroBASE page"
					draggable="false"
					sizes="(min-width:1024px) 540px, (min-width:960px) 1024px, (min-width:720px) 720px, 560px"
				/>
			{/snippet}
		</ProjectSection>

		<ProjectSection id="lucky_network" color="border-amber-400">
			{#snippet title()}
				<a href="https://www.luckynetwork.net/" target="_blank"> Lucky Network &#x2197; </a>
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
					class="rounded-lg w-full bg-slate-200"
					src="./img/lucky_appeals.png"
					alt="screenshot of the Lucky Network Appeals page"
					draggable="false"
					sizes="(min-width:1024px) 540px, (min-width:960px) 1024px, (min-width:720px) 720px, 560px"
				/>
				<enhanced:img
					class="rounded-lg w-full bg-slate-200"
					src="./img/lucky_store.png"
					alt="screenshot of the Lucky Network Store page"
					draggable="false"
					sizes="(min-width:1024px) 540px, (min-width:960px) 1024px, (min-width:720px) 720px, 560px"
				/>
			{/snippet}
		</ProjectSection>
	</div>
</section>
