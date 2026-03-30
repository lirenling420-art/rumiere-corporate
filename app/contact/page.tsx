'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Phone, Mail, MapPin, Car, Train, Navigation } from 'lucide-react'

// 定数管理
const COMPANY_ADDRESS = '愛知県豊田市宝来町四丁目755番地85'
const COMPANY_PHONE = '080-4842-1777'
const COMPANY_EMAIL = 'ryoko_2036@yahoo.co.jp'
const GOOGLE_MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.5!2d137.1!3d35.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037d0d0d0d0d0d%3A0x0!2z5oSb5ric5biC5Y2X5bGx5Yy65Y2X5bGx!5e0!3m2!1sja!2sjp!4v1234567890'
const LINE_QR_IMAGE = '/images/line-qr-placeholder.png'
const WECHAT_QR_IMAGE = '/images/wechat-qr-placeholder.png'

export default function ContactPage() {
  const { t } = useLanguage()

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
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-beige via-cream to-greige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-4">
              {t('header.nav.contact')}
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-charcoal font-light">
              ご質問やご相談は、お気軽にお問い合わせください
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Phone Card */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-beige to-cream rounded-2xl p-8 border border-light-gray hover:border-gold transition-all h-full shadow-sm hover:shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <Phone className="w-8 h-8 text-charcoal/70" strokeWidth={1.5} />
                  <h3 className="text-2xl font-serif font-bold text-charcoal">
                    お電話
                  </h3>
                </div>
                <p className="text-charcoal/80 text-sm mb-4 font-light">
                  営業時間内にお気軽にお電話ください
                </p>
                <p className="text-lg font-medium text-gold mb-4">
                  {COMPANY_PHONE}
                </p>
                <p className="text-sm text-soft-gray">
                  平日 9:00～18:00
                </p>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-beige to-cream rounded-2xl p-8 border border-light-gray hover:border-gold transition-all h-full shadow-sm hover:shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <Mail className="w-8 h-8 text-charcoal/70" strokeWidth={1.5} />
                  <h3 className="text-2xl font-serif font-bold text-charcoal">
                    メール
                  </h3>
                </div>
                <p className="text-charcoal/80 text-sm mb-4 font-light">
                  24時間受け付けています
                </p>
                <p className="text-lg font-medium text-gold break-all mb-4">
                  {COMPANY_EMAIL}
                </p>
                <p className="text-sm text-soft-gray">
                  返信は営業時間内に
                </p>
              </div>
            </motion.div>

            {/* Address Card */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-beige to-cream rounded-2xl p-8 border border-light-gray hover:border-gold transition-all h-full shadow-sm hover:shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-8 h-8 text-charcoal/70" strokeWidth={1.5} />
                  <h3 className="text-2xl font-serif font-bold text-charcoal">
                    所在地
                  </h3>
                </div>
                <p className="text-charcoal font-light text-sm leading-relaxed">
                  {COMPANY_ADDRESS}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
              アクセス
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden border border-light-gray shadow-lg mb-12"
          >
            <div className="w-full h-96 bg-gradient-to-br from-beige to-cream flex items-center justify-center">
              <iframe
                src={GOOGLE_MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Access Methods */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* By Car */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 border border-light-gray hover:border-gold transition-all h-full shadow-sm hover:shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Car className="w-6 h-6 text-charcoal/70" strokeWidth={1.5} />
                  <h3 className="text-xl font-serif font-bold text-charcoal">
                    {t('contact.access.by_car')}
                  </h3>
                </div>
                <p className="text-charcoal/80 text-sm leading-relaxed font-light">
                  {t('contact.access.by_car_desc')}
                </p>
              </div>
            </motion.div>

            {/* By Public Transport */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 border border-light-gray hover:border-gold transition-all h-full shadow-sm hover:shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Train className="w-6 h-6 text-charcoal/70" strokeWidth={1.5} />
                  <h3 className="text-xl font-serif font-bold text-charcoal">
                    {t('contact.access.by_train')}
                  </h3>
                </div>
                <p className="text-charcoal/80 text-sm leading-relaxed font-light">
                  {t('contact.access.by_train_desc')}
                </p>
              </div>
            </motion.div>

            {/* Landmarks */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 border border-light-gray hover:border-gold transition-all h-full shadow-sm hover:shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Navigation className="w-6 h-6 text-charcoal/70" strokeWidth={1.5} />
                  <h3 className="text-xl font-serif font-bold text-charcoal">
                    {t('contact.access.landmarks')}
                  </h3>
                </div>
                <p className="text-charcoal/80 text-sm leading-relaxed font-light">
                  {t('contact.access.landmarks_desc')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
