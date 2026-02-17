<template>
	<div>
		<canvas
			v-for="heightClass in canvasHeightClasses"
			ref="blavas"
			:class="`absolute bottom-0 w-full ${heightClass}`"
		/>
	</div>
</template>

<script setup lang="ts">
import type { BlavaOptions } from 'blava';
import { onMounted, useTemplateRef } from 'vue';
import { Blava } from 'blava';

defineOptions({
	name: 'Aqua',
	creator: 'Daniel Grayvold',
});

const blavas = useTemplateRef('blavas');

const canvasHeightClasses = ['h-75%', 'h-70%', 'h-55%', 'h-35%'];

onMounted(() => {
	const commonConfig: BlavaOptions = {
		style: 'wave',
		movementSpeed: 0.0005,
	};

	const blavaConfigs = [
		{ gradient: '#efefff', seed: '01nv928ej9fj2vncposi' },
		{ gradient: '#41cfff', seed: 'apbosiadvasdv' },
		{ gradient: '#219fff', seed: 'vnv9w8je9-w98j' },
		{ gradient: '#015ff7', seed: 'n9ev92e8jfw9j' },
	];

	blavas.value?.forEach(
		(canvas, index) =>
			new Blava(canvas, { ...commonConfig, ...blavaConfigs[index] }),
	);
});
</script>
