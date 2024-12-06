// Types
import type { ImageProps } from "$lib/types/components";

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

/**
 * Generates a `srcset` string from a URL (with parameters) and a set of array values.
 * Relies on a Contentful URL from @function generateContentfulSource()
 */
export const generateSourceSet = (url?: string, options?: ImageProps["contentfulOptions"]): string => {
	try {
		const densities: [number, number][] = options?.densities ?? [];

		if (!url || !densities || densities.length === 0 || !options) {
			return "";
		}

		return densities
			.map(([w, density]) => `${generateContentfulSource(url, { ...options, width: w })} ${density}x`)
			.join(", ");
	} catch (error) {
		console.error("Error generating srcset: ", (error as Error).message);
		return "";
	}
};

/**
 * Optimizes a Contentful image URL by appending parameters for resizing and quality.
 * Useful when integrating with Contentful's Images API.
 */
export const generateContentfulSource = (url?: string, options?: ImageProps["contentfulOptions"]) => {
	try {
		if (!url && !options) {
			return "";
		}

		const parameters: URLSearchParams = new URLSearchParams();

		// Dynamically append query parameters based on options
		if (options?.width) parameters.append("w", `${options?.width}`);
		if (options?.queryParams.quality) parameters.append("q", `${options?.queryParams.quality}`);
		if (options?.queryParams.format) parameters.append("fm", options?.queryParams.format);
		if (options?.queryParams.fit) parameters.append("fit", options?.queryParams.fit);

		// Use progressive jpeg loading methods if possible
		if (options?.queryParams.format === "jpg") parameters.append("fl", "progressive");

		return `${url}?${parameters}`;
	} catch (error) {
		console.error("Error generating src: ", (error as Error).message);
	}

	return "";
};
