import { Link, useLocation } from 'react-router-dom'
import { MessageCircle, Phone } from 'lucide-react'
import { phoneHref, whatsappHref } from '../data/site'

/** Schwebende Aktionsleiste auf dem Handy: Anrufen, WhatsApp, Offerte. */
export default function MobileCTA() {
  const { pathname } = useLocation()
  const offerTo = /impressum|datenschutz/.test(pathname) ? '/#kontakt' : `${pathname}#kontakt`
  const item = 'inline-flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-sm font-medium text-white transition-colors active:bg-white/10'
  return (
    <div className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 md:hidden">
      <div className="flex gap-1 rounded-full bg-navy-950/95 p-1.5 shadow-[0_20px_50px_-15px_rgb(0_0_0/0.6)] ring-1 ring-white/10 backdrop-blur-lg">
        <a href={phoneHref} className={item}>
          <Phone className="size-4 text-brand-300" aria-hidden /> Anrufen
        </a>
        {whatsappHref && (
          <a href={whatsappHref} target="_blank" rel="noopener" className={item}>
            <MessageCircle className="size-4 text-brand-300" aria-hidden /> WhatsApp
          </a>
        )}
        <Link to={offerTo} className={`${item} flex-[1.15] bg-brand-500 active:bg-brand-600`}>
          Offerte
        </Link>
      </div>
    </div>
  )
}
