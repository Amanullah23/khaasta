"use client";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faStar, faClock } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.1 },
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="menu"
      className="py-24 bg-black relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
      ref={sectionRef}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 text-red-400 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-widest">
            <FontAwesomeIcon icon={faFire} className="flame" />
            {t("section.menu.title")}
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {t("section.menu.title")}
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm sm:text-base">
            {t("section.menu.subtitle")}
          </p>
        </div>

        {/* Single item + coming soon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Current item */}
          <div className="reveal group relative bg-gradient-to-b from-gray-900/80 to-black rounded-3xl border-2 border-red-900/50 hover:border-red-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/30 hover:-translate-y-1 overflow-hidden">
            {/* Tag */}
            <div
              className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} z-10 text-xs font-bold px-3 py-1 rounded-full border bg-red-600/10 text-red-400 border-red-600/30`}
            >
              {isRTL ? "موجود" : "Available"}
            </div>

            {/* Image */}
            <div className="w-full h-52 overflow-hidden">
              <img
                src="/plain.png"
                alt="Khaasta Macaroni"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full mb-3 bg-yellow-500/10 text-yellow-400">
                <FontAwesomeIcon icon={faFire} className="text-[10px] flame" />
                {isRTL ? "خاص" : "Special"}
              </div>

              <h3 className="text-xl font-black text-white mb-2">
                {isRTL ? "خاصتا مکرونی" : "Khaasta Macaroni"}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {isRTL
                  ? "مکرونی با طعم منحصربه‌فرد خاصتا — داغ، تند و خاص. تجربه‌ای که هرگز فراموش نمی‌کنید."
                  : "Macaroni with Khaasta's unique flavor — hot, spicy and special. An experience you will never forget."}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div>
                  <div className="text-xs text-gray-600 mb-0.5">
                    {isRTL ? "قیمت" : "Price"}
                  </div>
                  <div className="text-2xl font-black gold-text">
                    {isRTL ? "۵۰ افغانی" : "50 AF"}
                  </div>
                </div>
                <a
                  href="#contact"
                  className="bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-900/40"
                >
                  {isRTL ? "سفارش" : "Order"}
                </a>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-3">
                {[...Array(5)].map((_, j) => (
                  <FontAwesomeIcon
                    key={j}
                    icon={faStar}
                    className="text-yellow-500 text-xs"
                  />
                ))}
                <span className="text-gray-500 text-xs ms-1">5.0</span>
              </div>
            </div>
          </div>

          {/* Coming soon card */}
          <div className="reveal group relative bg-gradient-to-b from-gray-900/40 to-black rounded-3xl border-2 border-dashed border-white/10 hover:border-yellow-500/30 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center p-10 text-center min-h-[400px]">
            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon
                icon={faClock}
                className="text-yellow-500 text-3xl"
              />
            </div>
            <h3 className="text-xl font-black text-white mb-3">
              {isRTL ? "بزودی..." : "Coming Soon..."}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t("menu.coming")}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <FontAwesomeIcon
                icon={faFire}
                className="text-red-500 text-xs flame"
              />
              <span className="text-xs gold-text font-bold tracking-widest uppercase">
                {isRTL ? "داغ . تند . خاص" : "Hot . Spicy . Special"}
              </span>
              <FontAwesomeIcon
                icon={faFire}
                className="text-red-500 text-xs flame"
              />
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-16 reveal">
          <div className="inline-block border border-red-600/30 bg-red-600/5 rounded-2xl px-8 py-5">
            <p className="text-white font-black text-xl mb-1">
              {isRTL ? "طعم خاص، حال خاص!" : "Special Taste, Special Feeling!"}
            </p>
            <p className="text-gray-500 text-sm">
              {isRTL
                ? "خاصتا مکرونی — داغ. تند. خاص."
                : "Khaasta Macaroni — Hot. Spicy. Special."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
