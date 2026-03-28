import Link from 'next/link'

export default function HRPage() {
  const services = [
    {
      title: '労働者派遣事業',
      description: '企業のニーズに合わせた、質の高い人材派遣サービスを提供します。',
      details: [
        '一般事務派遣',
        '営業派遣',
        '技術派遣',
        '製造業派遣',
        'コールセンター派遣',
      ],
      icon: '👔',
    },
    {
      title: '有料職業紹介事業',
      description: '求職者と企業のマッチングを通じて、最適な人材配置を実現します。',
      details: [
        '正社員紹介',
        '契約社員紹介',
        'キャリアコンサルティング',
        '適性診断',
        'スキルアップ支援',
      ],
      icon: '🤝',
    },
    {
      title: 'ビル・マンション・店舗・工場清掃業務',
      description: '高い専門性と丁寧さで、施設の美しさと衛生を保ちます。',
      details: [
        'ビル清掃',
        'マンション清掃',
        '店舗清掃',
        '工場清掃',
        '定期メンテナンス',
      ],
      icon: '🧹',
    },
  ]

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-100 via-cream to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-4">
              人材・業務支援関連事業
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-charcoal">
              人材と業務支援を通じて、企業の成長をサポートします
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <p className="text-lg text-charcoal leading-relaxed">
            人材・業務支援関連事業では、労働者派遣事業、有料職業紹介事業、そしてビル・マンション・店舗・工場の清掃業務を通じて、企業の人材ニーズと業務効率化をサポートしています。
          </p>
          <p className="text-lg text-charcoal leading-relaxed mt-6">
            質の高い人材の確保から、施設管理まで、企業の様々なニーズに対応することで、お客様の事業成長に貢献しています。
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

      {/* Our Approach Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
            ルミエールのアプローチ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🎯</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  ニーズ分析
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                企業の具体的なニーズを丁寧にヒアリングし、最適なソリューションを提案します。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">👥</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  人材マッチング
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                求職者と企業の適性を見極め、最適なマッチングを実現します。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">📈</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  継続的なサポート
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                配置後も継続的にサポートし、長期的な関係構築を目指します。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">✨</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  品質保証
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                高い品質基準を維持し、お客様の満足度を最優先にしています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
            企業様へのメリット
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold text-charcoal font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  採用コストの削減
                </h3>
                <p className="text-charcoal">
                  採用活動にかかる時間とコストを大幅に削減できます。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold text-charcoal font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  柔軟な人員調整
                </h3>
                <p className="text-charcoal">
                  業務量の変動に合わせて、柔軟に人員を調整できます。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold text-charcoal font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  優秀な人材へのアクセス
                </h3>
                <p className="text-charcoal">
                  当社の厳選された人材プールから、優秀な人材を確保できます。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold text-charcoal font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  業務効率化
                </h3>
                <p className="text-charcoal">
                  清掃業務などの非コア業務をアウトソースし、コア業務に集中できます。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold text-charcoal font-bold">
                  5
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  リスク軽減
                </h3>
                <p className="text-charcoal">
                  雇用契約に関するリスクを軽減できます。
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
