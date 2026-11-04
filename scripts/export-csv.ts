import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ALL_BOORU_TAGS, DOMAIN_MAP } from '../src/data/index.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function escapeCsvField(val: string | undefined | null): string {
  const str = String(val ?? '');
  if (/[",\r\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

const headers = [
  'tag',
  'domain_id',
  'domain_index',
  'domain_label',
  'subcategory',
  'popularity',
  'post_count_est',
  'description',
  'aliases',
  'related_tags',
  'illustrious_note'
];

const rows: string[] = [headers.join(',')];

for (const item of ALL_BOORU_TAGS) {
  const domainMeta = DOMAIN_MAP[item.domain];
  const row = [
    escapeCsvField(item.tag),
    escapeCsvField(item.domain),
    escapeCsvField(domainMeta?.indexNumber ?? ''),
    escapeCsvField(domainMeta?.label ?? item.domain),
    escapeCsvField(item.subcategory),
    escapeCsvField(item.popularity),
    escapeCsvField(item.postCountEst),
    escapeCsvField(item.description),
    escapeCsvField((item.aliases ?? []).join('; ')),
    escapeCsvField((item.relatedTags ?? []).join('; ')),
    escapeCsvField(item.illustriousNote ?? '')
  ];
  rows.push(row.join(','));
}

// Prepend UTF-8 BOM so Microsoft Excel and Google Sheets open UTF-8 characters cleanly
const csvContent = '\uFEFF' + rows.join('\r\n') + '\r\n';

const publicDir = path.join(rootDir, 'public');
const releaseDir = path.join(rootDir, 'release');

fs.mkdirSync(publicDir, { recursive: true });
fs.mkdirSync(releaseDir, { recursive: true });

const rootCsvPath = path.join(rootDir, 'illustrious-lexicon-tags.csv');
const publicCsvPath = path.join(publicDir, 'illustrious-lexicon-tags.csv');
const releaseCsvPath = path.join(releaseDir, 'illustrious-lexicon-tags.csv');

fs.writeFileSync(rootCsvPath, csvContent, 'utf-8');
fs.writeFileSync(publicCsvPath, csvContent, 'utf-8');
fs.writeFileSync(releaseCsvPath, csvContent, 'utf-8');

console.log(`Exported ${ALL_BOORU_TAGS.length} canonical Booru tags to CSV:`);
console.log(`  - ./illustrious-lexicon-tags.csv`);
console.log(`  - ./public/illustrious-lexicon-tags.csv`);
console.log(`  - ./release/illustrious-lexicon-tags.csv`);
