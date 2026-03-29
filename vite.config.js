import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'docs', // Output to /docs for GitHub Pages compatibility
    emptyOutDir: true,
  },
  base: './', // Use relative paths for assets to work easily on GitHub Pages
});
