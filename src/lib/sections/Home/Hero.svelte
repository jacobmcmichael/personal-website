<script lang="ts">
	// Types
	import type { LinkProps } from "$lib/types/components";

	// Styles
	import "$lib/styles/hero.css";

	// Components
	import Link from "$lib/components/Link.svelte";

	const socialElements: LinkProps[] = [
		{
			value: "Gmail",
			variant: "plain",
			href: "mailto:jacobmcmichael@gmail.com",
			target: "_blank",
			referrerpolicy: "no-referrer",
		},
		{
			value: "LinkedIn",
			variant: "plain",
			href: "https://www.linkedin.com/in/jacobmcmichael/",
			target: "_blank",
			referrerpolicy: "no-referrer",
		},
		{
			value: "GitHub",
			variant: "plain",
			href: "https://github.com/jacobmcmichael",
			target: "_blank",
			referrerpolicy: "no-referrer",
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
				I'm Jake, a Web Developer living in California, committed to
				creating digital solutions that are simple, delightful, and
				effective.
			</p>
		</div>

		<div class="inner__links">
			<Link
				value="Let's Talk"
				variant="primary"
				icon="arrow-right"
				data-sveltekit-preload-data="hover"
			/>

			<div class="links__socials">
				{#each socialElements as element}
					<Link
						value={element.value}
						variant={element.variant}
						href={element.href}
						target={element.target}
					/>
				{/each}
			</div>
		</div>
	</div>
</section>
