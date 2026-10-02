"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faPhone,
  faEnvelope,
  faCircleCheck,
  faArrowLeft,
  faArrowRight,
  faBowlFood,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const menuItems = [
  {
    emoji: "🍝",
    name: { en: "Plain Macaroni", fa: "مکرونی ساده" },
    price: 100,
    id: "plain",
  },
  {
    emoji: "🌶️",
    name: { en: "Spicy Macaroni", fa: "مکرونی تند" },
    price: 120,
    id: "spicy",
  },
  {
    emoji: "🍗",
    name: { en: "Chicken Macaroni", fa: "مکرونی مرغ" },
    price: 150,
    id: "chicken",
  },
];

type Lang = "en" | "fa";
type OrderItem = { id: string; qty: number };

export default function OrderPage() {
  const { lang, isRTL } = useLanguage();
  const [items, setItems] = useState<OrderItem[]>([]);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
  });
  const [sent, setSent] = useState(false);

  const getQty = (id: string) => items.find((i) => i.id === id)?.qty ?? 0;

  const updateQty = (id: string, delta: number) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (!existing) return delta > 0 ? [...prev, { id, qty: 1 }] : prev;
      const newQty = existing.qty + delta;
      if (newQty <= 0) return prev.filter((i) => i.id !== id);
      return prev.map((i) => (i.id === id ? { ...i, qty: newQty } : i));
    });
  };

  const total = items.reduce((sum, item) => {
    const found = menuItems.find((m) => m.id === item.id);
    return sum + (found?.price ?? 0) * item.qty;
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setItems([]);
    setForm({ name: "", phone: "", address: "", note: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500/60 focus:ring-2 focus:ring-red-500/10 transition-all duration-200";

  const steps = {
    en: [
      {
        num: "01",
        title: "Choose Your Items",
        desc: "Pick from our 3 signature macaroni options below.",
      },
      {
        num: "02",
        title: "Fill Your Details",
        desc: "Enter your name, phone number, and delivery address.",
      },
      {
        num: "03",
        title: "Place Your Order",
        desc: "Submit the form or contact us directly via WhatsApp.",
      },
      {
        num: "04",
        title: "Receive & Enjoy",
        desc: "We prepare it fresh and deliver it hot to your door.",
      },
    ],
    fa: [
      {
        num: "۰۱",
        title: "آیتم‌های خود را انتخاب کنید",
        desc: "از ۳ گزینه مکرونی منحصربه‌فرد ما در زیر انتخاب کنید.",
      },
      {
        num: "۰۲",
        title: "اطلاعات خود را پر کنید",
        desc: "نام، شماره تلفن و آدرس تحویل خود را وارد کنید.",
      },
      {
        num: "۰۳",
        title: "سفارش دهید",
        desc: "فرم را ارسال کنید یا مستقیماً از طریق واتساپ با ما تماس بگیرید.",
      },
      {
        num: "۰۴",
        title: "دریافت و لذت ببرید",
        desc: "ما آن را تازه آماده می‌کنیم و داغ به دم در شما می‌رسانیم.",
      },
    ],
  };

  return (
    <div
      className="min-h-screen bg-black text-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Navbar />

      {/* Hero — pt-32 to clear fixed navbar */}
      <div className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <a
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm font-medium transition-colors mb-8"
          >
            <FontAwesomeIcon
              icon={isRTL ? faArrowRight : faArrowLeft}
              className="text-xs"
            />
            {isRTL ? "بازگشت به خانه" : "Back to Home"}
          </a>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 text-red-400 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              <FontAwesomeIcon icon={faFire} className="flame" />
              {isRTL ? "سفارش آنلاین" : "Online Order"}
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
              {isRTL ? "سفارش دهید" : "Place Your Order"}
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-base">
              {isRTL
                ? "خاص تا مکرونی را همین حالا سفارش دهید — داغ، تند و خاص تا در خانه تحویل بگیرید."
                : "Order Khaasta Macaroni now — hot, spicy and special delivered right to your door."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* How to Order */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10 text-center">
            {isRTL ? "چطور سفارش دهید" : "How to Order"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(isRTL ? steps.fa : steps.en).map((step, i) => (
              <div
                key={i}
                className="bg-gray-900/40 border border-white/5 hover:border-red-600/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl font-black gold-text mb-4">
                  {step.num}
                </div>
                <h3 className="text-white font-black text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact methods */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10 text-center">
            {isRTL ? "راه‌های تماس" : "Contact Us Directly"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: faWhatsapp,
                label: "WhatsApp",
                value: "+93 700 000 000",
                desc: {
                  en: "Chat with us on WhatsApp",
                  fa: "از طریق واتساپ با ما چت کنید",
                },
                bg: "bg-green-500/10",
                border: "border-green-500/20 hover:border-green-500/50",
                color: "text-green-400",
                href: "https://wa.me/93700000000",
              },
              {
                icon: faPhone,
                label: isRTL ? "تماس مستقیم" : "Call Us",
                value: "+93 700 000 000",
                desc: {
                  en: "Call us to place your order",
                  fa: "با ما تماس بگیرید تا سفارش دهید",
                },
                bg: "bg-blue-500/10",
                border: "border-blue-500/20 hover:border-blue-500/50",
                color: "text-blue-400",
                href: "tel:+93700000000",
              },
              {
                icon: faInstagram,
                label: "Instagram",
                value: "@khaasta.macaroni",
                desc: {
                  en: "DM us on Instagram",
                  fa: "در اینستاگرام پیام دهید",
                },
                bg: "bg-pink-500/10",
                border: "border-pink-500/20 hover:border-pink-500/50",
                color: "text-pink-400",
                href: "https://instagram.com/khaasta.macaroni",
              },
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group ${c.bg} border-2 ${c.border} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 block`}
              >
                <div className={`text-3xl mb-4 ${c.color}`}>
                  <FontAwesomeIcon icon={c.icon} />
                </div>
                <div className="text-white font-black text-base mb-1">
                  {c.label}
                </div>
                <div className={`text-sm font-bold mb-2 ${c.color}`}>
                  {c.value}
                </div>
                <div className="text-gray-500 text-xs">
                  {c.desc[lang as Lang]}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Order Form */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Menu selector */}
          <div>
            <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
              <FontAwesomeIcon icon={faBowlFood} className="text-red-500" />
              {isRTL ? "آیتم‌های خود را انتخاب کنید" : "Select Your Items"}
            </h2>

            <div className="space-y-4 mb-8">
              {menuItems.map((item) => {
                const qty = getQty(item.id);
                return (
                  <div
                    key={item.id}
                    className={`bg-gray-900/40 border-2 rounded-2xl p-5 transition-all duration-200 ${
                      qty > 0
                        ? "border-red-600/60 bg-red-900/10"
                        : "border-white/5 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{item.emoji}</span>
                        <div>
                          <div className="text-white font-black text-base">
                            {item.name[lang as Lang]}
                          </div>
                          <div className="gold-text font-bold text-sm">
                            {item.price} AF
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, -1)}
                          className="w-9 h-9 bg-white/5 hover:bg-red-600 border border-white/10 rounded-xl text-white font-black transition-all duration-200 flex items-center justify-center text-lg"
                        >
                          −
                        </button>
                        <span className="text-white font-black text-lg w-6 text-center">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, 1)}
                          className="w-9 h-9 bg-red-600 hover:bg-red-500 rounded-xl text-white font-black transition-all duration-200 flex items-center justify-center text-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Total */}
            {total > 0 && (
              <div className="bg-gradient-to-br from-red-900/20 to-black border border-red-600/30 rounded-2xl p-5 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 text-sm">
                    {isRTL ? "مجموع سفارش" : "Order Total"}
                  </span>
                  <span className="text-2xl font-black gold-text">
                    {total} AF
                  </span>
                </div>
                <div className="space-y-1">
                  {items.map((item) => {
                    const found = menuItems.find((m) => m.id === item.id);
                    if (!found) return null;
                    return (
                      <div
                        key={item.id}
                        className="flex justify-between text-xs text-gray-500"
                      >
                        <span>
                          {found.name[lang as Lang]} × {item.qty}
                        </span>
                        <span>{found.price * item.qty} AF</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  icon: faLocationDot,
                  text: { en: "Kabul, Afghanistan", fa: "کابل، افغانستان" },
                  color: "text-red-400",
                },
                {
                  icon: faClock,
                  text: {
                    en: "Daily 10am – 10pm",
                    fa: "هر روز ۱۰ صبح – ۱۰ شب",
                  },
                  color: "text-yellow-400",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center gap-3"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`${item.color} text-sm flex-shrink-0`}
                  />
                  <span className="text-gray-400 text-xs">
                    {item.text[lang as Lang]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Order form */}
          <div>
            <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-red-500" />
              {isRTL ? "اطلاعات تحویل" : "Delivery Details"}
            </h2>

            {sent ? (
              <div className="bg-gray-900/40 border border-green-500/30 rounded-3xl p-12 text-center">
                <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-green-400 text-3xl"
                  />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  {isRTL ? "سفارش ثبت شد!" : "Order Placed!"}
                </h3>
                <p className="text-gray-500 text-sm">
                  {isRTL
                    ? "سفارش شما دریافت شد. به زودی با شما تماس می‌گیریم."
                    : "Your order has been received. We will contact you shortly."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder={isRTL ? "نام کامل شما" : "Your Full Name"}
                  value={form.name}
                  required
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="tel"
                  placeholder={isRTL ? "شماره تلفن" : "Phone Number"}
                  value={form.phone}
                  required
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="text"
                  placeholder={isRTL ? "آدرس تحویل" : "Delivery Address"}
                  value={form.address}
                  required
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  className={inputClass}
                />
                <textarea
                  rows={3}
                  placeholder={
                    isRTL
                      ? "یادداشت اضافی (اختیاری)"
                      : "Additional notes (optional)"
                  }
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  className={`${inputClass} resize-none`}
                />

                {items.length > 0 && (
                  <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-400">
                    <div className="font-bold text-white mb-1">
                      {isRTL ? "سفارش شما:" : "Your order:"}
                    </div>
                    {items.map((item) => {
                      const found = menuItems.find((m) => m.id === item.id);
                      if (!found) return null;
                      return (
                        <div
                          key={item.id}
                          className="flex justify-between text-xs"
                        >
                          <span>
                            {found.name[lang as Lang]} × {item.qty}
                          </span>
                          <span className="gold-text">
                            {found.price * item.qty} AF
                          </span>
                        </div>
                      );
                    })}
                    <div className="flex justify-between text-xs font-black text-white mt-2 pt-2 border-t border-white/10">
                      <span>{isRTL ? "مجموع" : "Total"}</span>
                      <span className="gold-text">{total} AF</span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-black py-4 rounded-xl hover:shadow-xl hover:shadow-red-900/40 hover:scale-[1.01] transition-all duration-300 tracking-wide flex items-center justify-center gap-2 text-base"
                >
                  <FontAwesomeIcon icon={faFire} className="flame" />
                  {isRTL ? "ثبت سفارش" : "Place Order"}
                  <FontAwesomeIcon icon={faFire} className="flame" />
                </button>

                <p className="text-center text-gray-600 text-xs">
                  {isRTL
                    ? "یا از طریق واتساپ سفارش دهید"
                    : "or order directly via WhatsApp"}
                </p>

                <a
                  href="https://wa.me/93700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-500 text-white font-black py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                  {isRTL ? "سفارش از طریق واتساپ" : "Order via WhatsApp"}
                </a>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
