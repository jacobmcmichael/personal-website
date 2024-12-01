export interface ButtonProps {
	type?: "submit" | "reset" | "button";
	icon?: "arrow-right";
	value?: string;
	variant?: "primary" | "secondary" | "symbol";
	customClass?: string;
}

export interface LinkProps {
	href?: string;
	target?: "_blank";
	referrerpolicy?: "no-referrer";
	icon?: "arrow-right" | "arrow-up-right";
	value?: string;
	variant?: "primary" | "secondary" | "plain" | "symbol";
	customClass?: string;
}
