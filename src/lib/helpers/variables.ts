// Types
import type { OptimizeContentfulImageOptions } from "$lib/types/functions";

export const defaultContentfulImageOptions: OptimizeContentfulImageOptions = {
	width: 800,
	height: 800,
	quality: 80,
	srcset: [320, 480, 640, 800],
	format: "webp",
	fit: "fill",
};
