<script lang="ts">
	// Styles
	import "$lib/styles/header.css";

	// Components
	import Button from "./Button.svelte";
</script>

<nav id="Header">
	<div class="inner">
		<div
			class="logo h1 p"
			aria-label="home"
		>
			<span>jacob</span><span class="accent">mcmichael.</span>
		</div>

		<Button
			icon="menu"
			variant="symbol"
		/>
	</div>
</nav>
