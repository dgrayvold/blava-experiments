<template>
	<div>
		<canvas id="blava" ref="blava" />
		<canvas id="blava2" ref="blava2" />
		<canvas id="blava3" ref="blava3" />
		<canvas id="blava4" ref="blava4" />
	</div>
</template>
<script>
import { Blava } from 'blava';

export default {
	name: 'Funky Candles',
	creator: 'Daniel Grayvold',

	components: {
		Blava,
	},

	mounted() {
		const sharedOptions = {
			points: [
				{ x: 20, y: 100, animated: false },
				{ x: 80, y: 100, animated: false },
				{ x: 80, y: 50, animated: { x: false, y: true } },
				{ x: 70, y: 50, animated: { x: true, y: true } },
				{ x: 60, y: 50, animated: { x: true, y: true } },
				{ x: 50, y: 50, animated: { x: true, y: true } },
				{ x: 40, y: 50, animated: { x: true, y: true } },
				{ x: 30, y: 50, animated: { x: true, y: true } },
				{ x: 20, y: 50, animated: { x: false, y: true } },
			],
			seed: 'blava',
			movementSpeed: 'jelly',
			variance: {
				x: 3,
				y: 20,
			},
		};

		new Blava(this.$refs.blava, {
			...sharedOptions,
			gradient: '#ff5139',
		});
		new Blava(this.$refs.blava2, {
			...sharedOptions,
			gradient: '#ffff39',
		});
		new Blava(this.$refs.blava3, {
			...sharedOptions,
			gradient: '#51ff53',
		});
		new Blava(this.$refs.blava4, {
			...sharedOptions,
			gradient: '#4c53ff',
		});
	},
};
</script>

<style scoped lang="postcss">
canvas {
	@apply w-[25%] -ml-8 md:ml-0 h-128;
}

div {
	@apply flex justify-center items-end h-full w-full;
}
</style>
