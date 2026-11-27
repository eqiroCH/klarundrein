# Klar und Rein – Website

Website der **Klar und Rein GmbH** (Adliswil ZH): Umzugsreinigung mit Abnahmegarantie, Wohnungs-, Büro-, Treppenhaus- und Baureinigung.
Redesign der bisherigen Hostinger-Baukasten-Seite: Texte, Bilder, Video, Logo, Farben (Navy/Logo-Blau) und Schrift (Poppins) übernommen, Layout hochwertiger und technisch neu gebaut (schwebender Header mit Mega-Menü, Vollbild-Menü auf dem Handy, Bento-Raster für Leistungen, Ablauf, Einzugsgebiet, FAQ, Kontaktkarte). Fokus: lokale Auffindbarkeit (SEO), KI-Antworten (AEO/GEO) und Anfragen.

**Stack:** Vite · React 19 · TypeScript · Tailwind CSS 4 · react-router · lucide-react · Poppins (selbst gehostet)
**Hosting:** Netlify (inkl. Netlify Forms für das Anfrageformular)

## Entwicklung

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # Typecheck + Build + Prerendering aller Seiten + sitemap.xml
npm run og      # Logo-Varianten, Favicons und OG-Bild aus design/logo-original.png neu erzeugen
```

## Seiten & SEO

- `/` Startseite + je eine Seite pro Leistung (10): Umzugs-, Wohnungs-, Büro-, Fenster-, Unterhalts-, Treppenhaus-, Bau-, Hochdruck- und Fassadenreinigung sowie Hauswartung (`/<leistung>-adliswil`), dazu `/impressum`, `/datenschutz`
- Alle Seiten werden beim Build vorgerendert (echtes HTML für Google und KI-Crawler), `sitemap.xml` wird automatisch erzeugt
- Strukturierte Daten: LocalBusiness (in `index.html`), Service + BreadcrumbList pro Leistungsseite, FAQPage für jede FAQ
- `public/robots.txt` erlaubt Suchmaschinen und KI-Bots, `public/llms.txt` fasst die Firma für KI-Assistenten zusammen
- Alte URLs (`/datenschutzerklarung`, `/geschaftsbedingungen`, `/en`) werden in `netlify.toml` per 301 umgeleitet

Alle Inhalte (Firmendaten, Leistungen, FAQ, Einzugsgebiet) stehen zentral in `src/data/site.ts`, Meta-Titel in `src/seo.ts`.

## Bilder & Video

- Fotos und Hero-Video stammen von der bisherigen Website (Unsplash bzw. Pexels, beide frei nutzbar) und liegen optimiert als WebP/MP4 in `public/images/`
- **Echte Fotos von Klar und Rein** (Instagram @klar.und.rein.gmbh, Nov. 2026): `umzug*` (Küche nach Umzugsreinigung), `fenster*` (Fenstertür in Horgen), `hochdruck*` (Deckenreinigung mit Hochdruck) sowie die Galerie «Einblicke» auf der Startseite (`einsatz-*.webp`, Vorher/Nachher Lichtschacht von Esma)
- `unterhalt*` (Eingangsbereich mit Parkett) und Lichtschacht vorher/nachher: Fotos von Esma per WhatsApp (25.11.2026)
- Noch Platzhalter (Unsplash/alte Seite): Wohnung, Büro, Treppenhaus, Bau, Hauswartung, Fassade, Über uns, Hero
- Das Hero-Video ist ein 12-Sekunden-Ausschnitt (720p, ca. 0.8 MB). Es lädt erst im Browser und nicht bei «Bewegung reduzieren» oder Datensparmodus, das Standbild `hero.webp` ist das LCP-Bild
- Original-Logo: `design/logo-original.png`

## Offene Punkte (vom Kunden bestätigen lassen)

- [x] Impressum: Arxhend Hoxha, Geschäftsführer und Inhaber
- [x] 076 561 17 79 ist auch auf WhatsApp erreichbar
- [ ] Weitere echte Fotos (Team, Wohnung, Treppenhaus, Büro, Bau, Hauswartung, Fassade) – Umzug, Fenster, Hochdruck, Unterhalt und die Galerie «Einblicke» sind schon echt. Esma schickt mehr, sobald sie welche hat
- [x] Kennzahlen «120+» und «15» der alten Seite entfernt (Esma kannte die Bedeutung nicht)
- [x] Abnahmegarantie nur auf Wunsch und als Zusatzleistung (nicht gratis, Preis in der Offerte), laut Esma 25.11.2026
- [x] Leistungen als «Leistungen nach Wahl» + «Weitere Leistungen nach Absprache möglich» (Wunsch von Esma)
- [x] Reinigungsmittel: je nach Kunde – Aussage «bringen alles mit» entfernt
- [x] Einzugsgebiet: an Esmas Google-Profil angeglichen (inkl. Wädenswil, Richterswil, Wollerau)
- [x] Öffnungszeiten: Mo–Fr 07:30–18:00 (aus dem Google-Profil, `company.hours`, Schema)
- [x] Umfang der neuen Leistungen mit Esma geklärt (25.11.2026): Winterdienst raus, Lichtschachtreinigung rein
- [x] Maler/Renovation: bieten sie nur nebenbei an, keine eigene Seite – Fokus auf Reinigung (Esma, 25.11.2026)
- [x] Winterdienst/Schneeräumen entfernt (Esma, 25.11.2026), dafür Lichtschachtreinigung bei der Hauswartung. Im Google-Profil bei «Hauswartungsservice» am 27.11.2026 ebenfalls angepasst
- [ ] Echte Google-Bewertungen einbinden, sobald vorhanden. Die Vorlagen-Bewertungen der alten Seite («Lisa B.», «Sarah R.») wurden bewusst nicht übernommen, an ihrer Stelle steht der Bereich «Darauf können Sie sich verlassen»
- [x] Google-Unternehmensprofil: von Esma erstellt und verifiziert, Lion ist Administrator
- [x] Google-Profil optimiert (24.11.2026): Kategorien, 10 Leistungen mit Beschreibung, Beschreibung, Einzugsgebiet, Öffnungszeiten, Instagram, WhatsApp
- [x] Antworten auf alle Google-Bewertungen gepostet (5 am 24.11., Hassan Kinani am 27.11.2026; Stefan Beyeler hat Esma selbst beantwortet). Stand 27.11.: 7 Bewertungen, 5,0
- [x] Google-Profil: Logo ersetzt (`design/google/logo-google.png`, das alte war abgeschnitten) und Titelbild durch echtes Foto ersetzt (`design/google/titelbild-google.jpg`)
- [x] Cylex: Korrektur eingereicht (24.11.2026, Rückfragen an info@klarundrein.ch), falsche Nummer 052 707 25 62 entfernen. Cylex hat sie aus dem Unsplash-Dateinamen der alten Seite gelesen (`photo-1760527072562`). Korrektur über «Fehlerhafte Daten melden»
- [x] Bing Places (27.11.2026): von Esma mit ihrem Google-Konto aus Google importiert, Überprüfung abgeschlossen, «mit Google synchronisiert», Veröffentlichung in 7–12 Tagen. E-Mail-Feld noch leer
- [ ] local.ch: Eintrag existiert, «nicht beansprucht». Beanspruchen braucht ein **localsearch-Konto** (Formular leitet auf auth.local.ch weiter) → Esma macht es selbst mit ihrem Login (Vorname Esma, Nachname Haxhaj, +41765611779, info@klarundrein.ch, Änderungstext). Danach prüft Swisscom Directories per Telefon/E-Mail; Werbepaket ablehnen
- [ ] search.ch und Ofri prüfen

## Bewertungen

`design/bewertung/`: QR-Code und Bewertungskarte (85 × 55 mm, 3 mm Beschnitt, 300 dpi) für den Google-Bewertungslink https://g.page/r/CRP9dkwBEaVrEAI/review

## Go-live (später)

Die Website läuft am Schluss **bei Klar und Rein**, nicht bei Eqiro: Domain, E-Mail und Hosting im Infomaniak-Konto der Kundin, Eqiro bekommt Zugang als eingeladener Benutzer. Netlify ist nur die Vorschau.

- [ ] Seite hosting-unabhängig machen: Netlify Forms ersetzen (Anfragen an info@klarundrein.ch), saubere URLs ohne Server-Konfiguration, Weiterleitungen aus `netlify.toml` als `.htaccess`, Datenschutz auf Infomaniak (Schweiz) anpassen
- [ ] Hosting: Infomaniak Starter (gratis zur Domain, 10 MB, statisch) – Seite hat ca. 5 MB
- [ ] Vor dem Umstellen der Nameserver (aktuell Hostinger) MX/SPF/DKIM in der Infomaniak-DNS-Zone prüfen
- [ ] Deploy per GitHub Action (FTP) auf das Kunden-Hosting, eigener FTP-Benutzer für Eqiro
- [ ] Google Search Console + Bing Webmaster Tools, Sitemap einreichen
- [ ] Übergabe: Zugänge, Code als ZIP + schriftlich, dass er der Kundin gehört; Netlify-Projekt löschen
