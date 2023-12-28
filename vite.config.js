import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [vue(), svgLoader()],
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the limit as needed
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', 'your-other-dependencies'],
    },
  },
});
