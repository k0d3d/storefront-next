'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroMerch() {
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState({
    piecesSold: 0,
    earnings: 0,
    activeDrops: 0
  });

  // Target values for count-up animation
  const targetStats = {
    piecesSold: 12855,
    earnings: 433000,
    activeDrops: 4914
  };

  useEffect(() => {
    setMounted(true);

    // Count-up animation on mount
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = duration / steps;
    let currentStep = 0;

    const countUpInterval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        piecesSold: Math.floor(targetStats.piecesSold * progress),
        earnings: Math.floor(targetStats.earnings * progress),
        activeDrops: Math.floor(targetStats.activeDrops * progress)
      });

      if (currentStep >= steps) {
        clearInterval(countUpInterval);
        setStats(targetStats);

        // Start live counter after initial animation
        const liveInterval = setInterval(() => {
          setStats(prev => ({
            piecesSold: prev.piecesSold + Math.floor(Math.random() * 3),
            earnings: prev.earnings + Math.floor(Math.random() * 100) * 10,
            activeDrops: prev.activeDrops + (Math.random() > 0.7 ? 1 : 0)
          }));
        }, 3000);

        return () => clearInterval(liveInterval);
      }
    }, increment);

    return () => clearInterval(countUpInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0F0F]">
      {/* Radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 78, 140, 0.2) 0%, rgba(15, 15, 15, 1) 70%)'
        }}
      />

      {/* Floating money coins */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-[#FFD23F] text-2xl font-bold opacity-30 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            $
          </div>
        ))}
      </div>

      {/* Floating Product Images */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Hoodie - Left */}
        <div className={`absolute left-[8%] top-[18%] w-56 h-56 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FF4E8C]/30 hover:scale-105 transition-transform">
            <Image
              src="/images/merch/hoodie.webp"
              alt="Premium hoodie with crypto design"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Dad Hat - Top Right */}
        <div className={`absolute right-[12%] top-[12%] w-48 h-48 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FFD23F]/30 hover:scale-105 transition-transform">
            <Image
              src="/images/merch/dad-hat.webp"
              alt="Dad hat with crypto logo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Enamel Pin - Bottom Left */}
        <div className={`absolute left-[15%] bottom-[22%] w-40 h-40 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FF6B35]/30 hover:scale-105 transition-transform">
            <Image
              src="/images/merch/enamel-pin.webp"
              alt="Colorful enamel pin"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* T-Shirt - Bottom Right */}
        <div className={`absolute right-[10%] bottom-[18%] w-52 h-52 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FF4E8C]/30 hover:scale-105 transition-transform">
            <Image
              src="/images/merch/tshirt.webp"
              alt="Streetwear t-shirt with bold design"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 text-center pt-20 pb-16">
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] font-bold font-syne text-white mb-6 leading-tight">
          Launch merch that<br />
          <span
            className="inline-block text-[#FF4E8C] italic"
            style={{
              textShadow: '0 0 40px rgba(255, 78, 140, 0.5)',
              transform: 'rotate(-2deg)'
            }}
          >
            sells out.
          </span>
        </h1>

        <p className="text-3xl sm:text-4xl md:text-5xl font-bold font-syne text-white mb-8">
          Zero risk. All profit.
        </p>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
          Turn your ideas into real drops in 60 seconds. AI designs, community votes, global shipping.{' '}
          <a
            href="https://tohju.com/x402"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFD23F] hover:text-[#FF4E8C] underline transition-colors font-semibold"
          >
            Powered by x402
          </a>
          —your merch earns trust forever.
        </p>

        {/* Live Stats Row - HUGE Numbers */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {/* Pieces Sold - Yellow Glow */}
          <div
            className="relative bg-[#1A1A1A] backdrop-blur-sm border-2 border-[#FFD23F]/50 rounded-2xl px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
            style={{
              boxShadow: '0 0 40px rgba(255, 210, 63, 0.3)'
            }}
          >
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FFD23F] font-syne">
              {stats.piecesSold.toLocaleString()}
            </div>
            <div className="text-sm text-white/70 mt-1">pieces sold this week</div>
          </div>

          {/* Creator Earnings - Pink Glow */}
          <div
            className="relative bg-[#1A1A1A] backdrop-blur-sm border-2 border-[#FF4E8C]/50 rounded-2xl px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
            style={{
              boxShadow: '0 0 40px rgba(255, 78, 140, 0.3)'
            }}
          >
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FF4E8C] font-syne">
              ${(stats.earnings / 1000).toFixed(0)}k
            </div>
            <div className="text-sm text-white/70 mt-1">creator earnings</div>
          </div>

          {/* Active Drops - Orange Glow */}
          <div
            className="relative bg-[#1A1A1A] backdrop-blur-sm border-2 border-[#FF6B35]/50 rounded-2xl px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
            style={{
              boxShadow: '0 0 40px rgba(255, 107, 53, 0.3)'
            }}
          >
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FF6B35] font-syne">
              {stats.activeDrops.toLocaleString()}
            </div>
            <div className="text-sm text-white/70 mt-1">active drops</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary CTA - Pink to Orange Gradient */}
          <Link
            href="#signup"
            className="group relative inline-flex items-center justify-center px-10 sm:px-14 py-6 text-xl sm:text-2xl font-bold text-white rounded-full shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #FF4E8C 0%, #FF6B35 100%)',
              boxShadow: '0 10px 40px rgba(255, 78, 140, 0.4)'
            }}
          >
            <span className="relative z-10">Launch Your Drop Free</span>
            <svg
              className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            {/* Sparkle effect on hover */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)'
              }}
            />
          </Link>

          {/* Secondary CTA - Transparent with Pink Border */}
          <Link
            href="#live-drops"
            className="group inline-flex items-center justify-center px-10 sm:px-14 py-6 text-xl sm:text-2xl font-bold text-white bg-transparent rounded-full border-2 border-[#FF4E8C]/70 hover:bg-[#FF4E8C] hover:border-[#FF4E8C] transition-all duration-300"
          >
            See Live Drops
            <svg
              className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#FF4E8C]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
