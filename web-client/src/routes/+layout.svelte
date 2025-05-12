<script lang="ts">
	import '../app.css';
	import RouteBox from '$lib/RouteBox.svelte';

	let { data, children } = $props();
</script>

<RouteBox routemap={data.sitemap}>
	{@render children()}
</RouteBox>

<style lang="postcss">
	@reference "../app.css";
</style>
