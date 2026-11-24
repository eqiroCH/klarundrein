import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { Eyebrow, Instagram } from './Icons'
import { company } from '../data/site'

/** Echte Fotos aus den Einsätzen von Klar und Rein (Instagram @klar.und.rein.gmbh). */
const photos = [
  { src: 'einsatz-backofen', alt: 'Backofen nach der Endreinigung bei einer Umzugsreinigung', caption: 'Backofen nach der Umzugsreinigung' },
  { src: 'einsatz-horgen', alt: 'Wohnhaus in Horgen, bei dem Klar und Rein Fenster, Rahmen, Türen und Rollläden gereinigt hat', caption: 'Fenster, Türen & Rollläden in Horgen' },
  { src: 'einsatz-decke', alt: 'Saubere Decke eines Laubengangs nach der Reinigung mit Hochdruck', caption: 'Deckenreinigung mit Hochdruck' },
]

const caption =
  'absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-transparent p-4 pt-12 text-sm font-medium text-white sm:p-5 sm:pt-14'
const pill = 'absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold tracking-wide sm:top-4 sm:left-4'

export default function Einblicke() {
  return (
    <section id="einblicke" className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Einblicke</Eyebrow>
            <h2 className="h-section mt-4 text-navy-950">
              Aus unseren <span className="text-brand-500">Einsätzen</span>
            </h2>
            <p className="lead mt-5 text-ink-700">
              Echte Fotos aus unserer Arbeit – von der Umzugsreinigung bis zur Hochdruckreinigung.
            </p>
          </div>
          <a href={company.instagram} target="_blank" rel="noopener" className="btn btn-outline shrink-0 self-start sm:self-auto">
            <Instagram className="size-4" /> Mehr auf Instagram
          </a>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {/* Vorher / Nachher: Fensterrahmen bei einer Umzugsreinigung */}
          <Reveal as="li" className="col-span-2 lg:row-span-2">
            <figure className="relative grid aspect-[4/3] h-full grid-cols-2 gap-1.5 overflow-hidden rounded-3xl bg-navy-950 lg:aspect-auto">
              {[
                { src: 'einsatz-vorher', label: 'Vorher', alt: 'Fensterrahmen vor der Reinigung mit Schmutz und Ablagerungen', tone: 'bg-white text-navy-950' },
                { src: 'einsatz-nachher', label: 'Nachher', alt: 'Derselbe Fensterbereich nach der Reinigung durch Klar und Rein', tone: 'bg-brand-500 text-white' },
              ].map((p) => (
                <div key={p.src} className="relative min-h-0">
                  <img
                    src={`/images/${p.src}.webp`}
                    alt={p.alt}
                    width={560}
                    height={1100}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                  <span className={`${pill} ${p.tone}`}>{p.label}</span>
                </div>
              ))}
              <figcaption className={caption}>Fensterrahmen bei einer Umzugsreinigung</figcaption>
            </figure>
          </Reveal>

          {photos.map((p, i) => (
            <Reveal as="li" key={p.src} delay={(i + 1) * 60}>
              <figure className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-navy-950">
                <img
                  src={`/images/${p.src}.webp`}
                  alt={p.alt}
                  width={640}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
                <figcaption className={caption}>{p.caption}</figcaption>
              </figure>
            </Reveal>
          ))}

          <Reveal as="li" delay={240}>
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener"
              className="group relative isolate flex aspect-[4/5] flex-col overflow-hidden rounded-3xl bg-brand-500 p-4 text-white transition-colors hover:bg-brand-600 sm:p-6"
            >
              <Instagram className="absolute -right-8 -bottom-8 -z-10 size-44 text-white/10 transition-transform duration-700 group-hover:-rotate-12" />
              <Instagram className="size-8" />
              <span className="mt-auto text-base leading-snug font-semibold min-[400px]:text-lg sm:text-xl">Mehr Einblicke auf Instagram</span>
              <span className="mt-1.5 inline-flex items-center gap-1 text-sm text-white/85">
                <span className="sm:hidden">Zum Profil</span>
                <span className="hidden sm:inline">@klar.und.rein.gmbh</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </span>
            </a>
          </Reveal>
        </ul>
      </div>
    </section>
  )
}
