'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-32 bg-gradient-to-br from-charcoal via-charcoal to-charcoal/95 text-cream relative overflow-hidden">
      {/* Background accent */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold to-transparent rounded-full blur-3xl opacity-10"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-gold to-transparent rounded-full blur-3xl opacity-5"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      ></motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
            {t('cta.title')}
            <br />
            {t('cta.subtitle')}
          </h2>

          <p className="text-xl text-light-gray font-light max-w-2xl mx-auto">
            {t('cta.desc')}
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/contact">
              <button className="px-12 py-5 bg-gold text-charcoal font-bold rounded-lg hover:bg-cream transition-all duration-300 shadow-xl text-lg">
                {t('cta.button')}
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
