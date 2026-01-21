import {
	defineConfig,
	presetWind4,
	presetAttributify,
	transformerDirectives,
	transformerVariantGroup,
	presetIcons,
} from 'unocss';

export default defineConfig({
	presets: [
		presetWind4({
			preflights: {
				reset: true,
			},
		}),
		presetAttributify(),
		presetIcons(),
	],

	transformers: [transformerDirectives(), transformerVariantGroup()],

	theme: {
		colors: {
			page: {
				main: '#010104',
				overlay: {
					darker: 'rgba(1,1,4,0.7)',
					lighter: 'rgba(1,1,4,0.5)',
				},
			},
		},
	},

	shortcuts: {
		'outline-basic':
			'rounded outline-2 outline-solid outline-transparent focus-visible:(outline-blue-400)',
	},
});
