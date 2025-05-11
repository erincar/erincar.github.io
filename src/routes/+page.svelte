<script>
	import { Canvas } from '@threlte/core';
	import Scene from '$components/Scene.svelte';

    let letter = 't';
</script>

<h1>yes, erinc.space.</h1>
<div class="w-full" style="height: 600px;">
	<Canvas>
		<Scene letter={letter}/>
	</Canvas>
</div>

<select bind:value={letter} class="absolute bottom-1/2 right-0">
    <option>e</option>
    <option>x</option>
    <option>t</option>
</select>
