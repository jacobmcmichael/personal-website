// Types
import type {
	OptimizeContentfulImageFn,
	OptimizeContentfulImageOptions,
	OptimizeContentfulImageResult,
} from "$lib/types/functions";

// Variables
import { defaultContentfulImageOptions } from "./variables";

/* Provides a fallback icon based on the specified variant. */
export const provideFallbackIcon = (variant: string) => {
	switch (variant) {
		case "symbol":
			return "arrow-right";

		case "plain":
			return "arrow-up-right";

		default:
			return undefined;
	}
};

/* Generates a `srcset` string from a URL and an array of width values. */
export const generateSrcsetFromNumbersArray: (
	url: string,
	numbersArray: number[],
) => string = (url, numbersArray) => {
	return numbersArray.length > 0
		? numbersArray.map((w) => `${url} ${w}w`).join(", ")
		: "";
};

/**
 * Optimizes a Contentful image URL by appending parameters for resizing and quality.
 * Useful when integrating with Contentful's Images API.
 */
export const optimizeContentfulImage: OptimizeContentfulImageFn = (
	url,
	options: OptimizeContentfulImageOptions = {},
): OptimizeContentfulImageResult => {
	if (!url.trim()) {
		console.error("Please provide a url.");
		return { optimizedSource: "", optimizedSourceSet: "" };
	}

	// Merge user-provided options with defaults
	const mergedOptions: OptimizeContentfulImageOptions = {
		...defaultContentfulImageOptions,
		...options,
	};

	// Dynamically append query parameters based on options
	const parameters: URLSearchParams = new URLSearchParams();
	if (mergedOptions.width) parameters.append("w", `${mergedOptions.width}`);
	if (mergedOptions.height) parameters.append("h", `${mergedOptions.height}`);
	if (mergedOptions.quality)
		parameters.append("q", `${mergedOptions.quality}`);
	if (mergedOptions.format) parameters.append("fm", mergedOptions.format);
	if (mergedOptions.fit) parameters.append("fit", mergedOptions.fit);

	// Use progressive jpeg loading methods
	if (mergedOptions.format === "jpg") parameters.append("fl", "progressive");

	// Generate the optimized src and srcset
	const optimizedSource: string = `${url}?${parameters}`;
	const optimizedSourceSet: string = generateSrcsetFromNumbersArray(
		optimizedSource,
		mergedOptions.srcset ?? defaultContentfulImageOptions.srcset!,
	);

	return { optimizedSource, optimizedSourceSet };
};
