import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

import tailwind from '@astrojs/tailwind';

import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  integrations: [tailwind(), playformCompress()]
});
