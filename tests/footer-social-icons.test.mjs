import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const footer = readFileSync(resolve(root, 'components/Footer.tsx'), 'utf8');

function lucideImports(source) {
  const match = source.match(/import\s*\{([^}]*)\}\s*from\s*['"]lucide-react['"]/s);
  if (!match) return [];
  return match[1]
    .split(',')
    .map((name) => name.trim())
    .filter(Boolean)
    .map((name) => name.split(/\s+as\s+/)[0].trim());
}

test('Footer does not import social brand icons removed from lucide-react', () => {
  const imports = lucideImports(footer);

  assert.ok(
    imports.includes('Wind'),
    'Footer should still import the Wind icon from lucide-react'
  );

  for (const removed of ['Instagram', 'Twitter', 'Facebook']) {
    assert.ok(
      !imports.includes(removed),
      `Footer must not import ${removed} from lucide-react; lucide-react 1.75.0 no longer exports brand icons`
    );
  }
});

test('Footer keeps an inline SVG mark for each social link', () => {
  for (const brand of ['Instagram', 'Twitter', 'Facebook']) {
    assert.match(
      footer,
      new RegExp(`const ${brand} =`),
      `${brand} should be defined inline instead of imported`
    );
  }

  const svgs = footer.match(/<svg[\s>]/g) ?? [];
  assert.ok(
    svgs.length >= 3,
    'expected inline SVG marks for the Instagram, Twitter and Facebook links'
  );
});
