// Todo el contenido editable de la web vive aquí.
// Cambia textos y enlaces sin tocar los componentes.
//
// Público: personas que no son técnicas. Lenguaje sencillo, sin jerga.
// Para que no suene a texto generado: frases concretas y en primera persona,
// sin enumeraciones de tres por costumbre, sin "no solo X, también Y",
// sin titulares con dos puntos y sin prometer en presente lo que aún no existe.

// Recorte del collage (archivos en public/collage/; todas las piezas en assets-src/collage/).
export interface Cutout {
  src: string;
  width: number;
  height: number;
  rot: number; // giro en grados, para el aire de collage
}

export interface Topic {
  id: string;
  title: string;
  what: string; // lo que vas a entender
  how: string; // lo que te llevas para hacerlo
  tools: string;
  cutout: Cutout;
}

export interface JourneyStep {
  title: string;
  text: string;
}

export const site = {
  name: 'Edgar Navarro',
  title: 'Edgar Navarro · Growth marketing, explicado fácil',
  description:
    'Soy growth marketer: ayudo a negocios a conseguir más clientes con campañas, datos y automatización. Aquí cuento cómo lo hago: lo que funciona, lo que no y cuánto cuesta.',
  headline: 'Cómo hago crecer negocios con datos y campañas.',
  headlineHighlight: 'crecer', // palabra del titular con tira amarilla de collage
  greeting: 'Hola, soy Edgar Navarro',
  motto: 'Lo que aprendí gastando presupuesto de verdad.', // lema del logo (pie de página e imagen para redes)
  intro:
    'Soy growth marketer: ayudo a negocios a conseguir más clientes con campañas en Meta y Google, datos y automatización. Llevo más de 7 años haciéndolo y aquí te cuento cómo, con los problemas incluidos.',

  social: {
    // Deja vacío lo que aún no exista: el enlace se oculta solo.
    youtube: '',
    linkedin: 'https://www.linkedin.com/in/edgnavarros',
    instagram: 'https://www.instagram.com/esedgarnavarro/',
    tiktok: 'https://www.tiktok.com/@esedgarnavarro',
  },

  // Blog y newsletter: Substack. Pega aquí la dirección de tu publicación cuando la tengas,
  // por ejemplo 'edgarnavarro.substack.com' (con o sin https://; también vale un dominio propio).
  // Mientras esté vacía: los botones llevan a LinkedIn, la newsletter dice que arranca pronto
  // y no aparece el enlace "Blog". Al pegarla, todo cambia solo.
  substack: 'edgarnavarro.substack.com',
} as const;

// Dirección de Substack normalizada (https://, sin barra final), o null si aún no hay.
function normalizeUrl(raw: string): string | null {
  const value = raw.trim().replace(/\/+$/, '');
  if (!value) return null;
  return /^https?:\/\//.test(value) ? value : `https://${value}`;
}

const substackUrl = normalizeUrl(site.substack);

export const substack = substackUrl ? { home: substackUrl, subscribe: `${substackUrl}/subscribe` } : null;

// Botón principal de la web: lleva a suscribirse en Substack, o a LinkedIn mientras no exista.
export const primaryCta = substack
  ? { label: 'Suscribirme gratis', short: 'Suscribirme', href: substack.subscribe, external: true }
  : { label: 'Sígueme en LinkedIn', short: 'Sígueme', href: site.social.linkedin, external: true };

// Animación del inicio: una gráfica de clientes por semana que se dibuja sola.
// Sin dinero ni precios. Es un ejemplo, y la tarjeta lo dice.
export const heroExample = {
  title: 'Así cuida la IA una campaña',
  tag: 'Ejemplo',
  chartLabel: 'Clientes que llegan cada semana',
  steps: [
    { title: 'Algo deja de funcionar', text: 'Llegan menos clientes. La gente ya vio el mismo anuncio demasiadas veces.' },
    { title: 'La IA lo detecta y pausa ese anuncio', text: 'El presupuesto pasa a los anuncios que siguen trayendo clientes.' },
    { title: 'Te llega un resumen', text: 'Qué cambió y por qué. La decisión final sigue siendo tuya.' },
  ],
  footnote: 'La IA vigila. Tú decides.',
};

// "Sobre mí": va justo después del inicio.
export const about = {
  lead: 'De día hago campañas de publicidad. De noche, automatizaciones.',
  text: [
    'En mi trabajo hay una pregunta que se repite: ¿cuánto cuesta conseguir un cliente? Es lo primero que miro en cualquier campaña.',
    'Aquí comparto lo que voy probando para que un negocio crezca, con la IA como una herramienta más. Lo que funciona lo cuento, y lo que no, también.',
  ],
  mottoLabel: 'Mi regla para todo lo que publico',
  motto: 'Lo que funciona, lo que no y cuánto cuesta.',
};

// Mi recorrido. Solo hechos que Edgar confirmó.
export const journey: JourneyStep[] = [
  {
    title: 'Empecé en Conversion Moe, una agencia de campañas de conversión',
    text: 'Ahí aprendí a medir cada campaña por lo que trae: clientes, ventas o registros.',
  },
  {
    title: 'Más de 7 años con marcas de tres mercados',
    text: 'Campañas en Google y Meta para Latinoamérica, España y Estados Unidos. Logré bajar el costo por cliente más de un 20 %.',
  },
  {
    title: 'Hoy, en 4Geeks Academy',
    text: 'Trabajo como especialista en publicidad digital y uso la IA para que las tareas repetitivas se hagan solas.',
  },
  {
    title: 'Y ahora, lo comparto',
    text: 'Voy a grabar videos cortos y a compartir gratis los archivos que uso en cada uno.',
  },
];

export const topics: Topic[] = [
  {
    id: 'anuncios',
    title: 'Anuncios que rinden más',
    what: 'Cómo crear y mejorar anuncios con ayuda de la IA, sin perder el control del presupuesto.',
    how: 'Las instrucciones que le doy a la IA para pedirle ideas, y cómo las pruebo.',
    tools: 'Meta Ads y Google Ads',
    cutout: { src: '/collage/megafono.webp', width: 295, height: 480, rot: -10 },
  },
  {
    id: 'resultados',
    title: 'Entender tus resultados',
    what: 'Qué números mirar y cuándo de verdad hay que preocuparse.',
    how: 'Un tablero sencillo para ver tus campañas de un vistazo.',
    tools: 'Google Analytics y Looker Studio',
    cutout: { src: '/collage/lupa.webp', width: 218, height: 480, rot: 12 },
  },
  {
    id: 'tiempo',
    title: 'Recuperar tu tiempo',
    what: 'Qué tareas puede hacer la IA por ti y cuáles es mejor que sigas haciendo tú.',
    how: 'Automatizaciones listas para usar, con cada paso explicado.',
    tools: 'Automatizaciones con IA',
    cutout: { src: '/collage/cerebro.webp', width: 241, height: 201, rot: -6 },
  },
];

// Lo que acompañará a cada video. En futuro: todavía no hay videos publicados.
export const extras = {
  title: 'Junto a cada video',
  text: 'Con cada video voy a compartir los archivos que usé, para que lo pruebes en tu cuenta el mismo día:',
  items: [
    'La automatización, lista para usar y con cada paso explicado.',
    'Las instrucciones exactas que le doy a la IA.',
    'Una hoja de cálculo para decidir cuándo conviene actuar.',
    'Un tablero para ver tus campañas de un vistazo.',
  ],
};

export const newsletter = {
  // Mientras `site.substack` esté vacío se muestran los textos "soon".
  title: 'Una vez por semana, en tu correo',
  soonTitle: 'La newsletter arranca pronto',
  // En futuro mientras no haya envíos; cuando ya salgan, puede pasar a "Cada semana te escribo…".
  text: 'Te voy a contar algo que probé en mis campañas: qué hice, cuánto costó y si funcionó o no.',
  soonText:
    'Cada semana voy a contar algo que probé en mis campañas: qué hice, cuánto costó y si funcionó o no. Mientras tanto, en LinkedIn cuento en qué estoy trabajando.',
  invite: '¿Te sumas?',
};

// Marcas con las que Edgar ha trabajado. Logos sacados de la web oficial de cada marca
// (noviembre de 2026) y guardados en public/logos/. Edgar confirmó que puede mostrarlos.
// Cruz Roja se quitó: su emblema está protegido y requiere autorización expresa.
// `background` solo cuando la marca publica su logo en blanco (va sobre su color de marca).
export interface Brand {
  name: string;
  logo: string;
  background?: string;
  square?: boolean; // logos cuadrados: se muestran algo más altos para igualar su peso visual
}

export const brands: Brand[] = [
  { name: 'Rainforest Adventures', logo: '/logos/rainforest-adventures.webp', square: true },
  { name: 'Honeywell', logo: '/logos/honeywell.webp' },
  { name: 'Avior Airlines', logo: '/logos/avior.webp', background: '#c81414' },
  { name: '4Geeks Academy', logo: '/logos/4geeks.webp' },
  { name: "Domino's Pizza", logo: '/logos/dominos.svg', square: true },
  { name: 'Coca-Cola FEMSA', logo: '/logos/coca-cola-femsa.webp' },
];
