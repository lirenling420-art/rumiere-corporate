'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function BusinessPage() {
  const { t } = useLanguage()

  const businesses = [
    { id: 'beauty', title: t('business.beauty.title'), description: t('business.beauty.desc'), icon: '✨', href: '/business/beauty', color: 'from-pink-100 to-rose-100' },
    { id: 'lifestyle', title: t('business.lifestyle.title'), description: t('business.lifestyle.desc'), icon: '🛍️', href: '/business/lifestyle', color: 'from-amber-100 to-orange-100' },
    { id: 'transport', title: t('business.transport.title'), description: t('business.transport.desc'), icon: '🚗', href: '/business/transport', color: 'from-blue-100 to-cyan-100' },
    { id: 'hr', title: t('business.hr.title'), description: t('business.hr.desc'), icon: '👥', href: '/business/hr', color: 'from-green-100 to-emerald-100' },
    { id: 'auto', title: t('business.auto.title'), description: t('business.auto.desc'), icon: '🔧', href: '/business/auto', color: 'from-slate-100 to-gray-100' },
    { id: 'construction', title: t('business.construction.title'), description: t('business.construction.desc'), icon: '🏗️', href: '/business/construction', color: 'from-yellow-100 to-lime-100' },
    { id: 'culture', title: t('business.culture.title'), description: t('business.culture.desc'), icon: '🎨', href: '/business/culture', color: 'from-purple-100 to-violet-100' },
  ]

  const featureItems = [
    { title: t('business.main.feature1_title'), description: t('business.main.feature1_desc') },
    { title: t('business.main.feature2_title'), description: t('business.main.feature2_desc') },
    { title: t('business.main.feature3_title'), description: t('business.main.feature3_desc') },
    { title: t('business.main.feature4_title'), description: t('business.main.feature4_desc') },
  ]

  return (
    <div className="bg-cream">
      <section className="relative py-20 bg-gradient-to-br from-beige via-cream to-greige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-4">
              {t('business.main.hero_title')}
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-charcoal">{t('business.main.hero_subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.map((business) => (
              <Link key={business.id} href={business.href} className="group">
                <div className="bg-gradient-to-br from-cream to-beige rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all h-full border border-light-gray hover:border-gold">
                  <div className={`bg-gradient-to-br ${business.color} h-32 flex items-center justify-center`}>
                    <div className="text-6xl">{business.icon}</div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-charcoal mb-3 group-hover:text-gold transition-colors">
                      {business.title}
                    </h3>
                    <p className="text-charcoal text-sm leading-relaxed mb-6">{business.description}</p>
                    <div className="text-gold font-medium group-hover:translate-x-2 transition-transform inline-block">
                      {t('business.view_more')} →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
            {t('business.main.features_title')}
          </h2>

          <div className="space-y-8">
            {featureItems.map((item, idx) => (
              <div key={item.title} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold text-charcoal font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-charcoal">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">{t('business.main.cta_title')}</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-gold text-charcoal font-medium rounded-lg hover:bg-cream transition-all"
          >
            {t('business.main.cta_button')}
          </Link>
        </div>
      </section>
    </div>
  )
}
