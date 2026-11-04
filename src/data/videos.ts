// Añade cada video nuevo al principio de la lista.
// `youtubeId` es lo que va después de "watch?v=" en la URL del video.

export interface Video {
  title: string;
  track: 'ads' | 'datos' | 'automatización';
  youtubeId: string;
  minutes: number;
}

export const videos: Video[] = [
  // {
  //   title: 'Cómo automaticé mis reportes de Meta y Google Ads con n8n y un LLM',
  //   track: 'automatización',
  //   youtubeId: 'XXXXXXXXXXX',
  //   minutes: 7,
  // },
];

// Mientras no haya videos publicados, la web muestra estos como "próximamente".
export const upcoming: Pick<Video, 'title' | 'track'>[] = [
  { title: 'Cómo automaticé mis reportes de Meta y Google Ads con n8n y un LLM', track: 'automatización' },
  { title: 'Le di mis datos de campaña a 3 IAs: ¿cuál analiza mejor?', track: 'datos' },
  { title: 'Lo que la IA no puede hacer en paid media (todavía)', track: 'ads' },
];
