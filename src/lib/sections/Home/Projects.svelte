<script lang="ts">
	// Types
	import type { ProjectsSectionData } from "$lib/types/contentful";

	// Styles
	import "$lib/styles/projects.css";

	// Components
	import Link from "$lib/components/Link.svelte";
	import Image from "$lib/components/Image.svelte";

	// Props
	let { data }: { data: ProjectsSectionData } = $props();
	let items = data.projectsCollection.items;
</script>

<section id="Projects">
	<div class="inner">
		<h2>Selected Projects</h2>
		<div class="projects__group">
			{#each items as item}
				<div class="projects__item">
					{#if item.featuredImage.url && item.featuredImage.description}
						<Image
							src={item.featuredImage.url}
							alt={item.featuredImage.description}
							loading="lazy"
							type="contentful"
							contentfulOptions={{
								width: item.featuredImage.width,
								height: item.featuredImage.height,
								densities: [
									[400, 1],
									[800, 2],
									[1600, 3],
								],
								sizes: "100vw, (min-width: 768px) 50vw, (min-width: 1024px) 30vw",
								queryParams: {
									quality: 80,
									format: "webp",
									fit: "fill",
								},
							}}
						/>
					{/if}

					<div class="item__details">
						<div class="details__group">
							<h3>
								<Link
									variant="plain"
									icon="arrow-right"
									data-sveltekit-preload-data="hover"
								>
									<span class="h3">{item.clientName}</span>
								</Link>
							</h3>
							<div class="tags__group">
								{#each item.tags as tag}
									<span class="tag">{tag}</span>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
