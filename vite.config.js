import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Optional
      },
    },
    minify: 'esbuild', // or 'terser' for alternative minification
  },
  define: {
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false, // Set to false for production
    // Add any other feature flags here
  },
});