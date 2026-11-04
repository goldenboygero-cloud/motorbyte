import { mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const client = process.env.PUBLIC_ADSENSE_CLIENT;

if (!client) {
  await rm(resolve('dist', 'ads.txt'), { force: true });
  console.log('AdSense publisher ID not set; skipping ads.txt.');
  process.exit(0);
}

if (!/^ca-pub-\d+$/.test(client)) {
  throw new Error('PUBLIC_ADSENSE_CLIENT must use the format ca-pub-1234567890123456.');
}

const publisherId = client.slice('ca-'.length);
const outputDirectory = resolve('dist');
await mkdir(outputDirectory, { recursive: true });
await writeFile(
  resolve(outputDirectory, 'ads.txt'),
  `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`,
  'utf8',
);
console.log('Generated dist/ads.txt for the configured AdSense publisher.');
