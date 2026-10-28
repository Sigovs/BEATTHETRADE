// node build.mjs → index.html (Artifact page, no document skeleton) + local.html (browser QA)
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const here = dirname(fileURLToPath(import.meta.url));
const wordmark = 'data:image/png;base64,' + readFileSync(join(here, '../btt-2026-10-28/assets/wordmark-dark.png')).toString('base64');
const page = readFileSync(join(here, 'index.src.html'), 'utf8').replaceAll('{{WORDMARK}}', wordmark);
writeFileSync(join(here, 'index.html'), page);
writeFileSync(join(here, 'local.html'), '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></head><body>\n' + page + '\n</body></html>\n');
console.log('index.html', page.length);
