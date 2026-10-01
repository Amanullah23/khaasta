import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Poppins, Vazirmatn } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

config.autoAddCss = false;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khaasta Macaroni | داغ . تند . خاص",
  description:
    "خاصتا مکرونی — بهترین مکرونی کابل. Khaasta Macaroni — Kabul Street Food. Hot. Spicy. Special.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("khaasta-lang")?.value === "fa" ? "fa" : "en";
  const isRTL = lang === "fa";

  return (
    <html lang={lang} dir={isRTL ? "rtl" : "ltr"} suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${vazirmatn.variable}`}
        suppressHydrationWarning
      >
        <LanguageProvider initialLang={lang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
