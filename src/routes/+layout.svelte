<script lang="ts">
	// Styles
	import "$lib/styles/_reset.css";
	import "$lib/styles/_global.css";
	import "$lib/styles/_variables.css";

	// Components
	import Header from "$lib/components/Header.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link
		rel="preconnect"
		href="https://fonts.googleapis.com"
	/>
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="anonymous"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header>
	<Header />
</header>

<main>
	{@render children()}
</main>
