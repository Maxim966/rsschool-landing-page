import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    devSourcemap: true,
  },

  build: {
    sourcemap: true,
    minify: false,
    terserOptions: false,
    cssMinify: false,

    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },

  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.webp'],
});