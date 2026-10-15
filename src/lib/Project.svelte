<script lang="ts">
	import GridIcon from '#lib/icon/grid.svelte';
	import type { Snippet } from 'svelte';
	import { setGallery } from './GalleryState.svelte';

	type Props = {
		name: string;
		description?: Snippet;
		thumb: Snippet;
		images?: Snippet;
	};

	let { name, description, thumb: image, images }: Props = $props();
</script>

<div
	class="relative group overflow-clip px-2.5 lg:px-4 pt-3 lg:pt-6 pb-2 lg:pb-4 flex flex-col-reverse justify-between h-72 lg:h-104 rounded-sm border border-primary/20 w-full text-background"
>
	<div class="flex items-center justify-between">
		<h2 class="text-[1rem]">{name}</h2>
		{#if images}
			<button
				onclick={() => setGallery(`${name} Project Gallery`, images)}
				aria-label="Open gallery"
				class="cursor-pointer"><GridIcon class="h-4 w-4 lg:h-5 lg:w-5" /></button
			>
		{/if}
	</div>
	{#if description}
		<p class="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
			{@render description()}
		</p>
	{/if}
	<div class="absolute inset-0 -z-10 *:absolute *:inset-0 *:w-full *:h-full">
		<div
			class="-z-10 bg-ease-to-b from-primary/80 to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 {!description &&
				'opacity-0!'}"
		></div>
		<div class="-z-10 bg-ease-to-t from-primary/70 to-primary/0"></div>
		<div
			class="-z-20 flex items-center justify-center **:h-full **:object-cover **:scale-120 **:group-hover:scale-116 **:transition-transform **:duration-800 **:ease-out"
		>
			{@render image()}
		</div>
		<div class="-z-30 bg-neutral-500/5"></div>
	</div>
</div>
