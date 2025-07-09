<script lang="ts">
	import EmailIcon from '$lib/icon/Email.svelte';
	import GitHubIcon from '$lib/icon/GitHub.svelte';
	import InstagramIcon from '$lib/icon/Instagram.svelte';
	import LinkedInIcon from '$lib/icon/LinkedIn.svelte';
	import type { Component } from 'svelte';
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

<header class="sticky top-0 mt-2 px-8 pt-5 pb-6 bg-background z-10">
	<div class="flex flex-col gap-4 items-center justify-between max-w-7xl m-auto lg:flex-row">
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
	</div>
</header>
