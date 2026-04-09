'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CompanyPage() {
  const { t } = useLanguage()

  const businessItems = [
    { title: t('business.beauty.title'), description: t('company.page.business_beauty') },
    { title: t('business.lifestyle.title'), description: t('company.page.business_lifestyle') },
    { title: t('business.transport.title'), description: t('company.page.business_transport') },
    { title: t('business.hr.title'), description: t('company.page.business_hr') },
    { title: t('business.auto.title'), description: t('company.page.business_auto') },
    { title: t('business.construction.title'), description: t('company.page.business_construction') },
    { title: t('business.culture.title'), description: t('company.page.business_culture') },
  ]

  const values = [
    { icon: '🤝', title: t('values.trust'), description: t('values.trust_desc') },
    { icon: '⭐', title: t('values.quality'), description: t('values.quality_desc') },
    { icon: '🌱', title: t('values.growth'), description: t('values.growth_desc') },
  ]

  return (
    <div className="bg-cream">
      <section className="relative py-20 bg-gradient-to-br from-beige via-cream to-greige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-4">
              {t('company.page.hero_title')}
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-8">
                {t('company.page.basic_info')}
              </h2>
              <div className="bg-beige rounded-lg p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm text-soft-gray font-medium mb-2">{t('company.page.company_name')}</p>
                    <p className="text-xl text-charcoal font-serif">{t('footer.company')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-soft-gray font-medium mb-2">{t('company.page.location')}</p>
                    <p className="text-lg text-charcoal">{t('company.page.location_value')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-8">
                {t('company.page.philosophy_title')}
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-charcoal leading-relaxed">{t('company.page.philosophy_p1')}</p>
                <p className="text-lg text-charcoal leading-relaxed">{t('company.page.philosophy_p2')}</p>
                <p className="text-lg text-charcoal leading-relaxed">{t('company.page.philosophy_p3')}</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-8">
                {t('company.page.business_overview')}
              </h2>
              <div className="space-y-4">
                {businessItems.map((item) => (
                  <div key={item.title} className="border-l-4 border-gold pl-6 py-4">
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-2">{item.title}</h3>
                    <p className="text-charcoal">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-8">
                {t('company.page.values_title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value) => (
                  <div key={value.title} className="bg-beige rounded-lg p-6">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-3">{value.title}</h3>
                    <p className="text-charcoal">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">{t('company.page.cta_title')}</h2>
          <Link
            href="/business"
            className="inline-block px-8 py-3 bg-gold text-charcoal font-medium rounded-lg hover:bg-cream transition-all"
          >
            {t('company.page.cta_button')}
          </Link>
        </div>
      </section>
    </div>
  )
}
