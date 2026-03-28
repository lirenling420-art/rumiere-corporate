'use client'

import Link from 'next/link'
import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { label: t('header.nav.home'), href: '/' },
    { label: t('header.nav.company'), href: '/company' },
    { label: t('header.nav.business'), href: '/business' },
    { label: t('header.nav.contact'), href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-0">
            <div className="flex flex-col leading-tight">
              <div className="text-xl font-serif font-bold text-charcoal tracking-wide">
                {t('header.brand')}
              </div>
              <div className="text-xs text-charcoal/60 font-light tracking-widest">
                {t('header.brand_sub')}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-charcoal hover:text-gold font-medium text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6 text-charcoal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-light-gray">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-charcoal hover:text-gold font-medium text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="py-4 border-t border-light-gray mt-4">
              <LanguageSwitcher />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
