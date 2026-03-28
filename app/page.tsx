import HeroSection from '@/components/HeroSection'
import ValuesSection from '@/components/ValuesSection'
import BusinessCategoriesSection from '@/components/BusinessCategoriesSection'
import BeautyHighlightSection from '@/components/BeautyHighlightSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <div className="bg-cream">
      <HeroSection />
      <ValuesSection />
      <BusinessCategoriesSection />
      <BeautyHighlightSection />
      <CTASection />
    </div>
  )
}
