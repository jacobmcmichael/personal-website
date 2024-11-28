<script lang="ts">
	import type { SvelteComponent } from "svelte";
	import "$lib/styles/button.css";

	interface ButtonProps {
		type?: "submit" | "reset" | "button";
		icon?: SvelteComponent;
		value?: string;
		variant?: "primary" | "secondary";
		customClass?: string;
	}

	let {
		type = "button",
		icon,
		value = "button",
		variant = "primary",
		customClass,
	}: ButtonProps = $props();
</script>

<button
	class={`button--${variant} ${customClass}`.trim()}
	{type}
>
	{icon}
	<span>{value}</span>
</button>
