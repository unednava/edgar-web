// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` es la URL pública de la web. Se usa para la URL canónica, la imagen
// Open Graph y el sitemap. Cámbiala cuando conectes tu dominio propio.
export default defineConfig({
  site: 'https://edgar-web.edgar14np.workers.dev',
  output: 'static',
  integrations: [sitemap()],
});
