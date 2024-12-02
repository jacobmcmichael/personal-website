<script lang="ts">
	/* Types */

	/* Components */
	import Hero from "$lib/sections/Hero.svelte";
	import About from "$lib/sections/About.svelte";

	/* Props */
	let { data }: any = $props();
	$inspect(data);
</script>

<Hero />
{#await data.aboutSectionData then response}
	<About data={response} />
{/await}
