import type { Metadata } from 'next'
import { Poppins, Vazirmatn } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

config.autoAddCss = false

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-vazirmatn',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Khaasta | Afghanistan's Food Platform",
  description: 'Discover Afghan food products, local delicacies, and food businesses across Kabul and Afghanistan.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${vazirmatn.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}