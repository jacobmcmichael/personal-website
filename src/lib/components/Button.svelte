<script lang="ts">
	// Types
	import type { ButtonProps } from "$lib/types/components";

	// Styles
	import "$lib/styles/button.css";

	// Components
	import { ArrowRight, ArrowUpRight, Menu } from "$lib/components/Icons.svelte";

	let { type, value, icon, variant = "primary", ...restProps }: ButtonProps = $props();
</script>

{#snippet renderSpan(variant?: string, value?: ButtonProps["value"])}
	{#if variant !== "symbol"}
		<span>{value}</span>
	{/if}
{/snippet}

{#snippet renderIcon(icon?: string)}
	{#if icon === "arrow-right"}
		{@html ArrowRight()}
	{:else if icon === "arrow-up-right"}
		{@html ArrowUpRight()}
	{:else if icon === "menu"}
		{@html Menu()}
	{/if}
{/snippet}

{#if type}
	<button
		class={`button--${variant} ${restProps.class ?? ""}`.trim()}
		{type}
		{...restProps}
	>
		{@render renderSpan?.(variant, value)}
		{@render renderIcon?.(icon)}
	</button>
{/if}
