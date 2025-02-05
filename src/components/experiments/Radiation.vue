<template>
	<canvas ref="blava" class="absolute -left-1/2 w-[200%] h-[200%]" />
</template>

<script setup>
import { onMounted, useTemplateRef } from 'vue';
import { Blava } from 'blava';

defineOptions({
	name: 'Radiation',
	creator: 'Daniel Grayvold',
});

const blava = useTemplateRef('blava');

onMounted(() => {
	new Blava(blava.value, {
		style: 'blob',
		pointCount: 300,
		gradient: {
			from: {
				color: '#03f',
				position: {
					x: 30,
					y: 30,
				},
			},
			to: {
				color: '#07f',
				position: {
					x: 50,
					y: 50,
				},
			},
		},
		movementSpeed: 'slow',
		seed: 'blava',
	});
});
</script>
