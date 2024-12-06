<script lang="ts">
	// Types
	import type { ImageProps } from "$lib/types/components";

	/* Helpers */
	import { generateSourceSet, generateContentfulSource } from "$lib/helpers/components";

	// Props
	let { src, type, contentfulOptions, ...restProps }: ImageProps = $props();

	const width = contentfulOptions?.width ?? 1;
	const height = contentfulOptions?.height ?? 1;

	const isContentfulType = type === "contentful";
	const sizes: string = contentfulOptions?.sizes ?? "100vw, (min-width: 768px) 50vw, (min-width: 1024px) 30vw";
</script>

{#if contentfulOptions}
	<picture>
		<!-- User Defined Format -->
		<source
			srcset={isContentfulType ? generateSourceSet(src, contentfulOptions) : null}
			{sizes}
		/>

		<!-- WebP -->
		{#if contentfulOptions.queryParams}
			<source
				srcset={isContentfulType
					? generateSourceSet(src, {
							...contentfulOptions,
							queryParams: {
								...contentfulOptions.queryParams,
								format: "webp",
							},
						})
					: null}
				{sizes}
				type="image/webp"
			/>
		{/if}

		<!-- JPEG -->
		{#if contentfulOptions.queryParams}
			<source
				srcset={isContentfulType
					? generateSourceSet(src, {
							...contentfulOptions,
							queryParams: {
								...contentfulOptions.queryParams,
								format: "jpg",
							},
						})
					: null}
				{sizes}
				type="image/jpeg"
			/>
		{/if}

		<!-- Fallback Image -->
		<img
			style:aspect-ratio={width / height}
			srcset={isContentfulType
				? generateSourceSet(src, {
						...contentfulOptions,
						queryParams: {
							...contentfulOptions.queryParams,
							format: "jpg",
						},
					})
				: null}
			src={generateContentfulSource(src, contentfulOptions)}
			{sizes}
			{...restProps}
		/>
	</picture>
{/if}
