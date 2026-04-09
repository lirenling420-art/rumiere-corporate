'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Phone, Mail, MapPin, Car, Train, Navigation } from 'lucide-react'

const COMPANY_PHONE = '080-4842-1777'
const COMPANY_EMAIL = 'ryoko_2036@yahoo.co.jp'
const GOOGLE_MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.5!2d137.1!3d35.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037d0d0d0d0d0d%3A0x0!2z5oSb5ric5biC5Y2X5bGx5Yy65Y2X5bGx!5e0!3m2!1sja!2sjp!4v1234567890'
const LINE_QR_IMAGE = '/images/line-qr.jpg'
const WECHAT_QR_IMAGE = '/images/wechat-qr.png'

export default function ContactPage() {
  const { t } = useLanguage()
  const [lineQrError, setLineQrError] = useState(false)
  const [wechatQrError, setWechatQrError] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
      <section className="relative py-20 bg-gradient-to-br from-beige via-cream to-greige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-4">
              {t('header.nav.contact')}
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-charcoal font-light">{t('contact.page.hero_subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-beige to-cream rounded-2xl p-8 border border-light-gray hover:border-gold transition-all h-full shadow-sm hover:shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <Phone className="w-8 h-8 text-charcoal/70" strokeWidth={1.5} />
                  <h3 className="text-2xl font-serif font-bold text-charcoal">{t('contact.page.phone_title')}</h3>
                </div>
                <p className="text-charcoal/80 text-sm mb-4 font-light">{t('contact.page.phone_desc')}</p>
                <p className="text-lg font-medium text-gold mb-4">{COMPANY_PHONE}</p>
                <p className="text-sm text-soft-gray">{t('contact.page.phone_hours')}</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-beige to-cream rounded-2xl p-8 border border-light-gray hover:border-gold transition-all h-full shadow-sm hover:shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <Mail className="w-8 h-8 text-charcoal/70" strokeWidth={1.5} />
                  <h3 className="text-2xl font-serif font-bold text-charcoal">{t('contact.page.email_title')}</h3>
                </div>
                <p className="text-charcoal/80 text-sm mb-4 font-light">{t('contact.page.email_desc')}</p>
                <p className="text-lg font-medium text-gold break-all mb-4">{COMPANY_EMAIL}</p>
                <p className="text-sm text-soft-gray">{t('contact.page.email_note')}</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-beige to-cream rounded-2xl p-8 border border-light-gray hover:border-gold transition-all h-full shadow-sm hover:shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-8 h-8 text-charcoal/70" strokeWidth={1.5} />
                  <h3 className="text-2xl font-serif font-bold text-charcoal">{t('contact.page.address_title')}</h3>
                </div>
                <p className="text-charcoal font-light text-sm leading-relaxed">{t('contact.page.address_value')}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">{t('contact.access.title')}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent"></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="bg-white rounded-2xl overflow-hidden border border-light-gray shadow-lg mb-12">
            <div className="w-full h-96 bg-gradient-to-br from-beige to-cream flex items-center justify-center">
              <iframe src={GOOGLE_MAP_EMBED_URL} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 border border-light-gray hover:border-gold transition-all h-full shadow-sm hover:shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Car className="w-6 h-6 text-charcoal/70" strokeWidth={1.5} />
                  <h3 className="text-xl font-serif font-bold text-charcoal">{t('contact.access.by_car')}</h3>
                </div>
                <p className="text-charcoal/80 text-sm leading-relaxed font-light">{t('contact.access.by_car_desc')}</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 border border-light-gray hover:border-gold transition-all h-full shadow-sm hover:shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Train className="w-6 h-6 text-charcoal/70" strokeWidth={1.5} />
                  <h3 className="text-xl font-serif font-bold text-charcoal">{t('contact.access.by_train')}</h3>
                </div>
                <p className="text-charcoal/80 text-sm leading-relaxed font-light">{t('contact.access.by_train_desc')}</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 border border-light-gray hover:border-gold transition-all h-full shadow-sm hover:shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Navigation className="w-6 h-6 text-charcoal/70" strokeWidth={1.5} />
                  <h3 className="text-xl font-serif font-bold text-charcoal">{t('contact.access.landmarks')}</h3>
                </div>
                <p className="text-charcoal/80 text-sm leading-relaxed font-light">{t('contact.access.landmarks_desc')}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">{t('contact.page.qr_title')}</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-charcoal/80 font-light">{t('contact.page.qr_subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="rounded-2xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-center text-charcoal">{t('contact.page.line_title')}</h3>
                <div className="mx-auto w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-xl border border-gray-100 bg-white overflow-hidden">
                  {!lineQrError ? (
                    <div className="relative h-full w-full">
                      <Image src={LINE_QR_IMAGE} alt={t('contact.page.line_title')} fill className="object-cover object-[50%_58%]" sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 288px" onError={() => setLineQrError(true)} />
                    </div>
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-soft-gray text-sm bg-white">{t('contact.page.qr_fallback')}</div>
                  )}
                </div>
                <p className="text-center text-sm text-charcoal/80 font-light leading-relaxed">{t('contact.page.line_desc')}</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="rounded-2xl border border-gray-100 bg-white p-8 md:p-10 shadow-sm">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-center text-charcoal">{t('contact.page.wechat_title')}</h3>
                <div className="mx-auto w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-xl border border-gray-100 bg-white p-3 flex items-center justify-center">
                  {!wechatQrError ? (
                    <Image src={WECHAT_QR_IMAGE} alt={t('contact.page.wechat_title')} width={320} height={320} className="w-full h-full object-contain" onError={() => setWechatQrError(true)} />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-soft-gray text-sm bg-white">{t('contact.page.qr_fallback')}</div>
                  )}
                </div>
                <p className="text-center text-sm text-charcoal/80 font-light leading-relaxed">{t('contact.page.wechat_desc')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
