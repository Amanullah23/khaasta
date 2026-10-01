"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faXmark, faTag } from "@fortawesome/free-solid-svg-icons";

export default function PromoBanner() {
  const { isRTL } = useLanguage();
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 bg-gradient-to-r from-red-700 via-red-600 to-red-700 border-t border-red-500/40 shadow-2xl shadow-red-900/50"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Left: icon + text */}
        <div className="flex items-center gap-3 flex-1">
          <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
            <FontAwesomeIcon icon={faTag} className="text-yellow-300 text-sm" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3">
            <span className="text-white font-black text-sm tracking-wide">
              {isRTL ? "🎉 پیشنهاد ویژه!" : "🎉 Special Offer!"}
            </span>
            <span className="text-red-100 text-xs sm:text-sm font-medium">
              {isRTL
                ? "۲ مکرونی بخرید، ۱ مکرونی رایگان بگیرید!"
                : "Buy 2 Macaroni, Get 1 FREE!"}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 bg-white/15 border border-white/20 rounded-full px-3 py-1">
            <FontAwesomeIcon
              icon={faFire}
              className="text-yellow-300 text-xs flame"
            />
            <span className="text-white text-xs font-bold tracking-widest uppercase">
              {isRTL ? "امروز فقط" : "Today Only"}
            </span>
            <FontAwesomeIcon
              icon={faFire}
              className="text-yellow-300 text-xs flame"
            />
          </div>
        </div>

        {/* Center: CTA */}
        <a
          href="/order"
          className="flex-shrink-0 bg-black/30 hover:bg-black/50 border border-white/20 text-white font-black text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 whitespace-nowrap"
        >
          {isRTL ? "همین حالا سفارش دهید" : "Order Now"}
        </a>

        {/* Close */}
        <button
          onClick={() => setVisible(false)}
          className="flex-shrink-0 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
        >
          <FontAwesomeIcon icon={faXmark} className="text-sm" />
        </button>
      </div>
    </div>
  );
}
