<script lang="ts">
	// Types
	import type { Action } from "svelte/action";

	// Components
	import Hero from "$lib/sections/Home/Hero.svelte";
	import About from "$lib/sections/Home/About.svelte";
	import Projects from "$lib/sections/Home/Projects.svelte";

	// Props
	let { data }: any = $props();

	// Store
	import { theme } from "$lib/store";

	/* Set the default theme when the component mounts
	 * and after the `$theme` store changes.
	 */
	const applyTheme: Action<HTMLBodyElement> = (node) => {
		$effect(() => {
			node.dataset["theme"] = $theme;
		});
	};
</script>

<svelte:body use:applyTheme />

<Hero />
<About data={data.aboutSectionData} />
<Projects data={data.projectsData} />
