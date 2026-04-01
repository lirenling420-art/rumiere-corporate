'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MapPin } from 'lucide-react'
import SalonImageCarousel from '@/components/SalonImageCarousel'

// Hot Pepper Beauty URL（後で差し替え可能）
const HOT_PEPPER_BEAUTY_URL = 'http://b.hpr.jp/kr/hp/H000641049'

const SALON_IMAGES = [
  '/images/salon-1.jpg',
  '/images/salon-2.jpg',
  '/images/salon-3.jpg',
]

export default function BeautyPage() {
  const [expandedService, setExpandedService] = useState<string | null>('nail')

  const salonServices = [
    {
      id: 'nail',
      title: 'ネイルサロン',
      description: '上質な空間と丁寧な施術で、ネイルとエステの両面から美しさをサポートします。落ち着いた空間で、お客様一人ひとりに合わせたサービスをご提供しています。',
      details: [
        'トレンドネイルアート',
        'ジェルネイル',
        'スカルプチュア',
        'ネイルケア',
        'カラーリング',
      ],
      store: {
        name: 'Beauty Salon Ryoko ネイル＆エステ',
        address: '愛知県豊田市西町1-90 西町九丸貸店舗1F2号室',
        imageSrc: '/images/beauty-salon-ryoko.jpg',
      },
      icon: '💅',
      cta: {
        text: 'Hot Pepper Beautyで見る',
        url: HOT_PEPPER_BEAUTY_URL,
      },
    },
    {
      id: 'esthetic',
      title: 'エステティックサロン',
      description: '肌質に合わせた最適なトリートメントで、素肌の美しさを引き出します。',
      details: [
        'フェイシャルエステ',
        'ボディエステ',
        'スキンケア',
        'デトックス',
        'リフトアップ',
      ],
      icon: '💆',
    },
    {
      id: 'relaxation',
      title: 'リラクゼーションサロン',
      description: '心身のリラックスを目的とした、上質なマッサージとトリートメントをご提供します。',
      details: [
        'ボディマッサージ',
        'ヘッドスパ',
        'アロマテラピー',
        'リフレクソロジー',
        'ストレス軽減',
      ],
      icon: '🧘',
    },
  ]

  const trainingPrograms = [
    {
      title: 'ネイリスト育成',
      description: '基礎から応用まで、プロフェッショナルなネイリストを育成するプログラムです。',
      skills: ['ネイルアート', '衛生管理', 'カウンセリング', 'トレンド知識'],
    },
    {
      title: 'エステティシャン育成',
      description: '肌の知識と高度なトリートメント技術を習得できるプログラムです。',
      skills: ['スキンケア知識', 'トリートメント技術', 'カウンセリング', '美容知識'],
    },
    {
      title: 'スタイリスト育成',
      description: 'ヘアスタイリングと全体的なビューティーコーディネートを学べるプログラムです。',
      skills: ['ヘアカット', 'カラーリング', 'スタイリング', 'トレンド提案'],
    },
  ]

  const cosmetics = [
    {
      name: 'スキンケアシリーズ',
      description: '肌質に合わせた、高品質なスキンケア製品を厳選して販売しています。',
    },
    {
      name: 'メイクアップ製品',
      description: 'プロフェッショナルグレードのメイクアップ製品で、美しさを引き出します。',
    },
    {
      name: 'ボディケア製品',
      description: '全身のケアに対応した、こだわりのボディケア製品をご用意しています。',
    },
    {
      name: 'ヘアケア製品',
      description: 'サロン品質のヘアケア製品で、美しい髪を保つことができます。',
    },
  ]

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-100 via-cream to-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-4">
              美容・サロン関連事業
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-charcoal">
              美と健康を通じて、お客様の人生をより豊かにします
            </p>
          </div>
        </div>
      </section>

      {/* Salon Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">
              サロン事業
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
            <p className="text-lg text-charcoal mt-6">
              ネイルサロン、エステティックサロン、リラクゼーションサロンの経営
            </p>
          </div>

          <div className="space-y-8">
            {salonServices.map((service) => (
              <div
                key={service.id}
                className="border border-light-gray rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() =>
                    setExpandedService(
                      expandedService === service.id ? null : service.id
                    )
                  }
                  className="w-full p-8 bg-gradient-to-r from-beige to-cream hover:from-greige hover:to-beige transition-colors text-left flex items-center justify-between"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-5xl">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-charcoal">
                        {service.title}
                      </h3>
                      <p className="text-charcoal mt-2">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-2xl text-gold">
                    {expandedService === service.id ? '−' : '+'}
                  </div>
                </button>

                {expandedService === service.id && (
                  <div className="p-8 bg-white border-t border-light-gray">
                    {service.id === 'nail' && service.store && (
                      <div className="mb-10 rounded-2xl border border-light-gray bg-gradient-to-br from-white to-beige/40 p-6 shadow-sm">
                        <p className="text-xs tracking-[0.18em] uppercase text-soft-gray mb-3">Salon Information</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                          <div className="relative rounded-xl overflow-hidden border border-light-gray bg-white min-h-[320px] shadow-sm">
                            <SalonImageCarousel images={SALON_IMAGES} intervalMs={4200} />
                          </div>

                          <div>
                            <h4 className="text-3xl font-serif font-bold text-charcoal leading-tight mb-5">
                              {service.store.name}
                            </h4>
                            <div className="flex items-start gap-3 mb-5">
                              <MapPin className="w-5 h-5 text-gold mt-1" strokeWidth={1.6} />
                              <p className="text-charcoal text-base leading-relaxed">
                                {service.store.address}
                              </p>
                            </div>
                            <p className="text-charcoal/85 leading-relaxed mb-6">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mb-6">
                      <h4 className="text-lg font-serif font-bold text-charcoal mb-4">
                        提供サービス
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {service.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-3 bg-beige rounded-lg"
                          >
                            <div className="w-2 h-2 bg-gold rounded-full"></div>
                            <span className="text-charcoal">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {service.cta && (
                      <div className="mt-8 pt-8 border-t border-light-gray">
                        <a
                          href={service.cta.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-8 py-3 bg-charcoal text-cream font-medium rounded-lg hover:bg-gold hover:text-charcoal transition-all"
                        >
                          {service.cta.text}
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">
              人材育成プログラム
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
            <p className="text-lg text-charcoal mt-6">
              ネイリスト、エステティシャン、スタイリストの育成
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingPrograms.map((program, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border border-light-gray"
              >
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  {program.title}
                </h3>
                <p className="text-charcoal mb-6 leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-soft-gray">習得スキル</p>
                  {program.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-charcoal">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cosmetics Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">
              化粧品販売
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
            <p className="text-lg text-charcoal mt-6">
              厳選された高品質な化粧品を取り揃えています
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cosmetics.map((product, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-beige to-cream rounded-lg p-8 border border-light-gray hover:border-gold transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💄</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-3">
                      {product.name}
                    </h3>
                    <p className="text-charcoal leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
            ルミエールが選ばれる理由
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold text-charcoal font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  高い専門性
                </h3>
                <p className="text-charcoal">
                  各分野で経験豊富なプロフェッショナルが、最高水準のサービスを提供します。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold text-charcoal font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  厳選された製品
                </h3>
                <p className="text-charcoal">
                  品質にこだわり、厳選された化粧品と材料のみを使用しています。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold text-charcoal font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  顧客満足度重視
                </h3>
                <p className="text-charcoal">
                  お客様のニーズに合わせた、カスタマイズされたサービスを提供します。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold text-charcoal font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  継続的な研修
                </h3>
                <p className="text-charcoal">
                  スタッフの継続的な研修と技術向上に投資しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            ご質問やご相談はお気軽に
          </h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-gold text-charcoal font-medium rounded-lg hover:bg-cream transition-all"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  )
}
