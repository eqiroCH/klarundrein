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
- Das Hero-Video ist ein 12-Sekunden-Ausschnitt (720p, ca. 0.8 MB). Es lädt erst im Browser und nicht bei «Bewegung reduzieren» oder Datensparmodus, das Standbild `hero.webp` ist das LCP-Bild
- Original-Logo: `design/logo-original.png`

## Offene Punkte (vom Kunden bestätigen lassen)

- [ ] Name der Geschäftsführung fürs Impressum (`company.manager`)
- [ ] Telefonnummer 076 561 17 79 auch auf WhatsApp erreichbar?
- [ ] Echte Fotos (Team, Auto, Vorher/Nachher) – aktuell die Stockfotos der bisherigen Website
- [ ] Kennzahlen «120+ Qualitätsdienstleistungen» und «15 Von vielen vertraut» (von der alten Seite übernommen): Bedeutung bestätigen oder ersetzen (`stats`)
- [ ] Bedingungen der Abnahmegarantie bestätigen (Text: kostenlose Nachreinigung bei Beanstandung)
- [ ] Leistungsumfang je Leistung prüfen (v. a. Umzugsreinigung: Fenster/Storen, Keller/Estrich)
- [ ] Reinigungsmittel/Geräte werden mitgebracht? (FAQ)
- [x] Einzugsgebiet: an Esmas Google-Profil angeglichen (inkl. Wädenswil, Richterswil, Wollerau)
- [x] Öffnungszeiten: Mo–Fr 07:30–18:00 (aus dem Google-Profil, `company.hours`, Schema)
- [ ] Umfang der neuen Leistungen bestätigen (Fenster, Unterhalt, Hauswartung inkl. Winterdienst, Hochdruck, Fassade) – Texte sind Vorschläge; Fotos sind Unsplash-Platzhalter
- [ ] Maler/Renovation (laut Handelsregister-Zweck) auch anbieten? → ggf. eigene Seite
- [ ] Echte Google-Bewertungen einbinden, sobald vorhanden. Die Vorlagen-Bewertungen der alten Seite («Lisa B.», «Sarah R.») wurden bewusst nicht übernommen, an ihrer Stelle steht der Bereich «Darauf können Sie sich verlassen»
- [x] Google-Unternehmensprofil: von Esma erstellt und verifiziert, Lion ist Administrator
- [ ] Google-Profil optimieren (Kategorien, Leistungen, Beschreibung), local.ch/search.ch, Bing Places, Cylex korrigieren

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
