'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Language } from '@/lib/translations'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const languages: { code: Language; label: string }[] = [
    { code: 'ja', label: '日本語' },
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
  ]

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 rounded text-sm font-medium transition-all ${
            language === lang.code
              ? 'bg-gold text-charcoal'
              : 'bg-light-gray text-charcoal hover:bg-soft-gray'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
