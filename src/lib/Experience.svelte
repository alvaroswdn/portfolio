<script lang="ts">
	import GridIcon from '#lib/icon/grid.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		id: string;
		org: string | Snippet;
		title: string;
		timespan: string;
		color: string;
		description?: Snippet;
		images: Snippet;
	};

	let { id, org, title, timespan, color, description, images }: Props = $props();
</script>

<div {id}>
	<div class="max-w-6xl m-auto px-6 mb-8">
		<div class="flex justify-between items-center mb-6 font-semibold">
			<h2 class="relative w-fit text-3xl lg:text-4xl">
				{#if typeof org === 'string'}
					{org}
				{:else}
					{@render org()}
				{/if}
				<hr class={`absolute -bottom-px left-0 w-full border-2 ${color} -z-10`} />
			</h2>
			<div class="flex flex-col items-end text-right leading-none">
				<h3>{title}</h3>
				<h4 class="font-medium">{timespan}</h4>
			</div>
		</div>
		{@render description?.()}
	</div>
	<div class="w-screen overflow-x-auto px-2 lg:px-[calc((100%-72rem)/2)] scrollbar-hidden">
		<div
			class="flex lg:gap-4 px-2 gap-2 lg:px-8 [&_picture]:w-2xs sm:[&_picture]:w-xl **:rounded-md [&_picture]:bg-neutral-500/5 [&_picture]:border [&_picture]:border-primary/20 [&_picture]:hidden [&_picture]:nth-[1]:block [&_picture]:nth-[2]:block"
		>
			{@render images()}
			<button
				class="flex items-center justify-center bg-neutral-500/5 transition-colors hover:bg-neutral-500/7 border border-primary/20 w-56 cursor-pointer"
			>
				<GridIcon />
			</button>
		</div>
	</div>
</div>
