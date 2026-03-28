'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: t('header.nav.home'), href: '/' },
    { label: t('header.nav.company'), href: '/company' },
    { label: t('header.nav.business'), href: '/business' },
    { label: t('header.nav.contact'), href: '/contact' },
  ]

  const businessLinks = [
    { label: t('business.beauty.title'), href: '/business/beauty' },
    { label: t('business.lifestyle.title'), href: '/business/lifestyle' },
    { label: t('business.transport.title'), href: '/business/transport' },
    { label: t('business.hr.title'), href: '/business/hr' },
  ]

  const otherLinks = [
    { label: t('business.auto.title'), href: '/business/auto' },
    { label: t('business.construction.title'), href: '/business/construction' },
    { label: t('business.culture.title'), href: '/business/culture' },
  ]

  return (
    <footer className="bg-charcoal text-cream mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">{t('footer.company')}</h3>
            <p className="text-sm text-light-gray leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4">{t('footer.sitemap')}</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-light-gray hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Categories */}
          <div>
            <h4 className="font-serif font-bold mb-4">{t('footer.categories')}</h4>
            <ul className="space-y-2">
              {businessLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-light-gray hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Categories */}
          <div>
            <h4 className="font-serif font-bold mb-4">{t('footer.other')}</h4>
            <ul className="space-y-2">
              {otherLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-light-gray hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-soft-gray pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-light-gray mb-4 md:mb-0">
              {t('footer.copyright', { year: currentYear })}
            </p>
            <div className="flex gap-6">
              <Link
                href="/contact"
                className="text-sm text-light-gray hover:text-gold transition-colors"
              >
                {t('header.nav.contact')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
