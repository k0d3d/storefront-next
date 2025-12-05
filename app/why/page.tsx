import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Open a Store Today? | MerchPaddie',
  description: 'The 90-second story that explains everything. Two doors. Same destination. Choose how you want to start today.',
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
        {/* Hook Section */}
        <section className="text-center mb-16 sm:mb-20">
          <div className="text-6xl sm:text-7xl md:text-8xl mb-8">🎨</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            You have ideas.
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-4 leading-relaxed">
            Memes. Art. Quotes. Vibes. Random stuff in your camera roll.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-6 leading-relaxed">
            Right now those ideas are worth exactly <span className="font-bold">$0</span>.
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF4E8C] leading-relaxed">
            We're here to change that in the next 5 minutes.
          </p>
        </section>

        {/* Two Doors Section */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 text-center leading-tight">
            Two doors. Same destination.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-12 text-center leading-relaxed">
            You don't have to choose forever — you choose how you want to start today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Door 1 - Virtual Store */}
            <div
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border-4 border-[#FFD23F] shadow-xl hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-4 text-center">🚀</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                Door #1 – Virtual Store
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 italic">
                (the cheat-code mode)
              </p>
              <ul className="space-y-3 text-base sm:text-lg text-gray-800">
                <li className="flex items-start gap-3">
                  <span className="text-[#FFD23F] text-xl flex-shrink-0">•</span>
                  <span>You get <strong>$10,000 in $MOENY</strong> the second you sign up</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFD23F] text-xl flex-shrink-0">•</span>
                  <span>Upload any design (or let AI make it for you)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFD23F] text-xl flex-shrink-0">•</span>
                  <span>Your digital merch instantly appears in front of thousands of AI shoppers who have money and opinions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFD23F] text-xl flex-shrink-0">•</span>
                  <span>They buy, haggle, tip — feels 100% real</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFD23F] text-xl flex-shrink-0">•</span>
                  <span>You keep every $MOENY you earn</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFD23F] text-xl flex-shrink-0">•</span>
                  <span>Whenever you want, flip the switch → real money (USDC/SOL) with the exact same store</span>
                </li>
              </ul>
            </div>

            {/* Door 2 - Real Store */}
            <div
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border-4 border-[#FF4E8C] shadow-xl hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-4 text-center">💎</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                Door #2 – Real Store
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 italic">
                (the "I already have stock" mode)
              </p>
              <ul className="space-y-3 text-base sm:text-lg text-gray-800">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF4E8C] text-xl flex-shrink-0">•</span>
                  <span>Connect your inventory or designs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF4E8C] text-xl flex-shrink-0">•</span>
                  <span>Accept SOL / USDC instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF4E8C] text-xl flex-shrink-0">•</span>
                  <span>We handle printing & global shipping (or you ship yourself)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF4E8C] text-xl flex-shrink-0">•</span>
                  <span>Same dashboard, same stats, same leaderboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF4E8C] text-xl flex-shrink-0">•</span>
                  <span>Your fans pay in crypto → money hits your wallet same day</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 text-center leading-relaxed">
            Both doors lead to the same leaderboard, same reputation ($ACK), same community.<br />
            <span className="font-bold">The only difference is how fast you want to feel the rush.</span>
          </p>
        </section>

        {/* Why Today Section */}
        <section className="mb-16 sm:mb-20 bg-white/40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 text-center leading-tight">
            Why today feels different
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-6 text-center font-bold">
            Because nobody starts broke here.
          </p>
          <ul className="space-y-4 text-lg sm:text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto">
            <li className="flex items-start gap-3">
              <span className="text-[#FFD23F] text-2xl flex-shrink-0">✓</span>
              <span>Virtual starters get $10k $MOENY free</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF4E8C] text-2xl flex-shrink-0">✓</span>
              <span>Real starters get instant crypto checkout and global shipping</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF6B35] text-2xl flex-shrink-0">✓</span>
              <span>Everyone gets AI that works 24/7 to sell for them</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8B5CF6] text-2xl flex-shrink-0">✓</span>
              <span>Every sale (virtual or real) builds permanent reputation that follows you forever</span>
            </li>
          </ul>
          <div className="mt-10 text-center">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 leading-relaxed">
              You're not hoping for sales.<br />
              <span className="font-bold text-[#FF4E8C]">You're choosing when to start counting them.</span>
            </p>
          </div>
        </section>

        {/* Real Numbers Section */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 text-center leading-tight">
            Real people, real numbers
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center italic">
            (this week)
          </p>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-[#FFD23F]/20 to-transparent rounded-2xl p-6 border-l-4 border-[#FFD23F]">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-800">
                <span className="font-bold">@degenape</span> made <span className="font-bold text-[#FFD23F]">$41,200</span> in 11 days<br />
                <span className="text-base sm:text-lg text-gray-600">(virtual → flipped to real)</span>
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#FF4E8C]/20 to-transparent rounded-2xl p-6 border-l-4 border-[#FF4E8C]">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-800">
                <span className="font-bold">@catgirl</span> sold <span className="font-bold text-[#FF4E8C]">1,000 pins</span> in 4 hours<br />
                <span className="text-base sm:text-lg text-gray-600">(pure virtual)</span>
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#FF6B35]/20 to-transparent rounded-2xl p-6 border-l-4 border-[#FF6B35]">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-800">
                <span className="font-bold">@solanaSummer</span> printed 500 hoodies and kept <span className="font-bold text-[#FF6B35]">$38k</span> profit<br />
                <span className="text-base sm:text-lg text-gray-600">(real from day one)</span>
              </p>
            </div>
          </div>
        </section>

        {/* The Promise Section */}
        <section className="mb-16 sm:mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
            We removed every reason people normally use to not launch merch.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-white/60 rounded-2xl p-6 text-lg sm:text-xl font-semibold text-gray-700">
              <span className="line-through">No upfront money</span>
            </div>
            <div className="bg-white/60 rounded-2xl p-6 text-lg sm:text-xl font-semibold text-gray-700">
              <span className="line-through">No inventory risk</span>
            </div>
            <div className="bg-white/60 rounded-2xl p-6 text-lg sm:text-xl font-semibold text-gray-700">
              <span className="line-through">No "I'll do it later"</span>
            </div>
            <div className="bg-white/60 rounded-2xl p-6 text-lg sm:text-xl font-semibold text-gray-700">
              <span className="line-through">No complicated crypto setup</span>
            </div>
          </div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF4E8C] leading-relaxed">
            All that's left is you, your ideas, and a button.
          </p>
        </section>

        {/* CTA Section */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8 text-center">
            Two choices. Same outcome.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 max-w-4xl mx-auto">
            <Link
              href="/signup?mode=virtual"
              className="flex-1 group relative overflow-hidden rounded-2xl p-8 sm:p-10 text-center transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #FFD23F 0%, #FF6B35 100%)',
                boxShadow: '0 20px 60px rgba(255, 210, 63, 0.4)'
              }}
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3">
                Start Virtual
              </h3>
              <p className="text-lg sm:text-xl font-bold text-black/80">
                $10k $MOENY free
              </p>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)'
                }}
              />
            </Link>

            <Link
              href="/signup?mode=real"
              className="flex-1 group relative overflow-hidden rounded-2xl p-8 sm:p-10 text-center transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #FF4E8C 0%, #8B5CF6 100%)',
                boxShadow: '0 20px 60px rgba(255, 78, 140, 0.4)'
              }}
            >
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3">
                Start Real
              </h3>
              <p className="text-lg sm:text-xl font-bold text-white/90">
                SOL/USDC ready
              </p>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)'
                }}
              />
            </Link>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 text-center mt-8 italic">
            (whichever you pick, you're rich in 60 seconds)
          </p>
        </section>

        {/* Footer */}
        <section className="text-center">
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Over <span className="font-bold">4,900 creators</span> already chose a door.<br />
            Yours is open.
          </p>
        </section>
      </div>
    </div>
  );
}
