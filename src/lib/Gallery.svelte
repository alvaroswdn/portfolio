<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { galleryState, hideGallery } from './GalleryState.svelte';
</script>

{#if galleryState.show}
	<div
		class="fixed inset-0 z-100 flex items-center justify-center"
		transition:fade={{ duration: 400, easing: cubicOut }}
	>
		<button
			onclick={hideGallery}
			class="absolute inset-0 -z-10 pointer-events-auto bg-neutral-950/10"
			aria-label="Close gallery"
		>
		</button>
		<div
			id="gallery-modal"
			class="w-screen h-screen flex justify-center overflow-y-auto px-4 py-64"
			role="presentation"
			onclick={hideGallery}
			data-lenis-prevent
		>
			<div
				id="gallery-content"
				class="bg-background rounded-md pt-4 lg:pt-8 p-6 lg:p-10 w-5xl h-fit pointer-events-auto"
			>
				<h2 class="text-2xl lg:text-3xl text-center font-semibold mb-6">{galleryState.title}</h2>
				<div
					class="grid grid-cols-1 justify-center lg:grid-cols-4 gap-4 *:border *:border-primary/20 *:rounded-sm *:bg-neutral-500/5 not-lg:*:col-span-1!"
				>
					{#if galleryState.images}
						{@render galleryState.images()}
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}
