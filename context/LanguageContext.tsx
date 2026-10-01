'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations } from '@/lib/translations'

export type Language = 'en' | 'fa'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en')

  const t = (key: string): string => {
    const dict = translations[lang] as Record<string, string>
    return dict[key] ?? key
  }

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    if (typeof window !== 'undefined') localStorage.setItem('khaasta-lang', newLang)
  }

  useEffect(() => {
    const saved = localStorage.getItem('khaasta-lang') as Language
    if (saved === 'en' || saved === 'fa') setLangState(saved)
  }, [])

  useEffect(() => {
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang === 'fa' ? 'fa' : 'en'
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL: lang === 'fa' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be inside LanguageProvider')
  return ctx
}