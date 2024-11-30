<script lang="ts">
	/* Styles */
	import "$lib/styles/hero.css";

	/* Components */
	import Button from "$lib/components/Button.svelte";
</script>

<section id="Hero">
	<div class="inner">
		<h1>
			I'm a web developer building
			<span class="accent">modern, scalable</span> web applications.
		</h1>

		<p>
			I'm Jake, a Web Developer living in California, committed to
			creating digital solutions that are simple, delightful, and
			effective.
		</p>

		<Button
			value="Let's Talk"
			variant="primary"
			icon="arrow-right"
		/>
	</div>
</section>
