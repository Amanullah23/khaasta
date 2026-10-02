"use client";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faStar,
  faLeaf,
  faDrumstickBite,
} from "@fortawesome/free-solid-svg-icons";

type Lang = "en" | "fa";

const menuItems = [
  {
    image: "/plain.png",
    name: { en: "Plain Macaroni", fa: "مکرونی ساده" },
    desc: {
      en: "Classic Khaasta macaroni with our signature tomato sauce. Simple, bold, delicious.",
      fa: "مکرونی کلاسیک خاص تا با سس گوجه منحصربه‌فرد ما. ساده، جسورانه، خوشمزه.",
    },
    price: "100 AF",
    badge: { en: "Classic", fa: "کلاسیک" },
    badgeColor: "bg-gray-700 text-gray-300",
    icon: faLeaf,
    borderColor: "border-gray-700 hover:border-yellow-500/60",
    glowColor: "hover:shadow-yellow-900/20",
    tag: { en: "Best Seller", fa: "پرفروش‌ترین" },
    tagColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  },
  {
    image: "/spicy.png",
    name: { en: "Spicy Macaroni", fa: "مکرونی تند" },
    desc: {
      en: "Extra hot and spicy — for those who dare to feel the heat. Not for the faint-hearted.",
      fa: "فوق‌العاده داغ و تند — برای کسانی که جرأت احساس حرارت را دارند.",
    },
    price: "120 AF",
    badge: { en: "Hot 🔥", fa: "تند 🔥" },
    badgeColor: "bg-red-600/20 text-red-400",
    icon: faFire,
    borderColor: "border-red-900/50 hover:border-red-500/70",
    glowColor: "hover:shadow-red-900/30",
    tag: { en: "Most Popular", fa: "محبوب‌ترین" },
    tagColor: "bg-red-600/10 text-red-400 border-red-600/30",
  },
  {
    image: "/chicken.png",
    name: { en: "Chicken Macaroni", fa: "مکرونی مرغ" },
    desc: {
      en: "Tender grilled chicken with Khaasta sauce on a bed of perfectly cooked macaroni.",
      fa: "مرغ کبابی لطیف با سس خاص تا روی مکرونی کاملاً پخته شده.",
    },
    price: "150 AF",
    badge: { en: "Special", fa: "خاص" },
    badgeColor: "bg-yellow-500/10 text-yellow-400",
    icon: faDrumstickBite,
    borderColor: "border-yellow-900/50 hover:border-yellow-500/70",
    glowColor: "hover:shadow-yellow-900/20",
    tag: { en: "Premium", fa: "ویژه" },
    tagColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  },
];

export default function Menu() {
  const { t, lang, isRTL } = useLanguage();
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
      {/* Background glow */}
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

        {/* Menu Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className={`reveal group relative bg-gradient-to-b from-gray-900/80 to-black rounded-3xl border-2 ${item.borderColor} transition-all duration-300 hover:shadow-2xl ${item.glowColor} hover:-translate-y-1 overflow-hidden`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Tag top right */}
              <div
                className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} z-10 text-xs font-bold px-3 py-1 rounded-full border ${item.tagColor}`}
              >
                {item.tag[lang as Lang]}
              </div>

              {/* Image — fixed height, full width, covers top of card */}
              <div className="w-full h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name.en}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Badge */}
                <div
                  className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full mb-3 ${item.badgeColor}`}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-[10px]" />
                  {item.badge[lang as Lang]}
                </div>

                {/* Name */}
                <h3 className="text-xl font-black text-white mb-2">
                  {item.name[lang as Lang]}
                </h3>

                {/* Desc */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {item.desc[lang as Lang]}
                </p>

                {/* Bottom row */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <div className="text-xs text-gray-600 mb-0.5">
                      {isRTL ? "قیمت" : "Price"}
                    </div>
                    <div className="text-2xl font-black gold-text">
                      {item.price}
                    </div>
                  </div>
                  <a
                    href="/order"
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
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-16 reveal">
          <div className="inline-block border border-red-600/30 bg-red-600/5 rounded-2xl px-8 py-5">
            <p className="text-white font-black text-xl mb-1">
              {isRTL ? "طعم خاص، حال خاص!" : "Special Taste, Special Feeling!"}
            </p>
            <p className="text-gray-500 text-sm">
              {isRTL
                ? "خاص تا مکرونی — داغ. تند. خاص."
                : "Khaasta Macaroni — Hot. Spicy. Special."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
