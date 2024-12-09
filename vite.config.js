import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // This ensures the paths are correctly resolved during deployment.
  build: {
    outDir: 'dist', // Output directory for production build
  },
});
