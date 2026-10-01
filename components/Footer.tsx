'use client'
import { useLanguage } from '@/context/LanguageContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faClock, faArrowUp, faFire } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTelegram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  const { t, isRTL } = useLanguage()

  const navLinks = [
    { href: '#home',    key: 'nav.home' },
    { href: '#menu',    key: 'nav.menu' },
    { href: '#about',   key: 'nav.about' },
    { href: '#contact', key: 'nav.contact' },
  ]

  const socials = [
    { icon: faInstagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: faTelegram,  href: '#', label: 'Telegram',  color: 'hover:bg-blue-600' },
    { icon: faFacebook,  href: '#', label: 'Facebook',  color: 'hover:bg-blue-700' },
    { icon: faTiktok,    href: '#', label: 'TikTok',    color: 'hover:bg-gray-700' },
  ]

  return (
    <footer className="bg-black border-t border-white/5 text-gray-400" dir={isRTL ? 'rtl' : 'ltr'}>

      {/* Top CTA strip */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faFire} className="text-yellow-400 text-xl flame" />
            <span className="text-white font-black text-lg tracking-wide">
              {isRTL ? 'امروز سفارش دهید!' : 'Order Today!'}
            </span>
            <FontAwesomeIcon icon={faFire} className="text-yellow-400 text-xl flame" />
          </div>
          <a
            href="/order"
            className="bg-black/30 hover:bg-black/50 text-white font-bold px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 border border-white/20"
          >
            {isRTL ? 'همین حالا سفارش دهید' : 'Place Your Order Now'}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="Khaasta Macaroni"
                className="h-20 w-auto object-contain"
              />
            </a>
            <p className="text-sm leading-relaxed mb-6 text-gray-500">
              {t('footer.desc')}
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={`w-9 h-9 bg-white/5 border border-white/10 ${s.color} rounded-xl flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200`}
                >
                  <FontAwesomeIcon icon={s.icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black mb-5 text-sm uppercase tracking-wider">
              {t('footer.links')}
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ href, key }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-sm text-gray-500 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-red-600 rounded-full group-hover:bg-yellow-400 transition-colors" />
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black mb-5 text-sm uppercase tracking-wider">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4">
              {[
                { icon: faLocationDot, key: 'contact.info.address', color: 'text-red-400' },
                { icon: faPhone,       key: 'contact.info.phone',   color: 'text-green-400' },
                { icon: faClock,       key: 'contact.info.hours',   color: 'text-yellow-400' },
              ].map((item) => (
                <li key={item.key} className="flex items-start gap-3">
                  <FontAwesomeIcon icon={item.icon} className={`${item.color} mt-0.5 flex-shrink-0 text-sm`} />
                  <span className="text-sm text-gray-500">{t(item.key)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Promise box */}
          <div>
            <h4 className="text-white font-black mb-5 text-sm uppercase tracking-wider">
              {isRTL ? 'شعار ما' : 'Our Promise'}
            </h4>
            <div className="bg-gradient-to-br from-red-900/20 to-black border border-red-900/40 rounded-2xl p-5 red-glow">
              <div className="text-4xl mb-3 text-center">🍝</div>
              <p className="text-sm text-gray-400 leading-relaxed text-center font-medium">
                {isRTL
                  ? 'طعم خاص، حال خاص! خاصتا مکرونی — داغ. تند. خاص.'
                  : 'Special Taste, Special Feeling! Khaasta — Hot. Spicy. Special.'}
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faFire} className="text-red-500 text-xs flame" />
                <span className="text-xs gold-text font-bold tracking-widest uppercase">
                  {isRTL ? 'داغ . تند . خاص' : 'Hot . Spicy . Special'}
                </span>
                <FontAwesomeIcon icon={faFire} className="text-red-500 text-xs flame" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      {/* Bottom bar */}
<div className="border-t border-white/5">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
    <p className="text-gray-600 text-xs">{t('footer.rights')}</p>
    <p className="text-gray-600 text-xs">
  {isRTL ? 'طراحی و توسعه توسط' : 'Designed & Developed by'}{' '}
  <a
    href="https://yawari.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="gold-text font-bold hover:underline transition-all"
  >
    {isRTL ? 'امان الله یاوری' : 'Amanullah Yawari'}
  </a>
</p>
    <a
      href="#home"
      className="w-8 h-8 bg-white/5 hover:bg-red-600 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200"
    >
      <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
    </a>
  </div>
</div>

    </footer>
  )
}