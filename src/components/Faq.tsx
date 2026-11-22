import { MessageCircle, Phone, Plus } from 'lucide-react'
import JsonLd from './JsonLd'
import Reveal from './Reveal'
import { Eyebrow } from './Icons'
import { company, phoneHref, soft, whatsappHref, type Faq } from '../data/site'

/** FAQ als aufklappbare Karten + FAQPage-Schema (für Google & KI-Antworten). */
export default function FaqList({ faqs, withSchema = true }: { faqs: Faq[]; withSchema?: boolean }) {
  return (
    <>
      <div className="grid gap-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="faq group rounded-2xl bg-white px-5 ring-1 ring-cloud-200 transition-shadow open:shadow-[0_20px_50px_-30px_rgb(13_27_43/0.4)] open:ring-brand-200 sm:px-7"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-[1.05rem] font-semibold sm:text-lg [&::-webkit-details-marker]:hidden">
              <h3>{f.q}</h3>
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-cloud-100 text-navy-950 transition-all duration-300 group-open:rotate-45 group-open:bg-brand-500 group-open:text-white">
                <Plus className="size-4" aria-hidden />
              </span>
            </summary>
            <p className="max-w-3xl pb-6 leading-relaxed text-ink-700">{f.a}</p>
          </details>
        ))}
      </div>
      {withSchema && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          }}
        />
      )}
    </>
  )
}

/** FAQ-Bereich mit Kontaktkarte links (Startseite und Leistungsseiten). */
export function FaqSection({ title, faqs }: { title: string; faqs: Faq[] }) {
  return (
    <section id="faq" className="bg-cloud-50 py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <Reveal className="self-start lg:sticky lg:top-32 lg:col-span-4">
          <Eyebrow>Häufige Fragen</Eyebrow>
          <h2 className="mt-4 text-[2.1rem] leading-[1.12] font-semibold tracking-tight text-balance text-navy-950 sm:text-[2.6rem]">{soft(title)}</h2>
          <p className="lead mt-5 text-ink-700">Ihre Frage ist nicht dabei? Wir beraten Sie gerne persönlich.</p>
          <div className="mt-8 rounded-3xl bg-navy-950 p-6 text-white">
            <p className="font-semibold">Direkt mit uns sprechen</p>
            <p className="mt-1 text-sm text-white/70">Telefon oder WhatsApp, ganz wie Sie möchten.</p>
            <div className="mt-5 grid gap-2">
              <a href={phoneHref} className="btn btn-brand !py-3">
                <Phone className="size-4" aria-hidden /> {company.phone}
              </a>
              {whatsappHref && (
                <a href={whatsappHref} target="_blank" rel="noopener" className="btn btn-glass !py-3">
                  <MessageCircle className="size-4" aria-hidden /> WhatsApp schreiben
                </a>
              )}
            </div>
          </div>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-8">
          <FaqList faqs={faqs} />
        </Reveal>
      </div>
    </section>
  )
}
