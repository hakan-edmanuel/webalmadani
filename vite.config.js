import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        profile: resolve(__dirname, 'profile/index.html'),
        kegiatan: resolve(__dirname, 'kegiatan/index.html'),
        gallery: resolve(__dirname, 'gallery/index.html'),
      },
    },
  },
});