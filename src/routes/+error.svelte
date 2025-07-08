<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Error - alvaroswdn</title>
	<meta
		name="description"
		content="Please go back to the home page or report this issue through one of my socials."
	/>
	<link rel="preload" as="image" href="/icons/logo.webp" />
</svelte:head>

<section class="hero">
	<div class="hero-container">
		<h1 class="hero-title">
			<span>{page.error?.message}</span><br />
			Please go back to the home page or report this issue through one of my socials.
		</h1>
	</div>
	<div class="hero-container">
		<img class="hero-image" src="/icons/logo.webp" alt="logo" width="288" height="288" />
	</div>
</section>

<style>
	.hero {
		max-width: 60rem;
		position: relative;
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		gap: 2rem;
		min-height: 28rem;
		height: 100%;
	}

	.hero > * {
		flex: 1;
	}

	.hero-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.hero-title {
		font-size: var(--fs-700);
	}

	.hero-title > span {
		color: var(--clr-accent-400);
	}

	.hero-image {
		border-radius: 50%;
		width: 80%;
		height: auto;
		max-width: 18rem;
	}

	@media (min-width: 50em) {
		.hero {
			flex-direction: row;
		}
	}
</style>
