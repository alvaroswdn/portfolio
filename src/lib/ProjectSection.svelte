<script lang="ts">
	import Project from '#lib/Project.svelte';
</script>

<section id="projects" class="mt-8 lg:mt-14">
	<h1 class="mx-auto w-fit font-accent font-semibold text-4xl lg:text-5xl mb-12 lg:mb-16">
		Recent Projects
	</h1>
	<div
		class="max-w-6xl m-auto px-3 lg:px-6 mb-8 grid grid-cols-2 lg:grid-cols-5 items-center gap-4"
	>
		<Project name="KRTI 2026">
			{#snippet description()}
				Building a hexarotor with autonomous navigation, leveraging ROS2 and MAVSDK for offboard
				control. <br /><br />Implementing computer vision techniques to navigate the Kontes Robot
				Terbang Indonesia 2026 track.
			{/snippet}
			{#snippet thumb()}
				<enhanced:img
					data-scroll
					data-scroll-speed="-0.006"
					src="../img/projects/krti.jpg"
					alt="venue for Kontes Robot Terbang Indonesia 2026"
					draggable="false"
					sizes="min(560px, 98vw)"
				/>
			{/snippet}
			{#snippet images()}
				<div class="col-span-1">
					<enhanced:img
						src="../img/projects/krti/img1.png"
						alt="AeroBASE drone for the KRTI 2026 competition"
						draggable="false"
						sizes="min(560px, 98vw)"
					/>
				</div>
				<div class="col-span-3">
					<enhanced:img
						src="../img/projects/krti/img2.png"
						alt="landing page of the AeroBASE website in 2026"
						draggable="false"
						sizes="min(560px, 98vw)"
					/>
				</div>
				<div class="col-span-2">
					<enhanced:img
						src="../img/projects/krti/img3.png"
						alt="AeroBASE GitHub repository for the KRTI 2026"
						draggable="false"
						sizes="min(560px, 98vw)"
					/>
				</div>
				<div class="col-span-2">
					<enhanced:img
						src="../img/projects/krti/img4.png"
						alt="Gazebo simulation of the AeroBASE drone"
						draggable="false"
						sizes="min(560px, 98vw)"
					/>
				</div>
			{/snippet}
		</Project>
		<Project name="TerraTray">
			{#snippet description()}
				A web app-connected gantry system for plant seeding, designed to automate the planting
				process and improve efficiency in agricultural operations. <br /><br />Using control systems
				such as PID to achieve precise and smooth movement of the gantry system.
			{/snippet}
			{#snippet thumb()}
				<enhanced:img
					data-scroll
					data-scroll-speed="-0.006"
					src="../img/projects/terratray.png"
					alt="TerraTray project web application"
					draggable="false"
					sizes="min(560px, 98vw)"
				/>
			{/snippet}
			{#snippet images()}
				<div class="col-span-3">
					<enhanced:img
						src="../img/projects/terratray/img1.png"
						alt="prototype of the TerraTray product"
						draggable="false"
						sizes="min(560px, 98vw)"
					/>
				</div>
				<div class="col-span-1">
					<enhanced:img
						src="../img/projects/terratray/img2.png"
						alt="prototype of the TerraTray gantry system"
						draggable="false"
						sizes="min(560px, 98vw)"
					/>
				</div>
				<div class="col-span-3">
					<enhanced:img
						src="../img/projects/terratray/img3.png"
						alt="TerraTray presentation slide showcase"
						draggable="false"
						sizes="min(560px, 98vw)"
					/>
				</div>
			{/snippet}
		</Project>
		<Project name="Insomnia">
			{#snippet description()}
				A Java-based microservice for managing game servers and handling matchmaking for over 300+
				players. <br /><br />Built with gRPC, MySQL, providing a robust and scalable solution for
				health-checking, load balancing, and also matchmaking.
			{/snippet}
			{#snippet thumb()}
				<enhanced:img
					data-scroll
					data-scroll-speed="-0.006"
					src="../img/projects/insomnia.png"
					alt="the BedWars game lobby using Insomnia"
					draggable="false"
					sizes="min(560px, 98vw)"
				/>
			{/snippet}
			{#snippet images()}
				<div class="col-span-3">
					<enhanced:img
						src="../img/projects/insomnia/img1.png"
						alt="the different servers Insomnia needs to manage"
						draggable="false"
						sizes="min(560px, 98vw)"
					/>
				</div>
				<div class="col-span-3">
					<enhanced:img
						src="../img/projects/insomnia/img2.png"
						alt="the console output of the Insomnia microservice"
						draggable="false"
						sizes="min(560px, 98vw)"
					/>
				</div>
			{/snippet}
		</Project>
		<Project name="Mith">
			{#snippet description()}
				A Go application that handles the secure authentication of thousands of player accounts. <br
				/><br />Built with Go, gRPC, and MySQL, providing a powerful solution for user
				authentication in Lucky Network.
			{/snippet}
			{#snippet thumb()}
				<enhanced:img
					data-scroll
					data-scroll-speed="-0.006"
					src="../img/projects/mith.png"
					alt="the limbo server using Mith authentication"
					draggable="false"
					sizes="min(560px, 98vw)"
				/>
			{/snippet}
			{#snippet images()}
				<div class="col-span-2">
					<enhanced:img
						src="../img/projects/mith/img1.png"
						alt="the email for Mith's password reset feature"
						draggable="false"
						sizes="min(560px, 98vw)"
					/>
				</div>
				<div class="col-span-2">
					<enhanced:img
						src="../img/projects/mith/img2.png"
						alt="repository of Mith's source code"
						draggable="false"
						sizes="min(560px, 98vw)"
					/>
				</div>
			{/snippet}
		</Project>
		<Project name="Appeals">
			{#snippet description()}
				A web application for Lucky Network players to submit punishment appeals. <br /><br />Built
				with SvelteKit, TailwindCSS, PostgreSQL, and internal APIs, providing a user-friendly
				interface for players to submit appeals and moderators to review them.
			{/snippet}
			{#snippet thumb()}
				<enhanced:img
					data-scroll
					data-scroll-speed="-0.006"
					src="../img/projects/appeals.png"
					alt="court house build from Lucky Network server"
					draggable="false"
					sizes="min(560px, 98vw)"
				/>
			{/snippet}
			{#snippet images()}
				<div class="col-span-2">
					<enhanced:img
						src="../img/projects/appeals/img1.png"
						alt="user page for submitting appeals on the Lucky Network Appeals website"
						draggable="false"
						sizes="min(560px, 98vw)"
					/>
				</div>
				<div class="col-span-2">
					<enhanced:img
						src="../img/projects/appeals/img2.png"
						alt="staff page for reviewing anticheat logs"
						draggable="false"
						sizes="min(560px, 98vw)"
					/>
				</div>
				<div class="col-span-2">
					<enhanced:img
						src="../img/projects/appeals/img3.png"
						alt="the email for Lucky Network Appeals' response feature"
						draggable="false"
						sizes="min(560px, 98vw)"
						class="col-span-1"
					/>
				</div>
			{/snippet}
		</Project>
		<div
			class="bg-neutral-500/5 border border-dashed border-primary/20 rounded-sm lg:hidden w-full h-full"
		></div>
	</div>
</section>
