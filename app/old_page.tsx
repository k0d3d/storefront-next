"use client"

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/landing/HeroSection'
import OnboardingSection from '@/components/landing/OnboardingSection'
import TwoPathsSection from '@/components/landing/TwoPathsSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import RealizationSection from '@/components/landing/RealizationSection'
import DemoModeSection from '@/components/landing/DemoModeSection'
import SocialProofSection from '@/components/landing/SocialProofSection'
import WaitlistSection from '@/components/landing/WaitlistSection'

// Import new animation hook and styles
import { useAnimations } from './hooks/useAnimations'
import './styles/animations.css'

export default function Home() {
  // Initialize animation hook
  useAnimations();

  const [userName, setUserName] = useState<string | undefined>(undefined);

  const handleNameSet = (name: string) => {
    if (name && name !== 'Guest') {
      setUserName(name);
    }
  };

  return (
    <div className="min-h-screen bg-warm-white font-sans text-foreground selection:bg-indigo-100 selection:text-primary">
      <Navbar userName={userName} />

      <main className="flex-grow">
        <HeroSection />
        
        {/* Parallax Container: These sections scroll over the sticky Hero */}
        <div className="relative z-10 bg-warm-white">
          <OnboardingSection onNameSet={handleNameSet} />
          
          <div id="two-paths-section">
            <TwoPathsSection />
          </div>
          
          <FeaturesSection />
          <RealizationSection />
          <DemoModeSection />
          <SocialProofSection />
          <WaitlistSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
