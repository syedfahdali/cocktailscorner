import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Update the base URL to match your GitHub repository name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Define alias for src directory
    },
  },
  server: {
    port: 5173, // Specify the development server port
  },
});
