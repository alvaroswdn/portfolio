<script lang="ts">
	import LinkIcon from '$lib/icon/link.svg?raw';
	import ProjectSection from '$lib/ProjectSection.svelte';
	const SECTION_DEFAULTS = 'max-w-6xl px-8 m-auto flex flex-col gap-8 not-first:pt-18';
</script>

<svelte:head>
	<title>Home - alvaroswdn</title>
</svelte:head>

{#snippet project(title: string, url: string)}
	<div>
		<a
			href={url}
			class="group flex items-center justify-between px-5 py-4 hover:text-accent hover:scale-[102%] transition-all duration-400 ease-out lg:px-7 lg:py-6"
		>
			{title}
			{@html LinkIcon}
		</a>
	</div>
{/snippet}

<section id="hero" class={`${SECTION_DEFAULTS} gap-16 lg:pt-12 lg:flex-row lg:gap-24`}>
	<div class="flex flex-col gap-8 flex-4/7 mt-6">
		<div>
			<h1 class="text-4xl lg:text-5xl font-accent font-semibold mb-1">Alvaro R Soewardono</h1>
			<span class="text-2xl text-accent font-semibold">Fullstack Developer</span>
		</div>

		<p class="text-justify lg:pr-8">
			I'm a highly committed learner with a growing interest in the field of technology. With an
			extensive list of skills, seeking to continuously gain new experiences all over the world.
		</p>

		<enhanced:img
			class="rounded-lg w-full lg:w-6/7 mt-4 bg-slate-200"
			src="./img/hero.webp?w=320;1024;720;560"
			alt="a random photograph by me"
			draggable="false"
			fetchpriority="high"
			sizes="(min-width:1024px) 320px, (min-width:960px) 1024px, (min-width:720px) 720px, 560px"
		/>
	</div>
	<div class="flex-3/7">
		<h2 class="mb-2 text-primary/80 font-medium">Recent Projects</h2>
		<div class="grid outline outline-primary divide-y divide-primary">
			{@render project('Lucky Network', '#lucky_network')}
			{@render project('IV Extraction App', '#iv')}
			{@render project('El Pasco', '#el_pasco')}
			{@render project('21$AUSAGEZ', '#21sausagez')}
		</div>
	</div>
</section>

<ProjectSection id="lucky_network" title="Lucky Network" color="border-amber-400">
	{#snippet description()}
		<ul class="list-disc pl-6 text-justify *:mb-2">
			<li>Developed an authentication system with data protection and high performance in mind</li>
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

<ProjectSection id="iv" title="IV Extraction App" color="border-cyan-600">
	{#snippet images()}
		<enhanced:img
			class="rounded-xl w-full aspect-[5/2] object-cover bg-slate-200"
			src="./img/iv.png"
			alt="screenshot of the IV Extraction App"
			draggable="false"
			sizes="(min-width:1024px) 1090px, (min-width:960px) 1024px, (min-width:720px) 720px, 560px"
		/>
	{/snippet}
</ProjectSection>

<ProjectSection id="el_pasco" title="El Pasco" color="border-red-800">
	{#snippet images()}
		<enhanced:img
			class="rounded-xl w-full object-top object-cover bg-slate-200"
			src="./img/el_pasco.png"
			alt="screenshot of the El Pasco project"
			draggable="false"
			sizes="(min-width:1024px) 1090px, (min-width:960px) 1024px, (min-width:720px) 720px, 560px"
		/>
	{/snippet}
</ProjectSection>

<ProjectSection id="21sausagez" title="21$AUSAGEZ" color="border-emerald-600">
	{#snippet images()}
		<enhanced:img
			class="rounded-xl w-full aspect-[9/4] object-top object-cover bg-slate-200"
			src="./img/21sausagez.png"
			alt="screenshot of the 21$AUSAGEZ project"
			draggable="false"
			sizes="(min-width:1024px) 1090px, (min-width:960px) 1024px, (min-width:720px) 720px, 560px"
		/>
	{/snippet}
</ProjectSection>
