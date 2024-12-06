<script lang="ts">
	// Types
	import type { LinkProps } from "$lib/types/components";

	// Styles
	import "$lib/styles/link.css";

	// Components
	import { ArrowRight, ArrowUpRight, Menu } from "$lib/components/Icons.svelte";

	let { href, variant = "primary", icon, children, ...restProps }: LinkProps = $props();
</script>

{#snippet renderSpan(variant?: string)}
	{#if children}
		<span>{@render children()}</span>
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

{#if href}
	<a
		class={`link--${variant} ${restProps.class ?? ""}`.trim()}
		{href}
		{...restProps}
	>
		{@render renderSpan?.(variant)}
		{@render renderIcon?.(icon)}
	</a>
{/if}
