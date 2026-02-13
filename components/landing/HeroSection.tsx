"use client"

import type { CSSProperties } from 'react'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

const HEADLINE_TEXT = 'Creators and builders: Build your merch empire — starting now.'

export default function HeroSection() {
  const headlineWords = HEADLINE_TEXT.split(' ')

  return (
    <section className="sticky top-0 z-0 min-h-screen flex items-center overflow-hidden bg-[#0A0E1A]" id="heroSection">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Geometric lines placeholder */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_48%,#fff_49%,#fff_51%,transparent_52%)] bg-[length:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1
            className="hero-headline cool font-bold text-4xl md:text-7xl leading-[1.1] text-white mb-8"
          >
            {headlineWords.map((word, index) => (
              <span
                key={index}
                data-text={word}
                style={{ '--cool-index': index + 1 } as CSSProperties}
              >
                {word}
                {index !== headlineWords.length - 1 ? ' ' : ''}
              </span>
            ))}
          </h1>

          {/* Subhead */}
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-2xl">
            Launch in 60 seconds. AI designs, community drives sales, real earnings from day one.
          </p>

          {/* Scroll indicator */}
        </div>
      </div>
      <div className="scroll-indicator flex flex-col items-center gap-2 text-white/50 text-lg absolute bottom-10 left-1/2 -translate-x-1/2">
        <span>Scroll to begin</span>
        <ArrowDown size={24} />
      </div>
    </section>
  )
}
