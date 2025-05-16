import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss(),],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),           // your main app (YouTube inject)
        popup: resolve(__dirname, 'popup.html')    // popup HTML
      },
      output: {
        format: 'es', // Important: expose to global scope
        entryFileNames: 'assets/main.js', // Keep filename consistent
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        inlineDynamicImports: false, // ✅ Explicitly disable this
      },
    },
    outDir: 'dist', // keep this for your extension
    emptyOutDir: true,
  }
});
