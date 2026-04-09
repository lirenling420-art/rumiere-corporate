'use client'

import BusinessDetailPage from '@/components/BusinessDetailPage'
import { useLanguage, LanguageContent } from '@/contexts/LanguageContext'

const CONSTRUCTION_CONTENT: LanguageContent<Parameters<typeof BusinessDetailPage>[0]['content']> = {
  ja: {
    heroTitle: '環境・建設関連事業', heroSubtitle: '環境保全と社会基盤の整備を通じて、持続可能な社会を実現します', heroGradient: 'from-yellow-100 via-cream to-lime-100',
    overview: ['環境・建設関連事業では、産業廃棄物及び一般廃棄物の収集・再生・処理から、土木・建築工事業まで、環境保全と社会基盤の整備に取り組んでいます。','循環型社会の実現と、安全で快適な生活環境の構築を目指し、最新の技術と高い専門性を持つスタッフにより、質の高いサービスを提供しています。'],
    servicesLabel: 'サービス内容',
    services: [
      { title: '産業廃棄物の収集・処理', description: '環境に配慮した、適切な産業廃棄物の処理を実現します。', points: ['廃棄物の収集', '分別・選別', '適切な処理', '環境基準遵守', 'リサイクル推進'], icon: '♻️' },
      { title: '一般廃棄物の収集・処理', description: '地域社会の衛生環境を守るため、一般廃棄物の適切な処理を行います。', points: ['ゴミ収集', '分別指導', '処理施設運営', '衛生管理', 'コミュニティサービス'], icon: '🗑️' },
      { title: '廃棄物の再生・リサイクル', description: '廃棄物を資源として活用し、循環型社会の実現に貢献します。', points: ['資源化', '再利用', '新製品開発', '環境保全', 'コスト削減'], icon: '🌱' },
      { title: '土木・建築工事業', description: '安全で高品質な土木・建築工事を提供します。', points: ['土木工事', '建築工事', '改修工事', '環境整備', 'プロジェクト管理'], icon: '🏗️' },
    ],
    featureTitle: '品質と安全への取り組み',
    featureItems: [
      { title: '安全管理体制', description: '厳格な安全管理体制を構築し、事故防止に努めています。' },
      { title: 'スタッフ研修', description: '定期的な安全研修と技能講習を実施しています。' },
      { title: '品質管理', description: 'すべての工事において、高い品質基準を維持しています。' },
      { title: '定期点検', description: '施設・機器の定期点検を実施し、安全性を確保しています。' },
    ],
    ctaTitle: 'ご質問やご相談はお気軽に', ctaButton: 'お問い合わせ',
  },
  en: {
    heroTitle: 'Environment & Construction Business', heroSubtitle: 'Building a sustainable society through environmental care and infrastructure development.', heroGradient: 'from-yellow-100 via-cream to-lime-100',
    overview: ['This business spans collection, recycling, and treatment of industrial and general waste, as well as civil engineering and construction work.','We provide high-quality services through advanced technologies and expertise, aiming to create a recycling-oriented society and safe, comfortable living environments.'],
    servicesLabel: 'Service Details',
    services: [
      { title: 'Industrial Waste Collection & Treatment', description: 'We provide appropriate industrial waste treatment with close attention to environmental responsibility.', points: ['Waste collection', 'Sorting and selection', 'Proper treatment', 'Compliance with standards', 'Promotion of recycling'], icon: '♻️' },
      { title: 'General Waste Collection & Treatment', description: 'We handle general waste properly to protect sanitary conditions in local communities.', points: ['Garbage collection', 'Sorting guidance', 'Facility operation', 'Hygiene management', 'Community service'], icon: '🗑️' },
      { title: 'Waste Recycling & Regeneration', description: 'We treat waste as a resource and contribute to a circular economy.', points: ['Resource recovery', 'Reuse', 'New product development', 'Environmental preservation', 'Cost reduction'], icon: '🌱' },
      { title: 'Civil Engineering & Construction', description: 'We deliver safe and high-quality civil engineering and construction work.', points: ['Civil engineering', 'Building construction', 'Renovation work', 'Environmental development', 'Project management'], icon: '🏗️' },
    ],
    featureTitle: 'Quality and Safety Initiatives',
    featureItems: [
      { title: 'Safety Management', description: 'We maintain a rigorous safety management system to prevent accidents.' },
      { title: 'Staff Training', description: 'We conduct regular safety training and skills programs.' },
      { title: 'Quality Control', description: 'We maintain high quality standards across every project.' },
      { title: 'Routine Inspections', description: 'We conduct routine inspections of facilities and equipment to ensure safety.' },
    ],
    ctaTitle: 'Questions or inquiries are always welcome.', ctaButton: 'Contact Us',
  },
  zh: {
    heroTitle: '环境与建设相关业务', heroSubtitle: '通过环境保护与基础建设，助力可持续社会。', heroGradient: 'from-yellow-100 via-cream to-lime-100',
    overview: ['该业务涵盖产业废弃物与一般废弃物的收集、再生与处理，以及土木建筑工程。','凭借先进技术与高专业度人才，我们提供高质量服务，推动循环型社会与安全舒适生活环境的实现。'],
    servicesLabel: '服务内容',
    services: [
      { title: '产业废弃物收集与处理', description: '以环保为前提，实现适当的产业废弃物处理。', points: ['废弃物收集', '分类与筛选', '适当处理', '遵守环境标准', '推进回收利用'], icon: '♻️' },
      { title: '一般废弃物收集与处理', description: '为维护地区卫生环境，进行适当的一般废弃物处理。', points: ['垃圾收集', '分类指导', '处理设施运营', '卫生管理', '社区服务'], icon: '🗑️' },
      { title: '废弃物再生与回收', description: '将废弃物作为资源利用，为循环型社会作出贡献。', points: ['资源化', '再利用', '新产品开发', '环境保护', '成本削减'], icon: '🌱' },
      { title: '土木与建筑工程', description: '提供安全且高质量的土木与建筑工程。', points: ['土木工程', '建筑工程', '改修工程', '环境整备', '项目管理'], icon: '🏗️' },
    ],
    featureTitle: '品质与安全举措',
    featureItems: [
      { title: '安全管理体系', description: '建立严格的安全管理体系，致力于防止事故发生。' },
      { title: '员工培训', description: '定期开展安全培训与技能讲习。' },
      { title: '品质管理', description: '在所有工程中维持高品质标准。' },
      { title: '定期检查', description: '对设施与设备实施定期检查，确保安全。' },
    ],
    ctaTitle: '如有疑问或咨询，欢迎随时联系我们。', ctaButton: '联系我们',
  },
}

export default function ConstructionPage() {
  const { language } = useLanguage()
  return <BusinessDetailPage content={CONSTRUCTION_CONTENT[language]} />
}
