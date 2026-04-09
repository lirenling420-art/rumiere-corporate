'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import SalonImageCarousel from '@/components/SalonImageCarousel'
import BusinessBreadcrumb from '@/components/BusinessBreadcrumb'

const HOT_PEPPER_BEAUTY_URL = 'http://b.hpr.jp/kr/hp/H000641049'
const SALON_IMAGES = ['/images/salon-1.jpg', '/images/salon-2.jpg', '/images/salon-3.jpg']
const STORE_NAME = 'Beauty Salon Ryoko ネイル＆エステ'
const STORE_ADDRESS = '愛知県豊田市西町1-90 西町九丸貸店舗1F2号室'

export default function BeautyPage() {
  const { t } = useLanguage()
  const [expandedService, setExpandedService] = useState<string | null>('nail')

  const salonServices = [
    {
      id: 'nail',
      title: t('beauty.page.nail_title'),
      description: t('beauty.page.nail_desc'),
      details: [
        t('beauty.page.nail_service1'),
        t('beauty.page.nail_service2'),
        t('beauty.page.nail_service3'),
        t('beauty.page.nail_service4'),
        t('beauty.page.nail_service5'),
      ],
      store: { name: STORE_NAME, address: STORE_ADDRESS },
      icon: '💅',
      cta: { text: t('beauty.page.nail_cta'), url: HOT_PEPPER_BEAUTY_URL },
    },
    {
      id: 'esthetic',
      title: t('beauty.page.esthetic_title'),
      description: t('beauty.page.esthetic_desc'),
      details: [
        t('beauty.page.esthetic_service1'),
        t('beauty.page.esthetic_service2'),
        t('beauty.page.esthetic_service3'),
        t('beauty.page.esthetic_service4'),
        t('beauty.page.esthetic_service5'),
      ],
      icon: '💆',
    },
    {
      id: 'relaxation',
      title: t('beauty.page.relax_title'),
      description: t('beauty.page.relax_desc'),
      details: [
        t('beauty.page.relax_service1'),
        t('beauty.page.relax_service2'),
        t('beauty.page.relax_service3'),
        t('beauty.page.relax_service4'),
        t('beauty.page.relax_service5'),
      ],
      icon: '🧘',
    },
  ]

  const trainingPrograms = [
    {
      title: t('beauty.page.training_nail_title'),
      description: t('beauty.page.training_nail_desc'),
      skills: [
        t('beauty.page.training_nail_skill1'),
        t('beauty.page.training_nail_skill2'),
        t('beauty.page.training_nail_skill3'),
        t('beauty.page.training_nail_skill4'),
      ],
    },
    {
      title: t('beauty.page.training_esthetic_title'),
      description: t('beauty.page.training_esthetic_desc'),
      skills: [
        t('beauty.page.training_esthetic_skill1'),
        t('beauty.page.training_esthetic_skill2'),
        t('beauty.page.training_esthetic_skill3'),
        t('beauty.page.training_esthetic_skill4'),
      ],
    },
    {
      title: t('beauty.page.training_stylist_title'),
      description: t('beauty.page.training_stylist_desc'),
      skills: [
        t('beauty.page.training_stylist_skill1'),
        t('beauty.page.training_stylist_skill2'),
        t('beauty.page.training_stylist_skill3'),
        t('beauty.page.training_stylist_skill4'),
      ],
    },
  ]

  const cosmetics = [
    { name: t('beauty.page.cosmetic1_name'), description: t('beauty.page.cosmetic1_desc') },
    { name: t('beauty.page.cosmetic2_name'), description: t('beauty.page.cosmetic2_desc') },
    { name: t('beauty.page.cosmetic3_name'), description: t('beauty.page.cosmetic3_desc') },
    { name: t('beauty.page.cosmetic4_name'), description: t('beauty.page.cosmetic4_desc') },
  ]

  const reasons = [
    { title: t('beauty.page.reason1_title'), description: t('beauty.page.reason1_desc') },
    { title: t('beauty.page.reason2_title'), description: t('beauty.page.reason2_desc') },
    { title: t('beauty.page.reason3_title'), description: t('beauty.page.reason3_desc') },
    { title: t('beauty.page.reason4_title'), description: t('beauty.page.reason4_desc') },
  ]

  return (
    <div className="bg-cream">
      <BusinessBreadcrumb currentLabel={t('beauty.page.hero_title')} />
      <section className="relative py-20 bg-gradient-to-br from-pink-100 via-cream to-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-4">
              {t('beauty.page.hero_title')}
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-charcoal">{t('beauty.page.hero_subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">{t('beauty.page.salon_title')}</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
            <p className="text-lg text-charcoal mt-6">{t('beauty.page.salon_subtitle')}</p>
          </div>

          <div className="space-y-8">
            {salonServices.map((service) => (
              <div key={service.id} className="border border-light-gray rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="w-full p-8 bg-gradient-to-r from-beige to-cream hover:from-greige hover:to-beige transition-colors text-left flex items-center justify-between"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-5xl">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-charcoal">{service.title}</h3>
                      <p className="text-charcoal mt-2">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-2xl text-gold">{expandedService === service.id ? '−' : '+'}</div>
                </button>

                {expandedService === service.id && (
                  <div className="p-8 bg-white border-t border-light-gray">
                    {service.id === 'nail' && service.store && (
                      <div className="mb-10 rounded-2xl border border-light-gray bg-gradient-to-br from-white to-beige/40 p-6 shadow-sm">
                        <p className="text-xs tracking-[0.18em] uppercase text-soft-gray mb-3">{t('beauty.page.store_info')}</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                          <div className="relative rounded-xl overflow-hidden border border-light-gray bg-white min-h-[320px] shadow-sm">
                            <SalonImageCarousel images={SALON_IMAGES} intervalMs={4200} />
                          </div>

                          <div>
                            <h4 className="text-3xl font-serif font-bold text-charcoal leading-tight mb-5">{service.store.name}</h4>
                            <div className="flex items-start gap-3 mb-5">
                              <MapPin className="w-5 h-5 text-gold mt-1" strokeWidth={1.6} />
                              <p className="text-charcoal text-base leading-relaxed">{service.store.address}</p>
                            </div>
                            <p className="text-charcoal/85 leading-relaxed mb-6">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mb-6">
                      <h4 className="text-lg font-serif font-bold text-charcoal mb-4">{t('beauty.page.services_title')}</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {service.details.map((detail) => (
                          <div key={detail} className="flex items-center gap-3 p-3 bg-beige rounded-lg">
                            <div className="w-2 h-2 bg-gold rounded-full"></div>
                            <span className="text-charcoal">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {service.cta && (
                      <div className="mt-8 pt-8 border-t border-light-gray">
                        <a href={service.cta.url} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-charcoal text-cream font-medium rounded-lg hover:bg-gold hover:text-charcoal transition-all">
                          {service.cta.text}
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">{t('beauty.page.training_title')}</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
            <p className="text-lg text-charcoal mt-6">{t('beauty.page.training_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingPrograms.map((program) => (
              <div key={program.title} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border border-light-gray">
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">{program.title}</h3>
                <p className="text-charcoal mb-6 leading-relaxed">{program.description}</p>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-soft-gray">{t('beauty.page.training_skills')}</p>
                  {program.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-charcoal">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">{t('beauty.page.cosmetics_title')}</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
            <p className="text-lg text-charcoal mt-6">{t('beauty.page.cosmetics_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cosmetics.map((product) => (
              <div key={product.name} className="bg-gradient-to-br from-beige to-cream rounded-lg p-8 border border-light-gray hover:border-gold transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💄</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-3">{product.name}</h3>
                    <p className="text-charcoal leading-relaxed">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">{t('beauty.page.why_title')}</h2>
          <div className="space-y-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold text-charcoal font-bold">✓</div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">{reason.title}</h3>
                  <p className="text-charcoal">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">{t('beauty.page.cta_title')}</h2>
          <Link href="/contact" className="inline-block px-8 py-3 bg-gold text-charcoal font-medium rounded-lg hover:bg-cream transition-all">
            {t('beauty.page.cta_button')}
          </Link>
        </div>
      </section>
    </div>
  )
}
