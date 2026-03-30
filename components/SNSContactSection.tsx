'use client'

import { motion } from 'framer-motion'

const LINE_QR_IMAGE = '/images/line-qr-placeholder.png'
const WECHAT_QR_IMAGE = '/images/wechat-qr-placeholder.png'

interface SNSContactSectionProps {
  containerVariants?: any
  itemVariants?: any
}

export function SNSContactSection({ containerVariants, itemVariants }: SNSContactSectionProps) {
  const defaultContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const defaultItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const container = containerVariants || defaultContainerVariants
  const item = itemVariants || defaultItemVariants

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
            SNS でのお問い合わせ
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent"></div>
          <p className="text-lg text-charcoal/70 mt-6 font-light">
            LINE と WeChat でもお問い合わせを受け付けています。
            <br />
            以下のQRコードをスキャンしてご連絡ください。
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* LINE QR Code */}
          <motion.div variants={item}>
            <div className="bg-gradient-to-br from-beige to-cream rounded-2xl p-8 border border-light-gray hover:border-gold transition-all shadow-sm hover:shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-6 text-center">
                LINE でのお問い合わせ
              </h3>
              <div className="bg-white rounded-lg p-6 mb-6 flex items-center justify-center min-h-64">
                <div className="text-center w-full">
                  <img
                    src={LINE_QR_IMAGE}
                    alt="LINE QR Code"
                    className="w-48 h-48 object-cover rounded-lg mx-auto mb-4"
                    onError={(e) => {
                      const img = e.currentTarget
                      img.style.display = 'none'
                      const placeholder = img.nextElementSibling as HTMLElement
                      if (placeholder) placeholder.style.display = 'flex'
                    }}
                  />
                  <div
                    className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mx-auto hidden items-center justify-center text-gray-400 text-sm"
                  >
                    QRコード画像
                  </div>
                </div>
              </div>
              <p className="text-charcoal/80 text-sm text-center font-light">
                QRコードを読み取ってお問い合わせください
              </p>
            </div>
          </motion.div>

          {/* WeChat QR Code */}
          <motion.div variants={item}>
            <div className="bg-gradient-to-br from-beige to-cream rounded-2xl p-8 border border-light-gray hover:border-gold transition-all shadow-sm hover:shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-6 text-center">
                WeChat でのお問い合わせ
              </h3>
              <div className="bg-white rounded-lg p-6 mb-6 flex items-center justify-center min-h-64">
                <div className="text-center w-full">
                  <img
                    src={WECHAT_QR_IMAGE}
                    alt="WeChat QR Code"
                    className="w-48 h-48 object-cover rounded-lg mx-auto mb-4"
                    onError={(e) => {
                      const img = e.currentTarget
                      img.style.display = 'none'
                      const placeholder = img.nextElementSibling as HTMLElement
                      if (placeholder) placeholder.style.display = 'flex'
                    }}
                  />
                  <div
                    className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mx-auto hidden items-center justify-center text-gray-400 text-sm"
                  >
                    QRコード画像
                  </div>
                </div>
              </div>
              <p className="text-charcoal/80 text-sm text-center font-light">
                QRコードを読み取ってお問い合わせください
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
