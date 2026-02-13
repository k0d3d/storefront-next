"use client"

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Store, Megaphone, CheckCircle } from 'lucide-react'

export default function PersonalizedValueSection() {
  const [name, setName] = useState('')
  const [journey, setJourney] = useState<'Vendor' | 'Creator' | 'Guest' | null>(null)
  const [mounted, setMounted] = useState(false)

  // Stable random values for particles
  const particles = useMemo(() => {
    return [...Array(20)].map(() => ({
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 5,
      moveY: -100 + Math.random() * 50
    }))
  }, [])

  useEffect(() => {
    setMounted(true)
    
    const loadState = () => {
      const storedName = localStorage.getItem('userName') || ''
      const storedJourney = localStorage.getItem('userJourney') as 'Vendor' | 'Creator' | 'Guest' || 'Guest'
      setName(storedName)
      setJourney(storedJourney)
    }

    loadState()

    const handleStorageChange = () => loadState()
    const handleCustomUpdate = () => loadState()

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('onboarding-update', handleCustomUpdate)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('onboarding-update', handleCustomUpdate)
    }
  }, [])

  const handleNext = () => {
    // Scroll to the next section (ProblemSection or similar)
    const nextSection = document.getElementById('problem-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  // Default to Vendor view if Guest or null, just to show something, or handle empty state.
  // Ideally, this section should only be visible if a choice is made.
  // But for the landing page flow, we might want a default.
  // Let's assume 'Vendor' as default if not Creator.
  const isCreator = journey === 'Creator'
  const accentColor = isCreator ? '#D4F238' : '#FF4E8C'
  const gradient = isCreator 
    ? 'from-[#D4F238] to-[#F76707]' // Lime to Orange
    : 'from-[#FF4E8C] to-[#FF6B35]' // Pink to Orange
  
  const bgGradient = isCreator
    ? 'from-[#1A210B] to-[#0F0F0F]'
    : 'from-[#1A0B10] to-[#0F0F0F]'

  return (
    <section 
      id="personalized-value-section"
      className={`relative z-10 py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-1000 bg-gradient-to-b ${bgGradient}`}
    >
        {/* Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute text-white/5 font-bold select-none"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                    }}
                    animate={{ 
                        y: [0, p.moveY],
                        opacity: [0, 0.1, 0]
                    }}
                    transition={{ 
                        duration: p.duration, 
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay
                    }}
                >
                    $
                </motion.div>
            ))}
        </div>

      {/* Progress Bar */}
      <div className="w-full max-w-4xl mb-12 relative z-20">
        <div className="flex justify-between items-center text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
          <span className="bg-white/10 px-3 py-1 rounded-full">Step 3 of 4</span>
          <span className="bg-white/10 px-3 py-1 rounded-full">Almost There</span>
        </div>
        <div className="relative h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: '33%' }}
                whileInView={{ width: '75%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FF4E8C] to-[#FFD23F]"
            />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Illustration (Desktop Left / Mobile Top) */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`order-1 ${isCreator ? 'lg:order-2' : 'lg:order-1'} flex justify-center`}
            >
                <div className="relative w-full max-w-md aspect-square">
                    {/* Placeholder Illustration */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 blur-[100px] rounded-full`} />
                    <div className="relative h-full w-full bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm p-8 flex items-center justify-center shadow-2xl">
                         {isCreator ? (
                            <Megaphone size={120} className="text-[#D4F238] drop-shadow-[0_0_15px_rgba(212,242,56,0.5)]" />
                         ) : (
                             <Store size={120} className="text-[#FF4E8C] drop-shadow-[0_0_15px_rgba(255,78,140,0.5)]" />
                         )}
                         {/* Floating Elements */}
                         <motion.div 
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20"
                         >
                             <div className="text-2xl">💰</div>
                         </motion.div>
                         <motion.div 
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20"
                         >
                             <div className="text-2xl">🔥</div>
                         </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Content Card */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`order-2 ${isCreator ? 'lg:order-1' : 'lg:order-2'}`}
            >
                <div 
                    className="rounded-3xl p-1 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl backdrop-blur-xl"
                    style={{
                        boxShadow: `0 0 40px ${isCreator ? 'rgba(212, 242, 56, 0.1)' : 'rgba(255, 78, 140, 0.1)'}`
                    }}
                >
                    <div className="bg-[#0F0F0F]/90 rounded-[22px] p-8 md:p-12 h-full border border-white/5 relative overflow-hidden">
                        {/* Glow effect inside card */}
                        <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${gradient}`} />
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            Got it{name ? `, ${name}` : ''}!
                        </h2>
                        <p className="text-white/60 text-lg mb-8">
                            Here&apos;s your fast track to earning...
                        </p>

                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                {isCreator ? 'Your Creator Fast Track' : 'Your Vendor Fast Track'}
                            </h3>
                            
                            <ul className="space-y-4">
                                {(isCreator ? [
                                    "Earn from reach—promote drops, get paid impressions/clicks/sales.",
                                    "AI tools for Status/Channel posts, auto-tracking.",
                                    "Start new or pro: $MOENY or real USDC payouts.",
                                    "Top promoters averaging $41k/month."
                                ] : [
                                    "Launch stores in 60 seconds—no inventory risk.",
                                    "AI designs products, community votes drive sales.",
                                    "Real or virtual: SOL/USDC or $10k $MOENY funded.",
                                    "Earn from day one—top vendors hit $127k/week."
                                ]).map((item, idx) => (
                                    <motion.li 
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + idx * 0.1 }}
                                        className="flex items-start gap-3 text-white/80"
                                    >
                                        <CheckCircle className={`shrink-0 mt-1 w-5 h-5`} style={{ color: accentColor }} />
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                             <button
                                onClick={handleNext}
                                className={`w-full py-4 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]`}
                                style={{
                                    background: isCreator ? 'linear-gradient(90deg, #D4F238 0%, #a3d900 100%)' : 'linear-gradient(90deg, #FF4E8C 0%, #FF6B35 100%)',
                                    color: isCreator ? 'black' : 'white',
                                    boxShadow: `0 10px 30px ${isCreator ? 'rgba(212, 242, 56, 0.3)' : 'rgba(255, 78, 140, 0.3)'}`
                                }}
                            >
                                Next <ArrowRight size={18} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="text-sm text-white/30 hover:text-white/60 transition-colors"
                            >
                                Show me everything
                            </button>
                        </div>

                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}