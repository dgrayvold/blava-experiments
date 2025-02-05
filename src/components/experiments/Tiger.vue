<template>
	<canvas
		ref="blava"
		class="w-256 md:w-[200vw] absolute -left-92 md:-left-1/2 h-full"
	/>
</template>

<script setup>
import { onMounted, useTemplateRef } from 'vue';
import { Blava } from 'blava';

defineOptions({
	name: 'Tiger',
	creator: 'Daniel Grayvold',
});

const blava = useTemplateRef('blava');

onMounted(() => {
	new Blava(blava.value, {
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
});
</script>
