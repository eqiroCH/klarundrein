import { Link } from 'react-router-dom'
import { ArrowRight, Check, ChevronRight, MapPin, Phone, ShieldCheck } from 'lucide-react'
import Reveal from '../components/Reveal'
import ServiceIcon from '../components/ServiceIcon'
import FaqList from '../components/Faq'
import Contact from '../components/Contact'
import JsonLd from '../components/JsonLd'
import { areas, company, phoneHref, services, steps, type Service } from '../data/site'
import { useSeo } from '../seo'

export default function ServicePage({ service: s }: { service: Service }) {
  const path = `/${s.slug}`
  useSeo(path)
  const url = `${company.url}${path}`
  const others = services.filter((o) => o.slug !== s.slug)
  const isMove = s.icon === 'truck'

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

      <section className="bg-bubbles pt-28 pb-20 sm:pt-36 sm:pb-24">
        <div className="container-x">
          <nav aria-label="Brotkrümel" className="text-sm text-ink-500">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link to="/" className="hover:text-ink-950">Startseite</Link>
              </li>
              <ChevronRight className="size-4" aria-hidden />
              <li aria-current="page" className="font-semibold text-ink-800">{s.name}</li>
            </ol>
          </nav>
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="grid size-14 place-items-center rounded-2xl bg-aqua-500 text-white shadow-lg">
                <ServiceIcon name={s.icon} className="size-7" />
              </span>
              <h1 className="mt-6 text-[2.4rem] leading-[1.06] font-extrabold tracking-tight text-balance sm:text-6xl">{s.h1}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700 sm:text-xl">{s.lead}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to={`${path}#kontakt`} className="btn btn-primary">
                  Kostenlose Offerte <ArrowRight className="size-4" aria-hidden />
                </Link>
                <a href={phoneHref} className="btn btn-ghost">
                  <Phone className="size-4 text-aqua-600" aria-hidden /> {company.phone}
                </a>
              </div>
            </div>
            <ul className="grid gap-2 lg:col-span-4">
              {s.idealFor.map((t) => (
                <li key={t} className="card flex items-center gap-3 px-4 py-3 font-semibold">
                  <Check className="size-5 text-aqua-500" aria-hidden /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="space-y-5 text-lg leading-relaxed text-ink-700 lg:col-span-5">
            {s.intro.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
            {isMove && (
              <div className="flex gap-4 rounded-3xl bg-ink-950 p-6 text-white">
                <ShieldCheck className="size-8 shrink-0 text-aqua-300" aria-hidden />
                <p className="text-base">
                  <strong className="block text-lg">Abnahmegarantie inklusive</strong>
                  Bemängelt die Verwaltung etwas an der Reinigung, reinigen wir kostenlos nach.
                </p>
              </div>
            )}
          </Reveal>
          <Reveal delay={80} className="lg:col-span-7">
            <div className="card p-7 sm:p-9">
              <h2 className="text-2xl font-extrabold">{s.includesTitle}</h2>
              <ul className="mt-6 grid gap-3">
                {s.includes.map((i) => (
                  <li key={i} className="flex gap-3 leading-relaxed">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-aqua-100 text-aqua-700">
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

      <section className="bg-mist-50 py-20 sm:py-24">
        <div className="container-x">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">So läuft Ihre {s.name} ab</h2>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((st, i) => (
              <li key={st.title} className="card p-6">
                <span className="text-4xl font-extrabold text-aqua-200">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-extrabold">{st.title}</h3>
                <p className="mt-1.5 text-ink-700">{st.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-ink-700">
            <MapPin className="size-5 text-aqua-500" aria-hidden />
            <strong>{s.name} in:</strong> {areas.join(', ')} und im ganzen Kanton Zürich.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-aqua-600">Häufige Fragen</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">Fragen zur {s.name}</h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={s.faqs} />
          </div>
        </div>
      </section>

      <Contact preset={s.name} />

      <section className="py-16">
        <div className="container-x">
          <h2 className="text-2xl font-extrabold">Weitere Leistungen</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <li key={o.slug}>
                <Link to={`/${o.slug}`} className="card flex items-center gap-3 p-4 font-semibold transition-colors hover:border-aqua-300">
                  <ServiceIcon name={o.icon} className="size-5 text-aqua-500" />
                  {o.name} Adliswil
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
