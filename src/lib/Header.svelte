<script lang="ts">
	import EmailIcon from '$lib/icon/email.svelte';
	import GitHubIcon from '$lib/icon/github.svelte';
	import InstagramIcon from '$lib/icon/instagram.svelte';
	import LinkedInIcon from '$lib/icon/linkedin.svelte';
	import type { Component } from 'svelte';

	import { gsap } from 'gsap';
	import { ScrollSmoother } from 'gsap/ScrollSmoother';

	let lastScrollY = 0;

	$effect(() => {
		const header = document.getElementById('header')!;
		const socialHeader = document.getElementById('social-header')!;

		ScrollSmoother.create({
			smooth: 1.6,
			effects: true,
			ignoreMobileResize: true,
			onUpdate: (self) => {
				const progress = self.progress * window.innerHeight;
				if (progress <= lastScrollY || progress < 100) {
					header.classList.remove('-translate-y-full');
					socialHeader.classList.add('translate-y-full');
				} else {
					header.classList.add('-translate-y-full');
					socialHeader.classList.remove('translate-y-full');
				}

				if (progress <= 10) {
					header.classList.add('sm:border-primary/0!');
				} else {
					header.classList.remove('sm:border-primary/0!');
				}

				lastScrollY = progress;
			}
		});
	});
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
	id="header"
	class="fixed top-0 w-full px-8 pt-2 pb-3 sm:pt-4 sm:pb-5 bg-background z-10 transition-all duration-400 ease-in-out border-b border-primary/20 sm:border-primary/0!"
>
	<div class="flex flex-col gap-4 items-center justify-between max-w-7xl m-auto sm:flex-row">
		<button
			onclick={() => gsap.to(window, { duration: 0.8, scrollTo: 0 })}
			class="flex items-center font-accent text-4xl font-semibold cursor-pointer"
		>
			alvaro<span class="text-accent">.</span>
		</button>
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
	id="social-header"
	class="fixed w-full bottom-0 flex items-center justify-around px-8 pt-4 pb-5 bg-background z-10 transition-all duration-300 ease-in-out sm:hidden border-t border border-primary/20 translate-y-full"
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
