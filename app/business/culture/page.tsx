import Link from 'next/link'

export default function CulturePage() {
  const programs = [
    {
      title: '絵画教室',
      description: '初心者から上級者まで、個人のレベルに合わせた絵画指導を行います。',
      details: [
        '基礎から応用まで',
        '個別指導対応',
        '少人数クラス',
        '展示会への参加',
        'アート鑑賞',
      ],
      icon: '🎨',
      techniques: ['油絵', 'アクリル画', '水彩画', 'デッサン'],
    },
    {
      title: '彫刻教室',
      description: '彫刻の基礎技法から創作まで、段階的に学べる教室です。',
      details: [
        '基本技法の習得',
        '素材の選択',
        '作品制作',
        '展示会への参加',
        'アート交流',
      ],
      icon: '🗿',
      techniques: ['木彫', '石彫', '粘土造形', 'モダン彫刻'],
    },
  ]

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-100 via-cream to-violet-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-4">
              文化・教育関連事業
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-charcoal">
              芸術と文化を通じて、人々の創造性と感性を育みます
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <p className="text-lg text-charcoal leading-relaxed">
            文化・教育関連事業では、絵画教室と彫刻教室の運営を通じて、芸術と文化の価値を社会に発信しています。
          </p>
          <p className="text-lg text-charcoal leading-relaxed mt-6">
            初心者から上級者まで、すべての方が芸術の喜びを感じ、創造性を発揮できる環境を提供することで、人々の心豊かな生活と文化的な成長に貢献しています。
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-beige to-cream rounded-lg overflow-hidden border border-light-gray hover:border-gold transition-colors hover:shadow-lg"
              >
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-5xl flex-shrink-0">{program.icon}</div>
                    <div className="flex-grow">
                      <h3 className="text-3xl font-serif font-bold text-charcoal mb-3">
                        {program.title}
                      </h3>
                      <p className="text-lg text-charcoal leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h4 className="text-lg font-serif font-bold text-charcoal mb-4">
                        教室の特徴
                      </h4>
                      <div className="space-y-3">
                        {program.details.map((detail, detailIdx) => (
                          <div key={detailIdx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                            <span className="text-charcoal">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-serif font-bold text-charcoal mb-4">
                        学べる技法
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {program.techniques.map((technique, techIdx) => (
                          <div
                            key={techIdx}
                            className="bg-white rounded-lg p-3 border border-light-gray text-center"
                          >
                            <span className="text-charcoal text-sm font-medium">
                              {technique}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Philosophy Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
            教育理念
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">💡</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  創造性の育成
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                各自の個性と創造性を尊重し、自由な表現を促進する教育を行っています。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🎯</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  段階的な学習
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                基礎から応用まで、段階的に学べるカリキュラムを用意しています。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🤝</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  コミュニティ形成
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                同じ志を持つ人々が集い、交流できるコミュニティを形成しています。
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-light-gray">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🌟</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  文化発信
                </h3>
              </div>
              <p className="text-charcoal leading-relaxed">
                展示会やイベントを通じて、芸術と文化を社会に発信しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs & Activities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
            プログラムと活動
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
                  定期クラス
                </h3>
                <p className="text-charcoal">
                  週1回から複数回まで、ご自身のペースで学べる定期クラスを開設しています。
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
                  ワークショップ
                </h3>
                <p className="text-charcoal">
                  特定のテーマや技法に焦点を当てた、短期集中ワークショップを開催しています。
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
                  展示会
                </h3>
                <p className="text-charcoal">
                  生徒の作品を展示する展示会を定期的に開催し、成果を発表する機会を提供しています。
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
                  アート鑑賞
                </h3>
                <p className="text-charcoal">
                  美術館やギャラリーへの訪問、著名アーティストの作品鑑賞を通じて、芸術への理解を深めています。
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
                  交流イベント
                </h3>
                <p className="text-charcoal">
                  生徒同士の交流や、他の教室との交流イベントを開催しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
            講師について
          </h2>

          <div className="bg-white rounded-lg p-8 border border-light-gray">
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              当教室の講師は、芸術大学出身や、国内外での展示会経験を持つ、経験豊富なアーティストです。
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              各講師は、生徒一人ひとりの個性と目標を理解し、丁寧で親身な指導を心がけています。
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              初心者から上級者まで、すべてのレベルの生徒に対応できる、高い教育スキルを持っています。
            </p>
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
