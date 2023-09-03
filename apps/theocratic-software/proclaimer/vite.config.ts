/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  cacheDir: '../../../node_modules/.vite/theocratic-software-proclaimer',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: '../../../',
    }),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: false,
      },
      // workbox: {
      // 	globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      // },
      manifest: {
        short_name: `${process.env.VITE_APP_NAME}`,
        name: `${process.env.VITE_APP_NAME}`,
        // scope: `${process.env.VITE_APP_REPO}`,
        scope: `.`,
        icons: [
          {
            src: "assets/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "assets/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "assets/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "assets/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        start_url: "./",
        display: "standalone",
        theme_color: `${process.env.VITE_APP_THEME_COLOR_PRIMARY}`,
        background_color: `${process.env.VITE_APP_THEME_COLOR_BACKGROUND}`,
      },
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
