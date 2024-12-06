// Types
import type { HTMLAttributes, HTMLImgAttributes } from "svelte/elements";
import type { ContentfulImage } from "./contentful";

export type Icon = "arrow-right" | "arrow-up-right" | "menu";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	type?: "submit" | "reset" | "button";
	icon?: Icon;
	value?: string;
	variant?: "primary" | "secondary" | "symbol";
	customClass?: string;
}

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
	href?: string;
	target?: "_blank";
	referrerpolicy?: "no-referrer";
	icon?: Icon;
	value?: string;
	variant?: "primary" | "secondary" | "plain" | "symbol";
	customClass?: string;
}

// TODO: Use Svelte HTMLAttributes for other components
export interface ImageProps extends HTMLImgAttributes {
	src: string;
	type: "responsive" | "contentful";
	contentfulOptions?: {
		width: ContentfulImage["width"];
		height: ContentfulImage["height"];
		densities: [number, number][];
		sizes: string;
		queryParams: {
			quality: number;
			format: "webp" | "jpg" | "png";
			fit: "fill" | "thumb";
		};
	};
}
