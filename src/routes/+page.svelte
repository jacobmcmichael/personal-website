<script lang="ts">
	/* Types */

	/* Components */
	import Hero from "$lib/sections/Home/Hero.svelte";
	import About from "$lib/sections/Home/About.svelte";
	import Projects from "$lib/sections/Home/Projects.svelte";

	/* Props */
	let { data }: any = $props();
</script>

<Hero />
{#await data.aboutSectionData then response}
	<About data={response} />
{/await}

{#await data.projectsData then response}
	<Projects data={response} />
{/await}
