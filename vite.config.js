import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    assetsDir: '',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home/index.html'),
        services: resolve(__dirname, 'services/index.html'),
        gallery: resolve(__dirname, 'gallery/index.html'),
        contact: resolve(__dirname, 'contact-us/index.html'),
        about: resolve(__dirname, 'about-us/index.html'),
        hairServices: resolve(__dirname, 'services/hair/index.html'),
        skinFacialServices: resolve(__dirname, 'services/skin-facial/index.html'),
        herbalsServices: resolve(__dirname, 'services/freshface-herbals/index.html'),
        makeupServices: resolve(__dirname, 'services/makeup/index.html'),
        othersServices: resolve(__dirname, 'services/others/index.html')
      },
      output: {
        assetFileNames: assetInfo => {
          const originalName = assetInfo.originalFileNames?.[0] || assetInfo.names?.[0] || assetInfo.name || '';
          if (originalName.startsWith('interiors/')) return 'interiors/[name][extname]';
          if (originalName.startsWith('gallery/')) return 'gallery/[name][extname]';
          if (originalName.startsWith('stylist-images/')) return 'stylist-images/[name][extname]';
          if (originalName.startsWith('FF logo/')) return 'FF logo/[name][extname]';
          return '[name][extname]';
        }
      }
    }
  }
});
