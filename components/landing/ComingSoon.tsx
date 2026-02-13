import Link from 'next/link';

export default function ComingSoon() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4">
      <main className="text-center max-w-2xl w-full">
        {/* Coming Soon Message */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 shadow-2xl">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Coming Soon
          </h1>
          <p className="text-2xl text-white/90 mb-2 font-light">
            We're building something amazing
          </p>
          <p className="text-lg text-white/70 mb-8">
            Multi-store e-commerce powered by crypto payments
          </p>

          {/* CTA Button */}
          <a
            href="https://mediapaddie.store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-700 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span className="text-2xl">🛍</span>
            <span>Visit MediaPaddie Store</span>
          </a>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold">Instant Checkout</div>
              <div className="text-sm text-white/70">Buy with crypto on Telegram</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-3xl mb-2">🔐</div>
              <div className="font-semibold">Secure Payments</div>
              <div className="text-sm text-white/70">SOL, USDC, TON supported</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-3xl mb-2">🏪</div>
              <div className="font-semibold">Multi-Store</div>
              <div className="text-sm text-white/70">One platform, many stores</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-white/60 text-sm">
          <p>Powered by MerchPaddie</p>
        </div>
      </main>
    </div>
  );
}
