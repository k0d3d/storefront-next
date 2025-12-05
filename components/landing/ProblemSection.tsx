'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const problemCards = [
    {
      imageSrc: '/images/problem/burning-cash.png',
      imageAlt: 'Burning stack of cash',
      number: '$5k–$25k',
      subtitle: 'Inventory that rots in your garage',
      detail: 'upfront',
      glowColor: 'rgba(220, 38, 38, 0.3)',
      borderColor: '#DC2626',
      delay: '0ms'
    },
    {
      imageSrc: '/images/problem/broken-hourglass.png',
      imageAlt: 'Broken hourglass exploding',
      number: '4–12 weeks',
      subtitle: 'Waiting for samples, prints, shipping',
      detail: '',
      glowColor: 'rgba(255, 107, 53, 0.3)',
      borderColor: '#FF6B35',
      delay: '200ms'
    },
    {
      imageSrc: '/images/problem/greedy-hand.png',
      imageAlt: 'Greedy hand grabbing coins',
      number: '50–70%',
      subtitle: 'Platforms take the profit, you get crumbs',
      detail: 'cut',
      glowColor: 'rgba(185, 28, 28, 0.3)',
      borderColor: '#B91C1C',
      delay: '400ms'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0F0F] py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Red haze overlay - "blood in the water" */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(220, 38, 38, 0.15) 0%, rgba(15, 15, 15, 0) 60%)'
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto relative z-10 text-center max-w-7xl">
        {/* Headline - Distressed hot pink */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-syne text-[#FF4E8C] mb-6 sm:mb-8 leading-tight max-w-5xl mx-auto px-2"
          style={{
            textShadow: '0 0 20px rgba(255, 78, 140, 0.4), 3px 3px 0 rgba(220, 38, 38, 0.3), -2px -2px 0 rgba(0, 0, 0, 0.5)',
            letterSpacing: '0.02em'
          }}
        >
          Most merch launches die<br />
          before they even start.
        </h2>

        {/* Subhead - Creates tension */}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-12 sm:mb-16 px-2">
          And nobody talks about why.
        </p>

        {/* Problem Cards - 3 Column Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-md mx-auto md:max-w-6xl md:grid-cols-3 md:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {problemCards.map((card, index) => (
            <div
              key={index}
              className={`problem-card relative bg-[#1A1A1A] rounded-2xl px-6 py-8 w-full transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-20'
              } hover:scale-105`}
              style={{
                border: `2px solid ${card.borderColor}`,
                boxShadow: `0 0 40px ${card.glowColor}`,
                transitionDelay: isVisible ? card.delay : '0ms',
                transform: !isVisible
                  ? index === 0
                    ? 'translateX(-100px) translateY(20px)'
                    : index === 1
                    ? 'translateY(-100px)'
                    : 'translateX(100px) translateY(20px)'
                  : 'none',
                willChange: 'transform, opacity'
              }}
            >
              {/* Illustration */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Big Number */}
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-syne mb-2">
                {card.number}
              </div>

              {/* Detail text (upfront, cut, etc) */}
              {card.detail && (
                <div className="text-lg sm:text-xl text-white/80 mb-3">{card.detail}</div>
              )}

              {/* Subtitle */}
              <div className="text-sm sm:text-base text-white/70 leading-snug px-2">
                {card.subtitle}
              </div>
            </div>
          ))}
        </div>

        {/* Kicker Line - Pulsing Red */}
        <div className="mb-8 sm:mb-12 px-2">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-syne animate-pulseRed leading-tight max-w-3xl mx-auto">
            You're not bad at merch.<br />
            The game was rigged.
          </p>
        </div>

        {/* Subtle CTA */}
        <div className="text-sm sm:text-base md:text-lg text-white/70 px-2">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            Keep scrolling to see how we burned the old playbook
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </p>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes pulseRed {
          0%, 100% {
            color: #DC2626;
            text-shadow: 0 0 20px rgba(220, 38, 38, 0.5);
          }
          50% {
            color: #EF4444;
            text-shadow: 0 0 30px rgba(220, 38, 38, 0.8);
          }
        }

        .animate-pulseRed {
          animation: pulseRed 2s ease-in-out infinite;
        }

        @keyframes shake {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-0.5deg) scale(1.02); }
          75% { transform: rotate(0.5deg) scale(1.02); }
        }

        .problem-card:hover {
          animation: shake 0.5s ease-in-out;
        }

        .problem-card:hover {
          box-shadow: 0 0 60px var(--glow-color);
        }
      `}</style>
    </section>
  );
}
