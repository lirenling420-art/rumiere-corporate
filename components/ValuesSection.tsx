'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ValuesSection() {
  const { t } = useLanguage()

  const values = [
    {
      icon: '🤝',
      titleKey: 'values.trust',
      descKey: 'values.trust_desc',
    },
    {
      icon: '⭐',
      titleKey: 'values.quality',
      descKey: 'values.quality_desc',
    },
    {
      icon: '🌱',
      titleKey: 'values.growth',
      descKey: 'values.growth_desc',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-beige to-transparent rounded-full blur-3xl opacity-30 -z-10"></div>

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
            {t('values.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto"></div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-cream to-beige rounded-2xl p-10 border border-light-gray hover:border-gold transition-all duration-300 h-full shadow-sm hover:shadow-lg">
                <motion.div
                  className="text-6xl mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  {t(value.titleKey as any)}
                </h3>
                <p className="text-charcoal/80 leading-relaxed font-light">
                  {t(value.descKey as any)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
