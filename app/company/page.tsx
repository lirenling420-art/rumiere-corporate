import Link from 'next/link'

export default function CompanyPage() {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-beige via-cream to-greige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-4">
              会社概要
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Basic Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-8">
                基本情報
              </h2>
              <div className="bg-beige rounded-lg p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm text-soft-gray font-medium mb-2">会社名</p>
                    <p className="text-xl text-charcoal font-serif">株式会社ルミエール</p>
                  </div>
                  <div>
                    <p className="text-sm text-soft-gray font-medium mb-2">所在地</p>
                    <p className="text-lg text-charcoal">愛知県豊田市</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Overview */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-8">
                企業理念
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-charcoal leading-relaxed">
                  株式会社ルミエールは、「信頼」と「品質」を基盤に、多角的な事業展開を通じて社会に価値を創造する企業です。
                </p>
                <p className="text-lg text-charcoal leading-relaxed">
                  美容・サロン事業から交通・物流、人材支援、環境・建設まで、各分野で高い専門性を発揮しながら、顧客満足度と社会への貢献を最優先に考えています。
                </p>
                <p className="text-lg text-charcoal leading-relaxed">
                  継続的な成長と革新を目指し、皆様の生活をより豊かにするパートナーとして、信頼される企業であり続けることをお約束します。
                </p>
              </div>
            </div>

            {/* Business Overview */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-8">
                事業内容
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-gold pl-6 py-4">
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                    美容・サロン関連
                  </h3>
                  <p className="text-charcoal">
                    ネイルサロン、エステティックサロン、リラクゼーションサロンの経営、人材育成、化粧品販売
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6 py-4">
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                    小売・ライフスタイル関連
                  </h3>
                  <p className="text-charcoal">
                    飲食店経営、衣料品・食料品・生活雑貨の輸入及び販売、美術品販売
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6 py-4">
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                    交通・物流関連
                  </h3>
                  <p className="text-charcoal">
                    旅行業、乗用旅客自動車運送事業、貨物自動車運送事業
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6 py-4">
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                    人材・業務支援関連
                  </h3>
                  <p className="text-charcoal">
                    労働者派遣事業、有料職業紹介事業、清掃業務
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6 py-4">
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                    自動車関連
                  </h3>
                  <p className="text-charcoal">
                    中古自動車の買取及び販売、自動車の整備・鈑金・塗装
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6 py-4">
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                    環境・建設関連
                  </h3>
                  <p className="text-charcoal">
                    産業廃棄物及び一般廃棄物の収集・再生・処理、土木・建築工事業
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6 py-4">
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                    文化・教育関連
                  </h3>
                  <p className="text-charcoal">
                    絵画教室、彫刻教室の運営
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-8">
                企業の価値観
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-beige rounded-lg p-6">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-3">
                    信頼
                  </h3>
                  <p className="text-charcoal">
                    顧客、パートナー、社員との信頼関係を最も大切にします
                  </p>
                </div>

                <div className="bg-beige rounded-lg p-6">
                  <div className="text-4xl mb-4">⭐</div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-3">
                    品質
                  </h3>
                  <p className="text-charcoal">
                    すべての事業において、最高水準の品質を追求します
                  </p>
                </div>

                <div className="bg-beige rounded-lg p-6">
                  <div className="text-4xl mb-4">🌱</div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-3">
                    成長
                  </h3>
                  <p className="text-charcoal">
                    継続的な革新と改善を通じて、社会に貢献します
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
            事業内容の詳細をご覧ください
          </h2>
          <Link
            href="/business"
            className="inline-block px-8 py-3 bg-gold text-charcoal font-medium rounded-lg hover:bg-cream transition-all"
          >
            事業内容を探索
          </Link>
        </div>
      </section>
    </div>
  )
}
