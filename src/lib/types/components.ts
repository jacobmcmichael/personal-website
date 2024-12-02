import type { HTMLAttributes } from "svelte/elements";

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
