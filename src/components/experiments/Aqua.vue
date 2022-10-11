<template>
	<div>
		<canvas ref="blava" class="absolute bottom-0 w-full h-[75%]" />
		<canvas ref="blava2" class="absolute bottom-0 w-full h-[70%]" />
		<canvas ref="blava3" class="absolute bottom-0 w-full h-[55%]" />
		<canvas ref="blava4" class="absolute bottom-0 w-full h-[35%]" />
	</div>
</template>
<script>
import { Blava } from 'blava';

export default {
	name: 'Aqua',
	creator: 'Daniel Grayvold',

	components: {
		Blava,
	},

	mounted() {
		const standardOptions = {
			style: 'wave',
			movementSpeed: 0.0013,
		};
		const b1 = new Blava(this.$refs.blava, {
			...standardOptions,
			gradient: '#efefff',
			seed: '01nv928ej9fj2vncposi',
		});
		const b2 = new Blava(this.$refs.blava2, {
			...standardOptions,
			gradient: '#41cfff',
			seed: 'apbosiadvasdv',
		});
		const b3 = new Blava(this.$refs.blava3, {
			...standardOptions,
			gradient: '#219fff',
			seed: 'vnv9w8je9-w98j',
		});
		const b4 = new Blava(this.$refs.blava4, {
			...standardOptions,
			gradient: '#015ff7',
			seed: 'n9ev92e8jfw9j',
		});
	},
};
</script>
