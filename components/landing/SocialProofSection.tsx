import Image from 'next/image'
import StatsTicker from '@/components/StatsTicker'
import SuccessCard from '@/components/SuccessCard'

export default function SocialProofSection() {
  return (
    <section className="section-screen relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/bg-dark-gradient.png" alt="Dark gradient" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-slate-900/80 -z-10"></div>
      <div className="container mx-auto px-6 mb-16 fade-in text-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">Real people. Real earnings. Right now.</h2>
      </div>
      
      <StatsTicker />

      <div className="container mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          <SuccessCard 
            name="Alex M."
            avatar="/images/avatar-alex.png"
            earnings="$840"
            quote="Three tweets. That's it. $840 in my account. I thought it was broken."
            className="fade-in"
          />
          <SuccessCard 
            name="Sarah L."
            avatar="/images/avatar-sarah.png"
            earnings="$8,400"
            quote="I had 200 designs rotting in Figma. Launched one in demo mode. Sold out by day 7."
            className="fade-in"
          />
          <SuccessCard 
            name="Jordan K."
            avatar="/images/avatar-jordan.png"
            earnings="$15,000"
            quote="Started with fake money to learn. Switched to real when I figured it out. Now I'm at $15k USDC."
            className="fade-in"
          />
        </div>
      </div>
    </section>
  )
}
