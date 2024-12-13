<script lang="ts">
	// Types
	import type { ButtonProps } from "$lib/types/components";

	// Styles
	import "$lib/styles/button.css";

	// Helpers
	import { useRenderIcon } from "$lib/helpers/components";

	// Props
	let { type, value, icon, variant = "primary", ...restProps }: ButtonProps = $props();
</script>

{#snippet renderSpan(variant?: string, value?: ButtonProps["value"])}
	{#if variant !== "symbol"}
		<span>{value}</span>
	{/if}
{/snippet}

{#snippet renderIcon(icon?: string)}
	{#if icon}
		{@html useRenderIcon(icon)}
	{/if}
{/snippet}

{#if type}
	<button
		{...restProps}
		class={`button--${variant} ${restProps.class ?? ""}`.trim()}
		{type}
	>
		{@render renderSpan?.(variant, value)}
		{@render renderIcon?.(icon)}
	</button>
{/if}
