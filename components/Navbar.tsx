"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faGlobe,
  faClock,
  faMoon,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { lang, setLang, t, isRTL } = useLanguage();
  const { toggleTheme, isDark } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = (hash: string) => (isHome ? hash : `/${hash}`);

  const links = [
    { href: link("#home"), key: "nav.home" },
    { href: link("#menu"), key: "nav.menu" },
    { href: link("#about"), key: "nav.about" },
    { href: link("#contact"), key: "nav.contact" },
  ];

  const navBg = scrolled
    ? isDark
      ? "bg-black/95 backdrop-blur-md shadow-lg shadow-red-900/20 py-2 border-b border-red-900/30"
      : "bg-white/95 backdrop-blur-md shadow-lg shadow-red-200/30 py-2 border-b border-red-100"
    : isDark
      ? "bg-transparent py-4"
      : "bg-white/80 backdrop-blur-sm py-4";

  const linkColor = isDark
    ? "text-gray-300 hover:text-yellow-400"
    : "text-gray-700 hover:text-red-600";

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${navBg}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center flex-shrink-0">
          <div
            className={`rounded-xl p-0.5 ${isDark ? "bg-black" : "bg-white shadow-sm"}`}
          >
            <img
              src="/logo.png"
              alt="Khaasta Macaroni"
              className="h-20 w-auto object-contain rounded-xl"
            />
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              className={`text-sm font-medium transition-colors duration-200 tracking-wide ${linkColor}`}
            >
              {t(key)}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 border ${
              isDark
                ? "bg-white/5 border-white/10 text-yellow-400 hover:bg-white/10"
                : "bg-gray-100 border-gray-200 text-gray-600 hover:bg-gray-200"
            }`}
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon
              icon={isDark ? faCircleHalfStroke : faMoon}
              className="text-sm"
            />
          </button>

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "fa" : "en")}
            className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full border transition-all duration-200 ${
              isDark
                ? "border-gray-600 text-gray-300 hover:border-yellow-500 hover:text-yellow-400"
                : "border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-600"
            }`}
          >
            <FontAwesomeIcon icon={faGlobe} className="text-xs" />
            {lang === "en" ? "دری" : "English"}
          </button>

          {/* Coming soon badge */}
          <div
            className={`flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full border ${
              isDark
                ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
                : "bg-red-50 border-red-200 text-red-500"
            }`}
          >
            <FontAwesomeIcon icon={faClock} className="text-xs" />
            {lang === "fa" ? "بزودی..." : "Coming Soon"}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-xl p-1 ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } ${isDark ? "bg-black/98 border-t border-red-900/30" : "bg-white border-t border-gray-100 shadow-xl"}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          {links.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              onClick={() => setOpen(false)}
              className={`font-medium py-3 border-b transition-colors text-sm ${
                isDark
                  ? "text-gray-300 border-white/5 hover:text-yellow-400"
                  : "text-gray-700 border-gray-50 hover:text-red-600"
              }`}
            >
              {t(key)}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-3">
            {/* Theme toggle mobile */}
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200 ${
                isDark
                  ? "bg-white/5 border-white/10 text-yellow-400"
                  : "bg-gray-100 border-gray-200 text-gray-600"
              }`}
            >
              <FontAwesomeIcon
                icon={isDark ? faCircleHalfStroke : faMoon}
                className="text-sm"
              />
            </button>

            {/* Language toggle mobile */}
            <button
              onClick={() => {
                setLang(lang === "en" ? "fa" : "en");
                setOpen(false);
              }}
              className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border transition-all ${
                isDark
                  ? "text-gray-300 border-gray-600 hover:border-yellow-500 hover:text-yellow-400"
                  : "text-gray-600 border-gray-300 hover:border-red-500 hover:text-red-600"
              }`}
            >
              <FontAwesomeIcon icon={faGlobe} />
              {lang === "en" ? "دری" : "English"}
            </button>

            {/* Coming soon mobile */}
            <div
              className={`flex-1 text-center text-xs font-bold py-2.5 rounded-full border ${
                isDark
                  ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
                  : "bg-red-50 border-red-200 text-red-500"
              }`}
            >
              {lang === "fa" ? "بزودی..." : "Coming Soon"}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
