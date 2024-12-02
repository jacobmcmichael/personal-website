<script lang="ts">
	/* Styles */
	import "$lib/styles/button.css";

	/* Components */
	import {
		ArrowRight,
		ArrowUpRight,
		Menu,
	} from "$lib/components/Icons.svelte";

	/* Types */
	import type { ButtonProps } from "$lib/types/components";

	const renderDefaultIcon = (variant: string) => {
		switch (variant) {
			case "symbol":
				return "arrow-right";

			default:
				return undefined;
		}
	};

	let {
		type = "button",
		value = "button",
		variant = "primary",
		icon = renderDefaultIcon(variant),
		customClass = "",
		...restProps
	}: ButtonProps = $props();
</script>

{#snippet renderIcon(icon: string)}
	{#if icon === "arrow-right"}
		{@html ArrowRight()}
	{:else if icon === "arrow-up-right"}
		{@html ArrowUpRight()}
	{:else if icon === "menu"}
		{@html Menu()}
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
			{...restProps}
		>
			{@render renderSpan?.(variant, value)}
			{#if icon}
				{@render renderIcon?.(icon)}
			{/if}
		</button>
	{:else}
		<button
			class={`button--${variant} ${customClass}`.trim()}
			{type}
			aria-label={value}
			{...restProps}
		>
			{#if icon}
				{@render renderIcon?.(icon)}
			{/if}
		</button>
	{/if}
{/snippet}

{@render renderButton(variant, value)}
