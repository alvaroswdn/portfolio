<script lang="ts">
	import LinkIcon from '$lib/icon/Link.svelte';
</script>

<svelte:head>
	<title>Home - alvaroswdn</title>
	<link rel="preload" as="image" href="/icons/logo.webp" />
</svelte:head>

{#snippet project(title: string, url: string)}
	<a
		href={url}
		target="_blank"
		class="group flex items-center justify-between px-5 py-4 hover:text-accent hover:scale-[102%] transition-all duration-400 ease-out lg:px-7 lg:py-6"
	>
		{title}
		<LinkIcon />
	</a>
{/snippet}

<div class="flex flex-col gap-16 lg:mt-20 lg:flex-row lg:gap-36">
	<section class="flex flex-col gap-8 flex-2/5 mt-6">
		<div>
			<h1 class="text-4xl font-accent font-semibold">Alvaro R Soewardono</h1>
			<span class="text-xl text-accent font-semibold">Fullstack Developer</span>
		</div>

		<p class="text-justify lg:pr-8">
			I'm a highly committed learner with a growing interest in the field of technology. With an
			extensive list of skills, seeking to continuously gain new experiences all over the world.
		</p>

		<enhanced:img
			class="rounded-lg w-full lg:w-6/7 mt-4 bg-slate-200"
			src="./scene.webp?w=320;1024;720;560"
			alt="scene"
			draggable="false"
			fetchpriority="high"
			sizes="(min-width:1024px) 320px, (min-width:960px) 1024px, (min-width:720px) 720px, 560px"
		/>
	</section>
	<section class="flex-3/5">
		<h2 class="mb-2 text-primary/80 font-medium">Recent Projects</h2>
		<div class="grid outline">
			{@render project('Lucky Network', 'https://luckynetwork.net')}
			<hr class="h-px" />
			{@render project('IV-Extraction-App', 'https://github.com/alvaroswdn/IV-Extraction-App')}
			<hr class="h-px" />
			{@render project('El Pasco', 'https://el-pasco.vercel.app')}
			<hr class="h-px" />
			{@render project('21$AUSAGEZ', 'https://crypto-alvaroswdn.vercel.app')}
		</div>
	</section>
</div>
