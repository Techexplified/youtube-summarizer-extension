import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(),tailwindcss(),],
  build: {
    rollupOptions: {
      output: {
        format: 'iife', // Important: expose to global scope
        entryFileNames: 'assets/main.js', // Keep filename consistent
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      },
    },
    outDir: 'dist', // keep this for your extension
    emptyOutDir: true,
  }
});
