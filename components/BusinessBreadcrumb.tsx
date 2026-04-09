'use client'

import Link from 'next/link'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

type BusinessBreadcrumbProps = {
  currentLabel: string
}

export default function BusinessBreadcrumb({ currentLabel }: BusinessBreadcrumbProps) {
  const { t } = useLanguage()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
      <Link
        href="/business"
        className="inline-flex items-center gap-2 text-sm text-charcoal/75 hover:text-gold transition-colors mb-5"
      >
        <ArrowLeft className="w-4 h-4" strokeWidth={1.6} />
        <span>{t('business.back')}</span>
      </Link>

      <div className="flex items-center gap-2 text-xs md:text-sm text-soft-gray flex-wrap">
        <Link href="/" className="hover:text-gold transition-colors">
          {t('header.nav.home')}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/business" className="hover:text-gold transition-colors">
          {t('header.nav.business')}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-charcoal">{currentLabel}</span>
      </div>
    </div>
  )
}
