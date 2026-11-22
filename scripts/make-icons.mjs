// Erzeugt favicon-32.png, apple-touch-icon.png, logo-512.png und og-image.png aus SVG. Aufruf: npm run og
import sharp from 'sharp'
import { readFile } from 'node:fs/promises'

const fav = await readFile('public/favicon.svg')
await sharp(fav, { density: 300 }).resize(32, 32).png().toFile('public/favicon-32.png')
await sharp(fav, { density: 600 }).resize(180, 180).flatten({ background: '#13a898' }).png().toFile('public/apple-touch-icon.png')
await sharp(fav, { density: 1200 }).resize(512, 512).png().toFile('public/logo-512.png')

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="a" cx="85%" cy="0%" r="70%"><stop offset="0" stop-color="#d0f3ee"/><stop offset="1" stop-color="#f5f9fb" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#f5f9fb"/>
  <rect width="1200" height="630" fill="url(#a)"/>
  <g transform="translate(80 80) scale(2)">
    <rect width="40" height="40" rx="12" fill="#13a898"/>
    <path d="M20 8.5c4.6 6 7.6 10.3 7.6 14.4a7.6 7.6 0 0 1-15.2 0c0-4.1 3-8.4 7.6-14.4Z" fill="#fff"/>
  </g>
  <text x="180" y="132" font-family="DejaVu Sans, Arial, sans-serif" font-size="38" font-weight="700" fill="#0b2236">Klar <tspan fill="#13a898">und</tspan> Rein</text>
  <text x="80" y="330" font-family="DejaVu Sans, Arial, sans-serif" font-size="74" font-weight="800" fill="#0b2236">Reinigungsfirma</text>
  <text x="80" y="420" font-family="DejaVu Sans, Arial, sans-serif" font-size="74" font-weight="800" fill="#13a898">in Adliswil</text>
  <text x="80" y="520" font-family="DejaVu Sans, Arial, sans-serif" font-size="32" fill="#34536d">Umzugsreinigung mit Abnahmegarantie · Wohnung · Büro · Treppenhaus · Bau</text>
</svg>`
await sharp(Buffer.from(og)).png().toFile('public/og-image.png')
console.log('✓ Icons & OG-Bild erzeugt')
