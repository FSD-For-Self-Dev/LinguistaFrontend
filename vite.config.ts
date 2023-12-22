import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/0_app'),
      '@pages': path.resolve(__dirname, './src/1_pages'),
      '@widgets': path.resolve(__dirname, './src/2_widgets'),
      '@features': path.resolve(__dirname, './src/3_features'),
      '@entities': path.resolve(__dirname, './src/4_entities'),
      '@shared': path.resolve(__dirname, './src/5_shared'),
      '@assets': path.resolve(__dirname, './src/5_shared/assets'),
      '@styles': path.resolve(__dirname, './src/5_shared/styles'),
      '@ui': path.resolve(__dirname, './src/5_shared/ui'),
    },
  },
  plugins: [
    react(),
    svgr(),
    checker({
      typescript: true,
      eslint: { lintCommand: 'eslint . --ext ts,tsx ' },
    }),
  ],
  server: {
    port: 3000,
  },
});
