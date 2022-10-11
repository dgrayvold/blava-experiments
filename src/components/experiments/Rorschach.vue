<template>
	<div>
		<canvas ref="blava" class="absolute bottom-0 w-1/2 h-full" />
		<canvas
			ref="blava2"
			class="absolute bottom-0 right-0 w-1/2 h-full transform rotate-y-180"
		/>
	</div>
</template>
<script>
import { Blava } from 'blava';

export default {
	name: 'Rorschach',
	creator: 'Daniel Grayvold',

	components: {
		Blava,
	},

	mounted() {
		const sharedOptions = {
			gradient: '#efefff',
			seed: 'blava',
			pointCount: 20,
			points: [
				{ x: 0, y: 0, animated: false },
				{ x: 60, y: 0, animated: { x: true, y: true } },

				...Array(19)
					.fill(undefined)
					.map((point, index) => {
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

		const b = new Blava(this.$refs.blava, sharedOptions);
		const b2 = new Blava(this.$refs.blava2, {
			...sharedOptions,
		});
	},
};
</script>
