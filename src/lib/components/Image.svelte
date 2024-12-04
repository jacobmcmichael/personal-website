<script lang="ts">
	/* Types */
	import type { ImageProps } from "$lib/types/components";

	/* Helpers */
	import { useOptimizeImage } from "$lib/helpers/contentful";

	/* Props */
	let {
		customClass = "",
		src = "/image-placeholder.jpeg",
		alt,
		quality = 80,
		widths = [400, 600, 800],
		heights = [400, 600, 800],
		loading = "lazy",
	}: ImageProps = $props();

	// Ensure widths and heights are arrays for consistency
	const widthValues = Array.isArray(widths) ? widths : [widths];
	const heightValues = Array.isArray(heights) ? heights : [heights];

	// Dynamically generate srcset
	const srcset = widthValues
		.map((width, index) => {
			const height = heightValues[index] || "auto"; // Use corresponding height or fallback
			return `${useOptimizeImage(src, {
				width,
				height: typeof height === "number" ? height : undefined, // Only include height if it's a number
				quality,
				format: "webp",
			})} ${width}w`;
		})
		.join(", ");

	// Dynamically generate sizes (example assumes proportional sizing logic)
	const sizes = widthValues
		.map((width) => `(max-width: ${width}px) ${width}px`)
		.join(", ");
</script>

<img
	class={customClass}
	src={useOptimizeImage(src, {
		width: widthValues[1] || widthValues[0], // Default to the second width or first if only one
		height: heightValues[1] || heightValues[0], // Default to the second height or first if only one
		quality,
		format: "webp",
	})}
	{srcset}
	{sizes}
	{alt}
	{loading}
/>
