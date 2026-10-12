// Generates favicons, app icons and the social preview image.
// Run: node scripts/make-icons.mjs
import sharp from 'sharp';
const mark = 'src/assets/brand/logo-mark.png';
const full = 'src/assets/brand/logo-vanascape.png';
const bg = { r: 251, g: 249, b: 241, alpha: 1 };
for (const [name, size] of [['favicon-32.png', 32], ['icon-192.png', 192], ['icon-512.png', 512], ['apple-touch-icon.png', 180]]) {
  await sharp(mark).resize(size, size).flatten({ background: bg }).png().toFile(`public/${name}`);
}
// Social preview 1200x630: hero photo with the logo card.
const shade = Buffer.from('<svg width="1200" height="630"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#1b2a14" stop-opacity=".85"/><stop offset=".7" stop-color="#1b2a14" stop-opacity="0"/></linearGradient></defs><rect width="1200" height="630" fill="url(#g)"/></svg>');
const card = await sharp(full).resize(300, 300).png().toBuffer();
const round = await sharp({ create: { width: 320, height: 320, channels: 4, background: bg } }).composite([{ input: card, left: 10, top: 10 }]).png().toBuffer();
await sharp('src/assets/photos/hero-modern-villa-garden.jpg')
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .composite([{ input: shade }, { input: round, left: 70, top: 155 }])
  .jpeg({ quality: 86 })
  .toFile('public/og.jpg');
