"use client"

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FloatingCard = ({ title, value, bottomText, position, delay, valueColor = "text-white" }: any) => {
  const [count, setCount] = useState(0)
  const targetValue = parseInt(value.replace(/[^0-9]/g, ''))
  const isCurrency = value.includes('$')

  useEffect(() => {
    if (targetValue === 0) return

    let start = 0
    const end = targetValue
    const duration = 1500
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [targetValue])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: [0, position.yOffset, 0],
      }}
      transition={{
        opacity: { duration: 0.8, delay },
        y: {
          duration: position.floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.8
        }
      }}
      style={{
        left: position.left,
        right: position.right,
        top: position.top,
      }}
      className="absolute hidden lg:block z-20 w-[280px] bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-2xl p-6 shadow-2xl"
    >
      <p className="text-[12px] text-[#A0AEC0] uppercase tracking-[0.1em] mb-2">{title}</p>
      <p className={`text-3xl font-semibold mb-1 ${valueColor}`}>
        {isCurrency ? `$${count.toFixed(2)}` : count.toLocaleString()}
      </p>
      <p className="text-[14px] text-[#A0AEC0]">{bottomText}</p>
    </motion.div>
  )
}

const Particle = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ 
        y: [0, 800],
        opacity: [0, 0.08, 0]
      }}
      transition={{
        duration: 20 + Math.random() * 10,
        repeat: Infinity,
        ease: "linear",
        delay: delay
      }}
      className="absolute w-1 h-1 bg-white rounded-full pointer-events-none"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * -10}%`
      }}
    />
  )
}

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('onboarding-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A0E27] to-[#1a1f3a] px-6 sm:px-8 lg:px-20">
      {/* Dot Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Particle key={i} delay={i * 1.5} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-[36px] sm:text-[48px] lg:text-[72px] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-8"
        >
          50,000 impressions. <br className="hidden sm:block" /> $0 earned.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-[18px] sm:text-[20px] lg:text-[24px] text-[#A0AEC0] leading-[1.5] max-w-[600px] mx-auto"
        >
          If you have an audience but can't monetize it, we built this for you.
        </motion.p>
      </div>

      {/* Floating Stats Cards - Desktop Only */}
      <FloatingCard 
        title="Your Impressions"
        value="52,847"
        bottomText="Real people saw this"
        position={{ left: '10%', top: '25%', yOffset: -15, floatDuration: 4 }}
        delay={0.4}
      />

      <FloatingCard 
        title="You Earned"
        value="$0.00"
        bottomText="That's the problem"
        position={{ right: '10%', top: '45%', yOffset: 12, floatDuration: 5 }}
        delay={0.6}
        valueColor="text-[#FF4D4D]"
      />

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-[#A0AEC0] hover:text-white transition-colors cursor-pointer group"
        >
          <span className="text-[14px] font-medium tracking-wide">See how it works</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}
