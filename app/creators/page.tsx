"use client"

import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Search, Link as LinkIcon, DollarSign, Wallet, Star, Share2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { useWaitlist } from '@/components/WaitlistContext'

export default function CreatorPage() {
  const { openWaitlist } = useWaitlist()
  
  // Sticky Timeline Logic
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"]
  })
  
  const [step, setStep] = useState(1)
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setStep(1)
    else if (latest < 0.5) setStep(2)
    else if (latest < 0.75) setStep(3)
    else setStep(4)
  })

  return (
    <div className="min-h-screen bg-warm-white font-sans text-foreground">
      <Navbar />

      <main>
        {/* 1. OPENING SCENE */}
        <section className="section-screen bg-gradient-to-br from-emerald-600 to-teal-800 text-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight"
            >
              What if your audience was your ATM?
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-emerald-100 font-medium"
            >
              ↓ Meet Alex
            </motion.div>
          </div>
        </section>

        {/* 2. MEET ALEX */}
        <section className="section-screen bg-white">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-4 block">Week 1</span>
              <h2 className="text-4xl font-bold mb-6">Alex had 50,000 followers.</h2>
              <p className="text-xl text-muted leading-relaxed mb-8">
                No way to turn them into money. Every post felt like leaving cash on the table.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-mono font-bold text-muted">$0</span>
                <span className="text-lg text-muted font-medium">revenue</span>
              </div>
            </div>
            <div className="bg-gray-100 rounded-3xl aspect-[9/16] w-64 mx-auto flex items-center justify-center border-4 border-gray-50 shadow-inner">
              <span className="text-gray-400 font-medium">Alex's Phone</span>
            </div>
          </div>
        </section>

        {/* 3. THE DISCOVERY */}
        <section className="section-screen bg-emerald-50/30">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 bg-white p-6 rounded-2xl shadow-xl max-w-sm mx-auto border border-gray-100">
              <div className="flex gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="h-3 w-24 bg-gray-200 rounded mb-1"></div>
                  <div className="h-2 w-16 bg-gray-100 rounded"></div>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="h-3 w-full bg-gray-100 rounded"></div>
                <div className="h-3 w-3/4 bg-gray-100 rounded"></div>
              </div>
              <div className="text-blue-500 text-sm font-medium mb-4">merchpaddie.store/link</div>
              <div className="bg-emerald-50 text-emerald-700 px-3 py-2 rounded-lg font-bold text-sm flex justify-between items-center">
                <span>Earnings</span>
                <span>+$50.00</span>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">He posted about 3 stores he liked.</h2>
              <p className="text-xl text-muted leading-relaxed mb-8">
                No hard sell. Just "I like this." That was it. He kept scrolling. The money just appeared.
              </p>
            </div>
          </div>
        </section>

        {/* 4. EARNINGS TIMELINE (STICKY) */}
        <section ref={timelineRef} className="h-[400vh] relative bg-warm-gray-900 text-white">
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
            <div className="container mx-auto px-6 text-center relative z-10 max-w-3xl">
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                {step === 1 && (
                  <>
                    <span className="text-xl font-bold uppercase tracking-widest text-emerald-400 mb-6 block">Tweet 1</span>
                    <div className="text-2xl text-gray-400 mb-8">50,000 impressions • 1,000 clicks</div>
                    <div className="text-9xl font-mono font-bold text-white mb-4">$505</div>
                    <p className="text-xl text-emerald-400">earned</p>
                  </>
                )}

                {step === 2 && (
                  <>
                    <span className="text-xl font-bold uppercase tracking-widest text-emerald-400 mb-6 block">Tweet 2</span>
                    <div className="text-2xl text-gray-400 mb-8">20,000 impressions • 30 sales</div>
                    <div className="text-9xl font-mono font-bold text-white mb-4">$122</div>
                    <p className="text-xl text-emerald-400">earned (higher intent audience)</p>
                  </>
                )}

                {step === 3 && (
                  <>
                    <span className="text-xl font-bold uppercase tracking-widest text-emerald-400 mb-6 block">Tweet 3 (Viral)</span>
                    <div className="text-2xl text-gray-400 mb-8">200,000 impressions</div>
                    <div className="text-9xl font-mono font-bold text-white mb-4">$213</div>
                    <p className="text-xl text-emerald-400">earned while sleeping</p>
                  </>
                )}

                {step === 4 && (
                  <>
                    <span className="text-xl font-bold uppercase tracking-widest text-emerald-400 mb-6 block">Total Week Earnings</span>
                    <div className="text-2xl text-gray-400 mb-8">3 tweets • 270k impressions</div>
                    <div className="text-9xl font-mono font-bold text-emerald-400 mb-4">$840</div>
                    <p className="text-xl text-white">from his phone, in his free time</p>
                  </>
                )}
              </motion.div>
              
              {/* Progress Bar */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-emerald-500"
                  style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. SOCIALFI EXPLAINER */}
        <section className="section-screen bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Your social capital is money.</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { label: "Every Follower", val: "Asset" },
                { label: "Every Like", val: "Revenue" },
                { label: "Every Share", val: "Multiplier" },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="text-xl text-muted mb-2">{item.label}</div>
                  <div className="text-3xl font-bold text-foreground">=</div >
                  <div className="text-3xl font-bold text-emerald-600 mt-2">{item.val}</div>
                </div>
              ))}
            </div>
            <p className="text-2xl text-muted mt-12 font-medium">SocialFi means your audience works for you. 24/7. While you sleep.</p>
          </div>
        </section>

        {/* 6. EARNINGS TRANSPARENCY */}
        <section className="py-32 bg-emerald-50">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">How you earn (we're not hiding the rates)</h2>
            
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-12">
              <div className="divide-y divide-gray-100">
                <div className="flex justify-between p-6">
                  <span className="font-medium text-muted">Impressions</span>
                  <span className="font-mono font-bold text-foreground">$0.10 per 1,000 views</span>
                </div>
                <div className="flex justify-between p-6">
                  <span className="font-medium text-muted">Clicks</span>
                  <span className="font-mono font-bold text-foreground">$0.50 per click</span>
                </div>
                <div className="flex justify-between p-6">
                  <span className="font-medium text-muted">Sales</span>
                  <span className="font-mono font-bold text-foreground">10% commission</span>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-100 p-8 rounded-2xl">
              <h3 className="font-bold text-emerald-900 mb-6">Example: Last week's average creator</h3>
              <div className="space-y-3 font-mono text-emerald-800">
                <div className="flex justify-between">
                  <span>100,000 impressions</span>
                  <span>$10</span>
                </div>
                <div className="flex justify-between">
                  <span>2,000 clicks</span>
                  <span>$1,000</span>
                </div>
                <div className="flex justify-between">
                  <span>50 sales</span>
                  <span>$200</span>
                </div>
                <div className="pt-4 border-t border-emerald-200 flex justify-between font-bold text-xl">
                  <span>Total Earned</span>
                  <span>$1,210</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. INVITATION */}
        <section className="section-screen bg-white text-center">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Start like Alex.</h2>
            <p className="text-2xl text-muted mb-12">
              $10,000 demo mode. Learn with fake money. Flip to real earnings when ready.
            </p>
            <Button onClick={() => openWaitlist('creator')} size="lg" className="w-full md:w-auto text-xl py-8 px-12 rounded-2xl bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200">
              Begin
            </Button>
            <p className="mt-8 text-muted">1,000 creators joined this week. Beta closes at 5,000.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}