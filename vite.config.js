// vite.config.js
import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
	plugins: [
		wasm(),
	],
	vite: {
		plugins: [wasm()],
	},
});
