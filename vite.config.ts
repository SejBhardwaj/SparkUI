import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@types': path.resolve(__dirname, './src/types'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    sourcemap: true,
    minify: 'terser',
  },
  server: {
    port: 5173,
    open: true,
  },
});

// Code splitting configuration
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'ui-core': ['./src/components/feedback', './src/components/forms'],
          'ui-data': ['./src/components/data-display'],
          'ui-layout': ['./src/components/layout'],
          'ui-nav': ['./src/components/navigation'],
        },
      },
    },
  },
});
