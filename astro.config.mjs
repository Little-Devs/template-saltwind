// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  base: '/',
  site: 'https://saltwind.little.website/',
  vite: { plugins: [tailwindcss()] },
});
