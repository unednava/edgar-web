// Tienda de recursos. La web solo los muestra: la compra se hace fuera.
// - En dólares: botón a Gumroad (pago con tarjeta y entrega automática del archivo).
// - En bolívares: botón a WhatsApp con un mensaje listo; Edgar responde con el monto
//   a la tasa del día. Por eso en la web el precio solo aparece en dólares.
//
// Mientras `products` esté vacío, la tienda no aparece en el menú ni en la página principal,
// y /recursos dice que los primeros recursos están en preparación.

// Cada producto tiene su propia página: /recursos/<id>/
export interface Product {
  id: string; // corto, en minúsculas, sin espacios ni tildes: es la dirección (/recursos/alerta-cpa/)
  title: string;
  format: string; // qué es: "Plantilla", "Guía en PDF", "Automatización"...
  description: string; // una o dos frases (se ve en la tarjeta y arriba en su página)
  includes?: string[]; // qué recibe la persona
  forWho?: string[]; // para quién es (opcional, se ve en su página)
  details?: string[]; // "Sobre este recurso": párrafos con más detalle (opcional, se ve en su página)
  priceUsd: number; // 0 = gratis
  gumroad: string; // enlace del producto en Gumroad
  cover?: string; // imagen opcional en public/recursos/, p. ej. '/recursos/alerta-cpa.webp' (1280×720)
  featured?: boolean; // destacado en la página principal (máximo 3; si no hay, se usan los primeros)
}

export const shop = {
  // Número de WhatsApp para pagos en bolívares, con código de país, p. ej. '+58 412 1234567'.
  // Mientras esté vacío, el botón "Pagar en bolívares" no aparece.
  whatsapp: '+58 414 0277848',
  title: 'Recursos',
  intro: 'Mazos de cartas para imprimir con lo que uso en mis propias campañas. Los tienes al lado mientras trabajas.',
  howToBuy: [
    {
      title: 'En dólares',
      text: 'Pagas con tarjeta en Gumroad y el archivo te llega al correo en el momento.',
    },
    {
      title: 'En bolívares',
      text: 'Me escribes por WhatsApp, te paso el monto a la tasa del día y, cuando confirmo el pago, te envío el recurso.',
    },
  ],
};

export const products: Product[] = [
  {
    id: 'antes-de-lanzar',
    title: 'Antes de lanzar',
    format: 'Mazo de 18 cartas',
    description:
      '16 cartas con lo que reviso antes de publicar una campaña en Meta o en Google: el anuncio, la medición, el dinero y lo que va en automático.',
    includes: [
      '16 cartas de revisión y 2 de instrucciones, tamaño póker (63 × 88 mm)',
      'PDF para imprimir en casa en papel Carta, con marcas de corte y reverso',
      'El mismo PDF en papel A4',
    ],
    forWho: [
      'Si vas a publicar tu primera campaña',
      'Si publicas campañas sin una revisión fija y a veces se te escapa algo',
    ],
    details: [
      'En mi experiencia, la mayoría de los sustos de la primera semana vienen de cosas simples: un enlace roto, un píxel que no registra nada o un presupuesto diario que en realidad era el del mes. Estas cartas están para atrapar eso a tiempo.',
      'Reparte las cartas sobre la mesa, lee cada una y dale la vuelta cuando la hayas comprobado. Si solo tienes cinco minutos, revisa los cuatro ases.',
      'Lo que no hace: no garantiza que la campaña funcione. Te ayuda a que no falle por un descuido.',
    ],
    priceUsd: 0,
    gumroad: 'https://soyedgarnavarro.gumroad.com/l/antes-de-lanzar',
    cover: '/recursos/antes-de-lanzar.webp',
    featured: true,
  },
  {
    id: 'campanas-en-claro',
    title: 'Campañas en claro',
    format: 'Baraja de 54 cartas',
    description:
      '52 ideas que uso en mis campañas de Meta y Google, una por carta: anuncios, resultados, presupuesto y automatización.',
    includes: [
      '52 cartas y 2 comodines con instrucciones y un juego para equipos',
      'PDF para imprimir en casa en papel Carta, con marcas de corte y reverso',
      'El mismo PDF en papel A4',
      'Índice con todas las cartas',
    ],
    forWho: [
      'Si ya haces campañas en Meta o Google y quieres entender mejor lo que ves',
      'Si tienes un negocio o un equipo pequeño y quieres revisar tus campañas con un método',
    ],
    details: [
      'Cada carta explica una idea en dos líneas y te dice qué hacer con ella. No es un curso: es una baraja para tener al lado mientras trabajas. Sacas una carta, la aplicas en tu cuenta y sigues.',
      'El valor indica la dificultad: del As al 4 lo básico, del 5 al 9 el siguiente paso y del 10 al Rey lo avanzado. También sirve como baraja normal.',
      'Un aviso honesto: varias cartas son reglas de partida, no leyes. Donde no hay un número exacto, la carta lo dice y te pide comprobarlo con tus propios datos.',
    ],
    priceUsd: 12,
    gumroad: 'https://soyedgarnavarro.gumroad.com/l/campanas-en-claro',
    cover: '/recursos/campanas-en-claro.webp',
    featured: true,
  },
  {
    id: 'pideselo-a-la-ia',
    title: 'Pídeselo a la IA',
    format: 'Mazo de 36 cartas',
    description:
      '32 instrucciones listas para copiar en ChatGPT o Claude: escribir anuncios, entender tus resultados, planear el presupuesto y automatizar tareas.',
    includes: [
      '32 cartas con instrucciones y 4 cartas sobre cómo pedirle cosas a la IA',
      'Un archivo de texto con todas las instrucciones para copiar y pegar',
      'PDF para imprimir en casa en papel Carta, con marcas de corte y reverso',
      'El mismo PDF en papel A4',
    ],
    forWho: [
      'Si usas ChatGPT o Claude y no sabes bien qué pedirle para tus campañas',
      'Si quieres que la IA te ahorre trabajo sin dejar de revisar lo que hace',
    ],
    details: [
      'En mi experiencia, cuando la IA responde algo genérico, casi siempre el problema está en lo que le pedimos. Solo cambias lo que va entre [corchetes] por tus datos.',
      'Cada carta trae un «Ojo» con lo que conviene revisar en la respuesta, porque la IA escribe con seguridad aunque se equivoque. El borrador lo hace ella. La decisión sigue siendo tuya.',
      'Las instrucciones funcionan en la versión gratuita de ChatGPT o de Claude. Del As al 4 no hace falta preparar nada; del 5 al 8 conviene tener a mano datos de tus campañas.',
    ],
    priceUsd: 9,
    gumroad: 'https://soyedgarnavarro.gumroad.com/l/pideselo-a-la-ia',
    cover: '/recursos/pideselo-a-la-ia.webp',
    featured: true,
  },
  // Ejemplo (copia este bloque y cambia los datos):
  // {
  //   id: 'alerta-cpa',
  //   title: 'Alerta de costo por cliente',
  //   format: 'Automatización',
  //   description: 'Te avisa cuando una campaña se encarece y te dice qué anuncio pausar.',
  //   includes: ['La automatización lista para importar', 'Guía paso a paso en PDF'],
  //   forWho: ['Si manejas tus propias campañas en Meta', 'Si no tienes tiempo de revisarlas a diario'],
  //   details: ['Primer párrafo con más detalle…', 'Segundo párrafo…'],
  //   priceUsd: 19,
  //   gumroad: 'https://edgarnavarro.gumroad.com/l/alerta-cpa',
  //   featured: true,
  // },
];

// ---- Utilidades (no hace falta tocarlas) ----

export function formatUsd(value: number): string {
  if (value === 0) return 'Gratis';
  const amount = Number.isInteger(value) ? String(value) : value.toFixed(2).replace('.', ',');
  return `$${amount}`;
}

const whatsappDigits = shop.whatsapp.replace(/\D/g, '');

/** Enlace de WhatsApp con el mensaje listo, o null si no hay número. */
export function whatsappLink(product: Product): string | null {
  if (!whatsappDigits || product.priceUsd === 0) return null;
  const text = `Hola, Edgar. Quiero comprar «${product.title}» (${formatUsd(product.priceUsd)} USD) y pagar en bolívares.`;
  return `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(text)}`;
}

export const hasShop = products.length > 0;

/** Dirección de la página de un producto. */
export function productUrl(product: Product): string {
  return `/recursos/${product.id}/`;
}

export const featuredProducts = (() => {
  const featured = products.filter((p) => p.featured);
  return (featured.length ? featured : products).slice(0, 3);
})();
