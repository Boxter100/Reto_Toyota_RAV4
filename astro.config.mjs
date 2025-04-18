// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://boxter100.github.io/Reto_Toyota_RAV4',
  base: '/Reto_Toyota_RAV4/', // <- con slashes
});
