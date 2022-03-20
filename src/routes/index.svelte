<script>
	import ExternalLink from '$lib/ExternalLink.svelte';
</script>

<div class="header box">
	<h1>erinc.space</h1>
	<p>This page is being built.</p>
</div>
<div class="content box">
	<div class="pb-8">
		<a href="https://sketchbook.erinc.space">Sketchbook</a>
	</div>
	<div class="flex flex-row place-content-center">
		<ExternalLink
			url="https://github.com/erincar"
			icon_url="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
		/>
		<ExternalLink
			url="https://soundcloud.com/erincar"
			icon_url="https://www.svgrepo.com/show/156265/soundcloud-logo.svg"
		/>
		<ExternalLink
			url="https://vsco.com/erincarg"
			icon_url="https://upload.wikimedia.org/wikipedia/commons/3/32/VSCO_Seal.svg"
		/>
		<ExternalLink
			url="https://ko-fi.com/erincar"
			icon_url="https://storage.ko-fi.com/cdn/kofi_stroke_cup.svg"
		/>
	</div>
</div>

<style lang="scss">
	div.box {
		/* Placement */
		@apply m-auto my-4 w-8/12;
		/* Layout */
		@apply p-4 text-center;
		/* Appearance */
		/* Typography */
	}

	div.header {
		@apply bg-green-300;
		h1 {
			@apply text-4xl;
			@media (min-width: 768px) {
				// @apply text-7xl;
				font-size: 4rem;
				line-height: 1;
			}
		}
	}

	div.content {
		@apply block flex flex-col text-4xl;
		@apply bg-orange-500;
	}
</style>
