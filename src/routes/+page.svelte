<script lang="ts">
	import LinkIcon from '$lib/icon/Link.svelte';
	const SECTION_DEFAULTS = 'max-w-6xl px-8 m-auto flex flex-col gap-8 not-first:pt-18';
</script>

<svelte:head>
	<title>Home - alvaroswdn</title>
	<link rel="preload" as="image" href="/icons/logo.webp" />
</svelte:head>

{#snippet project(title: string, url: string)}
	<div>
		<a
			href={url}
			class="group flex items-center justify-between px-5 py-4 hover:text-accent hover:scale-[102%] transition-all duration-400 ease-out lg:px-7 lg:py-6"
		>
			{title}
			<LinkIcon />
		</a>
	</div>
{/snippet}

<section id="hero" class={`${SECTION_DEFAULTS} gap-16 lg:pt-12 lg:flex-row lg:gap-24`}>
	<div class="flex flex-col gap-8 flex-4/7 mt-6">
		<div>
			<h1 class="text-5xl font-accent font-semibold mb-1">Alvaro R Soewardono</h1>
			<span class="text-2xl text-accent font-semibold">Fullstack Developer</span>
		</div>

		<p class="text-justify lg:pr-8">
			I'm a highly committed learner with a growing interest in the field of technology. With an
			extensive list of skills, seeking to continuously gain new experiences all over the world.
		</p>

		<enhanced:img
			class="rounded-lg w-full lg:w-6/7 mt-4 bg-slate-200"
			src="./hero.webp?w=320;1024;720;560"
			alt="scene"
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

<section id="lucky_network" class={`${SECTION_DEFAULTS} lg:pt-36 lg:gap-8`}>
	<div>
		<h1 class="relative w-fit text-4xl font-semibold mb-5">
			Lucky Network <hr class="absolute -bottom-px left-0 w-full border-2 border-amber-400 -z-10" />
		</h1>
		<ul class="list-disc pl-6">
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
	</div>

	<div class="flex flex-col gap-6 lg:flex-row">
		<enhanced:img
			class="rounded-lg w-full bg-slate-200"
			src="./lucky_appeals.png"
			alt="scene"
			draggable="false"
			fetchpriority="high"
		/>
		<enhanced:img
			class="rounded-lg w-full bg-slate-200"
			src="./lucky_store.png"
			alt="scene"
			draggable="false"
			fetchpriority="high"
		/>
	</div>
</section>

<section id="iv" class={`${SECTION_DEFAULTS} lg:pt-36 lg:gap-8`}>
	<div>
		<h1 class="relative w-fit text-4xl font-semibold mb-5">
			IV Extraction App <hr
				class="absolute -bottom-px left-0 w-full border-2 border-cyan-600 -z-10"
			/>
		</h1>
		<ul class="list-disc pl-6">
			<!-- <li>Developed an authentication system with data protection and high performance in mind</li>
			<li>
				Improved infrastructure security to prevent access to internal systems from unauthorized
				parties
			</li>
			<li>
				Developed a website to receive donations from players, along with a payment system to go
				with it
			</li> -->
		</ul>
	</div>

	<div class="flex gap-6">
		<enhanced:img
			class="rounded-lg w-full aspect-[8/3] object-top object-cover bg-slate-200"
			src="./iv.png"
			alt="scene"
			draggable="false"
			fetchpriority="high"
		/>
	</div>
</section>

<section id="el_pasco" class={`${SECTION_DEFAULTS} lg:pt-36 lg:gap-8`}>
	<div>
		<h1 class="relative w-fit text-4xl font-semibold mb-5">
			El Pasco <hr class="absolute -bottom-px left-0 w-full border-2 border-red-800 -z-10" />
		</h1>
		<ul class="list-disc pl-6">
			<!-- <li>Developed an authentication system with data protection and high performance in mind</li>
			<li>
				Improved infrastructure security to prevent access to internal systems from unauthorized
				parties
			</li>
			<li>
				Developed a website to receive donations from players, along with a payment system to go
				with it
			</li>
		</ul> -->
		</ul>
	</div>

	<div class="flex gap-6">
		<enhanced:img
			class="rounded-lg w-full aspect-[8/3] object-top object-cover bg-slate-200"
			src="./el_pasco.png"
			alt="scene"
			draggable="false"
			fetchpriority="high"
		/>
	</div>
</section>

<section id="21sausagez" class={`${SECTION_DEFAULTS} lg:pt-36 lg:gap-8`}>
	<div>
		<h1 class="relative w-fit text-4xl font-semibold mb-5">
			21$AUSAGEZ <hr class="absolute -bottom-px left-0 w-full border-2 border-emerald-600 -z-10" />
		</h1>
		<ul class="list-disc pl-6">
			<!-- <li>Developed an authentication system with data protection and high performance in mind</li>
			<li>
				Improved infrastructure security to prevent access to internal systems from unauthorized
				parties
			</li>
			<li>
				Developed a website to receive donations from players, along with a payment system to go
				with it
			</li>
		</ul> -->
		</ul>
	</div>

	<div class="flex gap-6">
		<enhanced:img
			class="rounded-lg w-full aspect-[8/3] object-top object-cover bg-slate-200"
			src="./21sausagez.png"
			alt="scene"
			draggable="false"
			fetchpriority="high"
		/>
	</div>
</section>
