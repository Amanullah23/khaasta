"use client";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faClock,
  faCircleCheck,
  faFire,
  faUser,
  faMobileScreen,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTelegram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactSection() {
  const { t, isRTL } = useLanguage();
  const { isDark } = useTheme();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
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

  const info = [
    {
      icon: faLocationDot,
      key: "contact.info.address",
      color: "text-red-500",
      bg: isDark ? "bg-red-500/10" : "bg-red-50",
    },
    {
      icon: faPhone,
      key: "contact.info.phone",
      color: "text-green-500",
      bg: isDark ? "bg-green-500/10" : "bg-green-50",
    },
    {
      icon: faClock,
      key: "contact.info.hours",
      color: "text-yellow-500",
      bg: isDark ? "bg-yellow-500/10" : "bg-yellow-50",
    },
    {
      icon: faInstagram,
      key: "contact.info.instagram",
      color: "text-pink-500",
      bg: isDark ? "bg-pink-500/10" : "bg-pink-50",
    },
  ];

  const inputClass = `w-full border rounded-xl px-4 py-3.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
    isDark
      ? "bg-white/5 border-white/10 text-white focus:border-red-500/60 focus:ring-red-500/10"
      : "bg-white border-gray-200 text-gray-800 focus:border-red-400 focus:ring-red-100"
  }`;

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-gray-50"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
      ref={sectionRef}
    >
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-yellow-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 text-red-500 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-widest">
            <FontAwesomeIcon icon={faFire} className="flame" />
            {t("section.contact.title")}
          </div>
          <h2
            className={`text-4xl sm:text-5xl font-black mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {t("section.contact.title")}
          </h2>
          <p
            className={`max-w-lg mx-auto text-sm sm:text-base ${isDark ? "text-gray-500" : "text-gray-500"}`}
          >
            {t("section.contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info side */}
          <div className="lg:col-span-2 reveal">
            <div
              className={`border rounded-3xl p-8 h-full transition-colors duration-300 ${
                isDark
                  ? "bg-gradient-to-br from-gray-900/80 to-black border-red-900/30"
                  : "bg-white border-gray-100 shadow-sm"
              }`}
            >
              <div
                className={`text-center mb-8 pb-8 border-b ${isDark ? "border-white/5" : "border-gray-100"}`}
              >
                <div
                  className={`inline-block rounded-2xl p-1 mb-3 ${
                    isDark
                      ? "bg-gradient-to-br from-red-900/40 to-black border border-red-900/40 shadow-lg shadow-red-900/20"
                      : "bg-white shadow-md border border-red-100"
                  }`}
                >
                  <img
                    src="/logo.png"
                    alt="Khaasta"
                    className="h-24 w-auto object-contain rounded-xl"
                  />
                </div>
                <div className="text-red-500 text-xs tracking-widest uppercase mt-1 font-bold">
                  {isRTL
                    ? "طعم خاص، حال خاص"
                    : "Special Taste, Special Feeling"}
                </div>
              </div>

              <div className="space-y-5">
                {info.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={`text-sm ${item.color}`}
                      />
                    </div>
                    <div
                      className={`text-sm leading-relaxed pt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                      dir={
                        item.key === "contact.info.phone" ? "ltr" : undefined
                      }
                    >
                      {item.key === "contact.info.instagram" ? (
                        <a
                          href="https://www.instagram.com/khaasta.macaroni"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 text-pink-500 font-bold px-3 py-1 rounded-full text-xs hover:border-pink-500/50 transition-all duration-200"
                        >
                          @khaasta.macaroni
                        </a>
                      ) : (
                        t(item.key)
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className={`mt-8 pt-8 border-t ${isDark ? "border-white/5" : "border-gray-100"}`}
              >
                <p
                  className={`text-xs mb-4 uppercase tracking-widest ${isDark ? "text-gray-600" : "text-gray-400"}`}
                >
                  {t("footer.follow")}
                </p>
                <div className="flex gap-3">
                  {[
                    {
                      icon: faInstagram,
                      color: "hover:bg-pink-600",
                      href: "https://www.instagram.com/khaasta.macaroni",
                    },
                    { icon: faTelegram, color: "hover:bg-blue-600", href: "#" },
                    {
                      icon: faFacebook,
                      color: "hover:bg-blue-700",
                      href: "https://www.facebook.com/share/1ciVvnoBYM/",
                    },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 border ${s.color} rounded-xl flex items-center justify-center hover:text-white transition-all duration-200 ${
                        isDark
                          ? "bg-white/5 border-white/10 text-gray-400"
                          : "bg-gray-50 border-gray-200 text-gray-500"
                      }`}
                    >
                      <FontAwesomeIcon icon={s.icon} className="text-sm" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal">
            <div
              className={`border rounded-3xl p-8 transition-colors duration-300 ${
                isDark
                  ? "bg-gradient-to-br from-gray-900/80 to-black border-white/10"
                  : "bg-white border-gray-100 shadow-sm"
              }`}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mb-6">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-green-500 text-3xl"
                    />
                  </div>
                  <h3
                    className={`text-2xl font-black mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {t("contact.sent")}
                  </h3>
                  <p
                    className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}
                  >
                    {isRTL
                      ? "به زودی با شما تماس خواهیم گرفت."
                      : "We'll get back to you soon."}
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    className={`text-xl font-black mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {isRTL ? "پیام بفرستید" : "Send us a message"}
                  </h3>
                  <p
                    className={`text-sm mb-8 ${isDark ? "text-gray-600" : "text-gray-400"}`}
                  >
                    {isRTL
                      ? "سفارش دهید یا هر سوالی دارید بپرسید."
                      : "Place an order or ask us anything."}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        className={`block text-xs font-bold mb-2 uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"}`}
                      >
                        <FontAwesomeIcon
                          icon={faUser}
                          className="me-2 text-red-500"
                        />
                        {isRTL ? "نام شما" : "Your Name"}
                      </label>
                      <input
                        type="text"
                        placeholder={
                          isRTL
                            ? "نام کامل خود را وارد کنید"
                            : "Enter your full name"
                        }
                        value={form.name}
                        required
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        className={`block text-xs font-bold mb-2 uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"}`}
                      >
                        <FontAwesomeIcon
                          icon={faMobileScreen}
                          className="me-2 text-red-500"
                        />
                        {isRTL ? "شماره تلفن" : "Phone Number"}
                      </label>
                      <input
                        type="tel"
                        placeholder={
                          isRTL
                            ? "شماره تلفن خود را وارد کنید"
                            : "Enter your phone number"
                        }
                        value={form.phone}
                        required
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        className={`block text-xs font-bold mb-2 uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"}`}
                      >
                        <FontAwesomeIcon
                          icon={faMessage}
                          className="me-2 text-red-500"
                        />
                        {isRTL ? "پیام" : "Message"}
                      </label>
                      <textarea
                        rows={5}
                        placeholder={
                          isRTL
                            ? "پیام خود را بنویسید..."
                            : "Write your message..."
                        }
                        value={form.message}
                        required
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-black py-4 rounded-xl hover:shadow-xl hover:shadow-red-900/40 hover:scale-[1.01] transition-all duration-300 tracking-wide flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faFire} className="flame" />
                      {t("contact.send")}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
