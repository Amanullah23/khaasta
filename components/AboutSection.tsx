"use client";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faCircleCheck,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutSection() {
  const { t, isRTL } = useLanguage();
  const { isDark } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      key1: "about.stat1.value",
      key2: "about.stat1.label",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
    },
    {
      key1: "about.stat2.value",
      key2: "about.stat2.label",
      color: "text-red-500",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
    },
    {
      key1: "about.stat3.value",
      key2: "about.stat3.label",
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
    },
    {
      key1: "about.stat4.value",
      key2: "about.stat4.label",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
  ];

  const bullets = {
    en: [
      "Made fresh every single day — no shortcuts",
      "Bold flavors inspired by Kabul street food culture",
      "Affordable prices for everyone in Kabul",
      "Fast service — hot food in minutes",
    ],
    fa: [
      "هر روز تازه تهیه می‌شود — بدون میانبر",
      "طعم‌های جسورانه الهام‌گرفته از فرهنگ غذای خیابانی کابل",
      "قیمت‌های مناسب برای همه مردم کابل",
      "سرویس سریع — غذای داغ در چند دقیقه",
    ],
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.05 },
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-white"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
      ref={sectionRef}
    >
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-[400px] h-[400px] bg-yellow-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 text-red-500 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              <FontAwesomeIcon icon={faFire} className="flame" />
              {t("section.about.title")}
            </div>

            <h2
              className={`text-2xl sm:text-3xl font-black mb-3 leading-snug ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {t("section.about.subtitle")}
            </h2>

            <div className="text-sm font-bold tracking-[0.2em] gold-text uppercase mb-6">
              {isRTL ? "داغ . تند . خاص" : "Hot . Spicy . Special"}
            </div>

            <p
              className={`leading-relaxed mb-8 text-sm sm:text-base ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {t("section.about.text")}
            </p>

            <ul className="space-y-3 mb-10">
              {(isRTL ? bullets.fa : bullets.en).map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-red-500 mt-0.5 flex-shrink-0"
                  />
                  <span
                    className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-red-900/40 hover:shadow-red-600/50 hover:scale-105 transition-all duration-300 text-sm tracking-wide"
            >
              {isRTL ? (
                <>
                  <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
                  {isRTL ? "تماس با ما" : "Contact Us"}
                  <FontAwesomeIcon icon={faFire} className="flame" />
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faFire} className="flame" />
                  Contact Us
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </>
              )}
            </a>
          </div>

          {/* Right: Stats + Visual */}
          <div className="reveal">
            {/* Big visual */}
            <div className="relative mb-8">
              <div
                className={`border rounded-3xl overflow-hidden transition-colors duration-300 ${
                  isDark
                    ? "bg-gradient-to-br from-gray-900 to-black border-red-900/40"
                    : "bg-white border-red-100 shadow-lg"
                }`}
              >
                {/* Image full width */}
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src="/street.png"
                    alt="Khaasta Street Food"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  {/* Text over image */}
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <div className="text-2xl font-black gold-text mb-0.5">
                      Khaasta Macaroni
                    </div>
                    <div className="text-white/70 text-xs tracking-widest uppercase">
                      {isRTL ? "داغ . تند . خاص" : "Hot . Spicy . Special"}
                    </div>
                  </div>
                  {/* Fire badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-red-600 rounded-full px-3 py-1.5">
                    <FontAwesomeIcon
                      icon={faFire}
                      className="text-yellow-400 text-xs flame"
                    />
                    <span className="text-white text-xs font-black">
                      {isRTL ? "غذای خیابانی کابل" : "Kabul Street Food"}
                    </span>
                  </div>
                </div>

                {/* Bottom info strip */}
                <div
                  className={`flex items-center justify-between px-5 py-4 ${
                    isDark
                      ? "border-t border-white/5"
                      : "border-t border-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faFire}
                      className="text-red-500 flame text-sm"
                    />
                    <span
                      className={`text-xs font-bold ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {isRTL ? "همیشه تازه" : "Always Fresh"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-500 text-xs">
                        ★
                      </span>
                    ))}
                  </div>
                  <div className={`text-xs font-bold gold-text`}>
                    {isRTL ? "۵۰ افغانی" : "50 AF"}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`${s.bg} border ${s.border} rounded-2xl p-5 text-center ${
                    !isDark ? "shadow-sm" : ""
                  }`}
                >
                  <div className={`text-3xl font-black mb-1 ${s.color}`}>
                    {t(s.key1)}
                  </div>
                  <div
                    className={`text-xs font-medium ${isDark ? "text-gray-500" : "text-gray-500"}`}
                  >
                    {t(s.key2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
