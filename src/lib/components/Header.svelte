<script lang="ts">
	// Styles
	import "$lib/styles/header.css";

	// Components
	import Button from "./Button.svelte";

	// Variables
	import { theme } from "$lib/store";

	// const handleThemeChange = () => {
	// 	if ($theme === "light") {
	// 		$theme = "dark";
	// 	} else if ($theme === "dark") {
	// 		$theme = "light";
	// 	}
	// };

	let isMenuOpen: boolean = $state(false);
</script>

<nav id="Header">
	<div class="inner">
		<div class="menu">
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

		<div class="drawer"></div>
	</div>
</nav>
