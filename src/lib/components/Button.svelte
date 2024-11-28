<script lang="ts">
	/* Styles */
	import "$lib/styles/button.css";

	/* Components */
	import { ArrowRight } from "$lib/components/Icons.svelte";

	interface ButtonProps {
		type?: "submit" | "reset" | "button";
		icon?: "arrow-right" | string;
		value?: string;
		variant?: "primary" | "secondary" | "symbol";
		customClass?: string;
	}

	let {
		type = "button",
		value = "button",
		variant = "primary",
		icon = variant === "symbol" ? "arrow-right" : "",
		customClass = "",
	}: ButtonProps = $props();
</script>

{#snippet renderIcon(icon: string)}
	{#if icon === "arrow-right"}
		{@html ArrowRight()}
	{:else if typeof icon === "string"}
		{@html icon}
	{/if}
{/snippet}

{#snippet renderSpan(variant: string, value: string)}
	{#if variant !== "symbol"}
		<span>{value}</span>
	{/if}
{/snippet}

{#snippet renderButton(variant: string, value: string)}
	{#if variant !== "symbol"}
		<button
			class={`button--${variant} ${customClass}`.trim()}
			{type}
		>
			{@render renderSpan?.(variant, value)}
			{@render renderIcon?.(icon)}
		</button>
	{:else}
		<button
			class={`button--${variant} ${customClass}`.trim()}
			{type}
			aria-label={value}
		>
			{@render renderIcon?.(icon)}
		</button>
	{/if}
{/snippet}

{@render renderButton(variant, value)}
