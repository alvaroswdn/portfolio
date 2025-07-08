<script lang="ts">
	import EmailIcon from '$lib/icon/Email.svelte';
	import GitHubIcon from '$lib/icon/GitHub.svelte';
	import InstagramIcon from '$lib/icon/Instagram.svelte';
	import LinkedInIcon from '$lib/icon/LinkedIn.svelte';
	import '@fontsource-variable/baskervville';
	import accentWoff2 from '@fontsource-variable/baskervville/files/baskervville-latin-wght-normal.woff2?url';
	import '@fontsource-variable/ibm-plex-sans';
	import primaryWoff2 from '@fontsource-variable/ibm-plex-sans/files/ibm-plex-sans-latin-wght-normal.woff2?url';
	import type { Component } from 'svelte';
	import '../app.css';

	const { children } = $props();
</script>

{#snippet contact(label: string, url: string, Icon: Component)}
	<a
		class="hover:text-accent transition-colors duration-400 ease-out"
		href={url}
		target="_blank"
		aria-label={label}
	>
		<Icon />
	</a>
{/snippet}

<svelte:head>
	<link rel="preload" as="font" type="font/woff2" href={primaryWoff2} crossorigin="anonymous" />
	<link rel="preload" as="font" type="font/woff2" href={accentWoff2} crossorigin="anonymous" />
</svelte:head>

<div class="bg-background grid text-primary font-primary text-xl h-full min-h-screen">
	<div class="h-full max-w-6xl m-auto px-8">
		<header class="flex flex-col gap-4 items-center justify-between py-7 lg:flex-row">
			<a href="/" class="flex items-center font-accent text-4xl font-semibold">
				alvaro<span class="text-accent">.</span>
			</a>
			<div class="flex gap-8 sm:gap-13">
				{@render contact('instagram', 'https://www.instagram.com/alvaroswdn', InstagramIcon)}
				{@render contact('github', 'https://github.com/alvaroswdn', GitHubIcon)}
				{@render contact('linkedin', 'https://www.linkedin.com/in/alvaro-soewardono', LinkedInIcon)}
				{@render contact(
					'email',
					'mailto:Alvaro%20Raditya%20Soewardono<hello@alvaroswdn.my.id>',
					EmailIcon
				)}
			</div>
		</header>

		<main class="px-2 pb-32 lg:px-6">
			{@render children()}
		</main>
	</div>
</div>
