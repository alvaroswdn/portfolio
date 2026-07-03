<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id: string;
		title: string | Snippet;
		color: string;
		description?: Snippet;
		images: Snippet;
	};

	let { id, title, color, description, images }: Props = $props();
</script>

<div {id} class="max-w-6xl px-8 m-auto">
	<h1 class="relative w-fit text-2xl lg:text-4xl font-semibold mb-6">
		{#if typeof title === 'string'}
			{title}
		{:else}
			{@render title()}
		{/if}
		<hr class={`absolute -bottom-px left-0 w-full border-2 ${color} -z-10`} />
	</h1>
	<div class="flex flex-col gap-8 lg:gap-10">
		{@render description?.()}
		<div class="flex flex-col gap-6 lg:min-h-78 lg:flex-row">
			{@render images()}
		</div>
	</div>
</div>
