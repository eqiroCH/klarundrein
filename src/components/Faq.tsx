import { Plus } from 'lucide-react'
import JsonLd from './JsonLd'
import type { Faq } from '../data/site'

/** FAQ als aufklappbare Liste + FAQPage-Schema (für Google & KI-Antworten). */
export default function FaqList({ faqs, withSchema = true }: { faqs: Faq[]; withSchema?: boolean }) {
  return (
    <>
      <div className="divide-y divide-cloud-200 border-y border-cloud-200">
        {faqs.map((f) => (
          <details key={f.q} className="group py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-semibold [&::-webkit-details-marker]:hidden">
              <h3>{f.q}</h3>
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-cloud-100 text-brand-700 transition-transform group-open:rotate-45">
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
