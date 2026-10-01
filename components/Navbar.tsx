'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const { lang, setLang, t, isRTL } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const link = (hash: string) => isHome ? hash : `/${hash}`

  const links = [
    { href: link('#home'),    key: 'nav.home' },
    { href: link('#menu'),    key: 'nav.menu' },
    { href: link('#about'),   key: 'nav.about' },
    { href: link('#contact'), key: 'nav.contact' },
  ]

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
  scrolled
    ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-red-900/20 py-1 border-b border-red-900/30'
    : 'bg-black/70 backdrop-blur-sm py-2'
}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center flex-shrink-0">
  <div className="bg-black rounded-xl p-0.5">
    <img
      src="/logo.png"
      alt="Khaasta Macaroni"
      className="h-20 w-auto object-contain rounded-xl"
    />
  </div>
</a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              className="text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-200 tracking-wide"
            >
              {t(key)}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'fa' : 'en')}
            className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full border border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-400 transition-all duration-200"
          >
            <FontAwesomeIcon icon={faGlobe} className="text-xs" />
            {lang === 'en' ? 'دری' : 'English'}
          </button>
          <a
            href="/order"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg shadow-red-900/40 hover:shadow-red-600/50 hover:scale-105 transition-all duration-300 tracking-wide"
          >
            {t('nav.order')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl p-1 text-gray-300"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-black/98 border-t border-red-900/30`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          {links.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              onClick={() => setOpen(false)}
              className="text-gray-300 font-medium py-3 border-b border-white/5 hover:text-yellow-400 transition-colors text-sm"
            >
              {t(key)}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-3">
            <button
              onClick={() => { setLang(lang === 'en' ? 'fa' : 'en'); setOpen(false) }}
              className="flex items-center gap-2 text-gray-300 text-sm font-medium px-4 py-2 rounded-full border border-gray-600 hover:border-yellow-500 hover:text-yellow-400 transition-all"
            >
              <FontAwesomeIcon icon={faGlobe} />
              {lang === 'en' ? 'دری' : 'English'}
            </button>
            <a
              href="/order"
              onClick={() => setOpen(false)}
              className="flex-1 text-center bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-bold py-2.5 rounded-full"
            >
              {t('nav.order')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}