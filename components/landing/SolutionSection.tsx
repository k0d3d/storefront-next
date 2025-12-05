'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SolutionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [subheadVisible, setSubheadVisible] = useState([false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger subhead lines
          setTimeout(() => setSubheadVisible([true, false, false]), 300);
          setTimeout(() => setSubheadVisible([true, true, false]), 600);
          setTimeout(() => setSubheadVisible([true, true, true]), 900);
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

  const rules = [
    {
      background: '#FF4E8C',
      imageSrc: '/images/solution/no-inventory.png',
      imageAlt: 'Stack of merch with coins',
      title: 'No inventory. Ever.',
      subtitle: 'We print & ship only after it sells.',
      textColor: 'white'
    },
    {
      background: '#FF6B35',
      imageSrc: '/images/solution/ai-agent.png',
      imageAlt: 'AI agent with merchandise',
      title: 'AI designs & sells 24/7.',
      subtitle: 'Your agent closes deals while you sleep.',
      textColor: 'white'
    },
    {
      background: '#FFD23F',
      imageSrc: '/images/solution/golden-crown.png',
      imageAlt: 'Golden crown with coins',
      title: 'You keep 100%.',
      subtitle: 'Only pay real printing + shipping. Nothing else.',
      textColor: 'black'
    }
  ];

  const mockProducts = [
    {
      name: 'Crypto Hoodie',
      price: 49,
      soldOut: true,
      image: '/images/merch/hoodie.webp'
    },
    {
      name: 'Degen Dad Hat',
      price: 25,
      soldOut: false,
      image: '/images/merch/dad-hat.webp'
    },
    {
      name: 'Rocket Pin',
      price: 15,
      soldOut: true,
      image: '/images/merch/enamel-pin.webp'
    },
    {
      name: 'Money Tee',
      price: 35,
      soldOut: false,
      image: '/images/merch/tshirt.webp'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0A0A0A] overflow-hidden"
    >
      {/* Animated rising $ particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#FFD23F] text-xl font-bold opacity-5 animate-rise"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 20}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            $
          </div>
        ))}
      </div>

      {/* Header Section */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pb-16 text-center">
        {/* Headline - Electric Yellow with Glow */}
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-[#FFD23F] mb-8 sm:mb-12 leading-tight transition-all duration-1000 max-w-5xl mx-auto ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            textShadow: '0 0 40px rgba(255, 210, 63, 0.6), 0 0 80px rgba(255, 210, 63, 0.4)'
          }}
        >
          We rewrote the rules.<br />
          Now creators win.
        </h2>

        {/* Subhead - Hot Pink, 3 Lines Staggered */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF4E8C] leading-tight space-y-2">
          <p className={`transition-all duration-500 ${subheadVisible[0] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            Zero upfront.
          </p>
          <p className={`transition-all duration-500 ${subheadVisible[1] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            All profit.
          </p>
          <p className={`transition-all duration-500 ${subheadVisible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            AI sells for you.
          </p>
        </div>
      </div>

      {/* The 3 New Rules - Full-Width Banners */}
      <div className="relative z-10">
        {rules.map((rule, index) => (
          <div
            key={index}
            className="w-full py-12 sm:py-16 md:py-20 min-h-96"
            style={{ background: rule.background }}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
                {/* Illustration */}
                <div className="relative h-[200px] sm:h-[250px] md:h-[350px]">
                  <Image
                    src={rule.imageSrc}
                    alt={rule.imageAlt}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <div className="text-center md:text-left">
                  <h3
                    className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-3 sm:mb-4 leading-none`}
                    style={{ color: rule.textColor }}
                  >
                    {rule.title}
                  </h3>
                  <p
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                    style={{ color: rule.textColor, opacity: 0.9 }}
                  >
                    {rule.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Carousel - Live Drops */}
      <div className="relative z-10 py-12 sm:py-16 md:py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 text-center">
            Live drops from creators like you
          </h3>

          {/* Horizontal Scroll Carousel */}
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {mockProducts.map((product, index) => (
              <div
                key={index}
                className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] bg-[#1A1A1A] rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform"
              >
                <div className="relative h-[260px] sm:h-[280px] md:h-[320px] mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.soldOut && (
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#DC2626] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                      SOLD OUT
                    </div>
                  )}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{product.name}</h4>
                <p className="text-[#FFD23F] text-2xl sm:text-3xl font-bold">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final Tagline - Pulsing */}
      <div className="relative z-10 py-8 sm:py-12 bg-[#0A0A0A] px-4">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center animate-pulse-opacity leading-tight max-w-4xl mx-auto">
          This isn't print-on-demand.<br />
          This is print-on-success.
        </p>
      </div>

      {/* CTA Button - The Money Shot */}
      <div className="relative z-10 py-12 sm:py-16 bg-[#0A0A0A] text-center px-4">
        <Link
          href="#signup"
          className="group inline-flex items-center justify-center w-full max-w-2xl mx-auto px-8 sm:px-12 md:px-16 py-5 sm:py-6 md:py-8 text-lg sm:text-xl md:text-2xl font-extrabold text-white rounded-full hover:scale-105 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #FF4E8C 0%, #FF6B35 50%, #FFD23F 100%)',
            boxShadow: '0 20px 60px rgba(255, 210, 63, 0.4)'
          }}
        >
          <span className="text-center">Launch Your First Drop in 60 Seconds</span>
          <svg
            className="ml-2 sm:ml-3 w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-2 transition-transform flex-shrink-0"
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

      {/* Styles */}
      <style jsx>{`
        @keyframes rise {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-120vh);
          }
        }

        .animate-rise {
          animation: rise 6s linear infinite;
        }

        @keyframes pulse-opacity {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-pulse-opacity {
          animation: pulse-opacity 2s ease-in-out infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
