import Link from 'next/link'

export default function ConstructionPage() {
  const services = [
    {
      title: '産業廃棄物の収集・処理',
      description: '環境に配慮した、適切な産業廃棄物の処理を実現します。',
      details: [
        '廃棄物の収集',
        '分別・選別',
        '適切な処理',
        '環境基準遵守',
        'リサイクル推進',
      ],
      icon: '♻️',
    },
    {
      title: '一般廃棄物の収集・処理',
      description: '地域社会の衛生環境を守るため、一般廃棄物の適切な処理を行います。',
      details: [
        'ゴミ収集',
        '分別指導',
        '処理施設運営',
        '衛生管理',
        'コミュニティサービス',
      ],
      icon: '🗑️',
    },
    {
      title: '廃棄物の再生・リサイクル',
      description: '廃棄物を資源として活用し、循環型社会の実現に貢献します。',
      details: [
        '資源化',
        '再利用',
        '新製品開発',
        '環境保全',
        'コスト削減',
      ],
      icon: '🌱',
    },
    {
      title: '土木・建築工事業',
      description: '安全で高品質な土木・建築工事を提供します。',
      details: [
        '土木工事',
        '建築工事',
        '改修工事',
        '環境整備',
        'プロジェクト管理',
      ],
      icon: '🏗️',
    },
  ]

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-100 via-cream to-lime-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-4">
              環境・建設関連事業
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-charcoal">
              環境保全と社会基盤の整備を通じて、持続可能な社会を実現します
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <p className="text-lg text-charcoal leading-relaxed">
            環境・建設関連事業では、産業廃棄物及び一般廃棄物の収集・再生・処理から、土木・建築工事業まで、環境保全と社会基盤の整備に取り組んでいます。
          </p>
          <p className="text-lg text-charcoal leading-relaxed mt-6">
            循環型社会の実現と、安全で快適な生活環境の構築を目指し、最新の技術と高い専門性を持つスタッフにより、質の高いサービスを提供しています。
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-beige to-cream rounded-lg p-8 border border-light-gray hover:border-gold transition-colors hover:shadow-lg"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-serif font-bold text-charcoal">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-charcoal mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-soft-gray">サービス内容</p>
                  {service.details.map((detail, detailIdx) => (
                    <div key={detailIdx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-charcoal">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Commitment Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
            環境への取り組み
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🌍</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  循環型社会の実現
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                廃棄物を資源として活用し、循環型社会の実現に貢献しています。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">📊</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  環境基準の遵守
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                すべての処理において、環境基準を厳格に遵守しています。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🔬</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  最新技術の導入
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                環境負荷を最小化するため、最新の処理技術を導入しています。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">👥</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  地域社会への貢献
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                地域社会の衛生環境を守り、快適な生活環境の構築に貢献しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Safety Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
            品質と安全への取り組み
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
                  安全管理体制
                </h3>
                <p className="text-charcoal">
                  厳格な安全管理体制を構築し、事故防止に努めています。
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
                  スタッフ研修
                </h3>
                <p className="text-charcoal">
                  定期的な安全研修と技能講習を実施しています。
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
                  品質管理
                </h3>
                <p className="text-charcoal">
                  すべての工事において、高い品質基準を維持しています。
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
                  定期点検
                </h3>
                <p className="text-charcoal">
                  施設・機器の定期点検を実施し、安全性を確保しています。
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
