"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TourSection() {
  const [journey, setJourney] = useState<'Vendor' | 'Creator' | null>(null)

  useEffect(() => {
    const updateJourney = () => {
      const saved = localStorage.getItem('userJourney') as 'Vendor' | 'Creator' | 'Guest' | null
      if (saved === 'Vendor' || saved === 'Creator') {
        setJourney(saved)
      } else {
        setJourney(null)
      }
    }

    updateJourney()
    window.addEventListener('onboarding-update', updateJourney)
    return () => window.removeEventListener('onboarding-update', updateJourney)
  }, [])

  if (!journey) return null

  const role = journey === 'Vendor' ? 'ADVERTISER' : 'CREATOR'
  const iframeUrl = `https://app.merchpaddie.store/dashboard?tour=true&role=${role}&embed=true`

  return (
    <section id="tour-section" className="bg-[#0F0F0F] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Quick Product Tour: <span className="text-[#FFD23F]">{journey}</span> Experience
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            See how MerchPaddie works for you. This is a live preview of our dashboard.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={journey}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#1A1A1A]"
          >
            <iframe
              src={iframeUrl}
              className="w-full h-full border-none"
              title="MerchPaddie App Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            {/* Overlay to catch clicks if we want to prevent interaction with the iframe until explicit click */}
            {/* For a tour, we probably want them to interact directly */}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
