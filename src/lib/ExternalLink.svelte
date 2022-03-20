<script lang="ts">
	export let url, icon_url;
</script>

<a href={url} target="_blank" rel="noopener noreferrer">
	<svg class="w-8 h-8">
		<image xlink:href={icon_url} class="w-8 h-8" />
	</svg>
</a>

<style lang="scss">
	a {
		@apply text-4xl px-4;
		@media (min-width: 768px) {
			// @apply text-7xl;
			font-size: 4rem;
			line-height: 1;
		}
	}
	svg,
	svg > image {
		@media (min-width: 768px) {
			width: 4rem;
			height: 4rem;
		}
	}
</style>
