import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    outDir: 'build',
    minify: true,
    cssMinify: true,
    chunkSizeWarningLimit: 2000, // Aviso ao atingir 2KB
    rollupOptions: {
      output: {
        minifyInternalExports: true,
      },
    },
  },
  server: {
    port: 3000,
  },
  plugins: [react(), tsConfigPaths()],
});
