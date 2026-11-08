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
            <div className="relative mb-8">
              <div
                className={`border rounded-3xl p-8 text-center transition-colors duration-300 ${
                  isDark
                    ? "bg-gradient-to-br from-gray-900 to-black border-red-900/40 red-glow"
                    : "bg-gray-50 border-red-100 shadow-sm"
                }`}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src="/street.png"
                    alt="Khaasta Street Food"
                    className="w-28 h-28 object-contain float-1"
                  />
                </div>
                <div className="text-2xl font-black gold-text mb-1">
                  Khaasta Macaroni
                </div>
                <div
                  className={`text-sm tracking-widest uppercase ${isDark ? "text-gray-500" : "text-gray-400"}`}
                >
                  {isRTL ? "داغ . تند . خاص" : "Hot . Spicy . Special"}
                </div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <FontAwesomeIcon
                    icon={faFire}
                    className="text-red-500 flame"
                  />
                  <span
                    className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  >
                    {isRTL ? "غذای خیابانی کابل" : "Kabul Street Food"}
                  </span>
                  <FontAwesomeIcon
                    icon={faFire}
                    className="text-red-500 flame"
                  />
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
