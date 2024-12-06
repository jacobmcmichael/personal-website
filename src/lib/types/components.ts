// Types
import type { ContentfulImage } from "./contentful";
import type { HTMLAnchorAttributes, HTMLButtonAttributes, HTMLImgAttributes } from "svelte/elements";

export type Icon = "arrow-right" | "arrow-up-right" | "menu";

export interface ButtonProps extends HTMLButtonAttributes {
	type: HTMLButtonAttributes["type"];
	value: HTMLButtonAttributes["value"];
	icon?: Icon;
	variant?: "primary" | "secondary" | "symbol";
}

export interface LinkProps extends HTMLAnchorAttributes {
	href: HTMLAnchorAttributes["href"];
	target?: HTMLAnchorAttributes["target"];
	referrerpolicy?: HTMLAnchorAttributes["referrerpolicy"];
	icon?: Icon;
	variant?: "primary" | "secondary" | "plain" | "symbol";
}

export interface ImageProps extends HTMLImgAttributes {
	src: HTMLImgAttributes["src"];
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
