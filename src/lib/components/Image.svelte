<script lang="ts">
	// Types
	import type { ImageProps } from "$lib/types/components";

	/* Helpers */
	import {
		generateSrcsetFromNumbersArray,
		optimizeContentfulImage,
	} from "$lib/helpers/components";

	// Variables
	import { defaultContentfulImageOptions } from "$lib/helpers/variables";

	// Props
	let {
		customClass = "",
		src,
		srcset = [320, 480, 640, 800],
		sizes = "(max-width: 480px) 100vw, (max-width: 800px) 75vw, 50vw",
		alt,
		loading = "lazy",
		contentfulOptions = { ...defaultContentfulImageOptions },
	}: ImageProps = $props();

	const optimizedImage = contentfulOptions
		? optimizeContentfulImage(src, { ...contentfulOptions, srcset })
		: null;

	const optimizedWebP = contentfulOptions
		? optimizeContentfulImage(src, {
				...contentfulOptions,
				srcset,
				format: "webp",
			})
		: null;

	const optimizedJPEG = contentfulOptions
		? optimizeContentfulImage(src, {
				...contentfulOptions,
				srcset,
				format: "jpg",
			})
		: null;

	const fallbackSrcset = generateSrcsetFromNumbersArray(src, srcset);
	const fallbackSrc = src;
</script>

<!-- Let the browser choose the first element it supports -->
<picture>
	<!-- User Defined Format -->
	<source
		srcset={optimizedImage
			? optimizedImage.optimizedSourceSet
			: fallbackSrcset}
		{sizes}
	/>

	<!-- WebP -->
	<source
		srcset={optimizedWebP
			? optimizedWebP.optimizedSourceSet
			: fallbackSrcset}
		{sizes}
		type="image/webp"
	/>

	<!-- JPEG -->
	<source
		srcset={optimizedJPEG
			? optimizedJPEG.optimizedSourceSet
			: fallbackSrcset}
		{sizes}
		type="image/jpeg"
	/>

	<!-- Fallback Image -->
	<img
		class={customClass}
		srcset={optimizedImage
			? optimizedImage.optimizedSourceSet
			: fallbackSrcset}
		src={optimizedImage ? optimizedImage.optimizedSource : fallbackSrc}
		{sizes}
		{alt}
		{loading}
	/>
</picture>
