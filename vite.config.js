import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { svgSpritemap } from 'vite-plugin-svg-spritemap';

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

  plugins: [
    ViteImageOptimizer({
      exclude: /spritemap\.svg$/,
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      webp: {
        lossless: true,
      },
      svg: {
        multipass: true,
      },
    }),
    svgSpritemap({
      pattern: 'src/assets/svg/*.svg',
      svgo: false,
    }),
  ],
});