<script lang="ts">
	/* Types */
	import type { ProjectsData } from "$lib/types/contentful";

	/* Components */
	import Hero from "$lib/sections/Hero.svelte";

	/* Props */
	let { data }: { data: ProjectsData } = $props();
	let items = data.projects.projectCollection.items;
</script>

<Hero />

{#each items as project (project._id)}
	<div>
		<h2>{project.title}</h2>
		<p>{project.excerpt}</p>
	</div>
{/each}
