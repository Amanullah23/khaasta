"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faClock,
  faArrowUp,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTelegram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const { t, isRTL } = useLanguage();
  const { isDark } = useTheme();

  const navLinks = [
    { href: "#home", key: "nav.home" },
    { href: "#menu", key: "nav.menu" },
    { href: "#about", key: "nav.about" },
    { href: "#contact", key: "nav.contact" },
  ];

  const socials = [
    {
      icon: faInstagram,
      href: "https://www.instagram.com/khaasta.macaroni",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: faTelegram,
      href: "#",
      label: "Telegram",
      color: "hover:bg-blue-600",
    },
    {
      icon: faFacebook,
      href: "https://www.facebook.com/share/1ciVvnoBYM/",
      label: "Facebook",
      color: "hover:bg-blue-700",
    },
    {
      icon: faTiktok,
      href: "https://www.tiktok.com/@khaasta.macaroni",
      label: "TikTok",
      color: "hover:bg-gray-700",
    },
  ];

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        isDark
          ? "bg-black border-white/5 text-gray-400"
          : "bg-white border-gray-100 text-gray-500"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Top CTA strip */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faFire}
              className="text-yellow-400 text-xl flame"
            />
            <span className="text-white font-black text-lg tracking-wide">
              {isRTL ? "امروز سفارش دهید!" : "Order Today!"}
            </span>
            <FontAwesomeIcon
              icon={faFire}
              className="text-yellow-400 text-xl flame"
            />
          </div>
          <a
            href="#contact"
            className="bg-black/30 hover:bg-black/50 text-white font-bold px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 border border-white/20"
          >
            {isRTL ? "همین حالا تماس بگیرید" : "Contact Us Now"}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="/" className="inline-block mb-4">
              <div
                className={`inline-block rounded-2xl p-1 ${
                  isDark
                    ? "bg-gradient-to-br from-red-900/40 to-black border border-red-900/40"
                    : "bg-white shadow-md border border-red-100"
                }`}
              >
                <img
                  src="/logo.png"
                  alt="Khaasta Macaroni"
                  className="h-16 w-auto object-contain rounded-xl"
                />
              </div>
            </a>
            <p
              className={`text-sm leading-relaxed mb-6 ${isDark ? "text-gray-500" : "text-gray-500"}`}
            >
              {t("footer.desc")}
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-9 h-9 border ${s.color} rounded-xl flex items-center justify-center hover:text-white transition-all duration-200 ${
                    isDark
                      ? "bg-white/5 border-white/10 text-gray-500"
                      : "bg-gray-50 border-gray-200 text-gray-400"
                  }`}
                >
                  <FontAwesomeIcon icon={s.icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`font-black mb-5 text-sm uppercase tracking-wider ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {t("footer.links")}
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ href, key }) => (
                <li key={key}>
                  <a
                    href={href}
                    className={`text-sm transition-colors duration-200 flex items-center gap-2 group ${
                      isDark
                        ? "text-gray-500 hover:text-yellow-400"
                        : "text-gray-500 hover:text-red-600"
                    }`}
                  >
                    <span className="w-1 h-1 bg-red-600 rounded-full group-hover:bg-yellow-400 transition-colors" />
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className={`font-black mb-5 text-sm uppercase tracking-wider ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4">
              {[
                {
                  icon: faLocationDot,
                  key: "contact.info.address",
                  color: "text-red-500",
                },
                {
                  icon: faPhone,
                  key: "contact.info.phone",
                  color: "text-green-500",
                },
                {
                  icon: faClock,
                  key: "contact.info.hours",
                  color: "text-yellow-500",
                },
              ].map((item) => (
                <li key={item.key} className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`${item.color} mt-0.5 flex-shrink-0 text-sm`}
                  />
                  <span
                    className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}
                    dir={item.key === "contact.info.phone" ? "ltr" : undefined}
                  >
                    {t(item.key)}
                  </span>
                </li>
              ))}
              {/* Instagram styled */}
              <li className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-pink-500 mt-0.5 flex-shrink-0 text-sm"
                />
                <a
                  href="https://www.instagram.com/khaasta.macaroni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 text-pink-500 font-bold px-3 py-1 rounded-full text-xs hover:border-pink-500/50 transition-all duration-200"
                >
                  @khaasta.macaroni
                </a>
              </li>
            </ul>
          </div>

          {/* Promise box */}
          <div>
            <h4
              className={`font-black mb-5 text-sm uppercase tracking-wider ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {isRTL ? "شعار ما" : "Our Promise"}
            </h4>
            <div
              className={`border rounded-2xl p-5 ${
                isDark
                  ? "bg-gradient-to-br from-red-900/20 to-black border-red-900/40 red-glow"
                  : "bg-red-50 border-red-100"
              }`}
            >
              <div className="text-4xl mb-3 text-center">🍝</div>
              <p
                className={`text-sm leading-relaxed text-center font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                {isRTL
                  ? "طعم خاص، حال خاص! خاصتا مکرونی — داغ. تند. خاص."
                  : "Special Taste, Special Feeling! Khaasta — Hot. Spicy. Special."}
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
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
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className={`border-t ${isDark ? "border-white/5" : "border-gray-100"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className={`text-xs ${isDark ? "text-gray-600" : "text-gray-400"}`}
          >
            {t("footer.rights")}
          </p>
          <p
            className={`text-xs ${isDark ? "text-gray-600" : "text-gray-400"}`}
          >
            {isRTL ? "طراحی و توسعه توسط" : "Designed & Developed by"}{" "}
            <a
              href="https://yawari.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-text font-bold hover:underline"
            >
              {isRTL ? "امان الله یاوری" : "Amanullah Yawari"}
            </a>
          </p>
          <a
            href="#home"
            className={`w-8 h-8 border rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-red-600 hover:text-white hover:border-red-600 ${
              isDark
                ? "bg-white/5 border-white/10 text-gray-500"
                : "bg-gray-50 border-gray-200 text-gray-400"
            }`}
          >
            <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
          </a>
        </div>
      </div>
    </footer>
  );
}
