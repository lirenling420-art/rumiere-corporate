'use client'

import BusinessDetailPage from '@/components/BusinessDetailPage'
import { useLanguage, LanguageContent } from '@/contexts/LanguageContext'

const TRANSPORT_CONTENT: LanguageContent<Parameters<typeof BusinessDetailPage>[0]['content']> = {
  ja: {
    heroTitle: '交通・物流関連事業', heroSubtitle: '安全で確実な運送サービスで、社会を支えます', heroGradient: 'from-blue-100 via-cream to-cyan-100',
    overview: ['交通・物流関連事業では、旅行業法に基づく旅行業から、乗用旅客自動車運送事業、貨物自動車運送事業まで、多角的な運送・物流サービスを提供しています。','安全性と信頼性を最優先に、お客様のニーズに合わせた最適なサービスを提供することで、社会のあらゆる移動と物流ニーズに応えています。'],
    servicesLabel: 'サービス内容',
    services: [
      { title: '旅行業', description: '旅行業法に基づく、信頼できる旅行サービスをご提供します。', points: ['国内旅行企画・手配', '海外旅行企画・手配', 'グループ旅行', 'コーポレートトラベル', 'カスタマイズ旅行'], icon: '✈️' },
      { title: '乗用旅客自動車運送事業', description: '安全で快適な乗用旅客運送サービスを提供しています。', points: ['タクシー運送', 'ハイヤー運送', 'チャーター運送', '空港送迎', '企業送迎'], icon: '🚕' },
      { title: '貨物自動車運送事業', description: '安全で確実な貨物運送を、全国ネットワークでご提供します。', points: ['一般貨物運送', '特積み運送', '冷蔵・冷凍運送', '危険物運送', 'ロジスティクス'], icon: '🚚' },
    ],
    featureTitle: '品質保証への取り組み',
    featureItems: [
      { title: '定期的な安全研修', description: '全スタッフに対して、定期的な安全研修と技能講習を実施しています。' },
      { title: '最新の管理システム', description: 'GPS追跡、運行管理システムなど、最新技術を導入しています。' },
      { title: '車両メンテナンス', description: '定期的な点検と整備により、車両の安全性を確保しています。' },
      { title: '顧客サポート', description: '24時間体制のカスタマーサポートで、お客様のご質問にお応えします。' },
    ],
    ctaTitle: 'ご質問やご相談はお気軽に', ctaButton: 'お問い合わせ',
  },
  en: {
    heroTitle: 'Transportation & Logistics Business', heroSubtitle: 'Supporting society through safe and reliable transport services.', heroGradient: 'from-blue-100 via-cream to-cyan-100',
    overview: ['Our transportation and logistics business provides diversified mobility and logistics services, from travel services to passenger transport and cargo transport.','By prioritizing safety and reliability, we meet a wide range of movement and logistics needs with services tailored to each client.'],
    servicesLabel: 'Service Details',
    services: [
      { title: 'Travel Services', description: 'We provide trustworthy travel services in accordance with travel business regulations.', points: ['Domestic travel planning', 'Overseas travel planning', 'Group travel', 'Corporate travel', 'Customized travel'], icon: '✈️' },
      { title: 'Passenger Transport Services', description: 'We provide safe and comfortable passenger transportation services.', points: ['Taxi service', 'Private hire service', 'Charter service', 'Airport transfer', 'Corporate shuttle'], icon: '🚕' },
      { title: 'Cargo Transport Services', description: 'We provide safe and dependable cargo transportation through a nationwide network.', points: ['General freight', 'Consolidated freight', 'Cold chain transport', 'Hazardous goods transport', 'Logistics'], icon: '🚚' },
    ],
    featureTitle: 'Quality Assurance Initiatives',
    featureItems: [
      { title: 'Regular Safety Training', description: 'We conduct regular safety and skills training for all staff.' },
      { title: 'Advanced Management Systems', description: 'We use advanced technologies such as GPS tracking and operation management systems.' },
      { title: 'Vehicle Maintenance', description: 'Regular inspection and maintenance help ensure vehicle safety.' },
      { title: 'Customer Support', description: 'We provide customer support to respond to questions and requests with care.' },
    ],
    ctaTitle: 'Questions or inquiries are always welcome.', ctaButton: 'Contact Us',
  },
  zh: {
    heroTitle: '交通与物流相关业务', heroSubtitle: '以安全可靠的运输服务支撑社会。', heroGradient: 'from-blue-100 via-cream to-cyan-100',
    overview: ['交通与物流业务涵盖旅行服务、客运服务和货运服务，提供多元化的移动与物流解决方案。','以安全性与可靠性为优先，根据客户需求提供合适服务，满足社会各种出行与物流需求。'],
    servicesLabel: '服务内容',
    services: [
      { title: '旅行服务', description: '依据旅行行业相关法规，提供值得信赖的旅行服务。', points: ['国内旅行策划安排', '海外旅行策划安排', '团体旅行', '企业差旅', '定制旅行'], icon: '✈️' },
      { title: '客运业务', description: '提供安全舒适的乘客运输服务。', points: ['出租车运输', '高级接送', '包车服务', '机场接送', '企业接送'], icon: '🚕' },
      { title: '货运业务', description: '通过全国网络提供安全可靠的货物运输服务。', points: ['普通货运', '零担货运', '冷藏冷冻运输', '危险品运输', '物流服务'], icon: '🚚' },
    ],
    featureTitle: '品质保障举措',
    featureItems: [
      { title: '定期安全培训', description: '我们为全体员工定期开展安全与技能培训。' },
      { title: '先进管理系统', description: '引入GPS追踪与运营管理系统等先进技术。' },
      { title: '车辆维护', description: '通过定期检查与保养确保车辆安全性。' },
      { title: '客户支持', description: '以周到的客户支持响应各类咨询与需求。' },
    ],
    ctaTitle: '如有疑问或咨询，欢迎随时联系我们。', ctaButton: '联系我们',
  },
}

export default function TransportPage() {
  const { language } = useLanguage()
  return <BusinessDetailPage content={TRANSPORT_CONTENT[language]} />
}
