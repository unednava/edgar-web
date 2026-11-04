// Todo el contenido editable de la web vive aquí.
// Cambia textos y enlaces sin tocar los componentes.

export interface Track {
  id: string;
  name: string;
  description: string;
  tools: string[];
}

export interface Metric {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface TemplateFile {
  name: string;
  description: string;
}

export const site = {
  name: 'Edgar Navarro',
  title: 'Edgar Navarro · Marketing con IA, con datos reales',
  description:
    'Paid media, datos y automatización con IA explicados en videos de 7 minutos. Con números reales y plantillas listas para importar.',
  tagline: 'campaña activa · marketing real con IA',
  headline: 'Marketing con IA que sí funciona.',
  intro:
    'Paid media, datos y automatización en videos de 7 minutos. Lo construyo en pantalla, con números reales, y te dejo el flujo listo para importar.',

  social: {
    youtube: 'https://www.youtube.com/',
    linkedin: 'https://www.linkedin.com/in/edgnavarros',
    instagram: '',
    tiktok: '',
  },

  // Pega aquí la URL "action" del formulario de tu servicio de newsletter
  // (Buttondown, Kit, Beehiiv...). Mientras esté vacía, el botón no envía nada.
  newsletterAction: '',
} as const;

export const metrics: Metric[] = [
  { label: 'años_en_paid_media', value: '7+' },
  { label: 'mercados', value: 'LATAM · ES · US' },
  { label: 'reducción_de_cpa', value: '−20%', highlight: true },
  { label: 'duración_por_video', value: '7 min' },
];

export const tracks: Track[] = [
  {
    id: 'ads',
    name: 'ads',
    description: 'Crear, testear y escalar campañas con IA sin perder el control del presupuesto.',
    tools: ['Meta Ads', 'Google Ads'],
  },
  {
    id: 'datos',
    name: 'datos',
    description: 'Medir bien, leer los números y dejar que la IA te ayude a encontrar lo que importa.',
    tools: ['GA4', 'Looker Studio'],
  },
  {
    id: 'automatizacion',
    name: 'automatización',
    description: 'Reportes y alertas que se hacen solos mientras tú piensas en la estrategia.',
    tools: ['n8n', 'LLMs', 'OpenRouter'],
  },
];

export const featuredTemplate = {
  folder: 'alerta-cpa/',
  title: 'No un tutorial suelto: el flujo entero.',
  text: 'Cada video trae lo que usé: el flujo de n8n, los prompts y el dashboard. Lo importas, conectas tus cuentas y funciona.',
  files: [
    { name: 'flujo.json', description: 'el flujo de n8n' },
    { name: 'prompt-diagnostico.md', description: 'lo que lee el LLM' },
    { name: 'reglas-cpa.csv', description: 'tus umbrales' },
    { name: 'dashboard-looker', description: 'para ver el resultado' },
  ] satisfies TemplateFile[],
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
