import Link from 'next/link'

export default function BusinessPage() {
  const businesses = [
    {
      id: 'beauty',
      title: '美容・サロン関連',
      description: 'ネイルサロン、エステティックサロン、リラクゼーションサロンの経営と人材育成',
      icon: '✨',
      href: '/business/beauty',
      color: 'from-pink-100 to-rose-100',
    },
    {
      id: 'lifestyle',
      title: '小売・ライフスタイル関連',
      description: '飲食店、衣料品、食料品、生活雑貨の輸入及び販売',
      icon: '🛍️',
      href: '/business/lifestyle',
      color: 'from-amber-100 to-orange-100',
    },
    {
      id: 'transport',
      title: '交通・物流関連',
      description: '旅行業、乗用旅客自動車運送事業、貨物自動車運送事業',
      icon: '🚗',
      href: '/business/transport',
      color: 'from-blue-100 to-cyan-100',
    },
    {
      id: 'hr',
      title: '人材・業務支援関連',
      description: '労働者派遣事業、職業紹介事業、清掃業務',
      icon: '👥',
      href: '/business/hr',
      color: 'from-green-100 to-emerald-100',
    },
    {
      id: 'auto',
      title: '自動車関連',
      description: '中古自動車の買取・販売、整備・鈑金・塗装',
      icon: '🔧',
      href: '/business/auto',
      color: 'from-slate-100 to-gray-100',
    },
    {
      id: 'construction',
      title: '環境・建設関連',
      description: '産業廃棄物・一般廃棄物の処理、土木・建築工事業',
      icon: '🏗️',
      href: '/business/construction',
      color: 'from-yellow-100 to-lime-100',
    },
    {
      id: 'culture',
      title: '文化・教育関連',
      description: '絵画教室、彫刻教室の運営',
      icon: '🎨',
      href: '/business/culture',
      color: 'from-purple-100 to-violet-100',
    },
  ]

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-beige via-cream to-greige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-4">
              事業内容
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-charcoal">
              多角的な事業展開で、社会のあらゆるニーズに応えています
            </p>
          </div>
        </div>
      </section>

      {/* Business Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.map((business) => (
              <Link
                key={business.id}
                href={business.href}
                className="group"
              >
                <div className="bg-gradient-to-br from-cream to-beige rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all h-full border border-light-gray hover:border-gold">
                  <div className={`bg-gradient-to-br ${business.color} h-32 flex items-center justify-center`}>
                    <div className="text-6xl">{business.icon}</div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-charcoal mb-3 group-hover:text-gold transition-colors">
                      {business.title}
                    </h3>
                    <p className="text-charcoal text-sm leading-relaxed mb-6">
                      {business.description}
                    </p>
                    <div className="text-gold font-medium group-hover:translate-x-2 transition-transform inline-block">
                      詳しく見る →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
            事業展開の特徴
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
                  多角的な事業ポートフォリオ
                </h3>
                <p className="text-charcoal">
                  美容・サロン、小売・ライフスタイル、交通・物流、人材支援、自動車、環境・建設、文化・教育など、7つの主要事業分野で事業を展開しています。
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
                  高い専門性と品質
                </h3>
                <p className="text-charcoal">
                  各事業分野で高い専門知識と技術を持つスタッフが、最高水準のサービスと製品を提供しています。
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
                  顧客満足度と社会貢献
                </h3>
                <p className="text-charcoal">
                  顧客満足度を最優先に、同時に社会への貢献を通じて、持続可能な事業展開を目指しています。
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
                  継続的な成長と革新
                </h3>
                <p className="text-charcoal">
                  市場の変化に対応しながら、新しい技術やサービスの導入を通じて、継続的な成長を実現しています。
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
