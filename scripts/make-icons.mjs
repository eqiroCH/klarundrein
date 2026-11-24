// Erzeugt Logo-Varianten, Favicons und das OG-Bild aus dem Original-Logo (design/logo-original.png)
// und dem Hero-Standbild (public/images/hero.webp). Aufruf: npm run og
import sharp from 'sharp'

const SRC = 'design/logo-original.png'
const white = { r: 255, g: 255, b: 255, alpha: 1 }

// Logo: Weissraum wegschneiden, quadratisch mit etwas Rand
const trimmed = await sharp(SRC).trim({ threshold: 12 }).toBuffer()
const square = (size, pad) =>
  sharp(trimmed)
    .resize(size - pad * 2, size - pad * 2, { fit: 'contain', background: white })
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: white })
await square(256, 10).webp({ quality: 90 }).toFile('public/logo-256.webp')
await square(512, 24).png().toFile('public/logo-512.png')

// Favicon: nur das Haus-Signet (ohne Schriftzug)
const icon = await sharp(SRC).extract({ left: 150, top: 105, width: 700, height: 560 }).toBuffer()
const fav = (size, pad) =>
  sharp(icon)
    .resize(size - pad * 2, size - pad * 2, { fit: 'contain', background: white })
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: white })
await fav(32, 1).png().toFile('public/favicon-32.png')
await fav(192, 12).png().toFile('public/favicon-192.png')
await fav(180, 16).png().toFile('public/apple-touch-icon.png')

// OG-Bild 1200×630: Hero-Standbild abgedunkelt, Logo-Kachel, Slogan
const bg = await sharp('public/images/hero.webp').resize(1200, 630, { fit: 'cover' }).toBuffer()
const logoTile = await square(150, 8).png().toBuffer()
const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#0d1b2b" stop-opacity=".92"/><stop offset="1" stop-color="#0d1b2b" stop-opacity=".55"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="72" y="72" width="166" height="166" rx="18" fill="#fff"/>
  <text x="72" y="345" font-family="Poppins, Helvetica, Arial, sans-serif" font-size="30" font-weight="600" fill="#7cc3ea" letter-spacing="3">REINIGUNGSFIRMA IN ADLISWIL</text>
  <text x="72" y="430" font-family="Poppins, Helvetica, Arial, sans-serif" font-size="72" font-weight="700" fill="#fff">Sauberkeit schafft</text>
  <text x="72" y="510" font-family="Poppins, Helvetica, Arial, sans-serif" font-size="72" font-weight="700" fill="#fff">Vertrauen.</text>
  <text x="72" y="572" font-family="Poppins, Helvetica, Arial, sans-serif" font-size="26" fill="#cfd8e3">Umzugsreinigung · Wohnung · Büro · Fenster · Hauswartung · Bau</text>
</svg>`
await sharp(bg)
  .composite([
    { input: Buffer.from(overlay), top: 0, left: 0 },
    { input: logoTile, top: 80, left: 80 },
  ])
  .png()
  .toFile('public/og-image.png')

console.log('✓ Logo, Favicons & OG-Bild erzeugt')
