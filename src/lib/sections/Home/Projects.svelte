<script lang="ts">
	/* Types */
	import type { ProjectsData } from "$lib/types/contentful";

	/* Styles */
	import "$lib/styles/projects.css";

	/* Components */
	import Link from "$lib/components/Link.svelte";
	import Image from "$lib/components/Image.svelte";

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
					<Image
						src={item.featuredImage.url}
						alt={item.featuredImage.description}
					/>

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
