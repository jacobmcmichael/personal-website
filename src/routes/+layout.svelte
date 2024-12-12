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

<svelte:head>
	<link
		rel="preload"
		href="/fonts/inter-tight-latin-400.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/inter-tight-latin-600.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/inter-tight-latin-700.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>

	<style>
		@font-face {
			font-family: "Inter Tight";
			font-weight: 400;
			font-style: normal;
			font-display: swap;
			src: url("/fonts/inter-tight-latin-400.woff2") format("woff2");
		}

		@font-face {
			font-family: "Inter Tight";
			font-weight: 600;
			font-style: normal;
			font-display: swap;
			src: url("/fonts/inter-tight-latin-600.woff2") format("woff2");
		}

		@font-face {
			font-family: "Inter Tight";
			font-weight: 700;
			font-style: normal;
			font-display: swap;
			src: url("/fonts/inter-tight-latin-700.woff2") format("woff2");
		}

		h1 {
			font-family: "Inter Tight", system-ui;
			font-weight: 700;
		}

		body {
			font-family: "Inter Tight", system-ui;
			font-weight: 400;
		}
	</style>
</svelte:head>

<header>
	<Header />
</header>

<main>
	{@render children()}
</main>
