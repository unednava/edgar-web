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
  whatsapp: '+58 412 0000000', // VISTA PREVIA: número ficticio
  title: 'Recursos',
  intro: 'Plantillas y guías que uso en mis propias campañas, listas para que las adaptes a la tuya.',
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
  // VISTA PREVIA: productos de ejemplo (no existen; esta rama nunca se publica en main)
  {
    id: 'alerta-costo',
    title: 'Alerta de costo por cliente',
    format: 'Automatización',
    description: 'Te avisa cuando una campaña se encarece y te sugiere qué anuncio pausar.',
    includes: ['La automatización lista para importar', 'Guía paso a paso en PDF', 'Video de instalación'],
    priceUsd: 19,
    gumroad: 'https://gumroad.com',
    featured: true,
  },
  {
    id: 'reporte-semanal',
    title: 'Reporte semanal de Meta y Google',
    format: 'Plantilla',
    description: 'Un tablero que junta tus dos cuentas y se actualiza solo cada lunes.',
    includes: ['Plantilla de Looker Studio', 'Instrucciones para conectar tus cuentas'],
    priceUsd: 12.5,
    gumroad: 'https://gumroad.com',
    featured: true,
  },
  {
    id: 'guia-instrucciones',
    title: 'Instrucciones para pedirle anuncios a la IA',
    format: 'Guía en PDF',
    description: 'Los textos exactos que uso para generar ideas de anuncios y cómo los pruebo.',
    priceUsd: 0,
    gumroad: 'https://gumroad.com',
    featured: true,
  },
  {
    id: 'checklist-campana',
    title: 'Checklist antes de lanzar una campaña',
    format: 'Guía en PDF',
    description: 'Lo que reviso siempre antes de gastar el primer dólar en una campaña nueva.',
    includes: ['Checklist imprimible', 'Ejemplos de errores comunes'],
    priceUsd: 7,
    gumroad: 'https://gumroad.com',
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
