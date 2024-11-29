<script lang="ts">
	/* Types */
	import type { ProjectsData } from "$lib/types/contentful";

	/* Components */
	import Button from "$lib/components/Button.svelte";

	/* Props */
	let { data }: { data: ProjectsData } = $props();
	let items = data.projects.projectCollection.items;
</script>

{#each items as project (project._id)}
	<div>
		<h2>{project.title}</h2>
		<p>{project.excerpt}</p>
	</div>
{/each}

<Button />
<Button icon="arrow-right" />
<Button variant="symbol" />
<Button
	icon="arrow-right"
	variant="symbol"
/>
