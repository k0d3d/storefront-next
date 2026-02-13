"use client"
import { useState } from 'react'
import Image from 'next/image'

export default function DemoModeSection() {
  const [demoMode, setDemoMode] = useState<'demo' | 'real'>('demo')

  return (
    <section className="section-screen bg-gradient-to-b from-white to-emerald-50/30 relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 opacity-80">
        <Image src="/images/bg-demo-gradient.png" alt="Demo section gradient" fill className="object-cover" />
      </div>
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center stagger-children">
        <div className="fade-in">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Not ready to risk real money? <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Start funded instead.</span>
          </h2>
          <p className="text-xl text-muted mb-8 leading-relaxed max-w-lg">
            Learn the game with AI customers. Graduate to real money when you're ready. No pressure.
          </p>
        </div>

        <div className="fade-in bg-white rounded-[2rem] shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
          {/* IMG-M1: Demo Mode Mockup */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
          
          <div className="flex justify-between items-center mb-8">
            <span className="bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
              {demoMode === 'demo' ? 'Demo Mode' : 'Real Mode'}
            </span>
            <div className="flex bg-gray-100 rounded-full p-1 cursor-pointer" onClick={() => setDemoMode(prev => prev === 'demo' ? 'real' : 'demo')}>
              <div className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${demoMode === 'demo' ? 'bg-white shadow text-foreground' : 'text-muted'}`}>Demo</div>
              <div className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${demoMode === 'real' ? 'bg-white shadow text-foreground' : 'text-muted'}`}>Real</div>
            </div>
          </div>

          <div className="text-center py-8 relative">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40">
              <Image src="/images/demo-wallet-icon.png" alt="Demo Wallet" fill className="object-contain" />
            </div>
            <p className="text-muted font-medium mb-2">Your Balance</p>
            <div className="text-6xl font-mono font-bold tracking-tighter mb-2 text-foreground">
              {demoMode === 'demo' ? (
                <span className="text-emerald-600">
                  {/* STAT-2: Demo Balance (can be static or animated) */}
                  $<span className="counter" data-target="12852">10,000</span>
                </span>
              ) : (
                <span className="text-foreground">$0.00</span>
              )}
            </div>
            <p className="text-xl font-medium text-muted">{demoMode === 'demo' ? '$MOENY' : 'USDC'}</p>
          </div>

          {demoMode === 'demo' && (
            <div className="bg-emerald-50/50 rounded-xl p-6 mt-4 border border-emerald-100/50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-medium text-emerald-800">AI Customers Active</span>
                </div>
                <div className="flex -space-x-4">
                  <Image src="/images/ai-avatar-1.png" alt="AI Avatar 1" width={32} height={32} className="rounded-full border-2 border-white" />
                  <Image src="/images/ai-avatar-2.png" alt="AI Avatar 2" width={32} height={32} className="rounded-full border-2 border-white" />
                  <Image src="/images/ai-avatar-3.png" alt="AI Avatar 3" width={32} height={32} className="rounded-full border-2 border-white" />
                </div>
                {/* STAT-3: Sales Today */}
                <span className="text-sm font-mono font-bold text-emerald-800"><span className="counter" data-target="420">0</span> sales today</span>
              </div>
              <p className="text-sm text-emerald-700/70">
                "AI customer #8492 bought 'Cyber Hoodie v2'..."
              </p>
            </div>
          )}
          
          <p className="text-center text-sm text-muted mt-8">
            {demoMode === 'demo' ? 'Feeling ready? Flip the switch.' : 'Connect wallet to start earning.'}
          </p>
        </div>
      </div>
    </section>
  )
}
