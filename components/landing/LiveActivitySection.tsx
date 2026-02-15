"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Rocket, Eye, DollarSign, Clock, ShieldCheck, TrendingUp, Lock, Zap, PlayCircle } from 'lucide-react'

const StatItem = ({ label, value, color, delay }: any) => {
  const [count, setCount] = useState(0)
  const targetValue = parseFloat(value.replace(/[^0-9.]/g, ''))
  const isCurrency = value.includes('$')
  const suffix = value.replace(/[0-9.$]/g, '')

  useEffect(() => {
    let start = 0
    const end = targetValue
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [targetValue])

  return (
    <div className="flex flex-col items-center text-center px-8">
      <p className={`text-[36px] font-bold leading-none mb-2`} style={{ color }}>
        {isCurrency ? '$' : ''}{count % 1 === 0 ? count : count.toFixed(1)}{suffix}
      </p>
      <p className="text-[13px] font-medium text-[#A0AEC0] uppercase tracking-[0.08em] whitespace-nowrap">
        {label}
      </p>
    </div>
  )
}

const CreatorItem = ({ rank, handle, avatarColor, total, weekly, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="group h-[72px] bg-white/[0.02] border border-white/[0.06] rounded-2xl px-5 flex items-center justify-between transition-all duration-300 hover:bg-white/[0.06] hover:translate-x-1 hover:border-white/[0.12]"
  >
    <div className="flex items-center gap-4">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold
        ${rank === 1 ? 'bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-white shadow-lg' : 
          rank === 2 ? 'bg-gradient-to-br from-[#C0C0C0] to-[#808080] text-white' :
          rank === 3 ? 'bg-gradient-to-br from-[#CD7F32] to-[#A0522D] text-white' :
          'bg-white/10 text-[#A0AEC0]'}`}
      >
        {rank === 1 ? '👑' : rank}
      </div>
      <div className="w-11 h-11 rounded-full border-2 border-white/10 overflow-hidden" style={{ background: avatarColor }} />
      <div className="flex items-center gap-2">
        <span className="text-white font-semibold">{handle}</span>
        {rank <= 3 && <span className="text-[#FFA500] text-[12px] font-medium">🔥 Hot</span>}
      </div>
    </div>
    <div className="text-right">
      <p className="text-[18px] font-bold text-[#00FF88]">${total.toLocaleString()}</p>
      <div className="inline-block bg-[#00FF881A] px-2.5 py-1 rounded-lg mt-1">
        <p className="text-[14px] font-medium text-[#00FF88]">+{weekly.toLocaleString()}</p>
      </div>
    </div>
  </motion.div>
)

const CampaignCard = ({ image, title, views, payout, time, category }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 transition-all duration-300 hover:bg-white/[0.06] hover:scale-[1.02] hover:border-[#6B46FF4D]"
  >
    <div className="relative h-40 rounded-xl overflow-hidden mb-4">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-semibold text-white uppercase">
        {category}
      </div>
    </div>
    <h4 className="text-[17px] font-bold text-white mb-3 leading-tight">{title}</h4>
    <div className="flex gap-4 mb-4">
      <div className="flex items-center gap-1.5 text-[#A0AEC0]">
        <Eye size={14} />
        <span className="text-[13px] font-medium">{views}</span>
      </div>
      <div className="flex items-center gap-1.5 text-[#00FF88]">
        <DollarSign size={14} />
        <span className="text-[13px] font-medium">{payout}</span>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5 text-[#718096]">
        <Clock size={14} className="text-[#00D9FF]" />
        <span className="text-[12px] font-medium">Posted {time}</span>
      </div>
      <button className="bg-[#6B46FF26] border border-[#6B46FF4D] px-3.5 py-1.5 rounded-lg text-[12px] font-bold text-[#A78BFF] hover:bg-[#6B46FF40] transition-colors cursor-pointer">
        Promote
      </button>
    </div>
  </motion.div>
)

const TrustBadge = ({ icon: Icon, text, color, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="w-[180px] h-20 bg-white/[0.03] border border-white/[0.08] rounded-xl flex flex-col items-center justify-center p-4 hover:bg-white/[0.06] hover:-translate-y-1 transition-all"
  >
    <Icon size={32} className="mb-1" style={{ color }} />
    <span className="text-[#E2E8F0] text-[14px] font-semibold text-center">{text}</span>
  </motion.div>
)

const INITIAL_CREATORS = [
  { rank: 1, handle: "@cryptoqueen", total: 127840, weekly: 18420, color: "#6B46FF" },
  { rank: 2, handle: "@nftking", total: 104230, weekly: 15670, color: "#00D9FF" },
  { rank: 3, handle: "@degenartist", total: 98650, weekly: 12340, color: "#00FF88" },
  { rank: 4, handle: "@moonboi", total: 87420, weekly: 9820, color: "#FFA500" },
  { rank: 5, handle: "@vibecheck", total: 76530, weekly: 8740, color: "#FF4E8C" },
  { rank: 6, handle: "@stacksondeck", total: 68920, weekly: 7650, color: "#8B5FFF" },
  { rank: 7, handle: "@hypemaster", total: 61240, weekly: 6890, color: "#00F0FF" },
  { rank: 8, handle: "@merchwizard", total: 54780, weekly: 6120, color: "#6366F1" },
]

const CAMPAIGNS = [
  { image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=400&h=250&auto=format&fit=crop", title: "Launch Your DeFi Protocol", views: "24K views", payout: "$0.08/click", time: "2h ago", category: "WEB3" },
  { image: "https://images.unsplash.com/photo-1620336655055-088d06e36bf0?q=80&w=400&h=250&auto=format&fit=crop", title: "Premium NFT Collection", views: "18K views", payout: "$0.12/click", time: "4h ago", category: "CRYPTO" },
  { image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=400&h=250&auto=format&fit=crop", title: "AI Trading Bot Beta", views: "42K views", payout: "$0.05/view", time: "6h ago", category: "AI TOOLS" },
]

export default function LiveActivitySection() {
  const [campaigns, setCampaigns] = useState(CAMPAIGNS)

  useEffect(() => {
    const interval = setInterval(() => {
      setCampaigns(prev => {
        const next = [...prev]
        const first = next.shift()!
        next.push(first)
        return next
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="live-activity" className="relative w-full bg-[#0a0d16] py-20 lg:py-32 px-6 sm:px-8 lg:px-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-gradient-radial from-[#6B46FF14] to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#00FF881A] border border-[#00FF884D] px-4 py-2 rounded-full mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
            <span className="text-[#00FF88] text-[12px] font-semibold tracking-[0.15em] uppercase">
              THIS IS HAPPENING RIGHT NOW
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[32px] sm:text-[38px] lg:text-[52px] font-bold text-white mb-6 leading-[1.15]"
          >
            Real people. Real earnings. Real results.
          </motion.h2>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-[900px] bg-white/[0.04] border border-white/[0.1] backdrop-blur-[12px] rounded-[20px] p-6 lg:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center mb-20"
        >
          <StatItem label="Impressions This Week" value="8.2M" color="#FFFFFF" />
          <div className="hidden md:block h-[60px] w-[1px] bg-white/10 mx-auto" />
          <StatItem label="Creator Earnings" value="$127K" color="#00FF88" />
          <div className="hidden md:block h-[60px] w-[1px] bg-white/10 mx-auto" />
          <StatItem label="Active Campaigns" value="342" color="#00D9FF" />
        </motion.div>

        {/* Dual Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 w-full mb-20 items-start">
          
          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-white/[0.04] border border-white/[0.1] rounded-[24px] p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <Trophy size={24} className="text-[#FFA500]" />
              <h3 className="text-2xl font-bold text-white">Top Creators This Week</h3>
            </div>
            <div className="flex flex-col gap-4">
              {INITIAL_CREATORS.map((creator, i) => (
                <CreatorItem key={creator.handle} {...creator} delay={0.1 * i} />
              ))}
            </div>
          </motion.div>

          {/* Campaigns Feed */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="lg:sticky lg:top-[120px] bg-white/[0.04] border border-white/[0.1] rounded-[24px] p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <Rocket size={24} className="text-[#00D9FF]" />
              <h3 className="text-2xl font-bold text-white">Live Campaigns</h3>
            </div>
            <div className="flex flex-col gap-5 overflow-hidden">
              <AnimatePresence mode="popLayout">
                {campaigns.slice(0, 3).map((camp, i) => (
                  <CampaignCard key={camp.title} {...camp} />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 max-w-[800px] w-full mb-24">
          <TrustBadge icon={ShieldCheck} text="Verified Payouts" color="#6B46FF" delay={1.0} />
          <TrustBadge icon={TrendingUp} text="Real-Time Tracking" color="#00D9FF" delay={1.1} />
          <TrustBadge icon={Lock} text="Secure Platform" color="#00FF88" delay={1.2} />
          <TrustBadge icon={Zap} text="Instant Approval" color="#FFA500" delay={1.3} />
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="relative w-full max-w-[900px] bg-gradient-to-br from-[#6B46FF26] to-[#00D9FF1A] border border-[#6B46FF4D] rounded-[32px] p-10 lg:p-16 overflow-hidden text-center"
        >
          {/* CTA Glows */}
          <div className="absolute -top-[100px] -right-[100px] w-[300px] h-[300px] bg-[#6B46FF] opacity-20 blur-[60px] pointer-events-none" />
          <div className="absolute -bottom-[80px] -left-[80px] w-[250px] h-[250px] bg-[#00D9FF] opacity-15 blur-[50px] pointer-events-none" />

          <h3 className="text-[28px] lg:text-[36px] font-bold text-white mb-4 relative z-10">
            Ready to start earning?
          </h3>
          <p className="text-[#CBD5E0] text-[18px] mb-10 relative z-10">
            Join 1,847+ creators already getting paid for their reach.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="h-14 px-10 bg-gradient-to-br from-[#6B46FF] to-[#8B5FFF] rounded-2xl text-white font-bold text-base shadow-[0_8px_24px_#6B46FF66] hover:-translate-y-1 hover:shadow-[0_12px_32px_#6B46FF80] transition-all cursor-pointer">
              Get Started Free
            </button>
            <button className="h-14 px-10 bg-white/5 border border-white/15 backdrop-blur-md rounded-2xl text-white font-bold text-base flex items-center justify-center gap-2 hover:bg-white/10 hover:-translate-y-1 transition-all cursor-pointer">
              <PlayCircle size={20} />
              Watch Demo
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
