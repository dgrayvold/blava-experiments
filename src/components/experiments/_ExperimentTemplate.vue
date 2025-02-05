<template>
	<canvas ref="blava" class="w-full h-full" />
</template>

<script setup>
import { onMounted, useTemplateRef } from 'vue';
import { Blava } from 'blava';

defineOptions({
	name: 'Experiment name here',
	creator: 'Your name here',
});

const blava = useTemplateRef('blava');

onMounted(() => {
	new Blava(blava.value, {
		// Your options here
		// https://blava.greatnews.life for full list of config properties
	});
});
</script>
