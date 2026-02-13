import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why This Exists | MerchPaddie',
  description: 'Learn how to sell without ever needing money to start. Most people never launch because they\'re broke. We fixed that.',
};

export default function WhyPage() {
  return (
    <div
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFE5D9 100%)'
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            Learn how to sell<br />
            without ever needing money to start.
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-8 leading-relaxed max-w-3xl mx-auto">
            Most people never launch because they're broke.<br />
            <span className="font-bold text-[#FF4E8C]">We fixed that.</span>
          </p>
          <p className="text-lg sm:text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            Open a store today → get <span className="font-bold">$10,000</span> to play with → learn pricing, marketing, negotiation, supply chain → keep everything you earn.
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 max-w-3xl mx-auto mb-20">
            <Link
              href="/signup?mode=virtual"
              className="flex-1 group relative overflow-hidden rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #FFD23F 0%, #FF6B35 100%)',
                boxShadow: '0 20px 60px rgba(255, 210, 63, 0.4)'
              }}
            >
              <div className="text-3xl sm:text-4xl mb-3">🚀</div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-black mb-2">
                Start Virtual
              </h3>
              <p className="text-base sm:text-lg font-bold text-black/80">
                $10k Free
              </p>
            </Link>

            <Link
              href="/signup?mode=real"
              className="flex-1 group relative overflow-hidden rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #FF4E8C 0%, #8B5CF6 100%)',
                boxShadow: '0 20px 60px rgba(255, 78, 140, 0.4)'
              }}
            >
              <div className="text-3xl sm:text-4xl mb-3">💎</div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Start Real
              </h3>
              <p className="text-base sm:text-lg font-bold text-white/90">
                SOL/USDC Ready
              </p>
            </Link>
          </div>
        </section>

        {/* The Story - 5 Blocks */}
        <section className="space-y-16 sm:space-y-20 mb-16 sm:mb-20">
          {/* Block 1: The Truth Nobody Says */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-gray-200">
            <div className="text-6xl sm:text-7xl mb-6 text-center">💔</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 text-center">
              The Truth Nobody Says
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed text-center max-w-2xl mx-auto">
              99% of people have fire ideas but <span className="font-bold">$0</span> to test them.<br />
              They watch others get rich and think <span className="italic">"I could do that… if I had money."</span><br />
              <span className="font-bold text-[#FF4E8C]">We got tired of that excuse.</span>
            </p>
          </div>

          {/* Block 2: We Removed Money as a Requirement */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-[#FFD23F]">
            <div className="text-6xl sm:text-7xl mb-6 text-center">🔓</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 text-center">
              So We Removed Money as a Requirement
            </h2>
            <div className="space-y-4 text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed max-w-2xl mx-auto">
              <p>
                <span className="font-bold text-[#FFD23F]">Virtual store</span> = $10,000 in $MOENY instantly.
              </p>
              <p>
                <span className="font-bold text-[#FF4E8C]">Real store</span> = crypto checkout + global shipping from day one.
              </p>
              <p className="text-center pt-4">
                Same dashboard. Same skills. <span className="font-bold">Zero risk.</span>
              </p>
            </div>
          </div>

          {/* Block 3: You Learn by Doing */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-[#FF6B35]">
            <div className="text-6xl sm:text-7xl mb-6 text-center">🎯</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 text-center">
              You Learn by Doing, Not Watching
            </h2>
            <div className="space-y-4 text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed max-w-2xl mx-auto">
              <p className="text-center">
                Price your first product<br />
                <span className="text-base sm:text-lg text-gray-600 italic">your price · your copy · your ads</span>
              </p>
              <p className="text-center">
                Real AI customers buy, haggle, ghost, or become fans — <span className="font-bold">exactly like real life.</span>
              </p>
              <p className="text-center font-bold text-[#FF6B35]">
                You feel the wins and losses in your gut.
              </p>
            </div>
          </div>

          {/* Block 4: Flip the Switch */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-[#8B5CF6]">
            <div className="text-6xl sm:text-7xl mb-6 text-center">⚡</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 text-center">
              When You're Ready, Flip the Switch
            </h2>
            <div className="space-y-4 text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed max-w-2xl mx-auto">
              <p className="text-center">
                Made $47k in the simulation?
              </p>
              <p className="text-center">
                Turn on real payments → same store, same customers, same reputation → now it's <span className="font-bold text-[#8B5CF6]">USDC</span> instead of $MOENY.
              </p>
              <p className="text-center font-bold">
                No reset. No "start over."<br />
                Just profit.
              </p>
            </div>
          </div>

          {/* Block 5: The Cheat Code */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-[#FF4E8C]">
            <div className="text-6xl sm:text-7xl mb-6 text-center">🎮</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 text-center">
              This Is the Cheat Code
            </h2>
            <div className="space-y-6 text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed max-w-2xl mx-auto">
              <p className="text-center">
                <span className="font-bold">Traditional business:</span> spend 6–24 months and $50k+ learning.
              </p>
              <p className="text-center">
                <span className="font-bold text-[#FF4E8C]">You do it in weeks, for free, and get paid to learn.</span>
              </p>
              <p className="text-center text-xl sm:text-2xl">
                Average creator hits their first <span className="font-bold">$1,000</span> in under <span className="font-bold">14 days</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Big Centered Promise */}
        <section className="mb-16 sm:mb-20 text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FF4E8C] mb-4 leading-tight"
            style={{
              textShadow: '0 0 40px rgba(255, 78, 140, 0.6)'
            }}
          >
            You're not gambling.
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            You're getting a free masterclass in making money —<br />
            and the diploma is a fat wallet.
          </p>
        </section>

        {/* Final CTA */}
        <section className="mb-16 sm:mb-20">
          <div className="flex flex-col sm:flex-row gap-6 max-w-3xl mx-auto">
            <Link
              href="/signup?mode=virtual"
              className="flex-1 group relative overflow-hidden rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #FFD23F 0%, #FF6B35 100%)',
                boxShadow: '0 20px 60px rgba(255, 210, 63, 0.4)'
              }}
            >
              <div className="text-3xl sm:text-4xl mb-3">🚀</div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-black mb-2">
                Start Virtual
              </h3>
              <p className="text-base sm:text-lg font-bold text-black/80">
                $10k Free
              </p>
            </Link>

            <Link
              href="/signup?mode=real"
              className="flex-1 group relative overflow-hidden rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #FF4E8C 0%, #8B5CF6 100%)',
                boxShadow: '0 20px 60px rgba(255, 78, 140, 0.4)'
              }}
            >
              <div className="text-3xl sm:text-4xl mb-3">💎</div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Start Real
              </h3>
              <p className="text-base sm:text-lg font-bold text-white/90">
                SOL/USDC Ready
              </p>
            </Link>
          </div>
        </section>

        {/* Footer Line */}
        <section className="text-center">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Over <span className="font-bold">5,200 people</span> already graduated from "broke" and never looked back.
          </p>
        </section>
      </div>
    </div>
  );
}
