import Link from 'next/link'

export default function LifestylePage() {
  const businesses = [
    {
      title: '飲食店経営',
      description: 'こだわりの食材と調理法で、お客様に最高の食体験をご提供します。',
      details: [
        'レストラン運営',
        'カフェ経営',
        'バー・ラウンジ',
        'フードコート',
      ],
      icon: '🍽️',
    },
    {
      title: '衣料品販売',
      description: 'トレンドから定番まで、厳選された衣料品を取り揃えています。',
      details: [
        'メンズファッション',
        'レディースファッション',
        'キッズウェア',
        'アクセサリー',
      ],
      icon: '👗',
    },
    {
      title: '食料品・生活雑貨販売',
      description: '日常生活に必要な、高品質な食料品と生活雑貨を厳選して販売しています。',
      details: [
        '食料品輸入販売',
        '生活雑貨',
        'キッチン用品',
        'インテリア雑貨',
      ],
      icon: '🛒',
    },
    {
      title: '美術品販売',
      description: '厳選された美術品を通じて、文化と芸術の価値を提供します。',
      details: [
        '絵画販売',
        '彫刻作品',
        '工芸品',
        'アート作品',
      ],
      icon: '🎨',
    },
  ]

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-100 via-cream to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-4">
              小売・ライフスタイル関連事業
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-charcoal">
              日常生活をより豊かで充実したものにするために
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <p className="text-lg text-charcoal leading-relaxed">
            小売・ライフスタイル関連事業では、飲食店の経営から衣料品、食料品、生活雑貨、美術品の輸入及び販売まで、お客様の日常生活に必要なあらゆるものをご提供しています。
          </p>
          <p className="text-lg text-charcoal leading-relaxed mt-6">
            各分野で厳選された商品とサービスを通じて、お客様のライフスタイルをより豊かで充実したものにすることを目指しています。
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businesses.map((business, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-beige to-cream rounded-lg p-8 border border-light-gray hover:border-gold transition-colors hover:shadow-lg"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{business.icon}</div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-serif font-bold text-charcoal">
                      {business.title}
                    </h3>
                  </div>
                </div>

                <p className="text-charcoal mb-6 leading-relaxed">
                  {business.description}
                </p>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-soft-gray">事業内容</p>
                  {business.details.map((detail, detailIdx) => (
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

      {/* Features Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
            事業の特徴
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gold text-charcoal font-bold text-sm">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                    厳選された商品
                  </h3>
                  <p className="text-charcoal">
                    品質にこだわり、世界中から厳選された商品を取り揃えています。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gold text-charcoal font-bold text-sm">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                    多様なラインアップ
                  </h3>
                  <p className="text-charcoal">
                    飲食から衣料品、生活雑貨まで、幅広いカテゴリーをカバーしています。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gold text-charcoal font-bold text-sm">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                    顧客サービス
                  </h3>
                  <p className="text-charcoal">
                    お客様のニーズに合わせた、きめ細かいサービスを提供しています。
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gold text-charcoal font-bold text-sm">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                    文化と芸術の発信
                  </h3>
                  <p className="text-charcoal">
                    美術品販売を通じて、文化と芸術の価値を社会に発信しています。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gold text-charcoal font-bold text-sm">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                    持続可能な経営
                  </h3>
                  <p className="text-charcoal">
                    環境への配慮と社会への貢献を重視した経営を行っています。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gold text-charcoal font-bold text-sm">
                    6
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                    継続的な革新
                  </h3>
                  <p className="text-charcoal">
                    市場の変化に対応し、新しい商品やサービスを常に開発しています。
                  </p>
                </div>
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
