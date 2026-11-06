// Todo el contenido editable de la web vive aquí.
// Cambia textos y enlaces sin tocar los componentes.
//
// Público: personas que no son técnicas. Lenguaje sencillo, sin jerga.
// Para que no suene a texto generado: frases concretas y en primera persona,
// sin enumeraciones de tres por costumbre, sin "no solo X, también Y",
// sin titulares con dos puntos y sin prometer en presente lo que aún no existe.

export interface Topic {
  id: string;
  title: string;
  what: string; // lo que vas a entender
  how: string; // lo que te llevas para hacerlo
  tools: string;
}

export interface JourneyStep {
  title: string;
  text: string;
}

export const site = {
  name: 'Edgar Navarro',
  title: 'Edgar Navarro · Marketing con IA, explicado fácil',
  description:
    'Llevo más de 7 años haciendo campañas en Meta y Google. Te enseño a usar la IA en las tuyas, con ejemplos reales y sin tecnicismos.',
  headline: 'Marketing con IA que sí funciona.',
  greeting: 'Hola, soy Edgar Navarro',
  intro:
    'Llevo más de 7 años haciendo campañas en Meta y Google. Ahora te enseño a usar la IA en las tuyas, con ejemplos reales y sin tecnicismos.',

  social: {
    // Deja vacío lo que aún no exista: el enlace se oculta solo.
    youtube: '',
    linkedin: 'https://www.linkedin.com/in/edgnavarros',
    instagram: '',
    tiktok: '',
  },

  // Blog y newsletter: Substack. Pega aquí la dirección de tu publicación cuando la tengas,
  // por ejemplo 'edgarnavarro.substack.com' (con o sin https://; también vale un dominio propio).
  // Mientras esté vacía: los botones llevan a LinkedIn, la newsletter dice que arranca pronto
  // y no aparece el enlace "Blog". Al pegarla, todo cambia solo.
  substack: '',
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
    { title: 'Algo deja de funcionar', text: 'Llegan menos clientes porque la gente ya se cansó de ver los mismos anuncios.' },
    { title: 'La IA lo nota y pausa lo que falla', text: 'El anuncio cansado deja de salir y el presupuesto va a los que sí funcionan.' },
    { title: 'Te llega un resumen', text: 'Te explica qué cambió y por qué. La decisión final es tuya.' },
  ],
  footnote: 'La regla vigila. Tú decides.',
};

// "Sobre mí": va justo después del inicio.
export const about = {
  lead: 'Hago campañas de publicidad de día y automatizaciones de noche.',
  text: [
    'Casi toda mi carrera ha girado alrededor de cuánto cuesta conseguir un cliente, y sigue siendo lo primero que miro en cualquier campaña.',
    'Aquí comparto lo que voy aprendiendo con la IA, explicado como se lo contaría a un amigo.',
  ],
  mottoLabel: 'Mi regla para todo lo que publico',
  motto: 'Lo que funciona, lo que no y cuánto cuesta.',
};

// Mi recorrido. Solo hechos que Edgar confirmó.
export const journey: JourneyStep[] = [
  {
    title: 'Empecé en una agencia de campañas de conversión',
    text: 'Ahí aprendí a medir todo por resultados: clientes, ventas y registros.',
  },
  {
    title: 'Más de 7 años con marcas de tres mercados',
    text: 'Campañas en Google y Meta para Latinoamérica, España y Estados Unidos, bajando el costo por cliente más de un 20 %.',
  },
  {
    title: 'Hoy, en 4Geeks Academy',
    text: 'Trabajo como especialista en publicidad digital y uso la IA para que el trabajo repetitivo se haga solo.',
  },
  {
    title: 'Y ahora, lo comparto',
    text: 'Grabo videos cortos y comparto gratis los archivos que uso en cada uno.',
  },
];

export const topics: Topic[] = [
  {
    id: 'anuncios',
    title: 'Anuncios que rinden más',
    what: 'Cómo crear y mejorar tus anuncios con ayuda de la IA sin perder el control de lo que gastas.',
    how: 'Las instrucciones que uso para pedirle ideas a la IA y probarlas.',
    tools: 'Meta Ads y Google Ads',
  },
  {
    id: 'resultados',
    title: 'Entender tus resultados',
    what: 'Qué números mirar y cuándo conviene preocuparse por ellos.',
    how: 'Un tablero sencillo para ver tus campañas de un vistazo.',
    tools: 'Google Analytics y Looker Studio',
  },
  {
    id: 'tiempo',
    title: 'Recuperar tu tiempo',
    what: 'Qué tareas puede hacer la IA por ti y cuáles conviene que sigas haciendo tú.',
    how: 'Automatizaciones listas para importar, con cada paso explicado.',
    tools: 'Automatizaciones con IA',
  },
];

// Lo que acompañará a cada video. En futuro: todavía no hay videos publicados.
export const extras = {
  title: 'Junto a cada video',
  text: 'Voy a compartir los archivos que usé, para que puedas probarlo en tu cuenta el mismo día:',
  items: [
    'La automatización, lista para importar y con cada paso explicado.',
    'Las instrucciones exactas que le doy a la IA.',
    'Una hoja de cálculo para decidir cuándo conviene actuar.',
    'Un tablero para ver tus campañas de un vistazo.',
  ],
};

export const newsletter = {
  // Mientras `site.substack` esté vacío se muestran los textos "soon".
  title: 'Una vez por semana, en tu correo',
  soonTitle: 'La newsletter arranca pronto',
  text: 'Cada semana te escribo sobre algo que probé en mis campañas y lo que me costó, haya funcionado o no.',
  soonText:
    'Cada semana voy a escribir sobre algo que probé en mis campañas y lo que me costó, haya funcionado o no. Mientras tanto, en LinkedIn cuento en qué estoy trabajando.',
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
