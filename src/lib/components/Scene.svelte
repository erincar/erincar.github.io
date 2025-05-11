<script>
	import { T } from '@threlte/core';

	import { interactivity, useGltf } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import Woven from './Woven.svelte';

	interactivity();
	const scale = spring(1);
    export let letter = 't';

    // Create LogoLetter.svelte
    //   Loads the gltf with each letter (lower + upper) as a node
    //   Loads the material through gltf (texture, normalMap)
    //   Maybe loads lighting for it
    //   Instantiated with prop letter, chooses that node to show
    // Create PageLogo.svelte instead of this
    //   Creates the logo scene and places LogoLetter components
    //   Aligns them
    //   Controls rotation of the objects, inferring from scroll location
    // In the page layout, place the canvas into the middle
    // Once the logo is scrolled out of view, it switches to the sticky top bar,
    //   shown as the page logo on top left
</script>

<T.PerspectiveCamera
	makeDefault
	position={[0.3,-0.7,0]}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, -1);
	}}
/>

<T.DirectionalLight position={[0, 10, 10]} />


<Woven
  position={[0,0,-3]}
  scale={2}
  letter={letter}
/>


