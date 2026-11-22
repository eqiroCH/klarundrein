# Klar und Rein – Website

Website der **Klar und Rein GmbH** (Adliswil ZH): Umzugsreinigung mit Abnahmegarantie, Wohnungs-, Büro-, Treppenhaus- und Baureinigung.
Redesign der bisherigen Hostinger-Baukasten-Seite: gleiche Texte, Bilder, Farben (Navy/Logo-Blau), Schrift (Poppins) und Aufbau, technisch neu gebaut. Fokus: lokale Auffindbarkeit (SEO), KI-Antworten (AEO/GEO) und Anfragen.

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

- `/` Startseite + je eine Seite pro Leistung (`/umzugsreinigung-adliswil`, `/wohnungsreinigung-adliswil`, `/bueroreinigung-adliswil`, `/treppenhausreinigung-adliswil`, `/baureinigung-adliswil`), `/impressum`, `/datenschutz`
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
- [ ] Einzugsgebiet bestätigen (Liste in `areas`)
- [ ] Bietet sie auch Fensterreinigung, Hauswartung, Maler/Renovation an? (laut Handelsregister-Zweck) → ggf. eigene Seiten
- [ ] Echte Google-Bewertungen einbinden, sobald vorhanden. Die Vorlagen-Bewertungen der alten Seite («Lisa B.», «Sarah R.») wurden bewusst nicht übernommen, an ihrer Stelle steht der Bereich «Darauf können Sie sich verlassen»
- [ ] Netlify: Formular-Benachrichtigung an info@klarundrein.ch einrichten (Site settings → Forms → Notifications)
- [ ] Domain klarundrein.ch (Infomaniak, DNS aktuell bei Hostinger) auf Netlify zeigen lassen – **MX-Records/E-Mail vorher klären**
- [ ] Google Search Console + Unternehmensprofil einrichten, Sitemap einreichen
