import type { Handle } from "@sveltejs/kit";

/**
 * @function handle
 * @description A special SvelteKit hook used to globally manage requests and responses.
 * @note Do not rename this function; it is required by SvelteKit.
 */
export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		preload: ({ type }) => {
			// Preload only font files and critical JS/CSS
			return type === "font" || type === "js" || type === "css";
		},
	});

	return response;
};
