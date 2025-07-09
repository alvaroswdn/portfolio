<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id: string;
		title: string;
		color: string;
		description?: Snippet;
		images: Snippet;
	};

	let { id, title, color, description, images }: Props = $props();
</script>

<section {id} class="max-w-6xl px-8 pt-16 m-auto lg:pt-36">
	<h1 class="relative w-fit text-4xl font-semibold mb-6">
		{title}
		<hr class={`absolute -bottom-px left-0 w-full border-2 ${color} -z-10`} />
	</h1>
	<div class="flex flex-col gap-8 lg:gap-10">
		{@render description?.()}
		<div class="flex flex-col gap-6 lg:min-h-78 lg:flex-row">
			{@render images()}
		</div>
	</div>
</section>
