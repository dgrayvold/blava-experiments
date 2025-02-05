<template>
	<div>
		<canvas
			v-for="classes in blavaClassSets"
			ref="blavas"
			:class="`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${classes}`"
		/>
	</div>
</template>

<script setup>
import { onMounted, useTemplateRef } from 'vue';
import { Blava } from 'blava';

defineOptions({
	name: 'Sunlight',
	creator: 'Daniel Grayvold',
});

const blavaClassSets = [
	'w-[75vmax] h-[75vmax]',
	'w-[60vmax] h-[60vmax]',
	'w-[50vmax] h-[50vmax]',
	'w-[30vmax] h-[30vmax]',
];

const blavas = useTemplateRef('blavas');

onMounted(() => {
	const sharedOptions = {
		style: 'blob',
		seed: 'blava',
		pointCount: 100,
		movementSpeed: 'slow',
	};

	const blavaConfigs = [
		{
			gradient: '#fa0',
			variance: {
				x: 3,
				y: 3,
			},
		},
		{
			gradient: '#fc0',
			variance: {
				x: 1,
				y: 1,
			},
		},
		{
			gradient: '#ff0',
			variance: {
				x: 0.25,
				y: 0.25,
			},
		},
		{
			gradient: '#fff',
			variance: {
				x: 0.25,
				y: 0.25,
			},
		},
	];

	blavaConfigs.forEach((config, index) => {
		new Blava(blavas.value[index], { ...sharedOptions, ...config });
	});
});
</script>
