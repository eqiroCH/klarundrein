import { useEffect } from 'react'
import { company, services } from './data/site'

export type PageMeta = { title: string; description: string; noindex?: boolean }

const HOME_DESCRIPTION =
  'Reinigungsfirma in Adliswil: Umzugsreinigung (Abnahmegarantie auf Wunsch), Wohnungs-, Büro-, Fenster- und Treppenhausreinigung, Hauswartung und mehr in Adliswil, Thalwil, Horgen und Zürich. Kostenlose Offerte.'

/** Meta-Daten pro Route – wird im Browser (useSeo) und beim Prerendern (scripts/prerender.mjs) verwendet. */
export const pages: Record<string, PageMeta> = {
  '/': {
    title: 'Reinigungsfirma Adliswil – Umzugs-, Wohnungs- & Büroreinigung | Klar und Rein',
    description: HOME_DESCRIPTION,
  },
  ...Object.fromEntries(
    services.map((s) => [`/${s.slug}`, { title: s.metaTitle, description: s.metaDescription }]),
  ),
  '/impressum': {
    title: 'Impressum | Klar und Rein GmbH',
    description: `Impressum der ${company.name}, ${company.street}, ${company.zip} ${company.city}.`,
  },
  '/datenschutz': {
    title: 'Datenschutz | Klar und Rein GmbH',
    description: `Datenschutzerklärung der ${company.name}: welche Daten diese Website bearbeitet und welche Rechte Sie haben.`,
  },
}

export const notFoundMeta: PageMeta = {
  title: 'Seite nicht gefunden | Klar und Rein',
  description: HOME_DESCRIPTION,
  noindex: true,
}

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  document.head.querySelector(selector)?.setAttribute(attr, value)
}

/** Aktualisiert Title, Description, Canonical, OG-Tags und robots bei Client-Navigation. */
export function useSeo(path: string, meta: PageMeta = pages[path] ?? notFoundMeta) {
  useEffect(() => {
    const url = `${company.url}${path === '/' ? '/' : path}`
    document.title = meta.title
    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('meta[property="og:title"]', 'content', meta.title)
    setMeta('meta[property="og:description"]', 'content', meta.description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('link[rel="canonical"]', 'href', url)

    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')
    if (meta.noindex) {
      if (!robots) {
        robots = document.createElement('meta')
        robots.name = 'robots'
        document.head.appendChild(robots)
      }
      robots.content = 'noindex'
    } else {
      robots?.remove()
    }
  }, [path, meta])
}
