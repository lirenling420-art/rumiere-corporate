import Link from 'next/link'

export default function TransportPage() {
  const services = [
    {
      title: '旅行業',
      description: '旅行業法に基づく、信頼できる旅行サービスをご提供します。',
      details: [
        '国内旅行企画・手配',
        '海外旅行企画・手配',
        'グループ旅行',
        'コーポレートトラベル',
        'カスタマイズ旅行',
      ],
      icon: '✈️',
    },
    {
      title: '乗用旅客自動車運送事業',
      description: '安全で快適な乗用旅客運送サービスを提供しています。',
      details: [
        'タクシー運送',
        'ハイヤー運送',
        'チャーター運送',
        '空港送迎',
        '企業送迎',
      ],
      icon: '🚕',
    },
    {
      title: '貨物自動車運送事業',
      description: '安全で確実な貨物運送を、全国ネットワークでご提供します。',
      details: [
        '一般貨物運送',
        '特積み運送',
        '冷蔵・冷凍運送',
        '危険物運送',
        'ロジスティクス',
      ],
      icon: '🚚',
    },
  ]

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-100 via-cream to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-4">
              交通・物流関連事業
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-charcoal">
              安全で確実な運送サービスで、社会を支えます
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <p className="text-lg text-charcoal leading-relaxed">
            交通・物流関連事業では、旅行業法に基づく旅行業から、乗用旅客自動車運送事業、貨物自動車運送事業まで、多角的な運送・物流サービスを提供しています。
          </p>
          <p className="text-lg text-charcoal leading-relaxed mt-6">
            安全性と信頼性を最優先に、お客様のニーズに合わせた最適なサービスを提供することで、社会のあらゆる移動と物流ニーズに応えています。
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-beige to-cream rounded-lg overflow-hidden border border-light-gray hover:border-gold transition-colors hover:shadow-lg"
              >
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-5xl flex-shrink-0">{service.icon}</div>
                    <div className="flex-grow">
                      <h3 className="text-3xl font-serif font-bold text-charcoal mb-3">
                        {service.title}
                      </h3>
                      <p className="text-lg text-charcoal leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {service.details.map((detail, detailIdx) => (
                      <div key={detailIdx} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-light-gray">
                        <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                        <span className="text-charcoal text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
            ルミエールの強み
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🛡️</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  安全性
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                最新の安全管理システムと、経験豊富なドライバーにより、最高水準の安全性を確保しています。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">⏰</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  信頼性
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                正確で確実な運送を実現し、お客様の信頼を獲得しています。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🌐</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  全国ネットワーク
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                全国規模のネットワークにより、どこへでも迅速に対応できます。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">💡</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  カスタマイズ対応
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                お客様のニーズに合わせた、柔軟なサービス提供が可能です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
            品質保証への取り組み
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
                  定期的な安全研修
                </h3>
                <p className="text-charcoal">
                  全スタッフに対して、定期的な安全研修と技能講習を実施しています。
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
                  最新の管理システム
                </h3>
                <p className="text-charcoal">
                  GPS追跡、運行管理システムなど、最新技術を導入しています。
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
                  車両メンテナンス
                </h3>
                <p className="text-charcoal">
                  定期的な点検と整備により、車両の安全性を確保しています。
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
                  顧客サポート
                </h3>
                <p className="text-charcoal">
                  24時間体制のカスタマーサポートで、お客様のご質問にお応えします。
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
