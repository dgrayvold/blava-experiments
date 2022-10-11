import { defineConfig } from 'vite';

export default defineConfig({
	attributify: true,
	theme: {
		extend: {
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
	},
});
