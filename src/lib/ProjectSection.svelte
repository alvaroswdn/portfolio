<script lang="ts">
	import appealsImg from '#img/projects/appeals.png?enhanced';
	import insomniaImg from '#img/projects/insomnia.png?enhanced';
	import krtiImg from '#img/projects/krti.jpg?enhanced';
	import mithImg from '#img/projects/mith.png?enhanced';
	import terraTrayImg from '#img/projects/terratray.png?enhanced';
	import Project from '#lib/Project.svelte';
</script>

<section id="projects" class="mt-8 lg:mt-14">
	<h1 class="mx-auto w-fit font-accent font-semibold text-4xl lg:text-5xl mb-12 lg:mb-16">
		Recent Projects
	</h1>
	<div class="max-w-6xl m-auto px-6 mb-8 flex gap-4">
		<Project name="KRTI 2026">
			{#snippet description()}
				Building a hexarotor with autonomous navigation, leveraging ROS2 and MAVSDK for offboard
				control. <br /><br />Implementing computer vision techniques to navigate the Kontes Robot
				Terbang Indonesia 2026 track.
			{/snippet}
			{#snippet image()}
				<enhanced:img
					src={krtiImg}
					alt="screenshot of KRTI 2026 project"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
		</Project>
		<Project name="TerraTray">
			{#snippet description()}
				A web app-connected gantry system for plant seeding, designed to automate the planting
				process and improve efficiency in agricultural operations. <br /><br />Using control systems
				such as PID to achieve precise and smooth movement of the gantry system.
			{/snippet}
			{#snippet image()}
				<enhanced:img
					src={terraTrayImg}
					alt="screenshot of TerraTray project"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
		</Project>
		<Project name="Insomnia">
			{#snippet description()}
				A Java-based microservice for managing game servers and handling matchmaking for over 300+
				players. <br /><br />Built with gRPC, MySQL, providing a robust and scalable solution for
				health-checking, load balancing, and also matchmaking.
			{/snippet}
			{#snippet image()}
				<enhanced:img
					src={insomniaImg}
					alt="screenshot of Insomnia project"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
		</Project>
		<Project name="Mith">
			{#snippet description()}
				A Go application that handles the secure authentication of thousands of player accounts. <br
				/><br />Built with Go, gRPC, and MySQL, providing a powerful solution for user
				authentication in Lucky Network.
			{/snippet}
			{#snippet image()}
				<enhanced:img
					src={mithImg}
					alt="screenshot of Mith project"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
		</Project>
		<Project name="Appeals">
			{#snippet description()}
				A web application for Lucky Network players to submit punishment appeals. <br /><br />Built
				with SvelteKit, TailwindCSS, PostgreSQL, and internal APIs, providing a user-friendly
				interface for players to submit appeals and moderators to review them.
			{/snippet}
			{#snippet image()}
				<enhanced:img
					src={appealsImg}
					alt="screenshot of AeroBASE website news page"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
		</Project>
	</div>
</section>
