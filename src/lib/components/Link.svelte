<script lang="ts">
	/* Types */
	import type { LinkProps } from "$lib/types/components";

	/* Styles */
	import "$lib/styles/link.css";

	/* Components */
	import {
		ArrowRight,
		ArrowUpRight,
		Menu,
	} from "$lib/components/Icons.svelte";

	/* Helpers */
	import { useDefaultIcon } from "$lib/helpers/components";

	let {
		href = "/",
		target,
		referrerpolicy,
		value = "link",
		variant = "primary",
		icon = useDefaultIcon(variant),
		customClass = "",
		children,
		...restProps
	}: LinkProps = $props();
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
		{#if children}
			{@render children()}
		{:else}
			<span>{value}</span>
		{/if}
	{/if}
{/snippet}

{#snippet renderLink(variant: string, value: string)}
	{#if variant !== "symbol"}
		<a
			class={`link--${variant} ${customClass}`.trim()}
			{href}
			{target}
			{referrerpolicy}
			{...restProps}
		>
			{@render renderSpan?.(variant, value)}
			{#if icon}
				{@render renderIcon?.(icon)}
			{/if}
		</a>
	{:else}
		<a
			class={`link--${variant} ${customClass}`.trim()}
			{href}
			{target}
			{referrerpolicy}
			aria-label={value}
			{...restProps}
		>
			{#if icon}
				{@render renderIcon?.(icon)}
			{/if}
		</a>
	{/if}
{/snippet}

{@render renderLink(variant, value)}
