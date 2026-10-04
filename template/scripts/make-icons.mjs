// Generates favicons, app icons and the social preview image from the source assets.
// Run: node scripts/make-icons.mjs
import sharp from 'sharp';
const logo = 'src/assets/brand/logo.jpg';
// The logo is a green ring on a dark backdrop; crop to the circle and mask the corners.
const circle = Buffer.from('<svg width="500" height="500"><circle cx="250" cy="250" r="244" fill="#fff"/></svg>');
const round = await sharp(logo).resize(500, 500).composite([{ input: circle, blend: 'dest-in' }]).png().toBuffer();
for (const [name, size] of [['favicon-32.png', 32], ['icon-192.png', 192], ['icon-512.png', 512]]) {
  await sharp(round).resize(size, size).png().toFile(`public/${name}`);
}
await sharp(logo).resize(180, 180).flatten({ background: '#ffffff' }).png().toFile('public/apple-touch-icon.png');

// Social preview 1200x630: crop of the hero courtyard photo + logo.
const logoSmall = await sharp(round).resize(150, 150).png().toBuffer();
await sharp('src/assets/photos/project-courtyard-planter-pergola.jpg')
  .extract({ left: 0, top: 380, width: 739, height: 388 })
  .resize(1200, 630, { fit: 'cover' })
  .composite([{ input: logoSmall, left: 40, top: 440 }])
  .jpeg({ quality: 82 })
  .toFile('public/og.jpg');
