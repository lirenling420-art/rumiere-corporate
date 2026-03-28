'use client'

import {
  Sparkles,
  ShoppingBag,
  Truck,
  Users,
  Wrench,
  Building2,
  Palette,
} from 'lucide-react'

interface BusinessIconProps {
  category: 'beauty' | 'lifestyle' | 'transport' | 'hr' | 'auto' | 'construction' | 'culture'
  size?: number
  className?: string
}

export function BusinessIcon({ category, size = 24, className = '' }: BusinessIconProps) {
  const iconProps = {
    size,
    className: `text-charcoal/70 ${className}`,
    strokeWidth: 1.5,
  }

  const icons = {
    beauty: <Sparkles {...iconProps} />,
    lifestyle: <ShoppingBag {...iconProps} />,
    transport: <Truck {...iconProps} />,
    hr: <Users {...iconProps} />,
    auto: <Wrench {...iconProps} />,
    construction: <Building2 {...iconProps} />,
    culture: <Palette {...iconProps} />,
  }

  return icons[category]
}

export function BusinessIconLarge({ category, className = '' }: Omit<BusinessIconProps, 'size'>) {
  return <BusinessIcon category={category} size={48} className={className} />
}
