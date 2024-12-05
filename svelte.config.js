import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),

		// Custom preprocessor to strip out the Svelte announcer
		{
			name: "strip-announcer",
			markup: ({ content: code }) => {
				// Replace the announcer div with an empty component
				code = code.replace(
					/<div id="svelte-announcer" [\s\S]*?<\/div>/,
					"<!-- Announcer removed -->",
				);

				return { code };
			},
		},
	],
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({}),
	},
};

export default config;
