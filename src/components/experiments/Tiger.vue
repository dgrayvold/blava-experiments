<template>
	<canvas
		ref="blava"
		class="w-256 md:w-[200vw] absolute -left-92 md:-left-1/2 h-full"
	/>
</template>
<script>
import { Blava } from 'blava';

export default {
	name: 'Tiger',
	creator: 'Daniel Grayvold',

	components: {
		Blava,
	},

	mounted() {
		const b = new Blava(this.$refs.blava, {
			style: 'blob',
			pointCount: 50,
			seed: 'blava',
			movementSpeed: 0.000_001,
			variance: {
				x: 100,
				y: 500,
			},
			gradient: '#f50',
		});
	},
};
</script>
