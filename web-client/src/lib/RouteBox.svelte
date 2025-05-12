<script lang="ts">
	import { page } from '$app/state';
	import RouteBox from '$lib/RouteBox.svelte';

	let { current = 0, routemap, children } = $props();

	const routeNodes = $derived.by(() => {
		let result = page.url.pathname.split('/');
		result[0] = `${page.url.hostname}${page.url.port ? ':' + page.url.port : ''}`;
		result = result.filter((e) => e !== '');
		return result;
	});
	let currentUrl = $derived(routeNodes.slice(0, current + 1).join('/'));
</script>

<div class="wrapper">
	<header>
		<nav class="current">
			<a href="//{currentUrl}"><div>{routeNodes[current]}</div></a>
		</nav>

		<nav class="subroutes">
			{#each Object.keys(routemap) as route}
				<a href="//{currentUrl}/{route}"><div>{route}</div></a>
			{/each}
		</nav>
	</header>
	<main>
		{#if current < routeNodes.length - 1}
			<RouteBox routemap={routemap[routeNodes[current + 1]]} current={current + 1}>
				{@render children?.()}
			</RouteBox>
		{:else}
			{@render children?.()}
		{/if}
	</main>
</div>

<style lang="postcss">
	@reference "../app.css";

	div.wrapper {
		@apply h-full w-full;
		@apply flex flex-col-reverse md:flex-col;
		& > * {
			@apply box-border border border-l-8;
		}
	}

	header {
		@apply flex flex-row justify-between px-1;
		& > nav.current {
		}

		& > nav.subroutes {
			@apply flex flex-row items-end gap-4;
		}
	}

	main {
		@apply grow;
		@apply flex p-1;
	}
</style>
