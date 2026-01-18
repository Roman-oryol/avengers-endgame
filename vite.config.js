import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // включить sourcemap для сборки (покажет ссылки на исходники в DevTools)
    sourcemap: true,
  },
  css: {
    // CSS sourcemaps в режиме разработки
    devSourcemap: true,
  },
  resolve: {
    // удобный алиас для импортов (по желанию)
    alias: [{ find: '@', replacement: '/src' }],
  },
});
