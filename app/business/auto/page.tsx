'use client'

import BusinessDetailPage from '@/components/BusinessDetailPage'
import { useLanguage, LanguageContent } from '@/contexts/LanguageContext'

const AUTO_CONTENT: LanguageContent<Parameters<typeof BusinessDetailPage>[0]['content']> = {
  ja: {
    heroTitle: '自動車関連事業',
    heroSubtitle: '買取から販売、整備まで、自動車のすべてをサポートします',
    heroGradient: 'from-slate-100 via-cream to-gray-100',
    overview: [
      '自動車関連事業では、中古自動車の買取及び販売から、自動車の整備、鈑金、塗装まで、自動車に関するあらゆるサービスを提供しています。',
      '最新の診断機器と経験豊富なスタッフにより、お客様の大切なお車を最適な状態に保つことをお約束します。',
    ],
    servicesLabel: 'サービス内容',
    services: [
      { title: '中古自動車の買取', description: '適正な査定と迅速な買取で、お客様の大切なお車を高く評価します。', points: ['無料査定', '迅速な買取', '全車種対応', '出張査定対応', '即日現金払い'], icon: '💰' },
      { title: '中古自動車の販売', description: '厳選された良質な中古車を、適正価格でご提供します。', points: ['品質検査済み', '保証付き', '全国配送対応', 'ローン対応', 'アフターサービス'], icon: '🚗' },
      { title: '自動車整備', description: '最新の診断機器と経験豊富な整備士による、確実な整備サービスです。', points: ['定期点検', '車検対応', 'エンジン整備', 'ブレーキ整備', 'タイヤ交換'], icon: '🔧' },
      { title: '鈑金・塗装', description: '事故車や傷の修復を、高い技術で実現します。', points: ['事故修復', 'キズ修復', '全塗装', '部分塗装', 'カスタムペイント'], icon: '🎨' },
    ],
    featureTitle: '買取から販売までの流れ',
    featureItems: [
      { title: '無料査定', description: 'お客様のお車を無料で査定いたします。出張査定にも対応しています。' },
      { title: '買取契約', description: '査定結果にご納得いただければ、買取契約を締結いたします。' },
      { title: '整備・検査', description: '買い取ったお車を整備し、複数の検査項目をクリアさせます。' },
      { title: '販売', description: '良質な中古車として、適正価格で販売いたします。' },
      { title: 'アフターサービス', description: '販売後も、定期点検やメンテナンスでサポートいたします。' },
    ],
    ctaTitle: 'ご質問やご相談はお気軽に',
    ctaButton: 'お問い合わせ',
  },
  en: {
    heroTitle: 'Automotive Business',
    heroSubtitle: 'Supporting every stage from vehicle purchasing to sales and maintenance.',
    heroGradient: 'from-slate-100 via-cream to-gray-100',
    overview: [
      'Our automotive business covers everything from used car purchasing and sales to maintenance, bodywork, and painting services.',
      'With modern diagnostic equipment and experienced staff, we help keep every vehicle in optimal condition.',
    ],
    servicesLabel: 'Service Details',
    services: [
      { title: 'Used Car Purchasing', description: 'We assess and purchase valuable vehicles quickly and fairly.', points: ['Free appraisal', 'Quick purchase', 'All vehicle types', 'On-site appraisal', 'Same-day cash payment'], icon: '💰' },
      { title: 'Used Car Sales', description: 'We offer carefully selected quality used vehicles at appropriate prices.', points: ['Quality inspected', 'Warranty included', 'Nationwide delivery', 'Loan support', 'After-sales care'], icon: '🚗' },
      { title: 'Vehicle Maintenance', description: 'Reliable maintenance delivered by experienced technicians using modern diagnostic tools.', points: ['Regular inspection', 'Vehicle inspection support', 'Engine service', 'Brake service', 'Tire replacement'], icon: '🔧' },
      { title: 'Bodywork & Painting', description: 'We restore accident damage and scratches with refined technical skill.', points: ['Accident repair', 'Scratch repair', 'Full repaint', 'Partial repaint', 'Custom paint'], icon: '🎨' },
    ],
    featureTitle: 'Flow from Purchase to Sales',
    featureItems: [
      { title: 'Free Appraisal', description: 'We provide free vehicle appraisals and on-site assessment support.' },
      { title: 'Purchase Agreement', description: 'If you are satisfied with the appraisal, we proceed with the purchase agreement.' },
      { title: 'Maintenance & Inspection', description: 'Purchased vehicles are serviced and carefully inspected across multiple checkpoints.' },
      { title: 'Sales', description: 'Qualified used vehicles are offered at appropriate prices.' },
      { title: 'After-Sales Support', description: 'We continue to support customers through inspections and maintenance after purchase.' },
    ],
    ctaTitle: 'Questions or inquiries are always welcome.',
    ctaButton: 'Contact Us',
  },
  zh: {
    heroTitle: '汽车相关业务',
    heroSubtitle: '从收购到销售与维修，全方位支持车辆相关需求。',
    heroGradient: 'from-slate-100 via-cream to-gray-100',
    overview: [
      '汽车相关业务涵盖二手车收购与销售，以及维修、钣金、喷漆等各类汽车服务。',
      '借助先进诊断设备与经验丰富的员工，我们帮助客户的重要车辆保持最佳状态。',
    ],
    servicesLabel: '服务内容',
    services: [
      { title: '二手车收购', description: '通过合理评估与快速收购，高度评价客户的重要车辆。', points: ['免费估价', '快速收购', '支持全部车型', '支持上门估价', '当天现金支付'], icon: '💰' },
      { title: '二手车销售', description: '我们以合理价格提供精挑细选的优质二手车。', points: ['已完成品质检查', '附带保修', '全国配送', '贷款支持', '售后服务'], icon: '🚗' },
      { title: '车辆维修', description: '由经验丰富的维修技师和先进设备提供可靠维修服务。', points: ['定期检查', '年检支持', '发动机维护', '刹车维护', '轮胎更换'], icon: '🔧' },
      { title: '钣金与喷漆', description: '以高水平技术修复事故车和划痕。', points: ['事故修复', '划痕修复', '全车喷漆', '局部喷漆', '定制喷涂'], icon: '🎨' },
    ],
    featureTitle: '从收购到销售的流程',
    featureItems: [
      { title: '免费估价', description: '我们可免费为您的车辆进行估价，也支持上门估价。' },
      { title: '签订收购合同', description: '如您认同估价结果，我们将进入收购签约流程。' },
      { title: '整备与检查', description: '收购后的车辆会经过整备，并通过多项检查项目。' },
      { title: '销售', description: '作为高品质二手车，以合理价格销售。' },
      { title: '售后服务', description: '销售之后也将通过定期检查与维护持续提供支持。' },
    ],
    ctaTitle: '如有疑问或咨询，欢迎随时联系我们。',
    ctaButton: '联系我们',
  },
}

export default function AutoPage() {
  const { language } = useLanguage()
  return <BusinessDetailPage content={AUTO_CONTENT[language]} />
}
