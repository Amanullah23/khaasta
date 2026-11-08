"use client";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faGem,
  faHandshake,
  faStar,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faGem,
    key: "clean",
    iconColor: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20 hover:border-yellow-500/60",
  },
  {
    icon: faStar,
    key: "friendly",
    iconColor: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20 hover:border-red-500/60",
  },
  {
    icon: faHandshake,
    key: "fast",
    iconColor: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20 hover:border-blue-500/60",
  },
  {
    icon: faEye,
    key: "quality",
    iconColor: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20 hover:border-green-500/60",
  },
];

export default function WhyUs() {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

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
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #0d0303 50%, #000000 100%)",
      }}
      dir={isRTL ? "rtl" : "ltr"}
      ref={sectionRef}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 text-red-400 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-widest">
            <FontAwesomeIcon icon={faFire} className="flame" />
            {t("section.why.title")}
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {t("section.why.title")}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            {t("section.why.subtitle")}
          </p>
        </div>

        {/* Philosophy text */}
        <div className="max-w-3xl mx-auto mb-16 reveal">
          <div className="bg-gradient-to-br from-gray-900/60 to-black border border-red-900/30 rounded-3xl p-8">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              {t("why.p1")}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("why.p2")}
            </p>
            <div className="mt-6 pt-6 border-t border-white/5">
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">
                {isRTL
                  ? "ما به سه اصل پایبندیم"
                  : "We are committed to three principles"}
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    en: "Quality in food preparation",
                    fa: "کیفیت در آماده‌سازی غذا",
                  },
                  { en: "Distinction in taste", fa: "تمایز در طعم و ترکیبات" },
                  { en: "Respect for customers", fa: "احترام به مشتری" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-1.5"
                  >
                    <FontAwesomeIcon
                      icon={faFire}
                      className="text-red-500 text-xs flame"
                    />
                    <span className="text-gray-300 text-xs font-medium">
                      {isRTL ? item.fa : item.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={f.key}
              className={`reveal group bg-gray-900/40 rounded-3xl border-2 ${f.border} p-7 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className={`w-14 h-14 ${f.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <FontAwesomeIcon
                  icon={f.icon}
                  className={`text-2xl ${f.iconColor}`}
                />
              </div>
              <h3 className="text-lg font-black text-white mb-3">
                {t(`why.${f.key}.title`)}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t(`why.${f.key}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* Vision box */}
        <div className="mt-12 reveal">
          <div className="bg-gradient-to-r from-red-900/20 via-black to-red-900/20 border border-red-600/20 rounded-3xl p-8 text-center">
            <FontAwesomeIcon
              icon={faEye}
              className="text-red-500 text-3xl mb-4"
            />
            <h3 className="text-xl font-black text-white mb-2">
              {isRTL ? "چشم‌انداز ما" : "Our Vision"}
            </h3>
            <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
              {t("why.vision.text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
