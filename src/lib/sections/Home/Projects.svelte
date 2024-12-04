<script lang="ts">
	/* Types */
	import type { ProjectsData } from "$lib/types/contentful";

	/* Styles */
	import "$lib/styles/projects.css";

	/* Helpers */
	import { optimizeImage } from "$lib/helpers/contentful";

	/* Components */
	import Link from "$lib/components/Link.svelte";

	/* Props */
	let { data }: { data: ProjectsData } = $props();
	let items = data.projectsCollection.items;
</script>

<section id="Projects">
	<div class="inner">
		<h2>Selected Projects</h2>
		<div class="projects__group">
			{#each items as item}
				<div class="projects__item">
					{#if item.featuredImage.url}
						<img
							src={optimizeImage(item.featuredImage.url, {
								width: 600,
								height: 400,
								quality: 80,
								format: "webp",
							})}
							alt={item.featuredImage.description}
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
