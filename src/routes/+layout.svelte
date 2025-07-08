<script lang="ts">
	import EmailIcon from '$lib/icon/Email.svelte';
	import GitHubIcon from '$lib/icon/GitHub.svelte';
	import InstagramIcon from '$lib/icon/Instagram.svelte';
	import LinkedInIcon from '$lib/icon/LinkedIn.svelte';
	import '@fontsource-variable/baskervville';
	import '@fontsource-variable/ibm-plex-sans';
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

<div class="bg-background grid text-primary font-primary text-xl h-full min-h-screen">
	<div class="h-full max-w-6xl m-auto">
		<header class="flex items-center justify-between py-7">
			<h1 class="flex items-center font-accent text-4xl font-semibold">
				alvaro<span class="text-accent">.</span>
			</h1>
			<div class="flex gap-13">
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

		<main class="px-6">
			{@render children()}
		</main>
	</div>
</div>
