<script lang="ts">
	import DownloadIcon from '#lib/icon/download.svelte';
	import { asset } from '$app/paths';

	let humanReady = $state(false);
	let sparklesReady = $state(false);
	let backgroundReady = $state(false);
</script>

<section
	id="hero"
	class="flex flex-col-reverse lg:flex-col gap-2 lg:gap-16 max-w-7xl mx-auto sm:mt-8 sm:px-4"
>
	<div class="w-full flex flex-col gap-12 justify-between max-w-6xl mx-auto px-8 lg:flex-row">
		<div class="max-w-2xl">
			<h1 class="text-4xl lg:text-5xl font-accent font-semibold mt-6 mb-1">
				Alvaro Raditya Soewardono
			</h1>
			<span class="text-2xl text-accent font-semibold">Fullstack Developer</span>

			<p class="mt-6 lg:pr-8">
				I'm a highly committed learner with a growing interest in the field of technology. With an
				extensive list of skills, seeking to continuously gain new experiences all over the world.
			</p>
		</div>
		<div class="flex items-end px-4 lg:px-0">
			<a
				href={asset('cv.pdf')}
				download
				class="flex w-full items-center justify-between gap-4 px-5 py-4 bg-accent text-white hover:scale-[102%] transition-all duration-400 ease-out lg:px-6 lg:py-5"
			>
				Download CV
				<DownloadIcon />
			</a>
		</div>
	</div>

	<div
		class="relative select-none z-0 sm:rounded-sm flex items-center w-full aspect-10/5 sm:aspect-10/3 overflow-hidden bg-neutral-500/5 **:transition-opacity **:duration-600 **:ease-in-out"
	>
		<div
			data-scroll
			data-scroll-speed="-0.04"
			id="skills"
			class="absolute z-10 right-0 sm:right-1/64 top-1/10 sm:top-1/16 aspect-square w-1/2 sm:w-1/3 scale-120 flex items-center justify-center will-change-transform animate-[rotate_30s_linear_infinite] delay-200 {humanReady &&
			sparklesReady &&
			backgroundReady
				? 'opacity-100'
				: 'opacity-0'}"
			style="--m: 8"
		>
			<div
				class="rotating-el absolute w-1/7 aspect-square opacity-60 brightness-0 invert z-20"
				style="--i: 0"
			>
				<enhanced:img
					src="../img/hero/go-128px.png"
					alt="Go programming language"
					draggable="false"
					class="animate-[rotate-reverse_30s_linear_infinite] will-change-transform"
				></enhanced:img>
			</div>
			<div
				class="rotating-el absolute w-1/7 aspect-square opacity-60 brightness-0 invert z-20"
				style="--i: 1"
			>
				<enhanced:img
					src="../img/hero/java-128px.png"
					alt="Java programming language"
					draggable="false"
					class="animate-[rotate-reverse_30s_linear_infinite] will-change-transform"
				></enhanced:img>
			</div>
			<div
				class="rotating-el absolute w-1/7 aspect-square opacity-60 brightness-0 invert z-20"
				style="--i: 2"
			>
				<enhanced:img
					src="../img/hero/nodejs-128px.png"
					alt="Node.js runtime"
					draggable="false"
					class="animate-[rotate-reverse_30s_linear_infinite] will-change-transform"
				></enhanced:img>
			</div>
			<div
				class="rotating-el absolute w-1/7 aspect-square opacity-60 brightness-0 invert z-20"
				style="--i: 3"
			>
				<enhanced:img
					src="../img/hero/python-128px.png"
					alt="Python programming language"
					draggable="false"
					class="animate-[rotate-reverse_30s_linear_infinite] will-change-transform"
				></enhanced:img>
			</div>
			<div
				class="rotating-el absolute w-1/7 aspect-square opacity-60 brightness-0 invert z-20"
				style="--i: 4"
			>
				<enhanced:img
					src="../img/hero/tailwind-css-128px.png"
					alt="Tailwind CSS framework"
					draggable="false"
					class="animate-[rotate-reverse_30s_linear_infinite] will-change-transform"
				></enhanced:img>
			</div>
			<div
				class="rotating-el absolute w-1/7 aspect-square opacity-60 brightness-0 invert z-20"
				style="--i: 5"
			>
				<enhanced:img
					src="../img/hero/typescript-128px.png"
					alt="TypeScript programming language"
					draggable="false"
					class="animate-[rotate-reverse_30s_linear_infinite] will-change-transform"
				></enhanced:img>
			</div>
			<div
				class="rotating-el absolute w-1/7 aspect-square opacity-60 brightness-0 invert z-20"
				style="--i: 6"
			>
				<enhanced:img
					src="../img/hero/ros-128px.png"
					alt="ROS2 (Robot Operating System)"
					draggable="false"
					class="animate-[rotate-reverse_30s_linear_infinite] will-change-transform"
				></enhanced:img>
			</div>
			<div
				class="rotating-el absolute w-1/7 aspect-square opacity-60 brightness-0 invert z-20"
				style="--i: 7"
			>
				<enhanced:img
					src="../img/hero/cplusplus-128px.png"
					alt="C++ programming language"
					draggable="false"
					class="animate-[rotate-reverse_30s_linear_infinite] will-change-transform"
				></enhanced:img>
			</div>
		</div>
		<enhanced:img
			data-scroll
			data-scroll-speed="-0.05"
			id="human"
			class="absolute -bottom-8 sm:-bottom-14 -right-8 sm:right-0 w-auto h-12/11 z-40 {humanReady &&
			sparklesReady
				? 'opacity-100'
				: 'opacity-0'}"
			src="../img/human.png"
			alt="me from behind"
			draggable="false"
			fetchpriority="high"
			sizes="min(360px, 40vw)"
			onload={() => (humanReady = true)}
		></enhanced:img>
		<enhanced:img
			data-scroll
			data-scroll-speed="-0.04"
			id="sparkles"
			class="absolute -bottom-8 sm:-bottom-14 -right-8 sm:right-0 w-auto h-12/11 z-30 {humanReady &&
			sparklesReady
				? 'opacity-100'
				: 'opacity-0'}"
			src="../img/sparkles.png"
			alt="sparkles around me"
			draggable="false"
			fetchpriority="high"
			sizes="min(360px, 40vw)"
			onload={() => (sparklesReady = true)}
		></enhanced:img>
		<enhanced:img
			data-scroll
			data-scroll-speed="-0.03"
			src="../img/hero.webp"
			alt="a random photograph by me"
			draggable="false"
			fetchpriority="high"
			sizes="min(1280px, 100vw)"
			onload={() => (backgroundReady = true)}
		></enhanced:img>
		<enhanced:img
			data-scroll
			data-scroll-speed="-0.03"
			id="blur"
			class="z-10 absolute inset-0 top-1/2 -translate-y-1/2 w-full h-auto min-h-full {backgroundReady
				? 'opacity-0'
				: 'opacity-100'}"
			src="../img/hero_blur.jpeg"
			alt="a blurred photograph by me"
			draggable="false"
			fetchpriority="high"
		></enhanced:img>
	</div>
</section>

<noscript>
	<style>
		#human {
			opacity: 1 !important;
		}

		#sparkles {
			opacity: 1 !important;
		}

		#skills {
			opacity: 1 !important;
		}

		#blur {
			opacity: 0 !important;
		}
	</style>
</noscript>
