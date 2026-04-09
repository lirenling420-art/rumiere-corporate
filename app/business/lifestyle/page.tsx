'use client'

import BusinessDetailPage from '@/components/BusinessDetailPage'
import { useLanguage, LanguageContent } from '@/contexts/LanguageContext'

const LIFESTYLE_CONTENT: LanguageContent<Parameters<typeof BusinessDetailPage>[0]['content']> = {
  ja: {
    heroTitle: '小売・ライフスタイル関連事業', heroSubtitle: '日常生活をより豊かで充実したものにするために', heroGradient: 'from-amber-100 via-cream to-orange-100',
    overview: ['小売・ライフスタイル関連事業では、飲食店の経営から衣料品、食料品、生活雑貨、美術品の輸入及び販売まで、お客様の日常生活に必要なあらゆるものをご提供しています。','各分野で厳選された商品とサービスを通じて、お客様のライフスタイルをより豊かで充実したものにすることを目指しています。'],
    servicesLabel: '事業内容',
    services: [
      { title: '飲食店経営', description: 'こだわりの食材と調理法で、お客様に最高の食体験をご提供します。', points: ['レストラン運営', 'カフェ経営', 'バー・ラウンジ', 'フードコート'], icon: '🍽️' },
      { title: '衣料品販売', description: 'トレンドから定番まで、厳選された衣料品を取り揃えています。', points: ['メンズファッション', 'レディースファッション', 'キッズウェア', 'アクセサリー'], icon: '👗' },
      { title: '食料品・生活雑貨販売', description: '日常生活に必要な、高品質な食料品と生活雑貨を厳選して販売しています。', points: ['食料品輸入販売', '生活雑貨', 'キッチン用品', 'インテリア雑貨'], icon: '🛒' },
      { title: '美術品販売', description: '厳選された美術品を通じて、文化と芸術の価値を提供します。', points: ['絵画販売', '彫刻作品', '工芸品', 'アート作品'], icon: '🎨' },
    ],
    featureTitle: '事業の特徴',
    featureItems: [
      { title: '厳選された商品', description: '品質にこだわり、世界中から厳選された商品を取り揃えています。' },
      { title: '多様なラインアップ', description: '飲食から衣料品、生活雑貨まで、幅広いカテゴリーをカバーしています。' },
      { title: '顧客サービス', description: 'お客様のニーズに合わせた、きめ細かいサービスを提供しています。' },
      { title: '文化と芸術の発信', description: '美術品販売を通じて、文化と芸術の価値を社会に発信しています。' },
      { title: '持続可能な経営', description: '環境への配慮と社会への貢献を重視した経営を行っています。' },
      { title: '継続的な革新', description: '市場の変化に対応し、新しい商品やサービスを常に開発しています。' },
    ],
    ctaTitle: 'ご質問やご相談はお気軽に', ctaButton: 'お問い合わせ',
  },
  en: {
    heroTitle: 'Retail & Lifestyle Business', heroSubtitle: 'Making everyday life richer and more fulfilling.', heroGradient: 'from-amber-100 via-cream to-orange-100',
    overview: ['Our retail and lifestyle business covers everything from restaurant operation to the import and sale of apparel, food, daily goods, and art pieces.','Through carefully selected products and services in each field, we aim to enrich and elevate our customers’ lifestyles.'],
    servicesLabel: 'Business Areas',
    services: [
      { title: 'Restaurant Operation', description: 'We provide excellent dining experiences through carefully selected ingredients and methods.', points: ['Restaurant operation', 'Cafe operation', 'Bar / lounge', 'Food court'], icon: '🍽️' },
      { title: 'Apparel Sales', description: 'We offer carefully selected apparel ranging from trend-driven to timeless essentials.', points: ['Men’s fashion', 'Women’s fashion', 'Kids wear', 'Accessories'], icon: '👗' },
      { title: 'Food & Daily Goods Sales', description: 'We select and offer high-quality food and lifestyle products for everyday living.', points: ['Imported food sales', 'Daily goods', 'Kitchen items', 'Interior goods'], icon: '🛒' },
      { title: 'Art Sales', description: 'We deliver the value of culture and art through carefully selected art pieces.', points: ['Paintings', 'Sculpture works', 'Craft works', 'Art pieces'], icon: '🎨' },
    ],
    featureTitle: 'Business Features',
    featureItems: [
      { title: 'Curated Products', description: 'We offer carefully selected products from around the world with a strong commitment to quality.' },
      { title: 'Wide Variety', description: 'We cover a broad range of categories from dining to apparel and lifestyle goods.' },
      { title: 'Customer Service', description: 'We provide attentive service tailored to each customer’s needs.' },
      { title: 'Sharing Culture and Art', description: 'Through art sales, we help communicate the value of culture and art to society.' },
      { title: 'Sustainable Management', description: 'We value environmental consideration and social contribution in our management approach.' },
      { title: 'Continuous Innovation', description: 'We continue to develop new products and services while responding to market changes.' },
    ],
    ctaTitle: 'Questions or inquiries are always welcome.', ctaButton: 'Contact Us',
  },
  zh: {
    heroTitle: '零售与生活方式相关业务', heroSubtitle: '让日常生活更加丰富充实。', heroGradient: 'from-amber-100 via-cream to-orange-100',
    overview: ['该业务涵盖餐饮经营，以及服装、食品、生活杂货和艺术品的进口与销售，为顾客的日常生活提供多样支持。','我们通过各领域精选商品与服务，致力于让顾客的生活方式更加丰富而充实。'],
    servicesLabel: '业务内容',
    services: [
      { title: '餐饮店经营', description: '通过讲究食材与烹饪方式，为顾客提供出色的饮食体验。', points: ['餐厅运营', '咖啡店经营', '酒吧 / Lounge', '美食广场'], icon: '🍽️' },
      { title: '服装销售', description: '从潮流到经典，提供精挑细选的服饰产品。', points: ['男装时尚', '女装时尚', '儿童服饰', '配饰'], icon: '👗' },
      { title: '食品与生活杂货销售', description: '精选高品质食品与生活用品，满足日常所需。', points: ['进口食品销售', '生活杂货', '厨房用品', '家居杂货'], icon: '🛒' },
      { title: '艺术品销售', description: '通过精选艺术品传递文化与艺术价值。', points: ['绘画销售', '雕塑作品', '工艺品', '艺术作品'], icon: '🎨' },
    ],
    featureTitle: '业务特色',
    featureItems: [
      { title: '精选商品', description: '坚持品质，从世界各地精选优质商品。' },
      { title: '丰富品类', description: '从餐饮到服饰与生活杂货，覆盖广泛类别。' },
      { title: '顾客服务', description: '根据顾客需求提供细致周到的服务。' },
      { title: '传播文化与艺术', description: '通过艺术品销售，将文化与艺术的价值传递给社会。' },
      { title: '可持续经营', description: '重视环境关怀与社会贡献的经营方式。' },
      { title: '持续创新', description: '积极应对市场变化，不断开发新商品与新服务。' },
    ],
    ctaTitle: '如有疑问或咨询，欢迎随时联系我们。', ctaButton: '联系我们',
  },
}

export default function LifestylePage() {
  const { language } = useLanguage()
  return <BusinessDetailPage content={LIFESTYLE_CONTENT[language]} />
}
