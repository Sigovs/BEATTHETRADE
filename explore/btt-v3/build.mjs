// node build.mjs → index.html (Artifact page, no document skeleton), local.html (browser QA)
// and ../../site/ (standalone page: a full document plus its images, opens from disk)
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const here = dirname(fileURLToPath(import.meta.url));
const wordmark = 'data:image/png;base64,' + readFileSync(join(here, '../btt-2026-10-28/assets/wordmark-dark.png')).toString('base64');
const page = readFileSync(join(here, 'index.src.html'), 'utf8').replaceAll('{{WORDMARK}}', wordmark);
writeFileSync(join(here, 'index.html'), page);

// a real document: title, fonts and styles in <head>, the artifact-only meta dropped
const cut = page.indexOf('</style>') + '</style>'.length;
const head = page.slice(0, cut).replace(/<meta name="claude:[^>]*>\n?/, '');
const doc = '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
  + head + '\n</head>\n<body>\n' + page.slice(cut).trim() + '\n</body>\n</html>\n';
writeFileSync(join(here, 'local.html'), doc);

const site = join(here, '../../site');
mkdirSync(join(site, 'assets'), { recursive: true });
writeFileSync(join(site, 'index.html'), doc);
const used = [...new Set([...page.matchAll(/assets\/[\w.-]+\.webp/g)].map(m => m[0]))];
used.forEach(f => copyFileSync(join(here, f), join(site, f)));
console.log('index.html', page.length, '· site/index.html +', used.length, 'images');
