import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: 'build',
	},
	base: '/',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@static': path.resolve(__dirname, './src/static'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@components': path.resolve(__dirname, './src/components'),
			'@ui': path.resolve(__dirname, './src/components/UI'),
			'@pages': path.resolve(__dirname, './src/components/pages'),
			'@shared': path.resolve(__dirname, './src/shared'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@api': path.resolve(__dirname, './src/api'),
		},
	},
	plugins: [react(), svgr()],
	server: {
		port: 3000,
	},
});
