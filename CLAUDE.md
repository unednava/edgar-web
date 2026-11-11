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
  **Cambio de nov. 2026 (decisión de Edgar):** se pueden vender **recursos** (plantillas, guías,
  automatizaciones) en la tienda `/recursos`. Solo ahí hay precios; el resto de la web no vende.
  Sigue sin haber plan PRO ni asesorías visibles.
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

- Tono visual: **amigable y elegante, con toques de collage** (nov. 2026, pedido por Edgar).
  Fondo gris papel `#f2f2ef`, esquinas redondeadas, botones en forma de píldora. Casi todo va
  plano (filas, listas, bordes finos); la única tarjeta con sombra es la animación del inicio.
- **Collage, solo "toques"** (Edgar eligió esto frente a un collage completo): 1 recorte por
  sección, algo girado y con sombra de papel (clase `.cutout`, giro con `--rot`), y una tira de
  papel amarillo detrás de **una** palabra (clase `.hl`) en el titular, la newsletter y la 404.
  No llenar la web de piezas ni poner tiras en todos los títulos.
  Piezas en uso (`public/collage/`): bombilla con estrellas (inicio, asomando sobre la tarjeta),
  mano con pluma (sobre el lema de "Sobre mí"), megáfono / lupa / cerebro (temas de "De qué
  hablo", definidos en `topics[].cutout`), pila de libros ("Junto a cada video"), bocadillo con
  boca (newsletter) y hombre con bombilla (404).
  **Biblioteca de recortes:** `assets-src/collage/` (no se publica), 82 piezas de 6 láminas en
  `lamina-1/` … `lamina-6/`, con `catalogo-lamina-N.webp` para verlas de un vistazo y un
  `README.md` con todos los nombres (megáfonos, lupas, manos, móviles, laptops, cámaras, trofeo,
  reloj, cohete, Mona Lisa, mujer con lupa, etc.). Edgar **tiene licencia** de las láminas; se
  excluyeron 3 piezas con marca de agua de bancos de imágenes (detalle en ese README).
  `main` tiene `overflow-x: clip` para que ningún recorte cause scroll horizontal.
- **Que no parezca hecha con IA ni con plantilla** (revisión de nov. 2026). No volver a meter:
  etiquetas tipo píldora con punto encima del título; texto verde pequeño encima de cada sección;
  filas de tres tarjetas con icono en un cuadradito de color; tiras de "número grande sobre texto
  pequeño"; miniaturas de video de relleno; sombras o brillos en todo. En los textos, evitar las
  cadencias típicas: grupos de tres por costumbre, "no solo X, también Y", titulares con dos puntos
  que "revelan", eslóganes vacíos ("Sin humo", "A tu ritmo"). Los títulos de sección van sin punto.
  **Nunca prometer en presente lo que aún no existe** (videos, plantillas, newsletter): en futuro.
  Lo que más humaniza la web y falta: un caso real con sus números.
- Mientras `site.substack` esté vacío, los botones principales llevan a LinkedIn (`primaryCta`
  en `site.ts`) y la sección de newsletter dice que arranca pronto; al pegar la dirección cambia sola.
- **Modo claro por defecto.** El oscuro (fondo `#121212`) se activa con el botón de luna/sol del
  encabezado; se guarda la elección en el navegador (`localStorage`) y se aplica antes de pintar.
  En oscuro, los recortes llevan un contorno claro sutil (`--paper-shadow`) para no perderse.
- **Colores: amarillo y negro del collage** (el verde anterior se retiró en nov. 2026). Botones y
  enlaces en negro `#141414` (en oscuro, botones amarillos con texto negro); amarillo `#fcd812`
  (`--hl`) para tiras y relleno de la gráfica; rojo de los rayos `#9c301e`
  (`--warn`) solo para "algo deja de funcionar" en la animación del inicio.
- Tipografía única: **Plus Jakarta Sans** alojada en la propia web (paquete `@fontsource-variable/plus-jakarta-sans`, solo subconjuntos latino y latino extendido; sin Google Fonts), 18 px de base; títulos con tracking negativo.
- Elemento distintivo: la tarjeta animada del inicio, "Así cuida la IA una campaña". Una gráfica
  de clientes por semana (SVG propio, sin librerías) se dibuja sola: baja (1), la IA pausa lo que
  falla (2) y se recupera (3); cada paso de la lista se ilumina a su tiempo y hay botón para repetir.
  **Sin dinero, precios ni signos de moneda**: Edgar no quiere que parezca que cobra algo.
- Movimiento sutil: aparición de esos pasos y botones que reaccionan al pulsar.
  Con `prefers-reduced-motion` todo aparece sin animación.
- Barra superior translúcida (desenfoque), sólida con `prefers-reduced-transparency`.
- **Menú en móvil** (≤ 760 px): botón ☰ que despliega los enlaces bajo la barra (se cierra con
  la X, Escape, tocar fuera o elegir un enlace). En ≤ 560 px el botón "Suscribirme" de la barra
  pasa al final del menú, porque no caben todos los botones. Los enlaces que se añadan en
  `Header.astro` salen solos en escritorio y en el menú.
- **Logo (nov. 2026):** llama amarilla con borde negro y flecha roja hacia arriba + "Edgar Navarro"
  en Plus Jakarta Sans 800. En la web: la llama como imagen (`public/brand/llama.webp`, versión
  con borde claro, sirve en claro y oscuro) y el nombre como texto. Va en el encabezado, junto al
  saludo del inicio (hasta que haya foto), en el favicon (`favicon.png`, `apple-touch-icon.png`)
  y en la imagen para redes. Originales en `assets-src/logo/` (horizontal claro/oscuro, con y sin
  el lema "Lo que aprendí gastando presupuesto de verdad.", icono cuadrado).
  El lema (`site.motto` en `site.ts`) va en el pie de página, bajo el logo, y en la imagen para redes.
- **Ilustraciones chibi de Edgar: probadas y descartadas** (nov. 2026). Se colocaron en el
  encabezado, el saludo, "Sobre mí", la newsletter, la 404 y la imagen para redes, y a Edgar no
  le gustó; se quitaron todas. Los archivos siguen en el historial de git (commit `71cb0eb`,
  carpeta `public/edgar/`). No volver a ponerlas salvo que Edgar lo pida. Las versiones con
  Bulbasaur no deben usarse nunca (personaje de Pokémon, con derechos de autor).
- Logos de marcas en "Sobre mí", con sus colores originales sobre tarjetas blancas (en ambos modos).
  Sacados de la web oficial de cada marca; Edgar confirmó que puede mostrarlos. Avior solo publica su
  logo en blanco, por eso va sobre su rojo de marca (`#c81414`). **Cruz Roja no aparece**: su emblema
  está protegido (Convenios de Ginebra) y requiere autorización expresa.
- Todos los contrastes de texto ≥ 4.5:1 en ambos modos (valores en `global.css`).
- Orden: inicio (saludo "Hola, soy Edgar Navarro" + titular + animación), Sobre mí (texto, lema,
  recorrido y logos), De qué hablo, Los primeros videos (+ lo que traerá cada video),
  Recursos (solo si hay productos), Newsletter. Página aparte: `/recursos` (tienda).
- Voz y estructura inspiradas en cómo comunica Vilma Núñez (adaptadas, no copiadas): saludo personal
  al inicio, tuteo cercano, lema propio visible ("Lo que funciona, lo que no y cuánto cuesta"),
  cada tema con su "qué" y su "cómo", recorrido real en pasos y newsletter como invitación ("¿Te sumas?").
  Tono **modesto**: Edgar comparte lo que aprende; no se presenta como mentor ni gurú.
  Sin mayúsculas de hype, sin ventas y sin cifras de audiencia que aún no existen.
  Recorrido: solo hechos que Edgar confirmó. Empezó en **Conversion Moe**, una agencia de campañas
  de conversión (nombre confirmado por Edgar).

## Stack

- Astro 7 + TypeScript strict, sitio 100 % estático (`output: 'static'`).
- Sin frameworks de UI, sin Tailwind. CSS propio con variables en `src/styles/global.css`.
- Única integración: `@astrojs/sitemap`.
- Node 24.18.0 (fijado en `.node-version`). Es el que trae preinstalado Workers Builds; Astro 7 exige ≥ 22.23.4.

## Dónde se edita cada cosa

| Qué                                              | Archivo                         |
|--------------------------------------------------|---------------------------------|
| Todos los textos, marcas y redes                 | `src/data/site.ts`              |
| Dirección de Substack (blog y newsletter)        | `src/data/site.ts` → `site.substack` |
| Videos (añadir al principio de la lista)         | `src/data/videos.ts`            |
| Próximos videos (si `videos` está vacío)         | `src/data/videos.ts` → `upcoming` |
| Colores, tipografía, estilos base                | `src/styles/global.css`         |
| Orden de las secciones                           | `src/pages/index.astro`         |
| Textos de la animación del inicio                | `src/data/site.ts` → `heroExample` (la gráfica y sus tiempos en `Hero.astro`) |
| Saludo e introducción del inicio                 | `src/data/site.ts` → `site.greeting`, `site.intro` |
| Botón principal (LinkedIn o newsletter)          | `src/data/site.ts` → `primaryCta` |
| Texto y lema de "Sobre mí"                       | `src/data/site.ts` → `about` |
| Recorrido en "Sobre mí"                          | `src/data/site.ts` → `journey` |
| Temas ("De qué hablo")                           | `src/data/site.ts` → `topics` |
| Lo que traerá cada video                         | `src/data/site.ts` → `extras` |
| Página de error                                  | `src/pages/404.astro`           |
| Productos de la tienda y número de WhatsApp      | `src/data/shop.ts`              |
| Logos de marcas (archivos en `public/logos/`)    | `src/data/site.ts` → `brands` |
| Recortes de collage                              | `public/collage/` (biblioteca completa en `assets-src/collage/`, ver su README) |
| Palabra con tira amarilla en el titular          | `src/data/site.ts` → `site.headlineHighlight` |
| Textos de la newsletter                          | `src/data/site.ts` → `newsletter` |
| Iconos                                           | `src/components/Icon.astro`     |
| SEO, Open Graph, fuentes                         | `src/layouts/Base.astro`        |
| URL pública (`site`), integraciones              | `astro.config.mjs`              |
| Imagen Open Graph (1200×630)                     | `public/og.png`, plantilla en `scripts/og.html` |
| Despliegue en Cloudflare                         | `wrangler.jsonc`                |
| Caché y cabeceras de seguridad                   | `public/_headers`               |

Componentes en `src/components/`: Header, Hero, About, Topics, Videos, ShopTeaser, ProductCard,
Newsletter, Footer, Icon, BuyBox, Blog. Páginas: `index`, `recursos/index`, `recursos/[id]`
(una por producto), `404`.

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

## Blog y newsletter: Substack (activo: https://edgar14np.substack.com)

Estado (nov. 2026): `site.substack = 'edgar14np.substack.com'`. Los botones "Suscribirme" llevan a
`/subscribe`. La publicación aún no tiene artículos y se llama "El Substack de Edgar" (nombre por
defecto de Substack; se puede cambiar en sus ajustes). El enlace "Blog" (menú y pie) y la sección
"Lo último del blog" **solo aparecen cuando el RSS tiene al menos un artículo** (`latestPosts`
en `src/data/blog.ts`); como se leen al compilar, tras publicar el primer artículo hay que volver
a publicar la web (un push a main) para que aparezcan.

Edgar eligió **Substack** (nov. 2026) con un **botón que lleva a Substack** (no un formulario
dentro de la web). Cómo funciona `site.substack` (`src/data/site.ts`; vale con o sin `https://`
y también un dominio propio):
- Con dirección: botones "Suscribirme" → `<dirección>/subscribe`, sección newsletter con "¿Te sumas?"
  y datos para buscadores (`sameAs`) con el Substack.
- Vacía: botones a LinkedIn y "La newsletter arranca pronto".

Descartado a propósito: el formulario incrustado de Substack (iframe con su estilo, no respeta el
diseño ni el modo oscuro) y el envío del correo a su API no documentada (puede romperse sin aviso).

**Sección "Lo último del blog"** (`src/components/Blog.astro`, datos en `src/data/blog.ts`), entre
la tienda y la newsletter: muestra los 3 últimos artículos. Se llena sola leyendo el RSS de
Substack (`<dirección>/feed`) al compilar, o con `manualPosts` si se quieren elegir a mano.
Solo se actualiza al volver a publicar la web (un push a main). Sin artículos, no aparece.

## Tienda de recursos (`/recursos`, preparada, sin productos aún)

La web solo **muestra** los recursos con diseño de tienda; la compra se hace fuera:
- **En dólares:** botón "Comprar en dólares" al producto en **Gumroad** (tarjeta, entrega automática).
- **En bolívares:** botón "Pagar en bolívares" que abre **WhatsApp** con un mensaje listo
  ("Quiero comprar «X» ($19 USD) y pagar en bolívares"). Edgar responde con el monto a la tasa
  del día. **El precio en la web va solo en dólares**: la tasa cambia casi a diario.
- Precio 0 → "Gratis" y botón "Descargar gratis" (sin opción de bolívares).

**Cada producto tiene su propia página: `/recursos/<id>/`** (nov. 2026, pedido por Edgar),
generada desde `src/pages/recursos/[id].astro`. Contiene: ruta "Recursos / nombre", ficha
(formato, nombre, descripción), bloque de compra (`BuyBox.astro`: precio en USD, "Comprar en
dólares" → Gumroad y "Pagar en bolívares" → WhatsApp), "Qué incluye", "Para quién es",
"Sobre este recurso", "Cómo comprar" (no en los gratis) y "Otros recursos". Con portada: imagen a
la izquierda; sin portada: ficha y compra lado a lado (el nombre no se repite). La portada es
también la imagen al compartir el enlace. Datos para buscadores `Product` + `BreadcrumbList`.
Las tarjetas (`ProductCard.astro`, en la tienda, el adelanto y "Otros recursos") son enteras un
enlace a la página del producto y muestran precio y "Ver recurso"; los botones de compra solo
están en la página del producto. El `id` es la dirección: no cambiarlo una vez publicado.

Dónde se edita: `src/data/shop.ts` → `products` (id, title, format, description, includes,
forWho y details opcionales, priceUsd, gumroad, cover opcional en `public/recursos/` 1280×720,
featured) y `shop.whatsapp` (número con código de país; vacío = sin botón de bolívares).
Componentes: `ProductCard.astro`, `BuyBox.astro`, `ShopTeaser.astro` (adelanto con hasta 3
destacados en la principal, tras los videos), `src/pages/recursos/index.astro` (todos los
productos + "Cómo comprar") y `src/pages/recursos/[id].astro` (página de cada producto).

Mientras `products` esté vacío: sin enlace "Recursos" en el menú, sin adelanto en la principal,
`/recursos` dice que los primeros están en preparación, lleva `noindex` y no entra en el sitemap
(filtro en `astro.config.mjs`). Sin imagen de portada, la tarjeta usa una portada tipográfica con
el nombre (que entonces no se repite debajo). Nunca publicar productos de ejemplo.

Falta de Edgar: el número de WhatsApp para ventas y los primeros productos con su enlace de Gumroad.

## Skills de diseño instaladas (`.claude/skills/`)

- `apple-design`: de Emil Kowalski (github.com/emilkowalski/skills, commit f1090be, licencia MIT).
  Movimiento fluido, transiciones, tipografía y reduced-motion en la web.
- `apple-design-hig`: de Dick Wu (github.com/dickwu/apple-design-skill, commit ff4ebdd). Revisión de
  diseño con las Human Interface Guidelines de Apple. El texto de las HIG es de Apple; se omitió
  su script `scripts/pull-hig.mjs` (solo sirve para volver a descargarlas).
- Son una referencia, no un mandato: **no sustituyen el concepto visual descrito arriba** ni las
  reglas de tono de este archivo. Cualquier propuesta que salga de ellas se consulta antes con Edgar.

## Accesibilidad (ya revisado; mantenerlo)

- Contraste de texto AA/AAA en claro y oscuro; borde del campo de correo `--field-border` ≥ 3:1.
- Foco visible (`:focus-visible`, color de acento) y enlace "Saltar al contenido".
- Página 404 propia (`src/pages/404.astro`), servida por Cloudflare gracias a
  `"not_found_handling": "404-page"` en `wrangler.jsonc`.
- Datos estructurados `Person` (JSON-LD) en `Base.astro` para buscadores.
- Los iconos son decorativos (`aria-hidden`); el texto de al lado da el significado.
- Imágenes de video con `alt=""` porque el título ya está dentro del enlace.
- En móvil (375 px) no debe haber scroll horizontal en la página.
