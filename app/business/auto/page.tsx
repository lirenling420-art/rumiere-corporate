import Link from 'next/link'

export default function AutoPage() {
  const services = [
    {
      title: '中古自動車の買取',
      description: '適正な査定と迅速な買取で、お客様の大切なお車を高く評価します。',
      details: [
        '無料査定',
        '迅速な買取',
        '全車種対応',
        '出張査定対応',
        '即日現金払い',
      ],
      icon: '💰',
    },
    {
      title: '中古自動車の販売',
      description: '厳選された良質な中古車を、適正価格でご提供します。',
      details: [
        '品質検査済み',
        '保証付き',
        '全国配送対応',
        'ローン対応',
        'アフターサービス',
      ],
      icon: '🚗',
    },
    {
      title: '自動車整備',
      description: '最新の診断機器と経験豊富な整備士による、確実な整備サービスです。',
      details: [
        '定期点検',
        '車検対応',
        'エンジン整備',
        'ブレーキ整備',
        'タイヤ交換',
      ],
      icon: '🔧',
    },
    {
      title: '鈑金・塗装',
      description: '事故車や傷の修復を、高い技術で実現します。',
      details: [
        '事故修復',
        'キズ修復',
        '全塗装',
        '部分塗装',
        'カスタムペイント',
      ],
      icon: '🎨',
    },
  ]

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-100 via-cream to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-4">
              自動車関連事業
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-charcoal">
              買取から販売、整備まで、自動車のすべてをサポートします
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <p className="text-lg text-charcoal leading-relaxed">
            自動車関連事業では、中古自動車の買取及び販売から、自動車の整備、鈑金、塗装まで、自動車に関するあらゆるサービスを提供しています。
          </p>
          <p className="text-lg text-charcoal leading-relaxed mt-6">
            最新の診断機器と経験豊富なスタッフにより、お客様の大切なお車を最適な状態に保つことをお約束します。
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

      {/* Quality Assurance Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
            品質へのこだわり
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🔍</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  厳密な検査
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                すべての中古車は、複数の検査項目をクリアした良質な車のみを販売しています。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🛠️</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  最新の診断機器
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                最新の診断機器を導入し、正確で確実な整備を実現しています。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">👨‍🔧</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  経験豊富なスタッフ
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                自動車整備士資格を持つ、経験豊富なスタッフが対応します。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">📋</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  保証制度
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                販売車両には保証を付けており、安心してご利用いただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
            買取から販売までの流れ
          </h2>

          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gold text-charcoal font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  無料査定
                </h3>
                <p className="text-charcoal">
                  お客様のお車を無料で査定いたします。出張査定にも対応しています。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gold text-charcoal font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  買取契約
                </h3>
                <p className="text-charcoal">
                  査定結果にご納得いただければ、買取契約を締結いたします。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gold text-charcoal font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  整備・検査
                </h3>
                <p className="text-charcoal">
                  買い取ったお車を整備し、複数の検査項目をクリアさせます。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gold text-charcoal font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  販売
                </h3>
                <p className="text-charcoal">
                  良質な中古車として、適正価格で販売いたします。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gold text-charcoal font-bold text-lg">
                  5
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  アフターサービス
                </h3>
                <p className="text-charcoal">
                  販売後も、定期点検やメンテナンスでサポートいたします。
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
