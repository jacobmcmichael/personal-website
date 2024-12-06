<script lang="ts">
	// Types

	// Components
	import Hero from "$lib/sections/Home/Hero.svelte";
	import About from "$lib/sections/Home/About.svelte";
	import Projects from "$lib/sections/Home/Projects.svelte";

	// Props
	let { data }: any = $props();
</script>

<Hero />
<About data={data.aboutSectionData} />
<Projects data={data.projectsData} />
