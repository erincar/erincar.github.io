<script>
	import NewsFeed from '$components/NewsFeed.svelte';
	import '../app.css';
</script>

<nav>
	<a href="/">home</a>
	{#each ['about', 'works', 'blog', 'links', 'cv'] as page}
		<a href="/{page}">{page}</a>
	{/each}
</nav>
<main>
	<slot />
</main>
<footer>
	<NewsFeed />
</footer>

<style lang="postcss">
	nav {
		/* Placement */
		/* Layout */
		@apply flex flex-row justify-between;
		/* Appearance */
		@apply bg-blue-600;
		/* Typography */
		@apply text-4xl;

		/* Ancestors */
		a {
			/* Placement */
			@apply block mx-8;
			/* Layout */
			/* Appearance */
			/* Typography */
		}
	}

    main {
		/* Placement */
		/* Layout */
		/* Appearance */
		/* Typography */
        @apply text-8xl;
    }

	footer {
		/* Placement */
        @apply absolute bottom-0 w-full;
		/* Layout */
        @apply py-6;
		/* Appearance */
        @apply bg-emerald-500;
		/* Typography */
	}
</style>
