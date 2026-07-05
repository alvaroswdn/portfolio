<script lang="ts">
	import { asset } from '$app/paths';
	import DownloadIcon from '$lib/icon/download.svelte';

	import cppImage from './img/hero/cplusplus-128px.png';
	import goImage from './img/hero/go-128px.png';
	import javaImage from './img/hero/java-128px.png';
	import nodejsImage from './img/hero/nodejs-128px.png';
	import pythonImage from './img/hero/python-128px.png';
	import rosImage from './img/hero/ros-128px.png';
	import tailwindCssImage from './img/hero/tailwind-css-128px.png';
	import typescriptImage from './img/hero/typescript-128px.png';

	let humanReady = $state(false);
	let sparklesReady = $state(false);
	let backgroundReady = $state(false);

	const imgs = [
		{ src: goImage, alt: 'Go programming language' },
		{ src: javaImage, alt: 'Java programming language' },
		{ src: nodejsImage, alt: 'Node.js runtime' },
		{ src: pythonImage, alt: 'Python programming language' },
		{ src: tailwindCssImage, alt: 'Tailwind CSS framework' },
		{ src: typescriptImage, alt: 'TypeScript programming language' },
		{ src: rosImage, alt: 'ROS2 (Robot Operating System)' },
		{ src: cppImage, alt: 'C++ programming language' }
	];

	let hasMid = 0;
</script>

<section id="hero" class="grid gap-16 max-w-7xl mx-auto sm:mt-8 sm:px-4">
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
		class="relative select-none z-0 sm:rounded-sm flex items-center w-full aspect-10/5 sm:aspect-10/3 overflow-hidden bg-slate-200 **:transition-opacity **:duration-600 **:ease-in-out"
	>
		<div
			data-speed="0.96"
			class="absolute z-10 right-0 sm:right-1/64 top-1/10 sm:top-1/16 aspect-square w-1/2 sm:w-1/3 scale-120 flex items-center justify-center will-change-transform animate-[rotate_30s_linear_infinite] delay-200 {humanReady &&
			sparklesReady &&
			backgroundReady
				? 'opacity-100'
				: 'opacity-0'}"
			style="--m: {imgs.length - hasMid}"
		>
			{#each imgs as img, i (img.src)}
				<div
					class="rotating-el absolute w-1/7 aspect-square opacity-60 brightness-0 invert z-10"
					style={i - hasMid >= 0 ? `--i: ${i}` : null}
				>
					<enhanced:img
						src={img.src}
						alt={img.alt}
						draggable="false"
						class="animate-[rotate-reverse_30s_linear_infinite] will-change-transform"
					/>
				</div>
			{/each}
		</div>
		<enhanced:img
			data-speed="0.95"
			class="absolute -bottom-8 sm:-bottom-14 -right-8 sm:right-0 w-auto h-12/11 z-30 {humanReady &&
			sparklesReady
				? 'opacity-100'
				: 'opacity-0'}"
			src="./img/human.png"
			alt="me from behind"
			draggable="false"
			fetchpriority="high"
			sizes="min(360px, 40vw)"
			onload={() => (humanReady = true)}
		/>
		<enhanced:img
			data-speed="0.96"
			class="absolute -bottom-8 sm:-bottom-14 -right-8 sm:right-0 w-auto h-12/11 z-20 {humanReady &&
			sparklesReady
				? 'opacity-100'
				: 'opacity-0'}"
			src="./img/sparkles.png"
			alt="sparkles around me"
			draggable="false"
			fetchpriority="high"
			sizes="min(360px, 40vw)"
			onload={() => (sparklesReady = true)}
		/>
		<enhanced:img
			data-speed="0.97"
			class={backgroundReady ? 'opacity-100' : 'opacity-0'}
			src="./img/hero.webp"
			alt="a random photograph by me"
			draggable="false"
			fetchpriority="high"
			sizes="min(1280px, 100vw)"
			onload={() => (backgroundReady = true)}
		/>
		<enhanced:img
			data-speed="0.97"
			class="-z-10 absolute inset-0 top-1/2 -translate-y-1/2 w-full h-auto"
			src="./img/hero.webp?w=144&blur=12"
			alt="a blurred photograph by me"
			draggable="false"
			fetchpriority="high"
		/>
	</div>
</section>
