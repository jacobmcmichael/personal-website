<script lang="ts">
	// Styles
	import "$lib/styles/_reset.css";
	import "$lib/styles/_global.css";
	import "$lib/styles/_variables.css";
	import "$lib/styles/_theme.css";

	// Components
	import Header from "$lib/components/Header.svelte";

	let { children } = $props();
</script>

<header>
	<Header />
</header>

<main>
	{@render children()}
</main>

<footer></footer>
