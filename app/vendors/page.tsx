"use client"

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { ShoppingBag, Box, Megaphone, DollarSign, Wand2, Globe, Star, ArrowRight, Check } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/Button'
import { useWaitlist } from '@/components/WaitlistContext'
import CountUp from 'react-countup'

export default function VendorPage() {
  const { openWaitlist } = useWaitlist()
  
  // Sticky Timeline Logic
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"]
  })
  
  const [day, setDay] = useState(1)
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) setDay(3)
    else if (latest < 0.66) setDay(5)
    else setDay(7)
  })

  return (
    <div className="min-h-screen bg-warm-white font-sans text-foreground">
      <Navbar />

      <main>
        {/* 1. OPENING SCENE */}
        <section className="section-screen bg-gradient-to-b from-white to-indigo-50/50">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight"
            >
              What if your side project could pay your rent?
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-muted font-medium"
            >
              ↓ Meet Sarah
            </motion.div>
          </div>
        </section>

        {/* 2. MEET SARAH */}
        <section className="section-screen bg-white">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4 block">Day 1</span>
              <h2 className="text-4xl font-bold mb-6">Sarah had 200 hoodie designs sitting in her Figma.</h2>
              <p className="text-xl text-muted leading-relaxed mb-8">
                No audience. No budget. No clue where to start. Every Sunday, she stared at them. Every Monday, she went back to her day job.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-mono font-bold text-muted">$0</span>
                <span className="text-lg text-muted font-medium">revenue</span>
              </div>
            </div>
            <div className="bg-gray-100 rounded-3xl aspect-square flex items-center justify-center border-4 border-gray-50 shadow-inner">
              <span className="text-gray-400 font-medium">Sarah's Figma Files</span>
            </div>
          </div>
        </section>

        {/* 3. THE FIRST STEP */}
        <section className="section-screen bg-indigo-50/30">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 bg-white p-8 rounded-3xl shadow-xl border border-indigo-100">
              <div className="flex justify-between items-center mb-8">
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold">Demo Mode</span>
                <span className="font-mono font-bold text-indigo-600">$10,480</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-indigo-200"></div>
                  <div>
                    <div className="h-2 w-24 bg-gray-200 rounded mb-1"></div>
                    <div className="text-xs text-gray-500">Just bought "Neon Hoodie"</div>
                  </div>
                  <div className="ml-auto text-green-600 font-bold">+$40</div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-purple-200"></div>
                  <div>
                    <div className="h-2 w-24 bg-gray-200 rounded mb-1"></div>
                    <div className="text-xs text-gray-500">Just bought "Cyber Tee"</div>
                  </div>
                  <div className="ml-auto text-green-600 font-bold">+$35</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <span className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4 block">Day 2</span>
              <h2 className="text-4xl font-bold mb-6">She launched in demo mode.</h2>
              <p className="text-xl text-muted leading-relaxed mb-8">
                $10,000 virtual cash. Zero risk. Just her and some AI customers. She watched her designs move. Her balance grew.
              </p>
              <div className="bg-green-100 text-green-800 inline-flex items-center px-4 py-2 rounded-lg font-bold">
                <Check size={18} className="mr-2" /> 12 AI customers bought hoodies
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE TIMELINE (STICKY) */}
        <section ref={timelineRef} className="h-[300vh] relative bg-warm-gray-900 text-white">
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
            <div className="container mx-auto px-6 text-center relative z-10 max-w-3xl">
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xl font-bold uppercase tracking-widest text-indigo-400 mb-6 block">Day {day}</span>
                
                {day === 3 && (
                  <>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">She tweaked her best-seller based on AI feedback. Launched it for real.</h2>
                    <div className="text-8xl font-mono font-bold text-indigo-200">42</div>
                    <p className="text-xl text-gray-400 mt-4">virtual sales</p>
                  </>
                )}

                {day === 5 && (
                  <>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">She flipped to real mode. A creator with 50k followers found her store.</h2>
                    <div className="text-8xl font-mono font-bold text-emerald-400">$2,140</div>
                    <p className="text-xl text-gray-400 mt-4">real money, in her account</p>
                  </>
                )}

                {day === 7 && (
                  <>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Sold out. Reordered inventory. Quit her side job.</h2>
                    <div className="text-8xl font-mono font-bold text-emerald-400">$8,400</div>
                    <p className="text-xl text-gray-400 mt-4">total profit in one week</p>
                  </>
                )}
              </motion.div>
              
              {/* Progress Bar */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-indigo-500"
                  style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. TOOLS REVEALED */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-24">How she did it (without a team)</h2>
            
            <div className="space-y-32">
              {/* Tool 1 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                    <Wand2 size={32} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">AI Design Studio</h3>
                  <p className="text-xl text-muted leading-relaxed">
                    Sarah used AI to generate 50 hoodie variations in 10 minutes. Different colors. Different slogans. Different price points. No Photoshop needed.
                  </p>
                </div>
                <div className="bg-gray-50 aspect-video rounded-3xl"></div>
              </div>

              {/* Tool 2 */}
              <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                <div className="md:order-2">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                    <Megaphone size={32} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Built-In Promotion</h3>
                  <p className="text-xl text-muted leading-relaxed">
                    Creators found Sarah's store without her asking. She paid them 10% of sales. Not a penny upfront.
                  </p>
                </div>
                <div className="md:order-1 bg-gray-50 aspect-video rounded-3xl"></div>
              </div>

              {/* Tool 3 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                    <Globe size={32} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Global Fulfillment</h3>
                  <p className="text-xl text-muted leading-relaxed">
                    Sarah never touched a hoodie. We print, pack, ship, and handle returns. You design and collect money.
                  </p>
                </div>
                <div className="bg-gray-50 aspect-video rounded-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. THE PROOF */}
        <section className="section-screen bg-indigo-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">Sarah's not alone.</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { label: "stores launched", val: "12,852" },
                { label: "traded (virtual + real)", val: "$2.3M" },
                { label: "still selling after 30 days", val: "89%" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-5xl md:text-6xl font-mono font-bold text-indigo-600 mb-4">{stat.val}</div>
                  <div className="text-lg text-muted font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. INVITATION */}
        <section className="section-screen bg-white text-center">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Start like Sarah.</h2>
            <p className="text-2xl text-muted mb-12">
              $10,000 free. Demo mode. No credit card. No inventory risk.
            </p>
            <Button onClick={() => openWaitlist('vendor')} size="lg" className="w-full md:w-auto text-xl py-8 px-12 rounded-2xl">
              Begin
            </Button>
            <p className="mt-8 text-muted">1,847 vendors already earning. Beta closes at 5,000.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}