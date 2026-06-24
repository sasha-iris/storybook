import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'test-app',
  publicDir: resolve(__dirname, 'public'),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'test-app/index.html'),
        modal: resolve(__dirname, 'test-app/modal.html'),
      },
    },
  },
});
