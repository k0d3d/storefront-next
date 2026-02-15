"use client"

import { motion } from 'framer-motion'
import { Megaphone, Users, Coins, ShieldCheck, Zap, ChevronDown } from 'lucide-react'

const StepCard = ({ step, title, description, icon: Icon, color, delay, side }: any) => {
  const isLeft = side === 'left'
  const isRight = side === 'right'

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: isLeft ? -60 : isRight ? 60 : 0,
        y: !isLeft && !isRight ? 60 : 0 
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="relative group w-full lg:w-[360px] h-[400px] rounded-[24px] border backdrop-blur-[12px] p-8 flex flex-col items-center text-center transition-all duration-400 cubic-bezier(0.4, 0, 0.2, 1) hover:-translate-y-2"
      style={{
        backgroundColor: `${color}14`, // 0.08 opacity
        borderColor: `${color}4D`, // 0.3 opacity
      }}
    >
      {/* Icon Container */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay }}
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${color}, ${color}CC)`,
          boxShadow: `0 8px 24px ${color}66`
        }}
      >
        <Icon size={36} className="text-white" />
      </motion.div>

      <span className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-3" style={{ color }}>
        STEP {step}
      </span>

      <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
        {title}
      </h3>

      <p className="text-[#CBD5E0] text-base leading-relaxed px-4">
        {description}
      </p>

      {/* Hover State Glow */}
      <div 
        className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          boxShadow: `0 12px 40px ${color}40`,
          borderColor: `${color}99` // 0.6 opacity
        }}
      />
    </motion.div>
  )
}

const ConnectorArrow = ({ color1, color2, delay }: { color1: string, color2: string, delay: number }) => {
  return (
    <div className="hidden lg:flex items-center justify-center w-20 h-full relative -mx-2 z-0">
      <svg width="80" height="24" viewBox="0 0 80 24" fill="none" className="w-full">
        <defs>
          <linearGradient id={`grad-${color1}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color1} />
            <stop offset="100%" stopColor={color2} />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 12H78M78 12L70 4M78 12L70 20"
          stroke={`url(#grad-${color1})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 12H78"
          stroke={`url(#grad-${color1})`}
          strokeWidth="2"
          strokeDasharray="10 10"
          animate={{ strokeDashoffset: [-20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  )
}

const MobileConnector = ({ color1, color2, delay }: { color1: string, color2: string, delay: number }) => {
  return (
    <div className="lg:hidden flex justify-center py-4">
      <svg width="24" height="60" viewBox="0 0 24 60" fill="none">
        <motion.path
          d="M12 0V58M12 58L4 50M12 58L20 50"
          stroke={color1}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay }}
        />
      </svg>
    </div>
  )
}

const FeatureBox = ({ icon: Icon, title, text, color, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="flex-1 min-h-[160px] bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.08] transition-colors"
    >
      <Icon size={28} className="mb-4" style={{ color }} />
      <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
      <p className="text-[#A0AEC0] text-sm">{text}</p>
    </motion.div>
  )
}

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative min-h-screen w-full bg-gradient-to-b from-[#1a1f3a] to-[#0f1419] py-20 lg:py-32 px-6 sm:px-8 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[12px] font-semibold text-[#6B46FF] uppercase tracking-[0.15em] mb-4"
          >
            HOW IT WORKS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[32px] sm:text-[42px] lg:text-[56px] font-bold text-white mb-6 leading-[1.1]"
          >
            Connect. Promote. Earn.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[18px] lg:text-[20px] text-[#A0AEC0] leading-relaxed"
          >
            We match advertisers with creators who have real audiences. Everyone wins.
          </motion.p>
        </div>

        {/* Flow Diagram */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full mb-32">
          <StepCard 
            step="1"
            title="Advertisers Create"
            description="Upload campaign creative, set budget, choose between native card ads or full-screen formats. We approve and make it live."
            icon={Megaphone}
            color="#6B46FF"
            delay={0.6}
            side="left"
          />
          
          <ConnectorArrow color1="#6B46FF" color2="#00D9FF" delay={1.4} />
          <MobileConnector color1="#6B46FF" color2="#00D9FF" delay={0.8} />

          <StepCard 
            step="2"
            title="Creators Promote"
            description="Browse available campaigns. Pick what fits your audience. Post using ready-made content or create your own."
            icon={Users}
            color="#00D9FF"
            delay={0.9}
          />

          <ConnectorArrow color1="#00D9FF" color2="#00FF88" delay={1.7} />
          <MobileConnector color1="#00D9FF" color2="#00FF88" delay={1.1} />

          <StepCard 
            step="3"
            title="Track & Get Paid"
            description="Real-time tracking shows impressions and clicks. Creators earn per interaction. Payouts on demand."
            icon={Coins}
            color="#00FF88"
            delay={1.2}
            side="right"
          />
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-20">
          <FeatureBox 
            icon={ShieldCheck}
            title="No Bot Inflation"
            text="Track real impressions from real people"
            color="#6B46FF"
            delay={1.5}
          />
          <FeatureBox 
            icon={Zap}
            title="No Crazy Thresholds"
            text="Start earning from day one, no minimum followers"
            color="#00D9FF"
            delay={1.6}
          />
          <FeatureBox 
            icon={Coins}
            title="Fair Payouts"
            text="Transparent pricing, paid on demand"
            color="#00FF88"
            delay={1.7}
          />
        </div>

        {/* CTA Transition */}
        <div className="flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="text-[18px] font-semibold text-[#A0AEC0] mb-4"
          >
            Which side are you on?
          </motion.p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#6B46FF]"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>

      </div>
    </section>
  )
}
