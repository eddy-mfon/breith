import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
const indexHtml = readFileSync(resolve(root, 'index.html'), 'utf8');

const removedLabIcons = [
  'bowl-chopsticks',
  'burger',
  'card-credit',
  'football',
  'pac-man-ghost',
];

const toPascalCase = (name) =>
  name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

function lucideImports(source) {
  const imports = [];
  const pattern = /import\s*\{([^}]*)\}\s*from\s*['"]lucide-react['"]/gs;
  for (const match of source.matchAll(pattern)) {
    for (const entry of match[1].split(',')) {
      const name = entry.trim().split(/\s+as\s+/)[0].trim();
      if (name) imports.push(name);
    }
  }
  return imports;
}

test('lucide-react is pinned to at least 1.83.0 in package.json and the browser import map', () => {
  const declared = pkg.dependencies?.['lucide-react'];
  assert.ok(declared, 'lucide-react should remain a direct dependency');

  const version = declared.match(/(\d+)\.(\d+)\.(\d+)/);
  assert.ok(version, `could not read a version from ${declared}`);
  const [, major, minor, patch] = version.map(Number);

  const atLeast = (wantedMajor, wantedMinor, wantedPatch) =>
    major > wantedMajor ||
    (major === wantedMajor &&
      (minor > wantedMinor || (minor === wantedMinor && patch >= wantedPatch)));

  assert.ok(
    atLeast(1, 83, 0),
    `package.json pins lucide-react ${declared}; expected ^1.83.0 or newer`
  );
  assert.match(
    indexHtml,
    /lucide-react@\^1\.83\.0/,
    'index.html import map should load lucide-react ^1.83.0'
  );
});

test('components do not import lab icons removed in lucide-react 1.83.0', () => {
  const componentsDir = resolve(root, 'components');
  const removed = new Set([
    ...removedLabIcons,
    ...removedLabIcons.map(toPascalCase),
  ]);

  for (const file of readdirSync(componentsDir)) {
    if (!file.endsWith('.tsx')) continue;
    const source = readFileSync(resolve(componentsDir, file), 'utf8');
    for (const name of lucideImports(source)) {
      assert.ok(
        !removed.has(name),
        `${file} imports ${name}, which lucide-react 1.83.0 removed from the lab set`
      );
    }
  }
});
