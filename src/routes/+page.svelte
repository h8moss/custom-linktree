<script lang="ts">
	import Icon from '#lib/Icon.svelte';
	import { links, profile } from '#lib/links.ts';

	const initials = profile.name
		.split(' ')
		.map((part) => part[0])
		.join('')
		.slice(0, 2);
	const year = new Date().getFullYear();
</script>

<svelte:head>
	<title>{profile.name}</title>
	<meta name="description" content="{profile.name} — {profile.tagline}" />
</svelte:head>

<div class="relative min-h-dvh overflow-hidden bg-black text-zinc-100 selection:bg-violet-500/40">
	<!-- Background grid -->
	<div aria-hidden="true" class="pointer-events-none absolute inset-0">
		<div
			class="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] bg-[size:48px_48px]"
		></div>
	</div>

	<main class="relative mx-auto flex min-h-dvh max-w-md flex-col items-center px-4 py-16 sm:py-24">
		<header class="flex flex-col items-center text-center">
			<div
				class="rounded-full bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-600 p-[2px] shadow-[0_0_40px_-5px] shadow-violet-600/60"
			>
				<div
					class="grid size-24 place-items-center rounded-full bg-zinc-950 text-3xl font-semibold tracking-tight text-violet-200"
				>
					{initials}
				</div>
			</div>
			<h1 class="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
				<span
					class="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent"
				>
					{profile.name}
				</span>
			</h1>
			<p class="mt-2 text-sm text-zinc-400">{profile.tagline}</p>
		</header>

		<ul class="mt-10 flex w-full flex-col gap-3">
			{#each links as link, i (link.href)}
				<li class="animate-rise" style="animation-delay: {i * 70}ms">
					<a
						href={link.href}
						target={link.href.startsWith('http') ? '_blank' : undefined}
						rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
						class="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-violet-500/60 hover:bg-violet-500/10 hover:shadow-[0_8px_30px_-8px] hover:shadow-violet-600/50 focus-visible:border-violet-400 focus-visible:outline-none"
					>
						<span
							class="grid size-11 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-violet-300 ring-1 ring-violet-500/30 transition group-hover:bg-violet-500 group-hover:text-white"
						>
							<Icon name={link.icon} class="size-5" />
						</span>
						<span class="min-w-0 flex-1">
							<span class="block font-medium text-zinc-100">{link.label}</span>
							<span class="block truncate text-sm text-zinc-400">{link.handle}</span>
						</span>
						<svg
							class="size-5 shrink-0 text-zinc-600 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-300"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path d="M7 17 17 7M8 7h9v9" />
						</svg>
					</a>
				</li>
			{/each}
		</ul>

		<footer class="mt-auto pt-16 text-xs text-zinc-600">© {year} {profile.name}</footer>
	</main>
</div>
