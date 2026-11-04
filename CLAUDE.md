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

Rediseño (nov. 2026), hecho con las skills `apple-design` y `apple-design-hig`.
**El público no es técnico**: nada de referencias a programación (sin fuentes monoespaciadas,
sin `nombres_con_guiones`, sin nombres de archivo, sin jerga como CPA, LLM o "paid media").

- Tono visual: **amigable y elegante**. Fondo claro `#f6f7f9`, tarjetas blancas con sombra suave,
  esquinas redondeadas (20 px), botones en forma de píldora.
- Modo oscuro automático según el sistema (`prefers-color-scheme`): fondo `#0b111c`.
- Color de marca: verde "activo" (`#0b7a52` en claro, `#3ddc97` en oscuro), usado con moderación:
  botón principal, iconos y estados. Naranja (`--warn`) solo para "el costo subió".
- Tipografía única: **Plus Jakarta Sans** (Google Fonts), 18 px de base; títulos con tracking negativo.
- Elemento distintivo: la tarjeta del inicio que cuenta, en lenguaje sencillo, cómo la IA cuida
  una campaña cuando sube el costo por cliente (los pasos aparecen uno a uno).
- Movimiento sutil: aparición de esos pasos, botones que reaccionan al pulsar, tarjetas de video
  que se elevan al pasar el ratón. Con `prefers-reduced-motion` todo aparece sin animación.
- Barra superior translúcida (desenfoque), sólida con `prefers-reduced-transparency`.
- Monograma "EN" como logo y como avatar hasta que haya foto.
- Todos los contrastes de texto ≥ 4.5:1 en ambos modos (valores en `global.css`).

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
| Tarjeta animada del inicio (números y pasos)     | `src/data/site.ts` → `heroExample` |
| Iconos                                           | `src/components/Icon.astro`     |
| SEO, Open Graph, fuentes                         | `src/layouts/Base.astro`        |
| URL pública (`site`), integraciones              | `astro.config.mjs`              |
| Imagen Open Graph (1200×630)                     | `public/og.png`, plantilla en `scripts/og.html` |
| Despliegue en Cloudflare                         | `wrangler.jsonc`                |

Componentes en `src/components/`: Header, Hero, Metrics, Topics, Videos, Templates, About, Newsletter, Footer, Icon.

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
- Worker: `web` (cuenta edgar14np@gmail.com). URL pública: https://web.edgar14np.workers.dev
- El `name` de `wrangler.jsonc` tiene que coincidir con el nombre del Worker en Cloudflare (`web`).
- `wrangler.jsonc` indica que se sirva `./dist`. Wrangler no está en las dependencias:
  Cloudflare lo descarga al desplegar.
- Si cambia la URL pública (dominio propio), actualiza `site` en `astro.config.mjs`
  y la línea `Sitemap:` de `public/robots.txt`.

## Dominio propio (preparado, no activado)

1. Comprar el dominio en Cloudflare Registrar (queda ya en la misma cuenta).
2. Workers & Pages → el worker `web` → Settings → Domains & Routes → Add → Custom domain →
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

## Skills de diseño instaladas (`.claude/skills/`)

- `apple-design`: de Emil Kowalski (github.com/emilkowalski/skills, commit f1090be, licencia MIT).
  Movimiento fluido, transiciones, tipografía y reduced-motion en la web.
- `apple-design-hig`: de Dick Wu (github.com/dickwu/apple-design-skill, commit ff4ebdd). Revisión de
  diseño con las Human Interface Guidelines de Apple. El texto de las HIG es de Apple; se omitió
  su script `scripts/pull-hig.mjs` (solo sirve para volver a descargarlas).
- Son una referencia, no un mandato: **no sustituyen el concepto visual de Ads Manager** ni las
  reglas de tono de este archivo. Cualquier propuesta que salga de ellas se consulta antes con Edgar.

## Accesibilidad (ya revisado; mantenerlo)

- Contraste de texto AA/AAA en claro y oscuro; borde del campo de correo `--field-border` ≥ 3:1.
- Foco visible (`:focus-visible` verde) y enlace "Saltar al contenido".
- Los iconos son decorativos (`aria-hidden`); el texto de al lado da el significado.
- Imágenes de video con `alt=""` porque el título ya está dentro del enlace.
- En móvil (375 px) no debe haber scroll horizontal en la página.
