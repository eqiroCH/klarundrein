import { Link } from 'react-router-dom'
import { ArrowRight, Check, ChevronRight, MapPin, Phone, ShieldCheck } from 'lucide-react'
import Reveal from '../components/Reveal'
import FaqList from '../components/Faq'
import Contact from '../components/Contact'
import JsonLd from '../components/JsonLd'
import ServiceCard from '../components/ServiceCard'
import { areas, company, phoneHref, services, steps, type Service } from '../data/site'
import { useSeo } from '../seo'

export default function ServicePage({ service: s }: { service: Service }) {
  const path = `/${s.slug}`
  useSeo(path)
  const url = `${company.url}${path}`
  const others = services.filter((o) => o.slug !== s.slug)
  const isMove = s.slug.startsWith('umzug')

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: s.name,
              serviceType: s.name,
              description: s.metaDescription,
              url,
              image: `${company.url}/images/${s.image}-wide.webp`,
              provider: { '@id': `${company.url}/#business` },
              areaServed: areas.map((a) => ({ '@type': 'City', name: a })),
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${company.url}/` },
                { '@type': 'ListItem', position: 2, name: s.name, item: url },
              ],
            },
          ],
        }}
      />

      {/* Seitenkopf: Foto der Leistung (wie auf der bisherigen Website) mit dunklem Overlay */}
      <section className="relative isolate overflow-hidden bg-navy-950 pt-32 pb-16 text-white sm:pt-40 sm:pb-24">
        <img
          src={`/images/${s.image}-wide.webp`}
          srcSet={`/images/${s.image}-wide-sm.webp 900w, /images/${s.image}-wide.webp 1920w`}
          sizes="100vw"
          alt=""
          width={1920}
          height={900}
          fetchPriority="high"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/45" />
        <div className="container-x">
          <nav aria-label="Brotkrümel" className="text-sm text-white/70">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link to="/" className="hover:text-white">Startseite</Link>
              </li>
              <ChevronRight className="size-4" aria-hidden />
              <li aria-current="page" className="font-medium text-white">{s.name}</li>
            </ol>
          </nav>
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="text-[2.3rem] leading-[1.1] font-semibold tracking-tight text-balance sm:text-6xl">{s.h1}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">{s.lead}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to={`${path}#kontakt`} className="btn btn-light">
                  Kostenlose Offerte <ArrowRight className="size-4" aria-hidden />
                </Link>
                <a href={phoneHref} className="btn btn-outline-light">
                  <Phone className="size-4" aria-hidden /> {company.phone}
                </a>
              </div>
            </div>
            <ul className="grid gap-2 lg:col-span-4">
              {s.idealFor.map((t) => (
                <li key={t} className="glass flex items-center gap-3 rounded-xl px-4 py-3 font-medium">
                  <Check className="size-5 shrink-0 text-brand-300" aria-hidden /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-brand-700">{s.cardTitle}</p>
            <h2 className="mt-4 text-2xl leading-snug font-semibold text-balance text-brand-400 sm:text-3xl">{s.short}</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-700">
              {s.intro.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            {isMove && (
              <div className="mt-8 flex gap-4 rounded-2xl bg-navy-950 p-6 text-white">
                <ShieldCheck className="size-8 shrink-0 text-brand-300" aria-hidden />
                <p>
                  <strong className="block text-lg font-semibold">Abnahmegarantie inklusive</strong>
                  <span className="text-white/80">Bemängelt die Verwaltung etwas an der Reinigung, reinigen wir kostenlos nach.</span>
                </p>
              </div>
            )}
          </Reveal>
          <Reveal delay={80} className="lg:col-span-7">
            <div className="rounded-2xl bg-cloud-100 p-7 sm:p-10">
              <h2 className="text-2xl font-semibold">{s.includesTitle}</h2>
              <ul className="mt-6 grid gap-3.5">
                {s.includes.map((i) => (
                  <li key={i} className="flex gap-3 leading-relaxed">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                      <Check className="size-3.5" strokeWidth={3} aria-hidden />
                    </span>
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink-500">Den genauen Umfang halten wir in Ihrer Offerte fest.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <div className="container-x">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">So läuft Ihre {s.name} ab</h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((st, i) => (
              <li key={st.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <span className="text-4xl font-semibold text-brand-300">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{st.title}</h3>
                <p className="mt-1.5 leading-relaxed text-white/75">{st.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-white/80">
            <MapPin className="size-5 text-brand-300" aria-hidden />
            <strong className="text-white">{s.name} in:</strong> {areas.join(', ')} und im ganzen Kanton Zürich.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-brand-700">Häufige Fragen</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-brand-400 sm:text-4xl">Fragen zur {s.name}</h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={s.faqs} />
          </div>
        </div>
      </section>

      <Contact preset={s.name} />

      <section className="bg-cloud-50 py-16 sm:py-20">
        <div className="container-x">
          <h2 className="text-2xl font-semibold sm:text-3xl">Weitere Leistungen</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <li key={o.slug}>
                <ServiceCard to={`/${o.slug}`} image={o.image} imageAlt={o.imageAlt} title={`${o.name} Adliswil`} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
