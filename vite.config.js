import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/todo-list/',
  build: {
    rollupOptions: {
      external: ['react-icons/gr'],
    },
  },
});
