"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Store, Megaphone } from 'lucide-react'

export default function BranchingSection() {
  const handleChoice = (choice: 'Vendor' | 'Creator') => {
    const role = choice === 'Vendor' ? 'ADVERTISER' : 'CREATOR'
    const appUrl = `https://app.merchpaddie.store/dashboard?tour=true&role=${role}`
    
    // Perform direct navigation
    window.location.href = appUrl
  }

  const handleSkip = () => {
    localStorage.setItem('userJourney', 'Guest')
    window.dispatchEvent(new Event('onboarding-update'))

    const nextSection = document.getElementById('problem-section') || document.getElementById('live-proof-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="branching-section" className="relative z-10 bg-[#0F0F0F] py-20 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Timeline */}
      <div className="w-full max-w-4xl mb-16 relative">
        <div className="flex justify-between items-center text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
          <span className="bg-white/10 px-3 py-1 rounded-full">First Step</span>
          <span className="bg-white/10 px-3 py-1 rounded-full">Final Step</span>
        </div>
        <div className="relative h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '33%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FF4E8C] to-[#FFD23F]"
            />
            {/* Glow dot */}
             <motion.div
                initial={{ left: 0 }}
                whileInView={{ left: '33%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-1/2 -translate-y-1/2 h-3 w-3 bg-[#FFD23F] rounded-full shadow-[0_0_10px_#FFD23F] z-10"
            />
        </div>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
        {/* Card 1: Intro */}
        <div className="bg-[#262626] rounded-3xl p-8 lg:p-10 shadow-xl border border-white/5 relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {/* Placeholder Illustration - Simple Circle */}
                <div className="w-32 h-32 rounded-full border-4 border-white/20"></div>
           </div>
           <div className="h-full flex flex-col justify-center relative z-10">
              <h3 className="text-4xl font-bold text-white mb-4 leading-tight">It&apos;s super simple</h3>
              <p className="text-white/60 text-lg leading-relaxed">Tell us a bit more—we&apos;ll show you the fastest way to start earning.</p>
           </div>
        </div>

        {/* Card 2: Vendor */}
        <div className="bg-[#0B1021] rounded-3xl p-8 lg:p-10 shadow-xl border border-blue-900/30 relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 flex flex-col">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Store size={120} className="text-blue-400" />
            </div>
            <div className="flex-grow relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">Vendor / Builder</h3>
                <p className="text-blue-100/60 text-base mb-8">Launch stores, sell products/services. Perfect if you&apos;re starting fresh or have something ready.</p>
            </div>
            <button
                onClick={() => handleChoice('Vendor')}
                className="w-full py-4 bg-gradient-to-r from-[#FF4E8C] to-[#FF6B35] text-white font-bold rounded-full shadow-lg shadow-[#FF4E8C]/30 hover:shadow-[#FF4E8C]/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 relative z-10 cursor-pointer"
            >
                I&apos;m a Vendor <ArrowRight size={18} />
            </button>
        </div>

        {/* Card 3: Creator */}
        <div className="bg-[#1A210B] rounded-3xl p-8 lg:p-10 shadow-xl border border-lime-900/30 relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-lime-900/20 transition-all duration-300 flex flex-col">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Megaphone size={120} className="text-lime-400" />
            </div>
             <div className="flex-grow relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">Creator / Promoter</h3>
                <p className="text-lime-100/60 text-base mb-8">Earn from reach—promote drops, get paid on impressions, clicks, and sales.</p>
            </div>
             <button
                onClick={() => handleChoice('Creator')}
                className="w-full py-4 bg-[#D4F238] text-black font-bold rounded-full shadow-lg shadow-[#D4F238]/30 hover:shadow-[#D4F238]/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 relative z-10 cursor-pointer"
            >
                I&apos;m a Creator <ArrowRight size={18} />
            </button>
        </div>
      </div>

      <button
        onClick={handleSkip}
        className="mt-12 text-white/30 hover:text-white/60 text-sm font-medium transition-colors underline decoration-white/10 hover:decoration-white/60 underline-offset-4 cursor-pointer"
      >
        Skip for now
      </button>

    </section>
  )
}
