// Artículos del blog (Substack) que se muestran en la página principal.
//
// Cómo se llenan:
// 1. Automático: si `site.substack` tiene dirección, al publicar la web se leen los últimos
//    artículos del RSS de Substack (<dirección>/feed). Solo se actualiza cuando la web se
//    vuelve a publicar (cada `git push` a main), no al instante.
// 2. A mano: si quieres destacar artículos concretos, ponlos en `manualPosts`; tienen prioridad.
// Mientras no haya ninguno, la sección no aparece.

import { substack } from './site';

export interface Post {
  title: string;
  url: string;
  date: string; // ISO, p. ej. '2026-11-20'
  excerpt?: string;
  cover?: string; // imagen opcional
}

export const blog = {
  title: 'Lo último del blog',
  intro: 'Escribo sobre lo que pruebo en mis campañas, con los números de cada experimento.',
  maxPosts: 3,
};

export const manualPosts: Post[] = [];

// ---- Lectura del RSS de Substack (no hace falta tocarlo) ----

function clean(text: string): string {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function tag(item: string, name: string): string {
  const m = item.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`));
  return m ? clean(m[1]) : '';
}

async function fetchSubstackPosts(): Promise<Post[]> {
  if (!substack) return [];
  try {
    const res = await fetch(`${substack.home}/feed`, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
    return items.map((item) => {
      const date = new Date(tag(item, 'pubDate'));
      const cover = item.match(/<enclosure[^>]*url="([^"]+)"[^>]*type="image/)?.[1];
      const excerpt = tag(item, 'description');
      return {
        title: tag(item, 'title'),
        url: tag(item, 'link'),
        date: isNaN(date.getTime()) ? '' : date.toISOString().slice(0, 10),
        excerpt: excerpt.length > 180 ? `${excerpt.slice(0, 177).trimEnd()}…` : excerpt,
        cover,
      };
    });
  } catch {
    // Si Substack no responde al publicar, la web se publica igual, sin la sección.
    return [];
  }
}

export async function getPosts(): Promise<Post[]> {
  const posts = manualPosts.length ? manualPosts : await fetchSubstackPosts();
  return posts.filter((p) => p.title && p.url).slice(0, blog.maxPosts);
}

// Se leen una sola vez al compilar y se comparten (sección del blog, menú y pie).
export const latestPosts: Post[] = await getPosts();

export function formatDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(`${iso}T12:00:00Z`);
  return d.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
