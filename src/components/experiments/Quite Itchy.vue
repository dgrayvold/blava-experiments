<template>
	<canvas ref="blava" class="absolute bottom-0 w-full h-1/2 min-h-32" />
</template>

<script setup>
import { onMounted, useTemplateRef } from 'vue';
import { Blava } from 'blava';

defineOptions({
	name: 'Quite Itchy',
	creator: 'Daniel Grayvold',
});

const blava = useTemplateRef('blava');

onMounted(() => {
	new Blava(blava.value, {
		gradient: {
			from: {
				color: '#f00',
				position: {
					x: 50,
					y: 50,
				},
			},
			to: {
				color: '#f99',
				position: {
					x: 50,
					y: 75,
				},
			},
		},
		pointCount: 500,
		seed: 'blava',
		movementSpeed: 5,
		variance: {
			x: 1,
			y: 5,
		},
	});
});
</script>
