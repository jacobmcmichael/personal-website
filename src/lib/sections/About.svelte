<script lang="ts">
	/* Types */
	import type { AboutSectionData } from "$lib/types/contentful";

	let { data }: { data: AboutSectionData } = $props();
	let items = data.aboutSectionCollection.items;
</script>

{#each items as item}
	<img
		src={item.image.url}
		alt={item.image.description}
		srcset=""
	/>
	{item.excerpt}
{/each}
