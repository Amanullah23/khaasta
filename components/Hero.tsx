"use client";
import { useLanguage } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glows */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-yellow-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/40 text-red-400 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              <FontAwesomeIcon icon={faFire} className="flame" />
              {t("hero.badge")}
            </div>

            {/* Tagline */}
            <div className="text-sm font-bold tracking-[0.3em] text-yellow-500 uppercase mb-4">
              {t("hero.tagline")}
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none mb-3">
              {t("hero.title")}
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-8 gold-text">
              {t("hero.title.highlight")}
            </h1>

            {/* Subtitle 1 */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 max-w-lg font-medium">
              {t("hero.subtitle")}
            </p>

            {/* Subtitle 2 */}
            <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-lg">
              {t("hero.subtitle2")}
            </p>

            {/* CTA — See Menu only */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-red-900/40 hover:shadow-red-600/50 hover:scale-105 transition-all duration-300 text-sm tracking-wide"
              >
                <FontAwesomeIcon icon={faFire} className="flame" />
                {t("hero.cta.secondary")}
                {!isRTL && (
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                )}
                {isRTL && (
                  <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
                )}
              </a>
            </div>
          </div>

          {/* Right: Food image */}
          <div className="hidden lg:flex items-center justify-center relative flex-shrink-0">
            {/* Glow rings */}
            <div className="absolute w-96 h-96 rounded-full border border-red-600/10 animate-pulse" />
            <div className="absolute w-80 h-80 rounded-full border border-red-600/15" />
            <div className="absolute w-60 h-60 bg-red-600/20 rounded-full blur-3xl" />

            {/* Hero food image */}
            <div
              className="relative float-1 rounded-3xl overflow-hidden"
              style={{
                boxShadow:
                  "0 0 40px rgba(220,38,38,0.5), 0 0 80px rgba(220,38,38,0.2)",
              }}
            >
              <img
                src="/hero.jpg"
                alt="Khaasta Macaroni"
                className="w-72 h-72 object-cover rounded-3xl"
              />
            </div>

            {/* Floating tag — Khaasta Bowl */}
            <div className="absolute top-8 -left-4 bg-black/80 backdrop-blur-sm border border-yellow-500/40 rounded-2xl px-4 py-3 float-2">
              <div className="text-xs text-gray-400 mb-1">
                {isRTL ? "خاصتا مکرونی" : "Khaasta Macaroni"}
              </div>
              <div className="font-black gold-text text-sm">
                {isRTL ? "طعم خاص، حال خاص" : "Special Taste"}
              </div>
            </div>

            {/* Floating tag — Hot & Spicy */}
            <div className="absolute bottom-10 -left-4 bg-black/80 backdrop-blur-sm border border-red-600/40 rounded-2xl px-4 py-3 float-3">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faFire} className="text-red-500 flame" />
                <span className="font-black text-white text-sm">
                  {isRTL ? "داغ و تند" : "Hot & Spicy"}
                </span>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {isRTL ? "همیشه تازه" : "Always Fresh"}
              </div>
            </div>

            {/* Floating tag — Price */}
            <div className="absolute top-8 -right-8 bg-red-600 rounded-2xl px-4 py-3 float-1 shadow-lg shadow-red-900/50">
              <div className="text-white font-black text-lg">
                {isRTL ? "۵۰ افغانی" : "50 AF"}
              </div>
              <div className="text-red-200 text-xs">
                {isRTL ? "شروع فقط از" : "Starting from"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
