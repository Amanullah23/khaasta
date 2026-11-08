import type { Metadata } from "next";
import Script from "next/script";
import { cookies } from "next/headers";
import { Poppins, Vazirmatn } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

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
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/logo.png",
    shortcut: "/favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("khaasta-lang")?.value === "fa" ? "fa" : "en";
  const theme =
    cookieStore.get("khaasta-theme")?.value === "light" ? "light" : "dark";
  const isRTL = lang === "fa";

  return (
    <html
      lang={lang}
      dir={isRTL ? "rtl" : "ltr"}
      className={theme === "dark" ? "dark" : ""}
      suppressHydrationWarning
    >
      <body
        className={`${poppins.variable} ${vazirmatn.variable} bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider initialTheme={theme}>
          <LanguageProvider initialLang={lang}>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
