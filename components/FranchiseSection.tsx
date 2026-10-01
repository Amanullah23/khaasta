"use client";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faArrowRight,
  faCartShopping,
  faHandshake,
  faMoneyBillWave,
  faMapLocationDot,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function FranchiseSection() {
  const { isRTL } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = {
    en: [
      {
        icon: faHandshake,
        title: "Contact Us",
        desc: "Reach out to our team and express your interest in becoming a Khaasta partner.",
      },
      {
        icon: faCartShopping,
        title: "Get Your Cart",
        desc: "We provide you with the branded Khaasta cart, fully equipped and ready to operate.",
      },
      {
        icon: faMapLocationDot,
        title: "Pick Your Spot",
        desc: "Choose a high-traffic location in your area — we help you find the best spot.",
      },
      {
        icon: faMoneyBillWave,
        title: "Start Earning",
        desc: "Start selling and earning from day one with full support from the Khaasta team.",
      },
    ],
    fa: [
      {
        icon: faHandshake,
        title: "با ما تماس بگیرید",
        desc: "با تیم ما تماس بگیرید و علاقه خود را برای تبدیل شدن به شریک خاصتا ابراز کنید.",
      },
      {
        icon: faCartShopping,
        title: "کارت خود را بگیرید",
        desc: "ما کارت برندشده خاصتا را به شما می‌دهیم، کاملاً مجهز و آماده برای کار.",
      },
      {
        icon: faMapLocationDot,
        title: "مکان خود را انتخاب کنید",
        desc: "یک مکان پرتردد در منطقه خود انتخاب کنید — ما به شما کمک می‌کنیم بهترین مکان را پیدا کنید.",
      },
      {
        icon: faMoneyBillWave,
        title: "شروع به درآمد کنید",
        desc: "از روز اول با پشتیبانی کامل تیم خاصتا شروع به فروش و کسب درآمد کنید.",
      },
    ],
  };

  const benefits = {
    en: [
      "Low startup cost",
      "Full training provided",
      "Branded cart & equipment",
      "Marketing support",
      "Proven business model",
      "Ongoing team support",
    ],
    fa: [
      "هزینه راه‌اندازی پایین",
      "آموزش کامل ارائه می‌شود",
      "کارت و تجهیزات برندشده",
      "پشتیبانی بازاریابی",
      "مدل کسب‌وکار اثبات‌شده",
      "پشتیبانی مداوم تیم",
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
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #0d0303 50%, #000000 100%)",
      }}
      dir={isRTL ? "rtl" : "ltr"}
      ref={sectionRef}
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 text-red-400 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-widest">
            <FontAwesomeIcon icon={faFire} className="flame" />
            {isRTL ? "فرانچایز" : "Franchise"}
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {isRTL ? "کارت خاصتا خودت را داشته باش!" : "Own Your Khaasta Cart!"}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            {isRTL
              ? "می‌خواهی کارت مکرونی خاصتا خودت را داشته باشی؟ به خانواده خاصتا بپیوند و کسب‌وکار خود را شروع کن."
              : "Want to open your own Khaasta Macaroni cart? Join the Khaasta family and start your own business today."}
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Visual */}
          <div className="reveal">
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-3xl p-10 text-center red-glow overflow-hidden">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc2626' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10S0 14.5 0 20s4.5 10 10 10 10-4.5 10-10zm10 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative z-10">
                <div className="text-7xl mb-4 float-1">🛒</div>
                <div className="text-2xl font-black gold-text mb-2">
                  {isRTL ? "کارت خاصتا" : "Khaasta Cart"}
                </div>
                <div className="text-gray-500 text-sm tracking-widest uppercase mb-6">
                  {isRTL
                    ? "کسب‌وکار خود را شروع کن"
                    : "Start Your Own Business"}
                </div>

                {/* Benefits list */}
                <div className="grid grid-cols-2 gap-3 text-start">
                  {(isRTL ? benefits.fa : benefits.en).map((b, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-red-500 text-xs flex-shrink-0"
                      />
                      <span className="text-gray-400 text-xs">{b}</span>
                    </div>
                  ))}
                </div>

                {/* Price tag */}
                <div className="mt-8 inline-block bg-red-600/20 border border-red-600/30 rounded-2xl px-6 py-4">
                  <div className="text-xs text-gray-500 mb-1 uppercase tracking-widest">
                    {isRTL ? "شروع از" : "Starting from"}
                  </div>
                  <div className="text-3xl font-black gold-text">
                    {isRTL ? "قابل مذاکره" : "Negotiable"}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {isRTL ? "با تیم ما تماس بگیرید" : "Contact our team"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Steps */}
          <div className="reveal">
            <h3 className="text-2xl font-black text-white mb-8">
              {isRTL ? "چطور شروع کنید" : "How It Works"}
            </h3>
            <div className="space-y-5">
              {(isRTL ? steps.fa : steps.en).map((step, i) => (
                <div key={i} className="flex gap-5 group">
                  {/* Step number + icon */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 bg-red-600/10 border border-red-600/30 group-hover:bg-red-600 group-hover:border-red-600 rounded-2xl flex items-center justify-center transition-all duration-300">
                      <FontAwesomeIcon
                        icon={step.icon}
                        className="text-red-400 group-hover:text-white text-sm transition-colors duration-300"
                      />
                    </div>
                    {i < 3 && (
                      <div className="w-px h-full bg-red-900/30 mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black gold-text">
                        0{i + 1}
                      </span>
                      <h4 className="text-white font-black text-base">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="reveal">
          <div className="bg-gradient-to-br from-red-900/20 to-black border border-red-600/20 rounded-3xl p-10 text-center">
            <FontAwesomeIcon
              icon={faHandshake}
              className="text-red-500 text-4xl mb-5"
            />
            <h3 className="text-3xl font-black text-white mb-3">
              {isRTL ? "آماده شروع هستید؟" : "Ready to Get Started?"}
            </h3>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto text-sm">
              {isRTL
                ? "همین حالا با ما تماس بگیرید و اولین قدم را برای راه‌اندازی کارت مکرونی خاصتا خود بردارید."
                : "Contact us now and take the first step toward launching your own Khaasta Macaroni cart."}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-black px-8 py-4 rounded-full shadow-xl shadow-red-900/40 hover:shadow-red-600/50 hover:scale-105 transition-all duration-300 text-sm tracking-wide"
              >
                <FontAwesomeIcon icon={faFire} className="flame" />
                {isRTL ? "همین حالا تماس بگیرید" : "Contact Us Now"}
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </a>
              <a
                href="https://wa.me/93797441319"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-black px-8 py-4 rounded-full transition-all duration-300 text-sm"
              >
                {isRTL ? "واتساپ" : "WhatsApp Us"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
