<script lang="ts">
	import { resolve } from '$app/paths';
	import EmailIcon from '$lib/icon/email.svelte';
	import GitHubIcon from '$lib/icon/github.svelte';
	import InstagramIcon from '$lib/icon/instagram.svelte';
	import LinkedInIcon from '$lib/icon/linkedin.svelte';
	import type { Component } from 'svelte';

	let visible = $state(true);
	let lastScrollY = $state(0);
</script>

{#snippet contact(label: string, url: string, Icon: Component)}
	<a
		class="hover:text-accent transition-colors duration-400 ease-out"
		href={url}
		rel="external"
		target="_blank"
		aria-label={label}
	>
		<Icon />
	</a>
{/snippet}

<header
	class="sticky top-0 mt-4 sm:mt-2 px-8 pt-2 pb-3 sm:pt-4 sm:pb-5 bg-background z-10 transition-all duration-300 ease-in-out border-b border-primary/0 {!visible &&
		'-translate-y-full'} {lastScrollY !== 0 && 'border-primary/20!'}"
>
	<div class="flex flex-col gap-4 items-center justify-between max-w-7xl m-auto sm:flex-row">
		<a href={resolve('/')} class="flex items-center font-accent text-4xl font-semibold">
			alvaro<span class="text-accent">.</span>
		</a>
		<div class="hidden gap-13 sm:flex">
			{@render contact('instagram', 'https://www.instagram.com/alvaroswdn', InstagramIcon)}
			{@render contact('github', 'https://github.com/alvaroswdn', GitHubIcon)}
			{@render contact('linkedin', 'https://www.linkedin.com/in/alvaro-soewardono', LinkedInIcon)}
			{@render contact(
				'email',
				'mailto:Alvaro%20Raditya%20Soewardono<hello@alvaroswdn.my.id>',
				EmailIcon
			)}
		</div>
	</div>
</header>

<div
	class="fixed w-full bottom-0 flex items-center justify-around px-8 pt-4 pb-5 bg-background z-10 transition-all duration-300 ease-in-out sm:hidden border-t border border-primary/20 {visible &&
		'translate-y-full'}"
>
	{@render contact('instagram', 'https://www.instagram.com/alvaroswdn', InstagramIcon)}
	{@render contact('github', 'https://github.com/alvaroswdn', GitHubIcon)}
	{@render contact('linkedin', 'https://www.linkedin.com/in/alvaro-soewardono', LinkedInIcon)}
	{@render contact(
		'email',
		'mailto:Alvaro%20Raditya%20Soewardono<hello@alvaroswdn.my.id>',
		EmailIcon
	)}
</div>

<svelte:window
	on:scroll={() => {
		const scrollY = window.scrollY;

		if (scrollY > lastScrollY) {
			// scrolling down
			visible = false;
		} else {
			visible = true;
		}

		lastScrollY = scrollY;
	}}
/>
