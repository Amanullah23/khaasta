'use client'
import { useEffect, useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faArrowRight, faFire } from '@fortawesome/free-solid-svg-icons'

type Lang = 'en' | 'fa'

const products = [
  {
    emoji: '🌸',
    name: { en: 'Afghan Saffron', fa: 'زعفران افغانی' },
    cat: { en: 'Spices', fa: 'ادویه' },
    desc: { en: 'Premium saffron from the fields of Herat — among the finest in the world.', fa: 'زعفران درجه یک از مزارع هرات — از بهترین‌ها در جهان.' },
    bg: 'from-purple-100 to-pink-100',
    badge: 'hot',
    rating: 4.9,
  },
  {
    emoji: '🌾',
    name: { en: 'Basmati Rice', fa: 'برنج بسمتی' },
    cat: { en: 'Grains', fa: 'غلات' },
    desc: { en: 'Long-grain aromatic basmati rice — perfect for Kabuli Palaw and Afghan dishes.', fa: 'برنج بسمتی معطر دانه‌بلند — عالی برای قابلی پلو و غذاهای افغانی.' },
    bg: 'from-amber-100 to-yellow-100',
    badge: 'featured',
    rating: 4.7,
  },
  {
    emoji: '🫘',
    name: { en: 'Afghan Pistachios', fa: 'پسته افغانی' },
    cat: { en: 'Nuts', fa: 'آجیل' },
    desc: { en: 'Hand-picked pistachios from the finest orchards of Afghanistan.', fa: 'پسته دستچین از بهترین باغ‌های افغانستان.' },
    bg: 'from-green-100 to-emerald-100',
    badge: 'featured',
    rating: 4.8,
  },
  {
    emoji: '🍎',
    name: { en: 'Kandahar Pomegranate', fa: 'انار کندهار' },
    cat: { en: 'Fruits', fa: 'میوه' },
    desc: { en: 'World-famous sweet pomegranates grown in the fertile lands of Kandahar.', fa: 'انار شیرین معروف جهان که در زمین‌های حاصلخیز کندهار پرورش می‌یابد.' },
    bg: 'from-red-100 to-rose-100',
    badge: 'hot',
    rating: 4.9,
  },
  {
    emoji: '🍯',
    name: { en: 'Mountain Honey', fa: 'عسل کوهستانی' },
    cat: { en: 'Natural', fa: 'طبیعی' },
    desc: { en: 'Pure natural honey from the mountain beehives of Nuristan and Panjshir.', fa: 'عسل طبیعی خالص از کندوهای کوهستانی نورستان و پنجشیر.' },
    bg: 'from-yellow-100 to-amber-100',
    badge: 'featured',
    rating: 4.8,
  },
  {
    emoji: '🍇',
    name: { en: 'Dried Mulberry', fa: 'توت خشک' },
    cat: { en: 'Dried Fruits', fa: 'میوه خشک' },
    desc: { en: 'Naturally sun-dried mulberries — a timeless classic Afghan snack and ingredient.', fa: 'توت خشک‌شده طبیعی در آفتاب — یک تنقلات و ماده کلاسیک افغانی.' },
    bg: 'from-violet-100 to-purple-100',
    badge: 'featured',
    rating: 4.6,
  },
]

export default function FeaturedProducts() {
  const { t, lang, isRTL } = useLanguage()
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
    <section id="products" className="py-20 bg-orange-50/50" dir={isRTL ? 'rtl' : 'ltr'} ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {t('section.products.title')}
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm sm:text-base">
            {t('section.products.subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="reveal group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {/* Image area */}
              <div className={`bg-gradient-to-br ${p.bg} h-44 flex items-center justify-center relative`}>
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {p.emoji}
                </span>
                {p.badge === 'hot' ? (
                  <span className="absolute top-3 right-3 flex items-center gap-1 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    <FontAwesomeIcon icon={faFire} className="text-[10px]" /> Hot
                  </span>
                ) : (
                  <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {t('product.badge')}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">
                  {p.cat[lang as Lang]}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                  {p.name[lang as Lang]}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {p.desc[lang as Lang]}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faStar} className="text-amber-400 text-sm" />
                    <span className="text-sm font-semibold text-gray-700">{p.rating}</span>
                  </div>
                  <a href="#" className="flex items-center gap-1.5 text-orange-500 hover:text-orange-600 text-sm font-semibold transition-colors">
                    {t('product.view')}
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10 reveal">
          <a href="#" className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
            {t('product.viewAll')}
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

      </div>
    </section>
  )
}