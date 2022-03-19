<script>
	import Fa from 'svelte-fa';
	import { faGithub, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
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
		<a href="https://github.com/erincar"><Fa icon={faGithub} /></a>
		<a href="https://soundcloud.com/erincar"><Fa icon={faSoundcloud} /></a>
		<a href="https://vsco.com/erincarg">
			<svg class="w-8 h-8" style="fill: #ff0000;">
				<image
					xlink:href="https://upload.wikimedia.org/wikipedia/commons/3/32/VSCO_Seal.svg"
					class="w-8 h-8"
				/>
			</svg>
		</a>
		<a href="https://ko-fi.com/erincar">
			<svg class="w-8 h-8">
				<image xlink:href="https://storage.ko-fi.com/cdn/kofi_stroke_cup.svg" class="w-8 h-8" />
			</svg>
		</a>
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
		@apply bg-orange-500;
		a {
			@apply block text-4xl flex flex-col px-4;
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
	}
</style>
