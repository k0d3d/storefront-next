"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Twitter, Disc, Send, Linkedin, Github, ChevronUp, CheckCircle2, Globe, Shield, Activity, Lock, Zap } from 'lucide-react'
import Link from 'next/link'

const SocialIcon = ({ icon: Icon, href }: { icon: any, href: string }) => (
  <Link 
    href={href}
    target="_blank"
    className="w-10 h-10 bg-white/[0.06] border border-white/10 rounded-xl flex items-center justify-center text-[#A0AEC0] transition-all duration-300 hover:bg-[#6B46FF26] hover:border-[#6B46FF4D] hover:text-white hover:-translate-y-[3px]"
  >
    <Icon size={20} />
  </Link>
)

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <Link 
      href={href}
      className="text-[#A0AEC0] text-[15px] font-medium transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
    >
      {children}
    </Link>
  </li>
)

export default function FooterSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#05070d] overflow-hidden pt-20">
      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-[#6B46FF08] to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-20 relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16">
          
          {/* Column 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-white text-2xl font-bold mb-6 flex items-center gap-2 logo-font">
              MerchPaddie
            </div>
            <p className="text-[#718096] text-[15px] leading-[1.7] max-w-[280px] mb-8">
              Your reach is revenue. Get paid for real impressions and conversions.
            </p>
            <div className="flex gap-3">
              <SocialIcon icon={Twitter} href="#" />
              <SocialIcon icon={Disc} href="#" />
              <SocialIcon icon={Send} href="#" />
              <SocialIcon icon={Linkedin} href="#" />
              <SocialIcon icon={Github} href="#" />
            </div>
          </motion.div>

          {/* Column 2: Advertisers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h4 className="text-white text-[16px] font-bold uppercase tracking-[0.05em] mb-6">For Advertisers</h4>
            <ul className="flex flex-col gap-3.5">
              <FooterLink href="#how-it-works">How It Works</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="https://app.merchpaddie.store">Campaign Dashboard</FooterLink>
              <FooterLink href="#">Analytics</FooterLink>
              <FooterLink href="#">Case Studies</FooterLink>
              <FooterLink href="#">Ad Formats</FooterLink>
            </ul>
          </motion.div>

          {/* Column 3: Creators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-white text-[16px] font-bold uppercase tracking-[0.05em] mb-6">For Creators</h4>
            <ul className="flex flex-col gap-3.5">
              <FooterLink href="#path-selection">Start Earning</FooterLink>
              <FooterLink href="https://app.merchpaddie.store/dashboard/marketplace">Browse Campaigns</FooterLink>
              <FooterLink href="#">Payout Guide</FooterLink>
              <FooterLink href="#">Creator Stories</FooterLink>
              <FooterLink href="#">Best Practices</FooterLink>
              <FooterLink href="https://app.merchpaddie.store/settings">Connect Platforms</FooterLink>
            </ul>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <h4 className="text-white text-[16px] font-bold uppercase tracking-[0.05em] mb-6">Stay Updated</h4>
            <p className="text-[#718096] text-[14px] leading-[1.6] mb-5">
              Get the latest campaigns, platform updates, and success stories.
            </p>
            
            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form 
                  key="form"
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubscribe}
                  className="space-y-3"
                >
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full h-12 bg-white/[0.04] border border-white/[0.12] rounded-xl px-4 text-white text-[15px] outline-none focus:border-[#6B46FF] focus:ring-3 focus:ring-[#6B46FF1A] transition-all placeholder:text-white/30"
                  />
                  <button 
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-[#6B46FF] to-[#8B5FFF] rounded-xl text-white font-semibold text-[15px] shadow-[0_8px_20px_#6B46FF59] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_#6B46FF73] active:translate-y-0 transition-all cursor-pointer"
                  >
                    Subscribe
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#00FF881A] border border-[#00FF884D] rounded-xl p-5 flex flex-col items-center gap-2"
                >
                  <CheckCircle2 size={32} className="text-[#00FF88]" />
                  <span className="text-[#00FF88] text-[14px] font-medium text-center">Thanks! Check your email.</span>
                </motion.div>
              )}
            </AnimatePresence>
            <p className="mt-4 text-[#4A5568] text-[12px]">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>

        {/* Trust Micro-Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[Shield, Lock, Zap].map((Icon, i) => (
            <div key={i} className="h-10 px-4 bg-white/[0.03] border border-white/[0.08] rounded-lg flex items-center gap-2 grayscale hover:grayscale-0 hover:scale-105 transition-all opacity-50 hover:opacity-100">
              <Icon size={16} className="text-[#6B46FF]" />
              <span className="text-[11px] font-bold text-white/60 tracking-wider uppercase">
                {i === 0 ? 'Verified' : i === 1 ? 'Secure' : 'Instant'}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '100%', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"
        />

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10"
        >
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            <span className="text-[#718096] text-[14px]">© 2026 MerchPaddie. All rights reserved.</span>
            <div className="flex gap-6">
              <Link href="#" className="text-[#A0AEC0] text-[14px] font-medium hover:text-white transition-colors">Terms of Service</Link>
              <span className="text-[#4A5568] hidden lg:inline">·</span>
              <Link href="#" className="text-[#A0AEC0] text-[14px] font-medium hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-[#4A5568] hidden lg:inline">·</span>
              <Link href="#" className="text-[#A0AEC0] text-[14px] font-medium hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="bg-[#00FF881A] border border-[#00FF884D] px-4 py-2 rounded-full flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
              <span className="text-[#00FF88] text-[12px] font-bold">All Systems Operational</span>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 rounded-lg text-[#4A5568] text-[12px] font-medium">
              v2.6.13
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[1000] w-12 h-12 lg:w-[52px] lg:h-[52px] bg-[#6B46FF]/90 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-[0_8px_24px_#6B46FF66] hover:bg-[#6B46FF] hover:-translate-y-1 hover:shadow-[0_12px_32px_#6B46FF80] active:scale-95 transition-all cursor-pointer"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
