<template>
	<div>
		<canvas
			v-for="i in 10"
			:ref="el => blavas.push(el)"
			class="absolute left-0 bottom-0 top-1/4 w-full h-full"
		/>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Blava } from 'blava';

defineOptions({
	name: 'Rolling Hills',
	creator: 'Daniel Grayvold',
});

const blavas = ref([]);

onMounted(() => {
	blavas.value.forEach((canvas, index) => {
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
