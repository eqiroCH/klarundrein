import { useEffect, useRef } from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import { Datenschutz, Impressum } from './pages/Legal'
import { services } from './data/site'
import { notFoundMeta, useSeo } from './seo'

/** Neue Seite: sofort nach oben (bzw. zum Anker). Anker auf derselben Seite: sanft scrollen. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  const prevPath = useRef<string | null>(null)

  useEffect(() => {
    const isFirst = prevPath.current === null
    const pathChanged = prevPath.current !== pathname
    prevPath.current = pathname
    const behavior: ScrollBehavior = isFirst || pathChanged ? 'instant' : 'smooth'
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior }))
    } else if (pathChanged && !isFirst) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])
  return null
}

function Layout() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}

function NotFound() {
  const { pathname } = useLocation()
  useSeo(pathname, notFoundMeta)
  return (
    <section className="bg-bubbles flex min-h-[80vh] items-center pt-24">
      <div className="container-x">
        <p className="eyebrow text-aqua-600">Fehler 404</p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-7xl">Hier ist nichts – nicht mal Staub.</h1>
        <p className="mt-6 max-w-lg text-lg text-ink-700">Die gesuchte Seite existiert nicht oder wurde verschoben.</p>
        <Link to="/" className="btn btn-primary mt-10">Zur Startseite</Link>
      </div>
    </section>
  )
}

/** Routen ohne Router – laufen im Browser (BrowserRouter) und beim Prerendern (StaticRouter). */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {services.map((s) => (
          <Route key={s.slug} path={s.slug} element={<ServicePage service={s} />} />
        ))}
        <Route path="impressum" element={<Impressum />} />
        <Route path="datenschutz" element={<Datenschutz />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
