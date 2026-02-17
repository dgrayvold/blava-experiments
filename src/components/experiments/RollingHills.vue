<template>
	<div>
		<canvas
			v-for="_ in 10"
			ref="blavas"
			class="absolute left-0 bottom-0 top-1/4 w-full h-full"
		/>
	</div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';
import { Blava } from 'blava';

defineOptions({
	name: 'Rolling Hills',
	creator: 'Daniel Grayvold',
});

const blavas = useTemplateRef('blavas');

onMounted(() => {
	blavas.value?.forEach((canvas, index) => {
		if (!(canvas instanceof HTMLCanvasElement)) {
			return;
		}

		new Blava(canvas, {
			style: 'wave',
			seed: `waveform-${index}`,
			variance: {
				x: 0,
				y: 10,
			},
			gradient: `hsla(90, 81.82%, 43.14%, ${(index * 10) / 100})`,
			movementSpeed: 'slow',
		});
	});
});
</script>
