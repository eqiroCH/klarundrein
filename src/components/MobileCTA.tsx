import { Link, useLocation } from 'react-router-dom'
import { MessageCircle, Phone } from 'lucide-react'
import { phoneHref, whatsappHref } from '../data/site'

/** Fixe Aktionsleiste auf dem Handy: Anrufen, WhatsApp, Offerte. */
export default function MobileCTA() {
  const { pathname } = useLocation()
  const offerTo = /impressum|datenschutz/.test(pathname) ? '/#kontakt' : `${pathname}#kontakt`
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-100 bg-white/95 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="flex gap-2">
        <a href={phoneHref} className="btn btn-ghost flex-1 !px-3 !py-3" aria-label="Anrufen">
          <Phone className="size-4 text-aqua-600" aria-hidden /> Anrufen
        </a>
        {whatsappHref && (
          <a href={whatsappHref} target="_blank" rel="noopener" className="btn btn-ghost flex-1 !px-3 !py-3" aria-label="WhatsApp schreiben">
            <MessageCircle className="size-4 text-aqua-600" aria-hidden /> WhatsApp
          </a>
        )}
        <Link to={offerTo} className="btn btn-primary flex-[1.3] !px-3 !py-3">
          Offerte
        </Link>
      </div>
    </div>
  )
}
