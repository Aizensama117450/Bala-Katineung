import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

import tailwind from '@astrojs/tailwind';

import playformCompress from '@playform/compress';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: netlify(),
  integrations: [tailwind(), playformCompress()]
});