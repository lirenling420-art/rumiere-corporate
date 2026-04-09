'use client'

import BusinessDetailPage from '@/components/BusinessDetailPage'
import { useLanguage, LanguageContent } from '@/contexts/LanguageContext'

const HR_CONTENT: LanguageContent<Parameters<typeof BusinessDetailPage>[0]['content']> = {
  ja: {
    heroTitle: '人材・業務支援関連事業', heroSubtitle: '人材と業務支援を通じて、企業の成長をサポートします', heroGradient: 'from-green-100 via-cream to-emerald-100',
    overview: ['人材・業務支援関連事業では、労働者派遣事業、有料職業紹介事業、そしてビル・マンション・店舗・工場の清掃業務を通じて、企業の人材ニーズと業務効率化をサポートしています。','質の高い人材の確保から、施設管理まで、企業の様々なニーズに対応することで、お客様の事業成長に貢献しています。'],
    servicesLabel: 'サービス内容',
    services: [
      { title: '労働者派遣事業', description: '企業のニーズに合わせた、質の高い人材派遣サービスを提供します。', points: ['一般事務派遣', '営業派遣', '技術派遣', '製造業派遣', 'コールセンター派遣'], icon: '👔' },
      { title: '有料職業紹介事業', description: '求職者と企業のマッチングを通じて、最適な人材配置を実現します。', points: ['正社員紹介', '契約社員紹介', 'キャリアコンサルティング', '適性診断', 'スキルアップ支援'], icon: '🤝' },
      { title: 'ビル・マンション・店舗・工場清掃業務', description: '高い専門性と丁寧さで、施設の美しさと衛生を保ちます。', points: ['ビル清掃', 'マンション清掃', '店舗清掃', '工場清掃', '定期メンテナンス'], icon: '🧹' },
    ],
    featureTitle: '企業様へのメリット',
    featureItems: [
      { title: '採用コストの削減', description: '採用活動にかかる時間とコストを大幅に削減できます。' },
      { title: '柔軟な人員調整', description: '業務量の変動に合わせて、柔軟に人員を調整できます。' },
      { title: '優秀な人材へのアクセス', description: '当社の厳選された人材プールから、優秀な人材を確保できます。' },
      { title: '業務効率化', description: '清掃業務などの非コア業務をアウトソースし、コア業務に集中できます。' },
      { title: 'リスク軽減', description: '雇用契約に関するリスクを軽減できます。' },
    ],
    ctaTitle: 'ご質問やご相談はお気軽に', ctaButton: 'お問い合わせ',
  },
  en: {
    heroTitle: 'Human Resources & Business Support', heroSubtitle: 'Supporting corporate growth through people and operational support.', heroGradient: 'from-green-100 via-cream to-emerald-100',
    overview: ['We support clients’ workforce needs and operational efficiency through staffing, paid recruitment, and cleaning services for buildings, apartments, stores, and factories.','From securing quality talent to managing facilities, we respond to a wide range of corporate needs and contribute to business growth.'],
    servicesLabel: 'Service Details',
    services: [
      { title: 'Staffing Services', description: 'We provide high-quality staffing services tailored to each company’s needs.', points: ['Office staffing', 'Sales staffing', 'Technical staffing', 'Manufacturing staffing', 'Call center staffing'], icon: '👔' },
      { title: 'Paid Recruitment Services', description: 'We achieve optimal talent placement by matching job seekers with companies.', points: ['Permanent placement', 'Contract placement', 'Career consulting', 'Aptitude assessment', 'Skill-up support'], icon: '🤝' },
      { title: 'Cleaning Services for Buildings, Apartments, Stores, and Factories', description: 'We maintain cleanliness and hygiene in facilities with professionalism and care.', points: ['Building cleaning', 'Apartment cleaning', 'Store cleaning', 'Factory cleaning', 'Regular maintenance'], icon: '🧹' },
    ],
    featureTitle: 'Benefits for Corporate Clients',
    featureItems: [
      { title: 'Reduced Hiring Costs', description: 'You can significantly reduce time and cost involved in recruitment activities.' },
      { title: 'Flexible Workforce Adjustment', description: 'Staffing levels can be adjusted flexibly according to workload fluctuations.' },
      { title: 'Access to Excellent Talent', description: 'We help secure capable personnel from our carefully selected talent pool.' },
      { title: 'Operational Efficiency', description: 'Non-core functions such as cleaning can be outsourced so teams can focus on core operations.' },
      { title: 'Risk Reduction', description: 'Employment-related risks can be reduced through appropriate support structures.' },
    ],
    ctaTitle: 'Questions or inquiries are always welcome.', ctaButton: 'Contact Us',
  },
  zh: {
    heroTitle: '人力与业务支援相关业务', heroSubtitle: '通过人才与业务支援，助力企业成长。', heroGradient: 'from-green-100 via-cream to-emerald-100',
    overview: ['我们通过劳务派遣、收费职业介绍，以及楼宇、公寓、店铺和工厂清扫业务，支持企业的人才需求与运营效率提升。','从确保高质量人才到设施管理，我们通过满足企业多样需求，推动客户事业成长。'],
    servicesLabel: '服务内容',
    services: [
      { title: '劳务派遣业务', description: '根据企业需求提供高质量的人才派遣服务。', points: ['一般事务派遣', '营业派遣', '技术派遣', '制造业派遣', '呼叫中心派遣'], icon: '👔' },
      { title: '收费职业介绍业务', description: '通过为求职者与企业进行匹配，实现最佳人才配置。', points: ['正式员工介绍', '合同员工介绍', '职业咨询', '适性诊断', '技能提升支持'], icon: '🤝' },
      { title: '楼宇、公寓、店铺、工厂清扫业务', description: '以专业与细致维护设施的整洁与卫生。', points: ['楼宇清扫', '公寓清扫', '店铺清扫', '工厂清扫', '定期维护'], icon: '🧹' },
    ],
    featureTitle: '为企业带来的优势',
    featureItems: [
      { title: '降低招聘成本', description: '可大幅降低招聘活动所需的时间与成本。' },
      { title: '灵活调整人力', description: '可根据业务量变化灵活配置人员。' },
      { title: '获得优秀人才', description: '可从我们精选的人才库中获取优秀人才。' },
      { title: '提高运营效率', description: '可将清洁等非核心业务外包，使团队专注核心业务。' },
      { title: '降低风险', description: '可减轻与雇佣合同相关的风险。' },
    ],
    ctaTitle: '如有疑问或咨询，欢迎随时联系我们。', ctaButton: '联系我们',
  },
}

export default function HRPage() {
  const { language } = useLanguage()
  return <BusinessDetailPage content={HR_CONTENT[language]} />
}
