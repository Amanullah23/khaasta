'use client'
import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faClock, faCircleCheck, faFire } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function ContactSection() {
  const { t, isRTL } = useLanguage()
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', phone: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const info = [
    { icon: faLocationDot, key: 'contact.info.address', color: 'text-red-400',    bg: 'bg-red-500/10' },
    { icon: faPhone,       key: 'contact.info.phone',   color: 'text-green-400',  bg: 'bg-green-500/10' },
    { icon: faClock,       key: 'contact.info.hours',   color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
    { icon: faInstagram,   key: 'contact.info.instagram', color: 'text-pink-400', bg: 'bg-pink-500/10' },
  ]

  const inputClass = 'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500/60 focus:ring-2 focus:ring-red-500/10 transition-all duration-200'

  return (
    <section
      id="contact"
      className="py-24 bg-black relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
      ref={sectionRef}
    >
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-yellow-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 text-red-400 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-widest">
            <FontAwesomeIcon icon={faFire} className="flame" />
            {t('section.contact.title')}
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {t('section.contact.title')}
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm sm:text-base">
            {t('section.contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Info side */}
          <div className="lg:col-span-2 reveal">
            <div className="bg-gradient-to-br from-gray-900/80 to-black border border-red-900/30 rounded-3xl p-8 h-full">

              {/* Logo area */}
              <div className="text-center mb-8 pb-8 border-b border-white/5">
                <div className="text-5xl mb-3">🍝</div>
                <div className="font-black gold-text text-xl">Khaasta Macaroni</div>
                <div className="text-red-400 text-xs tracking-widest uppercase mt-1">
                  {isRTL ? 'داغ . تند . خاص' : 'Hot . Spicy . Special'}
                </div>
              </div>

              {/* Info items */}
              <div className="space-y-5">
                {info.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <FontAwesomeIcon icon={item.icon} className={`text-sm ${item.color}`} />
                    </div>
                    <div className="text-gray-400 text-sm leading-relaxed pt-2">
                      {t(item.key)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="mt-8 pt-8 border-t border-white/5">
                <p className="text-gray-600 text-xs mb-4 uppercase tracking-widest">{t('footer.follow')}</p>
                <div className="flex gap-3">
                  {[
                    { icon: faInstagram, color: 'hover:bg-pink-600' },
                    { icon: faTelegram,  color: 'hover:bg-blue-600' },
                    { icon: faFacebook,  color: 'hover:bg-blue-700' },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href="#"
                      className={`w-10 h-10 bg-white/5 border border-white/10 ${s.color} rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200`}
                    >
                      <FontAwesomeIcon icon={s.icon} className="text-sm" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal">
            <div className="bg-gradient-to-br from-gray-900/80 to-black border border-white/10 rounded-3xl p-8 h-full">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mb-6">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-green-400 text-3xl" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{t('contact.sent')}</h3>
                  <p className="text-gray-500 text-sm">
                    {isRTL ? 'به زودی با شما تماس خواهیم گرفت.' : "We'll get back to you soon."}
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-black text-white mb-2">
                    {isRTL ? 'پیام بفرستید' : 'Send us a message'}
                  </h3>
                  <p className="text-gray-600 text-sm mb-8">
                    {isRTL ? 'سفارش دهید یا هر سوالی دارید بپرسید.' : 'Place an order or ask us anything.'}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder={t('contact.name')}
                        value={form.name}
                        required
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                      <input
                        type="tel"
                        placeholder={t('contact.phone')}
                        value={form.phone}
                        required
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <textarea
                      rows={5}
                      placeholder={t('contact.message')}
                      value={form.message}
                      required
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-black py-4 rounded-xl hover:shadow-xl hover:shadow-red-900/40 hover:scale-[1.01] transition-all duration-300 tracking-wide flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faFire} className="flame" />
                      {t('contact.send')}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}