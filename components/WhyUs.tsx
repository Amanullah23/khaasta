'use client'
import { useEffect, useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShield, faHandshake, faBolt, faGem, faFire } from '@fortawesome/free-solid-svg-icons'

const features = [
  { icon: faShield,    key: 'clean',    iconColor: 'text-green-400',  bg: 'bg-green-500/10',  border: 'border-green-500/20 hover:border-green-500/60' },
  { icon: faHandshake, key: 'friendly', iconColor: 'text-blue-400',   bg: 'bg-blue-500/10',   border: 'border-blue-500/20 hover:border-blue-500/60' },
  { icon: faBolt,      key: 'fast',     iconColor: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20 hover:border-yellow-500/60' },
  { icon: faGem,       key: 'quality',  iconColor: 'text-red-400',    bg: 'bg-red-500/10',    border: 'border-red-500/20 hover:border-red-500/60' },
]

export default function WhyUs() {
  const { t, isRTL } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #000000 0%, #0d0303 50%, #000000 100%)' }}
      dir={isRTL ? 'rtl' : 'ltr'}
      ref={sectionRef}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc2626' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10S0 14.5 0 20s4.5 10 10 10 10-4.5 10-10zm10 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 text-red-400 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-widest">
            <FontAwesomeIcon icon={faFire} className="flame" />
            {t('section.why.title')}
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {t('section.why.title')}
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm sm:text-base">
            {t('section.why.subtitle')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={f.key}
              className={`reveal group bg-gray-900/40 rounded-3xl border-2 ${f.border} p-7 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${f.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <FontAwesomeIcon icon={f.icon} className={`text-2xl ${f.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-black text-white mb-3">
                {t(`why.${f.key}.title`)}
              </h3>

              {/* Desc */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {t(`why.${f.key}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom row icons like the brand image */}
        <div className="mt-16 reveal">
          <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
            {[
              { icon: faShield,    label: { en: 'CLEAN',    fa: 'تمیز' } },
              { icon: faHandshake, label: { en: 'FRIENDLY', fa: 'دوستانه' } },
              { icon: faBolt,      label: { en: 'FAST',     fa: 'سریع' } },
              { icon: faGem,       label: { en: 'QUALITY',  fa: 'کیفیت' } },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                  <FontAwesomeIcon icon={item.icon} className="text-gray-400" />
                </div>
                <span className="text-gray-600 text-xs font-bold tracking-widest">
                  {isRTL ? item.label.fa : item.label.en}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}