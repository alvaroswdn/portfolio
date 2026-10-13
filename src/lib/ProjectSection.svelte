<script lang="ts">
	import appealsImg from '#img/projects/appeals.png?enhanced';
	import appeals1Img from '#img/projects/appeals/img1.png?enhanced';
	import appeals2Img from '#img/projects/appeals/img2.png?enhanced';
	import appeals3Img from '#img/projects/appeals/img3.png?enhanced';

	import mithImg from '#img/projects/mith.png?enhanced';
	import mith1Img from '#img/projects/mith/img1.png?enhanced';
	import mith2Img from '#img/projects/mith/img2.png?enhanced';

	import insomniaImg from '#img/projects/insomnia.png?enhanced';
	import insomnia1Img from '#img/projects/insomnia/img1.png?enhanced';
	import insomnia2Img from '#img/projects/insomnia/img2.png?enhanced';

	import krtiImg from '#img/projects/krti.jpg?enhanced';
	import krti1Img from '#img/projects/krti/img1.png?enhanced';
	import krti2Img from '#img/projects/krti/img2.png?enhanced';
	import krti3Img from '#img/projects/krti/img3.png?enhanced';
	import krti4Img from '#img/projects/krti/img4.png?enhanced';

	import terraTrayImg from '#img/projects/terratray.png?enhanced';
	import terraTray1Img from '#img/projects/terratray/img1.png?enhanced';
	import terraTray2Img from '#img/projects/terratray/img2.png?enhanced';
	import terraTray3Img from '#img/projects/terratray/img3.png?enhanced';

	import Project from '#lib/Project.svelte';
</script>

<section id="projects" class="mt-8 lg:mt-14">
	<h1 class="mx-auto w-fit font-accent font-semibold text-4xl lg:text-5xl mb-12 lg:mb-16">
		Recent Projects
	</h1>
	<div class="max-w-6xl m-auto px-6 mb-8 flex flex-col lg:flex-row items-center gap-4">
		<Project name="KRTI 2026">
			{#snippet description()}
				Building a hexarotor with autonomous navigation, leveraging ROS2 and MAVSDK for offboard
				control. <br /><br />Implementing computer vision techniques to navigate the Kontes Robot
				Terbang Indonesia 2026 track.
			{/snippet}
			{#snippet thumb()}
				<enhanced:img
					src={krtiImg}
					alt="venue for Kontes Robot Terbang Indonesia 2026"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
			{#snippet images()}
				<div class="col-span-1">
					<enhanced:img
						src={krti1Img}
						alt="AeroBASE drone for the KRTI 2026 competition"
						draggable="false"
						sizes="min(560px, 90vw)"
					/>
				</div>
				<div class="col-span-3">
					<enhanced:img
						src={krti2Img}
						alt="landing page of the AeroBASE website in 2026"
						draggable="false"
						sizes="min(560px, 90vw)"
					/>
				</div>
				<div class="col-span-2">
					<enhanced:img
						src={krti3Img}
						alt="AeroBASE GitHub repository for the KRTI 2026"
						draggable="false"
						sizes="min(560px, 90vw)"
					/>
				</div>
				<div class="col-span-2">
					<enhanced:img
						src={krti4Img}
						alt="Gazebo simulation of the AeroBASE drone"
						draggable="false"
						sizes="min(560px, 90vw)"
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
					src={terraTrayImg}
					alt="TerraTray project web application"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
			{#snippet images()}
				<div class="col-span-3">
					<enhanced:img
						src={terraTray1Img}
						alt="prototype of the TerraTray product"
						draggable="false"
						sizes="min(560px, 90vw)"
					/>
				</div>
				<div class="row-span-2 col-span-1">
					<enhanced:img
						src={terraTray2Img}
						alt="prototype of the TerraTray gantry system"
						draggable="false"
						sizes="min(560px, 90vw)"
					/>
				</div>
				<div class="col-span-3">
					<enhanced:img
						src={terraTray3Img}
						alt="TerraTray presentation slide showcase"
						draggable="false"
						sizes="min(560px, 90vw)"
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
					src={insomniaImg}
					alt="the BedWars game lobby using Insomnia"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
			{#snippet images()}
				<div class="col-span-3">
					<enhanced:img
						src={insomnia1Img}
						alt="the different servers Insomnia needs to manage"
						draggable="false"
						sizes="min(560px, 90vw)"
					/>
				</div>
				<div class="col-span-3">
					<enhanced:img
						src={insomnia2Img}
						alt="the console output of the Insomnia microservice"
						draggable="false"
						sizes="min(560px, 90vw)"
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
					src={mithImg}
					alt="the limbo server using Mith authentication"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
			{#snippet images()}
				<div class="col-span-2">
					<enhanced:img
						src={mith1Img}
						alt="the email for Mith's password reset feature"
						draggable="false"
						sizes="min(560px, 90vw)"
					/>
				</div>
				<div class="col-span-2">
					<enhanced:img
						src={mith2Img}
						alt="repository of Mith's source code"
						draggable="false"
						sizes="min(560px, 90vw)"
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
					src={appealsImg}
					alt="court house build from Lucky Network server"
					draggable="false"
					sizes="min(560px, 90vw)"
				/>
			{/snippet}
			{#snippet images()}
				<div class="col-span-2">
					<enhanced:img
						src={appeals1Img}
						alt="user page for submitting appeals on the Lucky Network Appeals website"
						draggable="false"
						sizes="min(560px, 90vw)"
					/>
				</div>
				<div class="col-span-2">
					<enhanced:img
						src={appeals2Img}
						alt="staff page for reviewing anticheat logs"
						draggable="false"
						sizes="min(560px, 90vw)"
					/>
				</div>
				<div class="col-span-2">
					<enhanced:img
						src={appeals3Img}
						alt="the email for Lucky Network Appeals' response feature"
						draggable="false"
						sizes="min(560px, 90vw)"
						class="col-span-1"
					/>
				</div>
			{/snippet}
		</Project>
	</div>
</section>
