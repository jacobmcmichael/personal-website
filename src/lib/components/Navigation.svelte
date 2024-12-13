<script lang="ts">
	// Styles
	import "$lib/styles/navigation.css";

	// Components
	import Button from "./Button.svelte";
	import Link from "./Link.svelte";

	// Variables
	import { theme } from "$lib/store";

	// const handleThemeChange = () => {
	// 	if ($theme === "light") {
	// 		$theme = "dark";
	// 	} else if ($theme === "dark") {
	// 		$theme = "light";
	// 	}
	// };

	const links = [
		{
			text: "Home",
			url: "/",
		},
		{
			text: "About",
			url: "/about",
		},
		{
			text: "Works",
			url: "/",
		},
		{
			text: "Insights",
			url: "/insights",
		},
	];

	let isMenuOpen: boolean = $state(false);
</script>

<nav id="Navigation">
	<div class="menu">
		<div class="inner">
			<div
				class="logo h1 p"
				aria-label="home"
			>
				<span>jacob</span><span class="accent">mcmichael.</span>
			</div>

			<!-- TODO: Move this to the menu -->
			<!-- <button
			style="position: fixed; top: 0; left: 50%;"
			onclick={handleThemeChange}>{$theme}</button
		> -->

			<Button
				type="button"
				value=""
				icon={isMenuOpen ? "close" : "menu"}
				variant="symbol"
				aria-label="menu"
				onclick={() => (isMenuOpen = !isMenuOpen)}
			/>
		</div>
	</div>

	<div
		class="drawer"
		aria-expanded={isMenuOpen}
	>
		<div class="inner">
			<div class="links">
				{#if links.length > 0}
					{#each links as item, i}
						<Link
							class="link"
							href={item.url}
							variant="plain"
						>
							<span class="h2">{item.text}</span>
							<span class="p">(0{i})</span>
						</Link>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</nav>
