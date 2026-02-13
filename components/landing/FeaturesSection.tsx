import Image from 'next/image'

export default function FeaturesSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h3 className="fade-in text-3xl md:text-4xl font-bold mb-4">Why MerchPaddie works</h3>
          <p className="fade-in text-lg text-muted" style={{ transitionDelay: '120ms' }}>
            Four pillars that make our marketplace impossible to ignore.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center stagger-children">
          <div className="fade-in bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <div className="w-20 h-20 mx-auto relative mb-6">
              <Image src="/images/icon-zero-cost.png" alt="Zero costs icon" fill className="object-contain" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Zero upfront costs</h4>
            <p className="text-sm text-muted">
              Launch for free. Keep profits. We only win when you do.
            </p>
          </div>

          <div className="fade-in bg-white border border-gray-100 rounded-3xl p-8 shadow-sm" style={{ transitionDelay: '120ms' }}>
            <div className="w-20 h-20 mx-auto relative mb-6">
              <Image src="/images/icon-socialfi.png" alt="SocialFi network icon" fill className="object-contain" />
            </div>
            <h4 className="text-xl font-semibold mb-3">SocialFi network</h4>
            <p className="text-sm text-muted">
              Sellers and creators share one economy. Every signal counts.
            </p>
          </div>

          <div className="fade-in bg-white border border-gray-100 rounded-3xl p-8 shadow-sm" style={{ transitionDelay: '240ms' }}>
            <div className="w-20 h-20 mx-auto relative mb-6">
              <Image src="/images/icon-ai.png" alt="AI intelligence icon" fill className="object-contain" />
            </div>
            <h4 className="text-xl font-semibold mb-3">AI-powered launch</h4>
            <p className="text-sm text-muted">
              Designs, copy, and merchandising handled by nano-agents.
            </p>
          </div>

          <div className="fade-in bg-white border border-gray-100 rounded-3xl p-8 shadow-sm" style={{ transitionDelay: '360ms' }}>
            <div className="w-20 h-20 mx-auto relative mb-6">
              <Image src="/images/icon-dual-earnings.png" alt="Dual earnings icon" fill className="object-contain" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Dual earnings</h4>
            <p className="text-sm text-muted">
              Earn from inventory or influence—or stack them for leverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
