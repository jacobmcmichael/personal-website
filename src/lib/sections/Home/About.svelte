<script lang="ts">
	// Types
	import type { AboutSectionData } from "$lib/types/contentful";

	// Styles
	import "$lib/styles/about.css";

	// Components
	import Link from "$lib/components/Link.svelte";
	import Image from "$lib/components/Image.svelte";

	// Props
	let { data }: { data: AboutSectionData } = $props();
	let item = data.aboutSectionCollection.items[0];
</script>

<section id="About">
	<div class="inner">
		<div class="image__group">
			{#if item.image.url && item.image.description}
				<Image
					class="portrait"
					src={item.image.url}
					alt={item.image.description}
					loading="eager"
					type="contentful"
					contentfulOptions={{
						width: item.image.width,
						height: item.image.height,
						densities: [
							[400, 1],
							[600, 2],
							[800, 3],
						],
						sizes: "100vw, (min-width: 768px) 30vw",
						queryParams: {
							quality: 80,
							format: "webp",
							fit: "fill",
						},
					}}
				/>
			{/if}
		</div>

		<div class="text__group">
			<h2>{item.title}</h2>
			<p>{item.description}</p>
			<Link
				href="/"
				variant="plain"
				icon="arrow-right"
				data-sveltekit-preload-data="hover">About Me</Link
			>
		</div>
	</div>
</section>
