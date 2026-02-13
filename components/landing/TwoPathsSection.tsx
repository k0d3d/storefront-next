import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function TwoPathsSection() {
  return (
    <section className="section-screen bg-warm-white py-24">
      <div className="container mx-auto px-6">
        <h2 className="fade-in text-4xl md:text-5xl font-bold text-center mb-20">
          Two ways to win. Pick your path. <span className="text-muted block text-2xl mt-4 font-normal">Or take both.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto stagger-children">
          {/* Vendor Card */}
          <div className="fade-in bg-white p-10 md:p-14 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-50/50 hover:-translate-y-2">
            <div className="mb-8 w-24 h-24 mx-auto md:mx-0 relative">
              <Image src="/images/icon-vendor-store.png" alt="Vendor path icon" fill className="object-contain" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Vendors</h3>
            <p className="text-xl text-muted mb-8 leading-relaxed">
              Launch a store in 60 seconds. AI handles designs. You sell physical or virtual products. Keep every dollar.
            </p>
            <Link href="/vendors">
              <Button variant="primary" className="w-full text-lg py-6">For Vendors <ArrowRight className="ml-2" /></Button>
            </Link>
          </div>

          {/* Creator Card */}
          <div className="fade-in bg-white p-10 md:p-14 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-50/50 hover:-translate-y-2">
            <div className="mb-8 w-24 h-24 mx-auto md:mx-0 relative">
              <Image src="/images/icon-creator-megaphone.png" alt="Creator path icon" fill className="object-contain" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Creators</h3>
            <p className="text-xl text-muted mb-8 leading-relaxed">
              Promote stores you love. Earn on every impression, click, and sale. Cash out daily. No minimums.
            </p>
            <Link href="/creators">
              <Button variant="secondary" className="w-full text-lg py-6">For Creators <ArrowRight className="ml-2" /></Button>
            </Link>
          </div>
        </div>

        <p className="fade-in text-center text-muted mt-12 text-lg">Can't decide? Do both. Most people do.</p>
      </div>
    </section>
  )
}
