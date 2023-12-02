<script>
	import { T } from '@threlte/core';

	import { interactivity } from '@threlte/extras';
	import { spring } from 'svelte/motion';

	interactivity();
	const scale = spring(1);
</script>

<T.PerspectiveCamera
	makeDefault
	position={[2, 2, 2]}
	on:create={({ ref }) => {
		ref.lookAt(0, 1, 0);
	}}
/>

<T.Mesh
	position.y={1}
	scale={$scale}
	on:pointerenter={() => scale.set(1.5)}
	on:pointerleave={() => scale.set(1)}
>
	<T.BoxGeometry />
	<T.MeshBasicMaterial color="red" />
</T.Mesh>
