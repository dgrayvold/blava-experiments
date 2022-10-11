<template>
	<canvas ref="blava" class="w-full h-full" />
</template>
<script>
import { Blava } from 'blava';

export default {
	name: 'Experiment name here',
	creator: 'Your name here',

	components: {
		Blava,
	},

	mounted() {
		const b = new Blava(this.$refs.blava, {
			// Your options here
			// https://blava.greatnews.life for full list of config properties
		});
	},
};
</script>
