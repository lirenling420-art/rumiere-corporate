'use client'

import React, { createContext, useContext, useState } from 'react'
import { translations, Language } from '@/lib/translations'
import { companyTranslations } from '@/lib/companyTranslations'
import { businessPageTranslations } from '@/lib/businessPageTranslations'
import { contactPageTranslations } from '@/lib/contactPageTranslations'
import { beautyPageTranslations } from '@/lib/beautyPageTranslations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, replacements?: Record<string, string | number>) => string
}

export type LanguageContent<T> = Record<Language, T>

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ja')

  const mergedTranslations = {
    ...translations[language],
    ...companyTranslations[language],
    ...businessPageTranslations[language],
    ...contactPageTranslations[language],
    ...beautyPageTranslations[language],
  } as Record<string, string>

  const t = (key: string, replacements?: Record<string, string | number>): string => {
    let text = mergedTranslations[key] || key

    if (replacements) {
      Object.entries(replacements).forEach(([placeholder, value]) => {
        text = text.replace(`{${placeholder}}`, String(value))
      })
    }

    return text
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
