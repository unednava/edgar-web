// Mentorías uno a uno (pedido de Edgar, nov. 2026).
// Se reservan en su calendario de Google; el pago se coordina después, como los recursos:
// en dólares con tarjeta o en bolívares a la tasa del día.
// Textos con la voz de Edgar (skill escribir-como-edgar): sin promesas de resultados.

export interface Mentoring {
  id: string; // ancla en /mentorias/#id: no cambiarlo una vez publicado
  title: string;
  forWho: string;
  covers: string[];
}

export const mentoring = {
  title: 'Mentorías',
  // Enlace de reservas de Google Calendar. Vacío = la sección y la página no aparecen.
  booking: 'https://calendar.app.google/QDLzgJ1rsmEatKQ69',
  priceUsd: 40,
  duration: '1 hora',
  place: 'Google Meet',

  intro:
    'Una hora por videollamada para revisar tu caso. Miramos lo que tienes, entendemos qué está pasando y te llevas un plan con pasos claros.',
  teaser:
    'Si prefieres revisar tu caso conmigo, en una hora por videollamada miramos tus campañas o tu negocio y salimos con un plan.',

  items: [
    {
      id: 'anuncios',
      title: 'Anuncios en Meta y Google',
      forWho: 'Negocios que quieren anunciarse por su cuenta y personas de marketing que están empezando con campañas.',
      covers: [
        'Revisamos tu cuenta y tus campañas, si ya tienes.',
        'Cómo decidir cuánto invertir y qué números mirar.',
        'Qué cambiar primero cuando una campaña deja de traer clientes.',
      ],
    },
    {
      id: 'crecimiento',
      title: 'Hacer crecer tu negocio',
      forWho: 'Dueños de negocios que quieren conseguir más clientes y no saben por dónde empezar.',
      covers: [
        'Dónde se te están yendo los clientes, desde que te conocen hasta que compran.',
        'Qué probar primero con el tiempo y el presupuesto que tienes.',
      ],
    },
    {
      id: 'ia',
      title: 'Marketing con IA',
      forWho: 'Personas y equipos de marketing que quieren usar la IA en su trabajo diario.',
      covers: [
        'Qué tareas de tu trabajo puede hacer la IA y cuáles es mejor que sigas haciendo tú.',
        'Cómo pedirle las cosas para que el resultado sirva.',
        'Una primera automatización pensada para tu caso.',
      ],
    },
  ] satisfies Mentoring[],

  steps: [
    { title: 'Reservas', text: 'Eliges día y hora en mi calendario y me cuentas en una línea qué quieres revisar.' },
    {
      title: 'Pagas',
      text: 'Te escribo para confirmar. Puedes pagar en dólares con tarjeta o en bolívares a la tasa del día.',
    },
    {
      title: 'Nos vemos',
      text: 'La llamada es por Google Meet. Si tienes datos o capturas de tus campañas, tráelos: así aprovechamos la hora.',
    },
  ],

  honest: {
    title: 'Lo que no te prometo',
    text: 'No te garantizo resultados. Nadie puede hacerlo sin conocer tu negocio a fondo. Lo que sí hago es ayudarte a tomar mejores decisiones con lo que tienes, y decirte con claridad si algo no tiene sentido.',
  },
};

export const hasMentoring = mentoring.booking.trim() !== '';
