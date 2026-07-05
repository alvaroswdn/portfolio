<script lang="ts">
	import Project from '$lib/Project.svelte';
	import LinkIcon from '$lib/icon/link.svelte';
</script>

<section id="projects" class="mt-8 lg:mt-14">
	<h1 class="mx-auto w-fit font-accent font-semibold text-4xl lg:text-5xl mb-12 lg:mb-16">
		Recent Projects
	</h1>
	<div class="grid gap-16 lg:gap-36">
		<Project id="aerobase" color="border-cyan-600">
			{#snippet title()}
				<a class="flex items-center gap-1.5" href="https://aerobase.id" target="_blank">
					AeroBASE <LinkIcon />
				</a>
			{/snippet}

			{#snippet description()}
				<ul class="list-disc pl-6 text-justify *:mb-2">
					<li>Developed a drone control system utilizing PID for stabilization and navigation</li>
					<li>Developed team website with Astro for team information and competition updates</li>
					<li>Created software documentation and tutorials for future team members</li>
				</ul>
			{/snippet}

			{#snippet images()}
				<enhanced:img
					src="./img/aerobase.png"
					alt="screenshot of the AeroBASE website landing page"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
				<enhanced:img
					src="./img/aerobase2.png"
					alt="screenshot of AeroBASE website about page"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
				<enhanced:img
					src="./img/aerobase3.png"
					alt="screenshot of the AeroBASE website news page"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
		</Project>

		<Project id="lucky_network" color="border-amber-400">
			{#snippet title()}
				<a class="flex items-center gap-1.5" href="https://www.luckynetwork.net/" target="_blank">
					Lucky Network <LinkIcon />
				</a>
			{/snippet}

			{#snippet description()}
				<ul class="list-disc pl-6 text-justify *:mb-2">
					<li>
						Developed an authentication system with data protection and high performance in mind
					</li>
					<li>
						Improved infrastructure security to prevent access to internal systems from unauthorized
						parties
					</li>
					<li>
						Developed a website to receive donations from players, along with a payment system to go
						with it
					</li>
				</ul>
			{/snippet}

			{#snippet images()}
				<enhanced:img
					src="./img/lucky_appeals.png"
					alt="screenshot of the Lucky Network Appeals page"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
				<enhanced:img
					src="./img/lucky_store.png"
					alt="screenshot of the Lucky Network Store page"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
		</Project>
	</div>
</section>
