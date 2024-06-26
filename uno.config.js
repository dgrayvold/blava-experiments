import {
	defineConfig,
	presetWind,
	presetAttributify,
	transformerDirectives,
} from 'unocss';

export default defineConfig({
	presets: [presetWind(), presetAttributify()],

	transformers: [transformerDirectives()],

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
});
