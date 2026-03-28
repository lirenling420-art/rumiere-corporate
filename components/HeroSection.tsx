'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function HeroSection() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Video-like Background with Gradient Layers */}
      <div className="absolute inset-0 z-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90"></div>

        {/* Animated gradient overlay - simulates video movement */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(201, 169, 97, 0.1) 50%, transparent 100%)',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        ></motion.div>

        {/* Floating light orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-gold to-transparent rounded-full blur-3xl opacity-5"
          animate={{
            y: [0, 40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        ></motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-gold to-transparent rounded-full blur-3xl opacity-3"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        ></motion.div>

        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="400" height="400" filter="url(%23noiseFilter)" /%3E%3C/svg%3E")',
        }}></div>
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal/80 z-5"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative line above title */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <motion.div
            className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
            animate={{ scaleX: [0, 1, 1] }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          ></motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-cream leading-tight tracking-tight">
            {t('hero.title')}
          </h1>
        </motion.div>

        {/* Decorative line below title */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <motion.div
            className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
            animate={{ scaleX: [0, 1, 1] }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          ></motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-light-gray mb-16 font-light leading-relaxed max-w-3xl mx-auto tracking-wide"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="/company">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 25px 50px rgba(201, 169, 97, 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 bg-gold text-charcoal font-semibold rounded-lg hover:bg-cream transition-all duration-300 shadow-xl text-base tracking-wide"
            >
              {t('hero.cta1')}
            </motion.button>
          </Link>
          <Link href="/business">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 25px 50px rgba(255, 255, 255, 0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 border-2 border-cream text-cream font-semibold rounded-lg hover:border-gold transition-all duration-300 text-base tracking-wide backdrop-blur-sm"
            >
              {t('hero.cta2')}
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-light-gray/70 font-light tracking-widest uppercase">
            {t('hero.scroll')}
          </p>
          <svg
            className="w-5 h-5 text-gold/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
