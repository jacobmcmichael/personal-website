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
					customClass="portrait"
					src={item.image.url}
					alt={item.image.description}
					loading="eager"
				/>
			{/if}
		</div>

		<div class="text__group">
			<h2>{item.title}</h2>
			<p>{item.description}</p>
			<Link
				value="About me"
				variant="plain"
				icon="arrow-right"
				data-sveltekit-preload-data="hover"
			/>
		</div>
	</div>
</section>
