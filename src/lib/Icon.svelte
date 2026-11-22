<script lang="ts">
	import type { LinkIcon } from './links.ts';

	let { name, class: className = '' }: { name: LinkIcon; class?: string } = $props();
</script>

<svg
	class={className}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="1.75"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	{#if name === 'email'}
		<rect x="3" y="5" width="18" height="14" rx="2" />
		<path d="m3 7 9 6 9-6" />
	{:else if name === 'linkedin'}
		<rect x="3" y="3" width="18" height="18" rx="3" />
		<path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
	{:else if name === 'instagram'}
		<rect x="3" y="3" width="18" height="18" rx="5" />
		<circle cx="12" cy="12" r="4" />
		<path d="M17.5 6.5v.01" />
	{:else if name === 'blog'}
		<path d="M12 20h9" />
		<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
	{/if}
</svg>
