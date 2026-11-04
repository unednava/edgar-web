// Añade cada video nuevo al principio de la lista.
// `youtubeId` es lo que va después de "watch?v=" en la URL del video.
// `topic` usa el mismo nombre que los temas de site.ts.

export type VideoTopic = 'Anuncios' | 'Resultados' | 'Tiempo';

export interface Video {
  title: string;
  topic: VideoTopic;
  youtubeId: string;
  minutes: number;
}

export const videos: Video[] = [
  // {
  //   title: 'Cómo automaticé mis reportes de Meta y Google Ads con IA',
  //   topic: 'Tiempo',
  //   youtubeId: 'XXXXXXXXXXX',
  //   minutes: 7,
  // },
];

// Mientras no haya videos publicados, la web muestra estos como "próximamente".
export const upcoming: Pick<Video, 'title' | 'topic'>[] = [
  { title: 'Cómo automaticé mis reportes de Meta y Google Ads con IA', topic: 'Tiempo' },
  { title: 'Le di los datos de mis campañas a 3 IA: ¿cuál los entiende mejor?', topic: 'Resultados' },
  { title: 'Lo que la IA todavía no puede hacer por tus anuncios', topic: 'Anuncios' },
];
