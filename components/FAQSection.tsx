'use client'

import { motion } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  items: FAQItem[]
  containerVariants?: any
  itemVariants?: any
}

export function FAQSection({ items, containerVariants, itemVariants }: FAQSectionProps) {
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
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
            よくあるご質問
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent"></div>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-white rounded-2xl p-6 border border-light-gray hover:border-gold transition-all"
            >
              <h3 className="text-lg font-serif font-bold text-charcoal mb-3">
                Q. {faq.question}
              </h3>
              <p className="text-charcoal/80 font-light">
                A. {faq.answer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
