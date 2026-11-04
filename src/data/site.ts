// Todo el contenido editable de la web vive aquí.
// Cambia textos y enlaces sin tocar los componentes.
// Público: personas que no son técnicas. Lenguaje sencillo, sin jerga.

export type IconName = 'megaphone' | 'chart' | 'clock' | 'bolt' | 'sparkle' | 'table' | 'layout';

export interface Topic {
  id: string;
  icon: IconName;
  title: string;
  description: string;
  tools: string;
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

// Ejemplo de la tarjeta animada del inicio. Cambia los números cuando tengas un caso real tuyo.
export const heroExample = {
  campaign: 'Campaña de clientes · Latinoamérica',
  costBefore: '$4,80',
  costAfter: '$7,20',
  steps: [
    { title: 'La IA revisa qué pasó', text: 'La gente ya se cansó de ver los mismos dos anuncios.' },
    { title: 'Se pausa lo que no funciona', text: 'El anuncio que más gasta sin resultados deja de salir.' },
    { title: 'Te llega un resumen', text: 'Qué cambió, por qué y cuánto te ahorraste. A tu correo.' },
  ],
  footnote: 'La regla vigila. Tú decides.',
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
    description: 'Crea, prueba y mejora tus anuncios con ayuda de la IA, sin perder el control de lo que gastas.',
    tools: 'Meta Ads · Google Ads',
  },
  {
    id: 'resultados',
    icon: 'chart',
    title: 'Entender tus resultados',
    description: 'Qué números mirar, qué significan y cómo la IA te ayuda a encontrar lo que de verdad importa.',
    tools: 'Google Analytics · Looker Studio',
  },
  {
    id: 'tiempo',
    icon: 'clock',
    title: 'Recuperar tu tiempo',
    description: 'Reportes y avisos que se preparan solos, para que tú te dediques a pensar en tu negocio.',
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

export const brands = [
  'Rainforest Adventure',
  'Honeywell',
  'Avior Airlines',
  'Banesco',
  "Domino's Pizza",
  'Coca-Cola FEMSA',
  'Cruz Roja',
];
