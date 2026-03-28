'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // フォーム送信処理（実装例）
    console.log('Form submitted:', formData)
    setSubmitted(true)
    // 3秒後にフォームをリセット
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-beige via-cream to-greige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-4">
              お問い合わせ
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-charcoal">
              ご質問やご相談は、お気軽にお問い合わせください
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-gradient-to-br from-beige to-cream rounded-lg p-8 border border-light-gray text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-3">
                お電話
              </h3>
              <p className="text-charcoal mb-2">
                営業時間内にお気軽にお電話ください
              </p>
              <p className="text-lg font-medium text-gold">
                03-XXXX-XXXX
              </p>
              <p className="text-sm text-soft-gray mt-3">
                平日 9:00～18:00
              </p>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-beige to-cream rounded-lg p-8 border border-light-gray text-center">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-3">
                メール
              </h3>
              <p className="text-charcoal mb-2">
                24時間受け付けています
              </p>
              <p className="text-lg font-medium text-gold break-all">
                info@lumiere.jp
              </p>
              <p className="text-sm text-soft-gray mt-3">
                返信は営業時間内に
              </p>
            </div>

            {/* Address */}
            <div className="bg-gradient-to-br from-beige to-cream rounded-lg p-8 border border-light-gray text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-3">
                所在地
              </h3>
              <p className="text-charcoal">
                東京都渋谷区
              </p>
              <p className="text-sm text-soft-gray mt-4">
                詳細はお問い合わせ時に
                ご案内いたします
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 md:p-12 border border-light-gray shadow-lg">
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-2 text-center">
              お問い合わせフォーム
            </h2>
            <p className="text-center text-charcoal mb-8">
              以下のフォームにご入力いただき、送信してください
            </p>

            {submitted ? (
              <div className="bg-beige rounded-lg p-8 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-3">
                  送信完了
                </h3>
                <p className="text-charcoal">
                  お問い合わせありがとうございます。
                  <br />
                  確認後、ご連絡させていただきます。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    お名前 <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    placeholder="山田太郎"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    メールアドレス <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    placeholder="example@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    placeholder="090-XXXX-XXXX"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    お問い合わせ内容 <span className="text-gold">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  >
                    <option value="">選択してください</option>
                    <option value="beauty">美容・サロン関連</option>
                    <option value="lifestyle">小売・ライフスタイル関連</option>
                    <option value="transport">交通・物流関連</option>
                    <option value="hr">人材・業務支援関連</option>
                    <option value="auto">自動車関連</option>
                    <option value="construction">環境・建設関連</option>
                    <option value="culture">文化・教育関連</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    メッセージ <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold resize-none"
                    placeholder="ご質問やご相談内容をお聞かせください"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-charcoal text-cream font-medium rounded-lg hover:bg-gold hover:text-charcoal transition-all"
                  >
                    送信する
                  </button>
                </div>

                {/* Privacy Notice */}
                <p className="text-xs text-soft-gray text-center">
                  ご入力いただいた情報は、お問い合わせへの対応のみに使用いたします。
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
            よくあるご質問
          </h2>

          <div className="space-y-6">
            <div className="bg-beige rounded-lg p-6 border border-light-gray">
              <h3 className="text-lg font-serif font-bold text-charcoal mb-3">
                Q. 営業時間は何時までですか？
              </h3>
              <p className="text-charcoal">
                A. 平日は9:00～18:00となっております。土日祝日はお休みです。
              </p>
            </div>

            <div className="bg-beige rounded-lg p-6 border border-light-gray">
              <h3 className="text-lg font-serif font-bold text-charcoal mb-3">
                Q. メールでの問い合わせはどのくらいで返信されますか？
              </h3>
              <p className="text-charcoal">
                A. 営業時間内に確認後、通常1～2営業日以内にご返信させていただきます。
              </p>
            </div>

            <div className="bg-beige rounded-lg p-6 border border-light-gray">
              <h3 className="text-lg font-serif font-bold text-charcoal mb-3">
                Q. 複数の事業についての問い合わせはできますか？
              </h3>
              <p className="text-charcoal">
                A. もちろんです。複数の事業についてのご質問やご相談も承っております。
              </p>
            </div>

            <div className="bg-beige rounded-lg p-6 border border-light-gray">
              <h3 className="text-lg font-serif font-bold text-charcoal mb-3">
                Q. 個人情報は安全に管理されていますか？
              </h3>
              <p className="text-charcoal">
                A. はい。ご入力いただいた個人情報は、厳重に管理され、お問い合わせへの対応のみに使用いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            事業内容についてもっと知りたい方へ
          </h2>
          <Link
            href="/business"
            className="inline-block px-8 py-3 bg-gold text-charcoal font-medium rounded-lg hover:bg-cream transition-all"
          >
            事業内容を見る
          </Link>
        </div>
      </section>
    </div>
  )
}
