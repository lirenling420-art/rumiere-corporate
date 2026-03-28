'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function BeautyHighlightSection() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-pink-100 to-transparent rounded-full blur-3xl opacity-20 -z-10 transform -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Image/Visual */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 lg:h-full min-h-96"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-beige rounded-3xl overflow-hidden border border-light-gray shadow-lg"
              whileHover={{ boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="text-8xl mb-4">💅</div>
                  <p className="text-charcoal font-serif text-xl">{t('beauty.title')}</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6">
                {t('beauty.title')}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-gold to-transparent"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-charcoal/80 leading-relaxed font-light"
            >
              {t('beauty.desc1')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-charcoal/80 leading-relaxed font-light"
            >
              {t('beauty.desc2')}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/business/beauty">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-charcoal text-cream font-medium rounded-lg hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-lg"
                >
                  {t('beauty.view')}
                </motion.button>
              </Link>
              <Link href="/business/beauty">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border-2 border-charcoal text-charcoal font-medium rounded-lg hover:bg-charcoal hover:text-cream transition-all duration-300"
                >
                  {t('beauty.info')}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
