// Generates favicons, app icons and the social preview image from the brand logo.
// Run: node scripts/make-icons.mjs
import sharp from 'sharp';
const mark = 'src/assets/brand/logo-mark.png';
const full = 'src/assets/brand/logo-vanascape.png';
const bg = { r: 251, g: 249, b: 241, alpha: 1 };
for (const [name, size] of [['favicon-32.png', 32], ['icon-192.png', 192], ['icon-512.png', 512], ['apple-touch-icon.png', 180]]) {
  await sharp(mark).resize(size, size).flatten({ background: bg }).png().toFile(`public/${name}`);
}
// Social preview 1200x630: logo centred on the brand's cream background.
const logo = await sharp(full).resize(560, 560).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: bg } })
  .composite([{ input: logo, left: 320, top: 35 }])
  .jpeg({ quality: 88 })
  .toFile('public/og.jpg');
