<template>
	<div>
		<canvas v-for="i in 4" ref="blavas" />
	</div>
</template>

<script setup>
import { onMounted, useTemplateRef } from 'vue';
import { Blava } from 'blava';

defineOptions({
	name: 'Funky Candles',
	creator: 'Daniel Grayvold',
});

const blavas = useTemplateRef('blavas');

onMounted(() => {
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

	const gradients = ['#ff5139', '#ffff39', '#51ff53', '#4c53ff'];

	blavas.value.forEach((blava, index) => {
		new Blava(blava, { ...sharedOptions, gradient: gradients[index] });
	});
});
</script>

<style scoped lang="postcss">
canvas {
	@apply w-[25%] -ml-8 md:ml-0 h-128;
}

div {
	@apply flex justify-center items-end h-full w-full;
}
</style>
