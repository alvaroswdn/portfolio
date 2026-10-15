<script lang="ts">
	import Experience from '#lib/Experience.svelte';
	import LinkIcon from '#lib/icon/link.svelte';
</script>

<section id="projects" class="mt-8 lg:mt-14">
	<h1 class="mx-auto w-fit font-accent font-semibold text-4xl lg:text-5xl mb-12 lg:mb-16">
		Work Experience
	</h1>
	<div class="grid gap-16 lg:gap-36">
		<Experience
			id="aerobase"
			title="Head of Software Division"
			timespan="February 2025 — Present"
			color="border-cyan-600"
		>
			{#snippet org()}
				<a class="flex items-center gap-1.5" href="https://aerobase.id" target="_blank">
					AeroBASE <LinkIcon />
				</a>
			{/snippet}

			{#snippet description()}
				<ul class="list-disc pl-6 *:mb-2">
					<li>
						Built a modular ROS2 and MAVSDK offboard control system for autonomous navigation tested
						across 20+ field and Gazebo-simulated flights, applied in the KRTI 2026 competition.
					</li>
					<li>
						Optimized real-time YOLO object detection for onboard edge compute, reducing latency
						significantly while maintaining a 98%+ mAP50-95.
					</li>
					<li>
						Engineered vision-based navigation using pose estimates from a monocular camera,
						reaching a sub-5 cm precision for stable autonomous flight.
					</li>
					<li>
						Developed the landing website to showcase our team’s work and vision for the project,
						utilizing modern frameworks such as Astro and Tailwind.
					</li>
				</ul>
			{/snippet}

			{#snippet images()}
				<div class="col-span-2">
					<enhanced:img
						src="../img/aerobase.png"
						alt="screenshot of the AeroBASE website landing page"
						draggable="false"
						sizes="min(560px, 50vw)"
					/>
				</div>
				<div class="col-span-2">
					<enhanced:img
						src="../img/aerobase2.png"
						alt="screenshot of AeroBASE website about page"
						draggable="false"
						sizes="min(560px, 50vw)"
					/>
				</div>
				<div class="col-span-2">
					<enhanced:img
						src="../img/aerobase3.png"
						alt="screenshot of the AeroBASE website news page"
						draggable="false"
						sizes="min(560px, 50vw)"
					/>
				</div>
			{/snippet}
		</Experience>

		<Experience
			id="lucky_network"
			title="Chief Security Officer"
			timespan="February 2021 — Present"
			color="border-amber-400"
		>
			{#snippet org()}
				<a class="flex items-center gap-1.5" href="https://www.luckynetwork.net/" target="_blank">
					Lucky Network <LinkIcon />
				</a>
			{/snippet}

			{#snippet description()}
				<ul class="list-disc pl-6 *:mb-2">
					<li>
						Architected a Java-based server management service handling real-time health-checking,
						dynamic load balancing, and matchmaking, streamlining deployment workflows.
					</li>
					<li>
						Developed a Go gRPC-based authentication system with advanced data protection, managing
						over 1000 concurrent players without experiencing performance degradation.
					</li>
					<li>
						Hardened network security to secure internal systems from intrusion attempts and
						malicious actors, while ensuring sub-millisecond latency for a lag-free gaming
						experience.
					</li>
					<li>
						Integrated an automated payment gateway and player donation platform, processing
						contributions across 100+ users with zero manual intervention.
					</li>
				</ul>
			{/snippet}

			{#snippet images()}
				<div class="col-span-2">
					<enhanced:img
						src="../img/lucky_appeals.png"
						alt="screenshot of the Lucky Network Appeals page"
						draggable="false"
						sizes="min(560px, 50vw)"
					/>
				</div>
				<div class="col-span-2">
					<enhanced:img
						src="../img/lucky_store.png"
						alt="screenshot of the Lucky Network Store page"
						draggable="false"
						sizes="min(560px, 50vw)"
					/>
				</div>
			{/snippet}
		</Experience>
	</div>
</section>
