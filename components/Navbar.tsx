"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, DollarSign, ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'
import { useWaitlist } from './WaitlistContext'
import { cn } from '@/components/ui/Button'

export default function Navbar({ userName }: { userName?: string }) {
  const { openWaitlist } = useWaitlist()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const scrollToForm = () => {
    const form = document.getElementById('waitlist-form')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
    } else {
      openWaitlist()
    }
  }

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          isScrolled 
            ? "bg-warm-white/95 backdrop-blur-md shadow-sm py-4" 
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white logo-font">
            <span>MerchPaddie</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">

          </nav>

          <div className="hidden md:block">
            {userName ? (
              <Link href="#waitlist-form" className="text-primary font-bold flex items-center gap-1 hover:underline">
                Hey, {userName} <ArrowRight size={16} />
              </Link>
            ) : (
              <Button onClick={scrollToForm} variant="primary" size="md">
                Begin
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
        className="fixed inset-y-0 right-0 z-50 w-full bg-warm-white px-6 py-24 md:hidden"
      >
        <div className="flex flex-col gap-8 text-2xl font-bold">
          <Link href="/vendors" onClick={() => setIsMobileMenuOpen(false)}>
            For Vendors
          </Link>
          <Link href="/creators" onClick={() => setIsMobileMenuOpen(false)}>
            For Creators
          </Link>
          <div className="pt-8">
            {userName ? (
               <Link href="#waitlist-form" onClick={() => setIsMobileMenuOpen(false)} className="text-primary block">
                 Hey, {userName} →
               </Link>
            ) : (
              <Button onClick={() => { scrollToForm(); setIsMobileMenuOpen(false) }} className="w-full text-lg py-6">
                Begin
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </>
  )
}