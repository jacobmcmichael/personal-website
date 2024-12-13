<script lang="ts">
	// Types
	import type { LinkProps } from "$lib/types/components";

	// Styles
	import "$lib/styles/link.css";

	// Helpers
	import { useRenderIcon } from "$lib/helpers/components";

	// Props
	let { href, variant = "primary", icon, children, ...restProps }: LinkProps = $props();
</script>

{#snippet renderSpan()}
	{#if children}
		{@render children()}
	{/if}
{/snippet}

{#snippet renderIcon(icon?: string)}
	{#if icon}
		{@html useRenderIcon(icon)}
	{/if}
{/snippet}

{#if href}
	<a
		{...restProps}
		class={`link--${variant} ${restProps.class ?? ""}`.trim()}
		{href}
	>
		{@render renderSpan?.()}
		{@render renderIcon?.(icon)}
	</a>
{/if}
