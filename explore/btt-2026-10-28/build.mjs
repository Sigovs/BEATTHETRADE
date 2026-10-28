// node build.mjs → board.html (Artifact page, no document skeleton) + local.html (for browser QA)
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const uri = (f) => 'data:image/png;base64,' + readFileSync(join(here, 'assets', f)).toString('base64');
const page = readFileSync(join(here, 'board.src.html'), 'utf8')
  .replaceAll('{{WORDMARK}}', uri('wordmark-dark.png'))
  .replaceAll('{{STACKED}}', uri('stacked-light.png'));

writeFileSync(join(here, 'board.html'), page);
writeFileSync(join(here, 'local.html'),
  '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></head><body>\n' + page + '\n</body></html>\n');
console.log('board.html', page.length, 'bytes');
