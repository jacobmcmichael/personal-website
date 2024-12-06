<script lang="ts">
	// Types
	import type { LinkProps } from "$lib/types/components";

	// Styles
	import "$lib/styles/hero.css";

	// Components
	import Link from "$lib/components/Link.svelte";

	const socialElements = [
		{
			value: "Gmail",
			href: "mailto:jacobmcmichael@gmail.com",
		},
		{
			value: "LinkedIn",
			href: "https://www.linkedin.com/in/jacobmcmichael/",
		},
		{
			value: "GitHub",
			href: "https://github.com/jacobmcmichael",
		},
	];
</script>

<section id="Hero">
	<div class="inner">
		<h1>
			I'm a web developer building
			<span class="accent">modern, scalable</span> web applications.
		</h1>

		<div class="inner__description">
			<div class="description__decoration"></div>
			<p>
				I'm Jake, a Web Developer living in California, committed to creating digital solutions that are simple,
				delightful, and effective.
			</p>
		</div>

		<div class="inner__links">
			<Link
				href="/"
				variant="primary"
				icon="arrow-right"
				data-sveltekit-preload-data="hover">Let's Talk</Link
			>

			<div class="links__socials">
				{#each socialElements as element}
					<Link
						href={element.href}
						variant="plain"
						icon="arrow-up-right"
						target="_blank"
						referrerpolicy="no-referrer">{element?.value}</Link
					>
				{/each}
			</div>
		</div>
	</div>
</section>
