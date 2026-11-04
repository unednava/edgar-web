// Todo el contenido editable de la web vive aquí.
// Cambia textos y enlaces sin tocar los componentes.
// Público: personas que no son técnicas. Lenguaje sencillo, sin jerga.

export type IconName = 'megaphone' | 'chart' | 'clock' | 'bolt' | 'sparkle' | 'table' | 'layout';

export interface Topic {
  id: string;
  icon: IconName;
  title: string;
  what: string; // el "qué": lo que vas a entender
  how: string; // el "cómo": lo que te llevas para hacerlo
  tools: string;
}

export interface JourneyStep {
  title: string;
  text: string;
}

export interface Metric {
  value: string;
  label: string;
  highlight?: boolean;
}

export interface Included {
  icon: IconName;
  title: string;
  description: string;
}

export const site = {
  name: 'Edgar Navarro',
  title: 'Edgar Navarro · Marketing con IA, explicado fácil',
  description:
    'Aprende a usar la inteligencia artificial para que tus anuncios rindan más y te quiten menos tiempo. Videos cortos, con números reales y sin tecnicismos.',
  kicker: 'Marketing con IA, explicado fácil',
  headline: 'Marketing con IA que sí funciona.',
  intro:
    'Te enseño a usar la inteligencia artificial para que tus anuncios rindan más y te quiten menos tiempo. En videos cortos, con números reales y sin tecnicismos.',

  social: {
    // Deja vacío lo que aún no exista: el enlace se oculta solo.
    youtube: '',
    linkedin: 'https://www.linkedin.com/in/edgnavarros',
    instagram: '',
    tiktok: '',
  },

  // Pega aquí la URL "action" del formulario de tu servicio de newsletter
  // (Buttondown, Kit, Beehiiv...). Mientras esté vacía, el botón no envía nada.
  newsletterAction: '',
} as const;

// Animación del inicio: una gráfica de clientes por semana que se dibuja sola.
// Sin dinero ni precios: solo la historia de lo que hace la IA. Cada paso aparece
// cuando la línea llega a su punto (1, 2 y 3 en la gráfica).
export const heroExample = {
  title: 'Así cuida la IA una campaña',
  chartLabel: 'Clientes que llegan cada semana',
  steps: [
    { title: 'Algo deja de funcionar', text: 'Llegan menos clientes: la gente ya se cansó de ver los mismos anuncios.' },
    { title: 'La IA lo nota y pausa lo que falla', text: 'El anuncio cansado deja de salir y el presupuesto va a los que sí funcionan.' },
    { title: 'Te llega un resumen', text: 'Qué cambió y por qué, en tu correo. La decisión final es tuya.' },
  ],
  footnote: 'La regla vigila. Tú decides.',
};

// Bloque de saludo, justo después del inicio. Trato cercano y modesto.
export const hello = {
  title: 'Hola, soy Edgar.',
  text: [
    'Llevo más de 7 años haciendo campañas de publicidad para marcas de Latinoamérica, España y Estados Unidos.',
    'Aquí te comparto lo que voy aprendiendo con la IA, explicado como se lo contaría a un amigo. No te voy a contar solo qué hacer: también te enseño cómo hacerlo.',
  ],
  mottoLabel: 'Mi regla para todo lo que publico',
  motto: 'Lo que funciona, lo que no y cuánto cuesta.',
};

export const metrics: Metric[] = [
  { value: '7+', label: 'años creando campañas de publicidad' },
  { value: '3', label: 'mercados: Latinoamérica, España y EE. UU.' },
  { value: '−20%', label: 'en el costo por cliente de mis campañas', highlight: true },
  { value: '7 min', label: 'dura cada video, para verlo en un café' },
];

export const topics: Topic[] = [
  {
    id: 'anuncios',
    icon: 'megaphone',
    title: 'Anuncios que rinden más',
    what: 'Cómo crear y mejorar tus anuncios con ayuda de la IA, sin perder el control de lo que gastas.',
    how: 'Las instrucciones que uso para pedirle ideas a la IA y probarlas.',
    tools: 'Meta Ads · Google Ads',
  },
  {
    id: 'resultados',
    icon: 'chart',
    title: 'Entender tus resultados',
    what: 'Qué números mirar, qué significan y cuándo conviene preocuparse.',
    how: 'Un tablero sencillo para ver tus campañas de un vistazo.',
    tools: 'Google Analytics · Looker Studio',
  },
  {
    id: 'tiempo',
    icon: 'clock',
    title: 'Recuperar tu tiempo',
    what: 'Qué tareas puede hacer la IA por ti y cuáles es mejor que sigas haciendo tú.',
    how: 'Automatizaciones listas para importar, con cada paso explicado.',
    tools: 'Automatizaciones con IA',
  },
];

export const templates = {
  title: 'Lo que uso, listo para que lo copies.',
  text: 'Cada video viene con todo lo que usé. Lo descargas, sigues los pasos y lo tienes funcionando en tu cuenta.',
  included: [
    {
      icon: 'bolt',
      title: 'La automatización completa',
      description: 'Lista para importar, con cada paso explicado.',
    },
    {
      icon: 'sparkle',
      title: 'Las instrucciones para la IA',
      description: 'El texto exacto que le doy, para que copies y pegues.',
    },
    {
      icon: 'table',
      title: 'Tus límites de gasto',
      description: 'Una hoja de cálculo sencilla para decidir cuándo actuar.',
    },
    {
      icon: 'layout',
      title: 'Un tablero de resultados',
      description: 'Para ver de un vistazo cómo van tus campañas.',
    },
  ] satisfies Included[],
};

// Mi recorrido, en "Sobre mí". Solo hechos reales.
export const journey: JourneyStep[] = [
  {
    title: 'Empecé en una agencia de campañas de conversión',
    text: 'Ahí aprendí a medir todo por resultados: clientes, ventas y registros. Eso marcó mi forma de trabajar.',
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
    title: 'Y ahora, lo comparto contigo',
    text: 'En videos cortos y plantillas gratis. Lo que funciona, lo que no y cuánto cuesta. Sin humo.',
  },
];

export const newsletter = {
  title: 'Cada semana, un experimento real en tu correo.',
  text: 'Te cuento qué probé, cuánto costó y qué aprendí. Y te dejo la plantilla para que lo hagas tú.',
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
