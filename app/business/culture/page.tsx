'use client'

import BusinessDetailPage from '@/components/BusinessDetailPage'
import { useLanguage, LanguageContent } from '@/contexts/LanguageContext'

const CULTURE_CONTENT: LanguageContent<Parameters<typeof BusinessDetailPage>[0]['content']> = {
  ja: {
    heroTitle: '文化・教育関連事業', heroSubtitle: '芸術と文化を通じて、人々の創造性と感性を育みます', heroGradient: 'from-purple-100 via-cream to-violet-100',
    overview: ['文化・教育関連事業では、絵画教室と彫刻教室の運営を通じて、芸術と文化の価値を社会に発信しています。','初心者から上級者まで、すべての方が芸術の喜びを感じ、創造性を発揮できる環境を提供することで、人々の心豊かな生活と文化的な成長に貢献しています。'],
    servicesLabel: '教室の特徴',
    services: [
      { title: '絵画教室', description: '初心者から上級者まで、個人のレベルに合わせた絵画指導を行います。', points: ['基礎から応用まで', '個別指導対応', '少人数クラス', '展示会への参加', 'アート鑑賞'], icon: '🎨' },
      { title: '彫刻教室', description: '彫刻の基礎技法から創作まで、段階的に学べる教室です。', points: ['基本技法の習得', '素材の選択', '作品制作', '展示会への参加', 'アート交流'], icon: '🗿' },
    ],
    featureTitle: 'プログラムと活動',
    featureItems: [
      { title: '定期クラス', description: '週1回から複数回まで、ご自身のペースで学べる定期クラスを開設しています。' },
      { title: 'ワークショップ', description: '特定のテーマや技法に焦点を当てた、短期集中ワークショップを開催しています。' },
      { title: '展示会', description: '生徒の作品を展示する展示会を定期的に開催し、成果を発表する機会を提供しています。' },
      { title: 'アート鑑賞', description: '美術館やギャラリーへの訪問、著名アーティストの作品鑑賞を通じて、芸術への理解を深めています。' },
    ],
    ctaTitle: 'ご質問やご相談はお気軽に', ctaButton: 'お問い合わせ',
  },
  en: {
    heroTitle: 'Culture & Education Business', heroSubtitle: 'Nurturing creativity and sensitivity through art and culture.', heroGradient: 'from-purple-100 via-cream to-violet-100',
    overview: ['Through painting and sculpture classes, we share the value of art and culture with society.','By providing an environment where everyone from beginners to advanced learners can enjoy art and express creativity, we contribute to richer lives and cultural growth.'],
    servicesLabel: 'Class Features',
    services: [
      { title: 'Painting Class', description: 'We provide painting instruction suited to each learner’s level, from beginner to advanced.', points: ['From basics to advanced', 'Individual guidance', 'Small classes', 'Exhibition participation', 'Art appreciation'], icon: '🎨' },
      { title: 'Sculpture Class', description: 'A step-by-step class covering everything from basic sculpture techniques to creative work.', points: ['Basic techniques', 'Material selection', 'Artwork creation', 'Exhibition participation', 'Art exchange'], icon: '🗿' },
    ],
    featureTitle: 'Programs and Activities',
    featureItems: [
      { title: 'Regular Classes', description: 'Regular classes are available from once a week to multiple times, allowing each participant to learn at their own pace.' },
      { title: 'Workshops', description: 'We hold intensive short-term workshops focused on specific themes and techniques.' },
      { title: 'Exhibitions', description: 'We regularly hold exhibitions to showcase students’ work and provide opportunities to present results.' },
      { title: 'Art Appreciation', description: 'Visits to museums and galleries help deepen understanding of art.' },
    ],
    ctaTitle: 'Questions or inquiries are always welcome.', ctaButton: 'Contact Us',
  },
  zh: {
    heroTitle: '文化与教育相关业务', heroSubtitle: '通过艺术与文化，培养人们的创造力与感性。', heroGradient: 'from-purple-100 via-cream to-violet-100',
    overview: ['我们通过绘画与雕塑课程的运营，向社会传播艺术与文化的价值。','通过提供让初学者到进阶者都能感受艺术乐趣并发挥创造力的环境，我们为更丰盈的生活和文化成长作出贡献。'],
    servicesLabel: '课程特色',
    services: [
      { title: '绘画教室', description: '面向从初学者到进阶者的各层次学员，提供符合个人水平的绘画指导。', points: ['从基础到进阶', '支持个别指导', '小班授课', '参加展览', '艺术鉴赏'], icon: '🎨' },
      { title: '雕塑教室', description: '从雕塑基础技法到创作，分阶段学习的课程。', points: ['掌握基础技法', '材料选择', '作品创作', '参加展览', '艺术交流'], icon: '🗿' },
    ],
    featureTitle: '项目与活动',
    featureItems: [
      { title: '定期课程', description: '开设每周1次到多次不等、可按个人节奏学习的定期课程。' },
      { title: '工作坊', description: '举办聚焦特定主题与技法的短期集中工作坊。' },
      { title: '展览会', description: '定期举办学员作品展，为成果展示提供机会。' },
      { title: '艺术鉴赏', description: '通过参观美术馆和画廊，加深对艺术的理解。' },
    ],
    ctaTitle: '如有疑问或咨询，欢迎随时联系我们。', ctaButton: '联系我们',
  },
}

export default function CulturePage() {
  const { language } = useLanguage()
  return <BusinessDetailPage content={CULTURE_CONTENT[language]} />
}
