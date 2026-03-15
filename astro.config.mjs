import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// export default defineConfig({
//   site: 'https://oleks.fr',
//   integrations: [mdx(), sitemap()]
// });

export default defineConfig({
  site: 'https://olekscode.github.io/oleks.fr',
  base: '/oleks.fr/'
});