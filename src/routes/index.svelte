<div class="header box">
	<h1>erinc.space</h1>
	<p>This page is being built.</p>
</div>

<div class="content box">
	<a href="https://sketchbook.erinc.space">Sketchbook</a><br />
	<a href="https://github.com/erincar">GitHub</a><br />
	<a href="https://soundcloud.com/erincar">SoundCloud</a><br />
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
		@apply bg-slate-300;
		a {
			@apply block;
		}
	}
</style>
