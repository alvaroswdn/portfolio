<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		name: string;
		date: string;
		description: Snippet;
		image: Snippet;
	};

	let { name, date, description, image }: Props = $props();
</script>

<div
	class="relative overflow-clip group px-3 py-4 flex flex-col justify-center h-96 rounded-xs bg-neutral-800/20 border border-primary/20 w-56 cursor-pointer"
>
	<div
		class="absolute inset-0 translate-y-full transition-transform duration-700 group-hover:translate-y-0"
	>
		<h2>{name}</h2>
		<h3 class="text-[0.9rem] mb-2">{date}</h3>
		<p class="text-[0.95rem] text-justify">{@render description()}</p>
	</div>
	<div class="*:absolute *:inset-0 *:w-full *:h-full *:object-cover -z-10">{@render image()}</div>
</div>
