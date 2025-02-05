<template>
	<div>
		<canvas
			v-for="classes in blavaClassSets"
			ref="blavas"
			class="absolute bottom-0 w-1/2 h-full"
			:class="classes"
		/>
	</div>
</template>

<script setup>
import { onMounted, useTemplateRef } from 'vue';
import { Blava } from 'blava';

defineOptions({
	name: 'Rorschach',
	creator: 'Daniel Grayvold',
});

const blavas = useTemplateRef('blavas');

const blavaClassSets = ['', 'right-0 transform rotate-y-180'];

onMounted(() => {
	const sharedOptions = {
		gradient: '#efefff',
		seed: 'blava',
		pointCount: 20,
		points: [
			{ x: 0, y: 0, animated: false },
			{ x: 60, y: 0, animated: { x: true, y: true } },

			...Array(19)
				.fill(undefined)
				.map((_, index) => {
					return {
						x: 60,
						y: ((index + 1) / 19) * 100,
						animated: {
							x: true,
							y: false,
						},
					};
				}),
			{ x: 60, y: 100, animated: { x: true, y: false } },
			{ x: 0, y: 100, animated: false },
		],
		variance: {
			x: 30,
			y: 0,
		},
		movementSpeed: 0.000_1,
	};

	blavas.value.forEach(blava => new Blava(blava, sharedOptions));
});
</script>
