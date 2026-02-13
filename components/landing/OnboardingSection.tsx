"use client"

import { ChevronsDown } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface OnboardingSectionProps {
  onNameSet?: (name: string) => void
}


export default function OnboardingSection({ onNameSet }: OnboardingSectionProps) {
  const [name, setName] = useState('')


  const handleNameChange = (value: string) => {
    setName(value)
    const trimmed = value.trim()
    if (trimmed) {
      localStorage.setItem('userName', trimmed)
      window.dispatchEvent(new Event('onboarding-update'))
      if (onNameSet) onNameSet(trimmed)
    }
  }

  const handleContinue = (_journey?: string) => {
    const trimmed = name.trim()
    if (trimmed) {
      localStorage.setItem('userName', trimmed)
      window.dispatchEvent(new Event('onboarding-update'))
      if (onNameSet) onNameSet(trimmed)
    }

    const nextSection = document.getElementById('branching-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative z-10 bg-[#0F0F0F] py-20 px-4 sm:px-6 lg:px-8 min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto">
        <div className="grid max-w-5xl mx-auto grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div className="bg-[#020202] p-10 md:p-14 rounded-2xl shadow-xl border border-[#1A1A1A]">
            <>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 w-fit mb-6">
                <span className="flex -space-x-2">
                  <span className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-[#7950F2] to-[#4C6EF5]" />
                  <span className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-[#12B886] to-[#2F9E44]" />
                  <span className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-[#FF922B] to-[#F76707]" />
                </span>
                <span className="text-white/80 text-sm font-semibold tracking-wide uppercase">1,847+ already earning</span>
              </div>

              <p className="text-white/70 text-lg mb-2">Quick question before we get started...</p>

              <h2 className="text-3xl font-bold text-white mb-8">What should we call you?</h2>

              <div className="flex flex-col gap-6">
                <label className="flex flex-col gap-2 text-left">
                  <span className="text-sm uppercase tracking-[0.4em] text-white/40">Your name</span>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/20 focus:border-[#FF4E8C] transition-colors text-2xl font-semibold text-white placeholder:text-white/30 focus:outline-none pb-2"
                    placeholder="Type it here"
                    value={name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    autoComplete="given-name"
                  />
                </label>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleContinue('Guest')}
                    disabled={!name.trim()}
                    className="w-full px-6 py-4 text-lg font-bold text-white rounded-xl border border-gray-500 shadow-lg shadow-[#1f1f1f]/30 transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className='w-full flex items-center justify-center'>
                      <ChevronsDown /> Skip for now
                    </span>
                  </button>
                </div>

                <p className="text-sm text-white/40">
                  We&apos;ll use this to personalize your experience.
                </p>

              </div>
            </>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF4E8C]/20 via-transparent to-[#FFD23F]/20 blur-2xl" aria-hidden="true" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111111] shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/merch/tshirt.webp"
                alt="Creators designing merchandise"
                width={720}
                height={900}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">Fast Start</p>
                <h3 className="text-2xl font-bold mt-2">Launch merch that sells out.</h3>
                <p className="text-white/70 text-sm mt-2">60-second setup, AI styling, instant audience sync.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}