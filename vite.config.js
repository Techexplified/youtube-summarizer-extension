import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(),react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),     // Main React app (YouTube inject)
        popup: resolve(__dirname, 'popup.html'),    // Popup HTML for extension icon
      },
      output: {
        format: 'es', // Important: expose to global scope
        entryFileNames: 'assets/main.js', // Keep filename consistent
        assetFileNames: (chunkInfo) => {
          // 👇 give a fixed name to CSS
          if (chunkInfo.name && chunkInfo.name.endsWith('.css')) {
            return 'assets/main.css';
          }
          return 'assets/main.ext';
        },
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      },
    },
    outDir: 'dist', // keep this for your extension
    emptyOutDir: true,
     cssCodeSplit: false, // <-- important
  }
});
