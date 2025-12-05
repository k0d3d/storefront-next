'use client';

import Link from 'next/link';

interface HeaderMinimalProps {
  logo?: string;
}

export default function HeaderMinimal({ logo = 'MerchPaddie' }: HeaderMinimalProps) {
  return (
    <header className="fixed top-0 z-50 w-full bg-black border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-6 h-16">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center">
            <span className="text-white font-extrabold text-xl sm:text-2xl tracking-tight">
              {logo}
            </span>
          </Link>

          {/* CTA Button - Right */}
          <Link
            href="#signup"
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-extrabold text-white rounded-full hover:scale-105 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #FF4E8C 0%, #FF6B35 100%)',
              boxShadow: '0 4px 20px rgba(255, 78, 140, 0.4)'
            }}
          >
            Launch Your Drop
            <svg
              className="ml-2 w-4 h-4"
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
      </div>
    </header>
  );
}
