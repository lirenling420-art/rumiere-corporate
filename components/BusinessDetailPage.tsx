'use client'

import Link from 'next/link'
import BusinessBreadcrumb from '@/components/BusinessBreadcrumb'

type DetailSection = {
  title: string
  description: string
  points: string[]
  icon: string
}

type NumberedItem = {
  title: string
  description: string
}

type BusinessDetailContent = {
  heroTitle: string
  heroSubtitle: string
  heroGradient: string
  overview: string[]
  servicesLabel: string
  services: DetailSection[]
  featureTitle: string
  featureItems: NumberedItem[]
  ctaTitle: string
  ctaButton: string
}

type BusinessDetailPageProps = {
  content: BusinessDetailContent
}

export default function BusinessDetailPage({ content }: BusinessDetailPageProps) {
  return (
    <div className="bg-cream">
      <BusinessBreadcrumb currentLabel={content.heroTitle} />
      <section className={`relative py-20 bg-gradient-to-br ${content.heroGradient}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-4">
              {content.heroTitle}
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-charcoal">{content.heroSubtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          {content.overview.map((paragraph) => (
            <p key={paragraph} className="text-lg text-charcoal leading-relaxed mt-6 first:mt-0">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.services.map((service) => (
              <div
                key={service.title}
                className="bg-gradient-to-br from-beige to-cream rounded-lg p-8 border border-light-gray hover:border-gold transition-colors hover:shadow-lg"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-serif font-bold text-charcoal">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-charcoal mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-soft-gray">{content.servicesLabel}</p>
                  {service.points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-charcoal">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
            {content.featureTitle}
          </h2>

          <div className="space-y-8">
            {content.featureItems.map((item, idx) => (
              <div key={item.title} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold text-charcoal font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">{content.ctaTitle}</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-gold text-charcoal font-medium rounded-lg hover:bg-cream transition-all"
          >
            {content.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  )
}
