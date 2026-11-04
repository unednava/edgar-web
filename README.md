# Web de Edgar Navarro

Astro 7 + TypeScript, sitio estático. Sin frameworks de UI ni dependencias extra.

## Arrancar en local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # revisa tipos y genera /dist
```

## Dónde se edita cada cosa

| Qué quieres cambiar                  | Archivo                    |
|--------------------------------------|----------------------------|
| Textos, métricas, marcas, redes      | `src/data/site.ts`         |
| Videos (añadir uno nuevo)            | `src/data/videos.ts`       |
| Colores y tipografía                 | `src/styles/global.css`    |
| Orden de las secciones               | `src/pages/index.astro`    |
| Tarjeta animada del inicio           | `src/data/site.ts`         |
| Contexto para Claude (tono, concepto)| `CLAUDE.md`                |

Para añadir un video, copia el ejemplo comentado en `videos.ts` y pon el ID de YouTube.
Cuando haya al menos uno, la sección cambia sola de "Próximos videos" a "Últimos videos".

## Newsletter

1. Crea una cuenta gratis en Buttondown, Kit o Beehiiv.
2. Copia la URL `action` de su formulario HTML embebido.
3. Pégala en `newsletterAction` dentro de `src/data/site.ts`.

Mientras esté vacía, el botón aparece desactivado con el texto "La newsletter abre pronto".

## Publicar en Cloudflare (gratis)

La web se publica en **Cloudflare Workers con static assets**, conectada a GitHub:
cada `git push` a `main` compila y publica sola la web.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy` (lee `wrangler.jsonc`, que sirve `./dist`)
- Versión de Node: la fija `.node-version`

Cuando compres tu dominio, sigue los pasos de "Dominio propio" en `CLAUDE.md`
y cambia `site` en `astro.config.mjs` y la línea `Sitemap:` de `public/robots.txt`.

## Imagen para redes

`public/og.png` (1200×630) se genera desde `scripts/og.html` con una captura del navegador.
