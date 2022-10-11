<template>
	<div>
		<canvas
			ref="blava"
			class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75vmax] h-[75vmax]"
		/>
		<canvas
			ref="blava2"
			class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vmax] h-[60vmax]"
		/>
		<canvas
			ref="blava3"
			class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50vmax] h-[50vmax]"
		/>
		<canvas
			ref="blava4"
			class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30vmax] h-[30vmax]"
		/>
	</div>
</template>
<script>
import { Blava } from 'blava';

export default {
	name: 'Sunlight',
	creator: 'Daniel Grayvold',

	components: {
		Blava,
	},

	mounted() {
		const sharedOptions = {
			style: 'blob',
			seed: 'blava',
			pointCount: 100,
			movementSpeed: 'slow',
		};
		const b = new Blava(this.$refs.blava, {
			...sharedOptions,
			gradient: '#fa0',
			variance: {
				x: 3,
				y: 3,
			},
		});
		const b2 = new Blava(this.$refs.blava2, {
			...sharedOptions,
			gradient: '#fc0',
			variance: {
				x: 1,
				y: 1,
			},
		});
		const b3 = new Blava(this.$refs.blava3, {
			...sharedOptions,
			gradient: '#ff0',
			variance: {
				x: 0.25,
				y: 0.25,
			},
		});
		const b4 = new Blava(this.$refs.blava4, {
			...sharedOptions,
			gradient: '#fff',
			variance: {
				x: 0.25,
				y: 0.25,
			},
		});
	},
};
</script>
