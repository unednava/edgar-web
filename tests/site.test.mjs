import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

function walkHtml(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkHtml(full));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const htmlFiles = walkHtml(distDir);

test('genera las 7 páginas esperadas y el sitemap', () => {
  const expected = [
    'index.html',
    '404.html',
    path.join('mentorias', 'index.html'),
    path.join('recursos', 'index.html'),
    path.join('recursos', 'antes-de-lanzar', 'index.html'),
    path.join('recursos', 'campanas-en-claro', 'index.html'),
    path.join('recursos', 'pideselo-a-la-ia', 'index.html'),
    'sitemap-index.xml',
  ];
  for (const rel of expected) {
    assert.ok(fs.existsSync(path.join(distDir, rel)), `Falta ${rel} en dist/`);
  }
});

test('todas las imágenes locales referenciadas existen en dist/', () => {
  const missing = [];
  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
    for (const match of html.matchAll(/<img[^>]+src="(\/[^"]+)"/g)) {
      const assetPath = path.join(distDir, match[1].replace(/^\//, ''));
      if (!fs.existsSync(assetPath)) missing.push(`${path.relative(distDir, file)} -> ${match[1]}`);
    }
  }
  assert.deepEqual(missing, [], `Imágenes faltantes: ${missing.join(', ')}`);
});

test('todos los bloques JSON-LD son JSON válido', () => {
  let count = 0;
  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, 'utf8');
    for (const match of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      count++;
      const parsed = JSON.parse(match[1]);
      const items = Array.isArray(parsed) ? parsed : [parsed];
      for (const item of items) {
        assert.ok(item['@context'], `Falta @context en ${path.relative(distDir, file)}`);
        assert.ok(item['@type'], `Falta @type en ${path.relative(distDir, file)}`);
      }
    }
  }
  assert.ok(count >= 7, `Se esperaban al menos 7 bloques JSON-LD y hubo ${count}`);
});

test('todos los enlaces internos resuelven a una página o archivo en dist/', () => {
  const broken = [];
  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, 'utf8');
    for (const match of html.matchAll(/<a[^>]+href="(\/[^"#?]*)"/g)) {
      const target = match[1];
      if (target === '/') continue;
      const rel = target.replace(/^\//, '');
      const asFile = path.join(distDir, rel);
      const asIndex = path.join(distDir, rel, 'index.html');
      if (!fs.existsSync(asFile) && !fs.existsSync(asIndex)) {
        broken.push(`${path.relative(distDir, file)} -> ${target}`);
      }
    }
  }
  assert.deepEqual(broken, [], `Enlaces internos rotos: ${broken.join(', ')}`);
});

test('recursos cargan Gumroad Overlay y mentorías incrustan el calendario', () => {
  const prodHtml = fs.readFileSync(path.join(distDir, 'recursos', 'campanas-en-claro', 'index.html'), 'utf8');
  assert.match(prodHtml, /https:\/\/gumroad\.com\/js\/gumroad\.js/);
  assert.match(prodHtml, /id="bs-panel"/);
  assert.match(prodHtml, /wa\.me\/584140277848/);

  const mentHtml = fs.readFileSync(path.join(distDir, 'mentorias', 'index.html'), 'utf8');
  assert.match(mentHtml, /calendar\.google\.com\/calendar\/appointments\/schedules\/.*\?gv=true/);
  assert.match(mentHtml, /wa\.me\/584140277848/);
});

// Regresión de los dos fallos que aparecieron en producción (nov. 2026):
// el botón de Gumroad sacaba de la web por `?wanted=true` y el extracto del blog mostraba
// entidades numéricas del RSS (`medici&#243;n`) en lugar del texto con acentos.
test('las fichas no piden ?wanted=true y el blog muestra los acentos decodificados', () => {
  for (const id of ['antes-de-lanzar', 'campanas-en-claro', 'pideselo-a-la-ia']) {
    const html = fs.readFileSync(path.join(distDir, 'recursos', id, 'index.html'), 'utf8');
    const gumroadLinks = [...html.matchAll(/href="(https:\/\/[^"]*gumroad[^"]*)"/g)].map((m) => m[1]);
    assert.ok(gumroadLinks.length > 0, `La ficha ${id} no tiene enlace a Gumroad`);
    for (const link of gumroadLinks) {
      assert.ok(
        !link.includes('wanted=true'),
        `La ficha ${id} lleva ?wanted=true (Gumroad saca al visitante de la web): ${link}`,
      );
    }
  }

  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
  const start = indexHtml.indexOf('id="blog"');
  assert.ok(start > -1, 'No se encontró la sección del blog en la portada');
  const blogSection = indexHtml.slice(start, indexHtml.indexOf('</section>', start));
  // Atrapa tanto `&#243;` como `&amp;#243;` (el segundo es como sale una entidad sin decodificar).
  const leftover = blogSection.match(/&(?:amp;)?#\d+;|&#x[0-9a-f]+;/gi) ?? [];
  assert.deepEqual(leftover, [], `Entidades sin decodificar en el blog: ${leftover.join(', ')}`);
});
