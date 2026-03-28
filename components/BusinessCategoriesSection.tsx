'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { BusinessIcon } from './BusinessIcon'

export default function BusinessCategoriesSection() {
  const { t } = useLanguage()

  const businessCategories = [
    {
      id: 'beauty',
      titleKey: 'business.beauty.title',
      descKey: 'business.beauty.desc',
      href: '/business/beauty',
      icon: 'beauty' as const,
      color: 'from-pink-50 to-rose-50',
    },
    {
      id: 'lifestyle',
      titleKey: 'business.lifestyle.title',
      descKey: 'business.lifestyle.desc',
      href: '/business/lifestyle',
      icon: 'lifestyle' as const,
      color: 'from-amber-50 to-orange-50',
    },
    {
      id: 'transport',
      titleKey: 'business.transport.title',
      descKey: 'business.transport.desc',
      href: '/business/transport',
      icon: 'transport' as const,
      color: 'from-blue-50 to-cyan-50',
    },
    {
      id: 'hr',
      titleKey: 'business.hr.title',
      descKey: 'business.hr.desc',
      href: '/business/hr',
      icon: 'hr' as const,
      color: 'from-green-50 to-emerald-50',
    },
    {
      id: 'auto',
      titleKey: 'business.auto.title',
      descKey: 'business.auto.desc',
      href: '/business/auto',
      icon: 'auto' as const,
      color: 'from-slate-50 to-gray-50',
    },
    {
      id: 'construction',
      titleKey: 'business.construction.title',
      descKey: 'business.construction.desc',
      href: '/business/construction',
      icon: 'construction' as const,
      color: 'from-yellow-50 to-lime-50',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-32 bg-cream relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-beige to-transparent rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6">
            {t('business.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto font-light">
            {t('business.subtitle')}
          </p>
        </motion.div>

        {/* Business Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {businessCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group"
            >
              <Link href={category.href}>
                <div className={`bg-gradient-to-br ${category.color} rounded-2xl overflow-hidden border border-light-gray hover:border-gold transition-all duration-300 h-full shadow-sm hover:shadow-xl cursor-pointer`}>
                  {/* Icon area */}
                  <div className="h-32 flex items-center justify-center bg-white/50 group-hover:bg-white/80 transition-colors duration-300">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <BusinessIcon category={category.icon} size={48} />
                    </motion.div>
                  </div>

                  {/* Content area */}
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                      {t(category.titleKey as any)}
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed font-light mb-6">
                      {t(category.descKey as any)}
                    </p>
                    <motion.div
                      className="text-gold font-medium flex items-center gap-2"
                      whileHover={{ x: 8 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <span>{t('business.view_more')}</span>
                      <span>→</span>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/business">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-charcoal text-cream font-medium rounded-lg hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-lg"
            >
              {t('business.view_all')}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
