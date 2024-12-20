// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  site:'http://localhost:4321/#',
  integrations: [tailwind(), sitemap(), mdx(), markdoc()]
});