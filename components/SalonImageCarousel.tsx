'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type SalonImageCarouselProps = {
  images: string[]
  intervalMs?: number
}

export default function SalonImageCarousel({
  images,
  intervalMs = 4000,
}: SalonImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [errored, setErrored] = useState<Record<number, boolean>>({})

  useEffect(() => {
    if (images.length <= 1) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, intervalMs)

    return () => clearInterval(timer)
  }, [images.length, intervalMs])

  const goTo = (index: number) => setActiveIndex(index)
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  const goNext = () => setActiveIndex((prev) => (prev + 1) % images.length)

  if (!images.length) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center text-center px-6 py-10 bg-gradient-to-br from-beige to-cream">
        <p className="text-charcoal font-serif text-lg mb-2">店舗外観・店内写真</p>
        <p className="text-soft-gray text-sm">画像準備中</p>
      </div>
    )
  }

  return (
    <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-xl">
      {images.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {!errored[idx] ? (
            <Image
              src={src}
              alt={`Beauty Salon Ryoko 店舗写真 ${idx + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              onError={() => setErrored((prev) => ({ ...prev, [idx]: true }))}
            />
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center text-center px-6 py-10 bg-gradient-to-br from-beige to-cream">
              <p className="text-charcoal font-serif text-lg mb-2">店舗外観・店内写真</p>
              <p className="text-soft-gray text-sm">画像準備中</p>
            </div>
          )}
        </div>
      ))}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-charcoal shadow-sm hover:bg-white"
            aria-label="前の写真"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-charcoal shadow-sm hover:bg-white"
            aria-label="次の写真"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/20 px-3 py-1.5 backdrop-blur-sm">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goTo(idx)}
                aria-label={`写真 ${idx + 1} を表示`}
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  idx === activeIndex ? 'bg-cream w-4' : 'bg-cream/60'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
