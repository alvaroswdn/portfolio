<script lang="ts">
	import Project from './Project.svelte';
	import aerobase3Img from './img/aerobase3.png';
</script>

<section id="projects" class="mt-8 lg:mt-14">
	<h1 class="mx-auto w-fit font-accent font-semibold text-4xl lg:text-5xl mb-12 lg:mb-16">
		Projects
	</h1>
	<div class="max-w-6xl m-auto px-6 mb-8 flex gap-4">
		<Project name="KRTI 2026" date="22 September 2026">
			{#snippet description()}
				<p>
					An autonomous drone competition organized by the Indonesian Ministry of Research and
					Technology, where teams compete to develop drones capable of performing various tasks
					autonomously.
				</p>
			{/snippet}
			{#snippet image()}
				<enhanced:img
					src={aerobase3Img}
					alt="screenshot of AeroBASE website news page"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
		</Project>
		<Project name="TerraTray" date="22 September 2026">
			{#snippet description()}
				<p>
					An autonomous drone competition organized by the Indonesian Ministry of Research and
					Technology, where teams compete to develop drones capable of performing various tasks
					autonomously.
				</p>
			{/snippet}
			{#snippet image()}
				<enhanced:img
					src={aerobase3Img}
					alt="screenshot of AeroBASE website news page"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
		</Project>
		<Project name="Insomnia" date="22 September 2026">
			{#snippet description()}
				<p>
					An autonomous drone competition organized by the Indonesian Ministry of Research and
					Technology, where teams compete to develop drones capable of performing various tasks
					autonomously.
				</p>
			{/snippet}
			{#snippet image()}
				<enhanced:img
					src={aerobase3Img}
					alt="screenshot of AeroBASE website news page"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
		</Project>
		<Project name="Mith" date="22 September 2026">
			{#snippet description()}
				<p>
					An autonomous drone competition organized by the Indonesian Ministry of Research and
					Technology, where teams compete to develop drones capable of performing various tasks
					autonomously.
				</p>
			{/snippet}
			{#snippet image()}
				<enhanced:img
					src={aerobase3Img}
					alt="screenshot of AeroBASE website news page"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
		</Project>
		<Project name="Appeals" date="22 September 2026">
			{#snippet description()}
				<p>
					An autonomous drone competition organized by the Indonesian Ministry of Research and
					Technology, where teams compete to develop drones capable of performing various tasks
					autonomously.
				</p>
			{/snippet}
			{#snippet image()}
				<enhanced:img
					src={aerobase3Img}
					alt="screenshot of AeroBASE website news page"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
		</Project>
	</div>
</section>
