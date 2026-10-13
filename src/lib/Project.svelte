<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		name: string;
		description?: Snippet;
		image: Snippet;
	};

	let { name, description, image }: Props = $props();
</script>

<div
	class="relative group overflow-clip px-4 pt-6 pb-4 flex flex-col-reverse justify-between h-96 rounded-sm border border-primary/20 w-56 text-background"
>
	<h2>{name}</h2>
	{#if description}
		<p class="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
			{@render description()}
		</p>
	{/if}
	<div class="absolute inset-0 *:absolute *:inset-0 *:w-full *:h-full">
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
