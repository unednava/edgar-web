# CLAUDE.md — Web de Edgar Navarro

Contexto para futuras sesiones. Léelo antes de tocar nada.

## Quién es Edgar

Edgar Navarro, Paid Media Specialist en 4Geeks Academy (Venezuela). Más de 7 años en paid media,
growth marketing y análisis de datos para marcas de LATAM, España y EE. UU. (Banesco, Domino's,
Coca-Cola FEMSA, Avior Airlines, Honeywell, Cruz Roja, entre otras). Reducciones de CPA de más del 20 %.
Herramientas: Google Ads, Meta Ads, GA4, Looker Studio, n8n, LLMs y OpenRouter.
LinkedIn: https://www.linkedin.com/in/edgnavarros

Está creando una marca personal sobre **marketing real con IA**: paid media, datos y automatización
explicados en videos de YouTube de ~7 minutos, con números reales y plantillas de n8n descargables.
Inspiración: fazt.dev (lo mismo, pero para desarrollo con IA).

## Tono y estrategia (obligatorio en cualquier texto)

- Tranquilo, honesto y orgánico. Nada exagerado: sin "hazte rico con IA", sin "esto lo cambia todo",
  sin emojis de hype.
- Se muestra lo que funciona, lo que no y cuánto cuesta.
- Etapa inicial: la web prioriza credibilidad, contenido gratis y captar correos.
  **Todavía no se vende nada**: sin precios, sin plan PRO, sin asesorías visibles.
- Idioma: español neutro.
- **No cambies el concepto visual, los textos ni el tono sin preguntar a Edgar.** Si algo es mejorable,
  propónlo primero.
- No añadas dependencias innecesarias: la web tiene que seguir siendo ligera.
- Pide confirmación antes de cualquier acción irreversible o que use sus cuentas
  (crear repos, desplegar, borrar archivos).

## Concepto visual

Metáfora del **Ads Manager** (como fazt.dev usa git y la terminal):

- Barra superior de "cuenta activa" (`cuenta: edgar-navarro · estado: activa · presupuesto: contenido gratis`).
- El contenido se presenta como "campañas activas" (tabla con estado `activa`).
- Métricas con nombres tipo `nombre_de_metrica` en monoespaciada.
- Demo animada en el hero: un flujo de n8n detecta un CPA alto → un LLM lo diagnostica →
  se pausa el anuncio → se envía un resumen por correo. Respeta `prefers-reduced-motion`.
- Modo oscuro: fondo `#0b111c`, acento verde "activo" `#3ddc97`.
- Tipografías: IBM Plex Sans (texto) e IBM Plex Mono (datos/métricas), desde Google Fonts.

## Stack

- Astro 7 + TypeScript strict, sitio 100 % estático (`output: 'static'`).
- Sin frameworks de UI, sin Tailwind. CSS propio con variables en `src/styles/global.css`.
- Única integración: `@astrojs/sitemap`.
- Node 24.18.0 (fijado en `.node-version`). Es el que trae preinstalado Workers Builds; Astro 7 exige ≥ 22.23.4.

## Dónde se edita cada cosa

| Qué                                              | Archivo                         |
|--------------------------------------------------|---------------------------------|
| Textos, métricas, caminos, plantilla, marcas, redes | `src/data/site.ts`           |
| URL del formulario de la newsletter              | `src/data/site.ts` → `newsletterAction` |
| Videos (añadir al principio de la lista)         | `src/data/videos.ts`            |
| Próximos videos (si `videos` está vacío)         | `src/data/videos.ts` → `upcoming` |
| Colores, tipografía, estilos base                | `src/styles/global.css`         |
| Orden de las secciones                           | `src/pages/index.astro`         |
| Pasos de la demo animada                         | `src/components/Hero.astro`     |
| SEO, Open Graph, fuentes                         | `src/layouts/Base.astro`        |
| URL pública (`site`), integraciones              | `astro.config.mjs`              |
| Imagen Open Graph (1200×630)                     | `public/og.png`, plantilla en `scripts/og.html` |
| Despliegue en Cloudflare                         | `wrangler.jsonc`                |

Componentes en `src/components/`: Header, Hero, Metrics, Tracks, Videos, Templates, About, Newsletter, Footer.

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check (tipos) + astro build → dist/
npm run preview   # sirve dist/ en local
```

`npm run build` tiene que terminar con 0 errores, 0 warnings y 0 hints antes de hacer push.

## Cómo se publica

- Hosting: **Cloudflare Workers con static assets** (gratis), conectado al repo de GitHub
  mediante Workers Builds. Cada `git push` a `main` compila y publica sola la web.
- En el panel de Cloudflare: build command `npm run build`, deploy command `npx wrangler deploy`.
- `wrangler.jsonc` indica que se sirva `./dist`. Wrangler no está en las dependencias:
  Cloudflare lo descarga al desplegar.
- Si cambia la URL pública (dominio propio), actualiza `site` en `astro.config.mjs`
  y la línea `Sitemap:` de `public/robots.txt`.

## Dominio propio (preparado, no activado)

1. Comprar el dominio en Cloudflare Registrar (queda ya en la misma cuenta).
2. Workers & Pages → el worker `edgar-navarro` → Settings → Domains & Routes → Add → Custom domain →
   escribir el dominio (p. ej. `edgarnavarro.com`). Cloudflare crea el DNS y el certificado.
3. Opcional: añadir también `www.` y redirigirlo al dominio principal (Rules → Redirect Rules).
4. Cambiar `site` en `astro.config.mjs` y la línea `Sitemap:` en `public/robots.txt`, commit y push.
5. Opcional: desactivar la URL `*.workers.dev` en Settings → Domains & Routes para evitar contenido duplicado.

## Newsletter (preparado, no activado)

1. Crear cuenta gratis en Buttondown, Kit o Beehiiv.
2. Copiar la URL `action` del formulario HTML embebido (el `<form action="...">`).
   - Buttondown: `https://buttondown.com/api/emails/embed-subscribe/<usuario>`
   - Kit: `https://app.kit.com/forms/<id>/subscriptions`
   - Beehiiv: usa el formulario embebido de "Subscribe forms"; si solo da un iframe, habrá que adaptar
     `Newsletter.astro` (pregúntale antes a Edgar).
3. Pegarla en `newsletterAction` dentro de `src/data/site.ts`. El campo se llama `email`;
   confirmar que el servicio espera ese nombre (Kit usa `email_address`).
4. Mientras esté vacía, el botón aparece desactivado con "La newsletter abre pronto".

## Accesibilidad (ya revisado; mantenerlo)

- Contraste de texto AA/AAA; borde del campo de correo `--field-border` a 3:1.
- Foco visible (`:focus-visible` verde) y enlace "Saltar al contenido".
- Tablas con scroll horizontal son regiones enfocables con teclado.
- Imágenes de video con `alt=""` porque el título ya está dentro del enlace.
- En móvil (375 px) no debe haber scroll horizontal en la página.
