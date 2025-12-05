'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FinalCTASection() {
  const [countdown, setCountdown] = useState(58);
  const [dropsCount, setDropsCount] = useState(12847);

  // Countdown timer - ticks down from 10 to 0, then resets
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0) return 10;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Increment drops count every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDropsCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FF4E8C 0%, #FF6B35 100%)'
      }}
    >
      {/* Upward-moving $ coins background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#FFD23F] text-3xl font-bold opacity-[0.08] animate-rise-money"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 10}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 3}s`,
              textShadow: '0 0 20px rgba(255, 210, 63, 0.6)'
            }}
          >
            $
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Headline - Tilted upward */}
        <h1
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[110px] font-extrabold text-white mb-8 leading-tight"
          style={{
            textShadow: '0 0 60px rgba(255, 78, 140, 0.8), 0 0 100px rgba(255, 78, 140, 0.5)',
            transform: 'rotate(-1deg)'
          }}
        >
          Stop waiting.<br />
          Start printing money.
        </h1>

        {/* Subhead */}
        <p className="text-3xl sm:text-4xl text-white mb-12 leading-relaxed font-semibold">
          Your first drop goes live in 60 seconds.<br />
          Zero cost. Real profit.
        </p>

        {/* Primary CTA Button - MASSIVE */}
        <div className="mb-8">
          <Link
            href="#signup"
            className="inline-flex items-center justify-center px-20 py-10 text-4xl font-extrabold text-black rounded-full hover:scale-110 transition-all duration-300 animate-pulse-glow"
            style={{
              background: 'linear-gradient(135deg, #FFD23F 0%, #FF6B35 100%)',
              boxShadow: '0 30px 80px rgba(255, 210, 63, 0.6), 0 0 60px rgba(255, 107, 53, 0.5)',
              minHeight: '120px'
            }}
          >
            Launch Your Drop Free
            <svg
              className="ml-4 w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>

        {/* Secondary CTA Button */}
        <div className="mb-16">
          <Link
            href="#drops"
            className="inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-white rounded-full hover:bg-white hover:text-[#FF6B35] transition-all duration-300"
            style={{
              border: '3px solid white'
            }}
          >
            Or See Live Drops First
            <svg
              className="ml-3 w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>

        {/* Live countdown timer */}
        <div className="mb-16">
          <p className="text-white text-xl mb-3">
            Average time from clicking to live drop:
          </p>
          <div
            className="text-[#FFD23F] text-6xl font-extrabold font-mono"
            style={{
              textShadow: '0 0 40px rgba(255, 210, 63, 0.8)'
            }}
          >
            00:{countdown < 10 ? `0${countdown}` : countdown}
          </div>
        </div>

        {/* Final flex line */}
        <div className="text-white text-lg">
          <p className="mb-1">
            <span className="font-bold text-2xl">{dropsCount.toLocaleString()}</span> drops launched this week.
          </p>
          <p className="text-xl font-semibold">
            Be {(dropsCount + 1).toLocaleString()}.
          </p>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes rise-money {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-120vh);
          }
        }

        .animate-rise-money {
          animation: rise-money 9s linear infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 30px 80px rgba(255, 210, 63, 0.6), 0 0 60px rgba(255, 107, 53, 0.5);
          }
          50% {
            box-shadow: 0 30px 100px rgba(255, 210, 63, 0.8), 0 0 80px rgba(255, 107, 53, 0.7);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
