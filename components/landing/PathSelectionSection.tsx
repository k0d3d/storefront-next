"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Megaphone, Star, CheckCircle2, ChevronRight } from 'lucide-react'

const FeatureItem = ({ text, color }: { text: string, color: string }) => (
  <div className="flex items-center gap-3">
    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}26` }}>
      <CheckCircle2 size={12} style={{ color }} />
    </div>
    <span className="text-[#E2E8F0] text-[15px] font-medium">{text}</span>
  </div>
)

const SelectionCard = ({ 
  type, 
  title, 
  description, 
  features, 
  buttonText, 
  icon: Icon, 
  color, 
  secondaryColor,
  delay,
  side,
  onSelect
}: any) => {
  const isLeft = side === 'left'

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="group relative w-full lg:w-[534px] h-[480px] rounded-[24px] border overflow-hidden transition-all duration-400 cubic-bezier(0.4, 0, 0.2, 1) hover:-translate-y-2"
      style={{
        background: `linear-gradient(135deg, ${color}1F, ${secondaryColor}14)`,
        borderColor: `${color}4D`,
      }}
    >
      {/* Decorative Blob */}
      <div 
        className="absolute -top-[60px] -right-[60px] w-[200px] h-[200px] opacity-15 blur-[40px] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${color}, transparent)` }}
      />

      {/* Role Badge */}
      <div 
        className="absolute top-6 left-6 px-[14px] py-[6px] rounded-full border text-[11px] font-semibold uppercase tracking-[0.1em]"
        style={{ 
          backgroundColor: `${color}33`, 
          borderColor: `${color}66`,
          color: isLeft ? '#A78BFF' : '#6DF4FF'
        }}
      >
        FOR {type === 'advertiser' ? 'BRANDS' : 'CREATORS'}
      </div>

      <div className="flex flex-col items-center h-full pt-18 px-10 pb-8">
        {/* Icon Container */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[100px] h-[100px] rounded-full flex items-center justify-center mb-8 shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${color}, ${secondaryColor})`,
            boxShadow: `0 12px 32px ${color}66`
          }}
        >
          <Icon size={48} className="text-white" />
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-5 text-center">
          {title}
        </h3>

        <p className="text-[#CBD5E0] text-[17px] leading-relaxed text-center mb-8 max-w-[420px]">
          {description}
        </p>

        <div className="flex flex-col gap-3 w-full max-w-[320px] mb-auto">
          {features.map((f: string, i: number) => (
            <FeatureItem key={i} text={f} color={color} />
          ))}
        </div>

        <button
          onClick={() => onSelect(type)}
          className="w-full max-w-[280px] h-[52px] rounded-[12px] text-white font-semibold text-base transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] active:translate-y-[-1px] active:scale-[0.98] cursor-pointer"
          style={{
            background: `linear-gradient(135deg, ${color}, ${secondaryColor})`,
            boxShadow: `0 8px 20px ${color}59`
          }}
        >
          {buttonText}
        </button>
      </div>

      {/* Hover State Card Glow */}
      <div 
        className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          boxShadow: `0 16px 48px ${color}40`,
          borderColor: `${color}80`
        }}
      />
    </motion.div>
  )
}

export default function PathSelectionSection() {
  const [name, setName] = useState('')

  const handleChoice = (role: 'advertiser' | 'creator') => {
    if (name.trim()) {
      localStorage.setItem('userName', name.trim())
    }
    
    const appRole = role === 'advertiser' ? 'ADVERTISER' : 'CREATOR'
    const appUrl = `https://app.merchpaddie.store/dashboard?tour=true&role=${appRole}`
    
    window.location.href = appUrl
  }

  const handleSkip = () => {
    const nextSection = document.getElementById('problem-section') || document.getElementById('live-proof-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="path-selection" className="relative min-h-screen w-full bg-[#0f1419] py-20 lg:py-24 px-6 sm:px-8 lg:px-20 overflow-hidden">
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-[1200px] mx-auto flex flex-col items-center relative z-10">
        
        {/* Personalization Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full max-w-[520px] bg-white/[0.06] border border-white/[0.12] backdrop-blur-[16px] rounded-[20px] p-10 mb-20 shadow-2xl"
        >
          {/* Social Proof Badge */}
          <div className="absolute -top-4 -left-4 bg-gradient-to-br from-[#6B46FF] to-[#8B5FFF] px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <div className="flex">
              <div className="w-3 h-3 rounded-full bg-[#00D9FF]" />
              <div className="w-3 h-3 rounded-full bg-[#00FF88] -ml-1.5" />
              <div className="w-3 h-3 rounded-full bg-[#FFD600] -ml-1.5" />
            </div>
            <span className="text-white text-[11px] font-bold tracking-[0.1em] uppercase">
              1,847+ ALREADY EARNING
            </span>
          </div>

          <div className="mt-2">
            <p className="text-[#A0AEC0] text-sm tracking-[0.02em] mb-3">
              Quick question before we get started...
            </p>
            <h2 className="text-[26px] lg:text-[32px] font-bold text-white mb-8 leading-tight">
              What should we call you?
            </h2>

            <div className="space-y-2 mb-4">
              <label className="block text-[#A0AEC0] text-[11px] font-semibold uppercase tracking-[0.12em]">
                YOUR NAME
              </label>
              <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type it here"
                className="w-full h-14 bg-white/[0.04] border border-white/[0.12] rounded-[12px] px-5 text-white text-base outline-none focus:border-[#6B46FF] focus:ring-4 focus:ring-[#6B46FF]/15 transition-all placeholder:text-white/30"
              />
            </div>

            <button 
              onClick={handleSkip}
              className="w-full flex items-center justify-center gap-2 h-[46px] border border-white/[0.08] rounded-[10px] text-[#718096] text-sm font-medium hover:bg-white/[0.04] hover:border-white/[0.12] transition-all cursor-pointer group"
            >
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              Skip for now
            </button>

            <p className="mt-4 text-[#718096] text-[13px] italic text-center">
              We'll use this to personalize your experience.
            </p>
          </div>
        </motion.div>

        {/* Path Selection Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 max-w-[1100px] w-full mb-16">
          <SelectionCard 
            type="advertiser"
            title="Advertiser / Brand"
            description="Launch ad campaigns, reach real audiences. Pay for verified impressions and clicks."
            features={[
              "Upload campaigns in 2 minutes",
              "Track real-time performance",
              "Transparent pricing"
            ]}
            buttonText="I'm an Advertiser"
            icon={Megaphone}
            color="#6B46FF"
            secondaryColor="#8B5FFF"
            delay={0.8}
            side="left"
            onSelect={handleChoice}
          />

          <SelectionCard 
            type="creator"
            title="Creator / Promoter"
            description="Earn from your reach—promote campaigns, get paid for impressions and clicks."
            features={[
              "No minimum followers required",
              "Choose campaigns you like",
              "Get paid per interaction"
            ]}
            buttonText="I'm a Creator"
            icon={Star}
            color="#00D9FF"
            secondaryColor="#00FF88"
            delay={0.8}
            side="right"
            onSelect={handleChoice}
          />
        </div>

        {/* Bottom Helper Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-[#718096] text-sm text-center mb-12"
        >
          Not sure yet? You can explore both sides anytime.
        </motion.p>

        {/* Progress Indicator */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#6B46FF] shadow-[0_0_0_4px_rgba(107,70,255,0.2)]" />
            <div className="w-2 h-2 rounded-full bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-white/30" />
          </div>
          <div className="flex justify-between w-32 mt-1">
            <span className="text-[10px] font-bold text-[#718096] uppercase">FIRST STEP</span>
            <span className="text-[10px] font-bold text-[#718096] uppercase opacity-40">FINAL STEP</span>
          </div>
        </div>

      </div>
    </section>
  )
}
