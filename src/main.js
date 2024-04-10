import { createApp } from 'vue';
import App from './App.vue';
import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';

import '@fontsource-variable/overpass';

const app = createApp(App);

app.mount('#app');
