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

<div {id}>
	<div class="max-w-6xl m-auto px-6 mb-8">
		<h1 class="relative w-fit text-2xl lg:text-4xl font-semibold mb-6">
			{#if typeof title === 'string'}
				{title}
			{:else}
				{@render title()}
			{/if}
			<hr class={`absolute -bottom-px left-0 w-full border-2 ${color} -z-10`} />
		</h1>
		{@render description?.()}
	</div>
	<div class="w-screen overflow-x-auto px-2 lg:px-[calc((100%-72rem)/2)] scrollbar-hidden">
		<div
			class="flex w-fit lg:gap-6 px-2 gap-2 lg:px-8 [&_picture]:w-2xs sm:[&_picture]:w-lg **:rounded-sm [&_picture]:bg-slate-200 [&_picture]:border [&_picture]:border-primary/20"
		>
			{@render images()}
		</div>
	</div>
</div>
