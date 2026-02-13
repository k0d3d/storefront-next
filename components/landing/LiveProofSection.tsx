'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LiveProofSection() {
  const [leaderboard, setLeaderboard] = useState([
    {
      rank: 1,
      handle: '@cryptoqueen',
      avatar: '👑',
      totalEarned: 127840,
      thisWeek: 18420,
      color: '#FF4E8C'
    },
    {
      rank: 2,
      handle: '@nftking',
      avatar: '🔥',
      totalEarned: 104230,
      thisWeek: 15670,
      color: '#FF6B35'
    },
    {
      rank: 3,
      handle: '@degenartist',
      avatar: '✨',
      totalEarned: 98650,
      thisWeek: 12340,
      color: '#FFD23F'
    },
    {
      rank: 4,
      handle: '@moonboi',
      avatar: '🚀',
      totalEarned: 87420,
      thisWeek: 9820,
      color: '#A855F7'
    },
    {
      rank: 5,
      handle: '@vibecheck',
      avatar: '💎',
      totalEarned: 76530,
      thisWeek: 8740,
      color: '#EC4899'
    },
    {
      rank: 6,
      handle: '@stacksondeck',
      avatar: '💰',
      totalEarned: 68920,
      thisWeek: 7650,
      color: '#F59E0B'
    },
    {
      rank: 7,
      handle: '@hypemaster',
      avatar: '⚡',
      totalEarned: 61240,
      thisWeek: 6890,
      color: '#10B981'
    },
    {
      rank: 8,
      handle: '@merchwizard',
      avatar: '🧙',
      totalEarned: 54780,
      thisWeek: 6120,
      color: '#6366F1'
    },
    {
      rank: 9,
      handle: '@solanagang',
      avatar: '☀️',
      totalEarned: 49320,
      thisWeek: 5540,
      color: '#14B8A6'
    },
    {
      rank: 10,
      handle: '@printmoney',
      avatar: '🖨️',
      totalEarned: 43870,
      thisWeek: 4980,
      color: '#8B5CF6'
    }
  ]);

  const [carouselPosition, setCarouselPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const soldOutDrops = [
    {
      image: '/images/merch/hoodie.webp',
      name: 'Crypto Hoodie',
      soldOutIn: 11,
      price: 49,
      earnings: 2450,
      quantity: 50
    },
    {
      image: '/images/merch/dad-hat.webp',
      name: 'Degen Dad Hat',
      soldOutIn: 8,
      price: 25,
      earnings: 1875,
      quantity: 75
    },
    {
      image: '/images/merch/enamel-pin.webp',
      name: 'Rocket Pin',
      soldOutIn: 5,
      price: 15,
      earnings: 1800,
      quantity: 120
    },
    {
      image: '/images/merch/tshirt.webp',
      name: 'Money Tee',
      soldOutIn: 14,
      price: 35,
      earnings: 2100,
      quantity: 60
    },
    {
      image: '/images/merch/hoodie.webp',
      name: 'Diamond Hoodie',
      soldOutIn: 9,
      price: 55,
      earnings: 3300,
      quantity: 60
    },
    {
      image: '/images/merch/tshirt.webp',
      name: 'Vibes Tee',
      soldOutIn: 6,
      price: 30,
      earnings: 2400,
      quantity: 80
    },
    {
      image: '/images/merch/dad-hat.webp',
      name: 'Moon Hat',
      soldOutIn: 12,
      price: 28,
      earnings: 1960,
      quantity: 70
    },
    {
      image: '/images/merch/enamel-pin.webp',
      name: 'Fire Pin',
      soldOutIn: 4,
      price: 12,
      earnings: 1440,
      quantity: 120
    },
    {
      image: '/images/merch/hoodie.webp',
      name: 'Stack Hoodie',
      soldOutIn: 10,
      price: 52,
      earnings: 2600,
      quantity: 50
    },
    {
      image: '/images/merch/tshirt.webp',
      name: 'Hype Tee',
      soldOutIn: 7,
      price: 32,
      earnings: 2240,
      quantity: 70
    }
  ];

  // Ticking animation - increment earnings every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLeaderboard((prev) =>
        prev.map((creator) => ({
          ...creator,
          totalEarned: creator.totalEarned + Math.floor(Math.random() * 50) + 10,
          thisWeek: creator.thisWeek + Math.floor(Math.random() * 20) + 5
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Auto-playing carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        const newPosition = carouselPosition + 320;

        if (newPosition >= maxScroll) {
          setCarouselPosition(0);
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          setCarouselPosition(newPosition);
          carouselRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselPosition]);

  return (
    <section className="relative bg-black overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Floating $ coins background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#FFD23F] text-2xl font-bold opacity-[0.03] animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 10}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            $
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto">
        {/* Headline */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-[#FFD23F] text-center mb-8 sm:mb-12 md:mb-16 leading-tight max-w-6xl mx-auto"
          style={{
            textShadow: '0 0 60px rgba(255, 210, 63, 0.8), 0 0 100px rgba(255, 210, 63, 0.5)'
          }}
        >
          This is happening right now.
        </h2>

        {/* Live Earnings Leaderboard */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF4E8C] text-center mb-6 sm:mb-8">
            Top Creators This Week
          </h3>

          <div className="overflow-x-auto">
            <div
              className="w-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                minHeight: 'auto'
              }}
            >
              {/* Leaderboard Header - Hide "Total Earned" column on mobile */}
              <div className="grid grid-cols-10 sm:grid-cols-12 gap-2 sm:gap-4 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-white/10 text-white/60 text-xs sm:text-sm font-semibold">
                <div className="col-span-1 text-center">Rank</div>
                <div className="col-span-6 sm:col-span-5">Creator</div>
                <div className="hidden sm:block sm:col-span-3 text-right">Total Earned</div>
                <div className="col-span-3 text-right">This Week</div>
              </div>

              {/* Leaderboard Rows */}
              <div className="space-y-2 sm:space-y-3">
                {leaderboard.map((creator) => (
                  <div
                    key={creator.rank}
                    className={`grid grid-cols-10 sm:grid-cols-12 gap-2 sm:gap-4 items-center py-3 sm:py-4 px-2 sm:px-4 rounded-lg sm:rounded-xl transition-all hover:scale-[1.02] ${
                      creator.rank <= 3 ? 'bg-white/5' : 'bg-transparent'
                    }`}
                    style={{
                      border: creator.rank <= 3 ? `1px solid ${creator.color}40` : 'none'
                    }}
                  >
                    {/* Rank */}
                    <div className="col-span-1 text-center">
                      {creator.rank <= 3 ? (
                        <div className="text-xl sm:text-2xl md:text-3xl">{creator.rank === 1 ? '👑' : creator.rank === 2 ? '🥈' : '🥉'}</div>
                      ) : (
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-white/40">#{creator.rank}</div>
                      )}
                    </div>

                    {/* Avatar + Handle */}
                    <div className="col-span-6 sm:col-span-5 flex items-center gap-2 sm:gap-3">
                      <div
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-base sm:text-lg md:text-2xl flex-shrink-0"
                        style={{ background: `${creator.color}20`, border: `2px solid ${creator.color}` }}
                      >
                        {creator.avatar}
                      </div>
                      <span
                        className={`text-sm sm:text-base md:text-lg font-semibold truncate ${
                          creator.rank <= 3 ? 'text-white md:text-xl' : 'text-white/80'
                        }`}
                      >
                        {creator.handle}
                      </span>
                    </div>

                    {/* Total Earned - Hidden on mobile */}
                    <div className="hidden sm:block sm:col-span-3 text-right">
                      <div
                        className={`font-bold ${
                          creator.rank <= 3 ? 'text-xl md:text-2xl text-[#FFD23F]' : 'text-lg md:text-xl text-white'
                        }`}
                        style={{
                          textShadow: creator.rank <= 3 ? '0 0 20px rgba(255, 210, 63, 0.5)' : 'none'
                        }}
                      >
                        ${creator.totalEarned.toLocaleString()}
                      </div>
                    </div>

                    {/* This Week */}
                    <div className="col-span-3 text-right">
                      <div className={`font-semibold text-sm sm:text-base md:text-lg ${creator.rank <= 3 ? 'sm:text-lg' : ''}`} style={{ color: creator.color }}>
                        +${creator.thisWeek.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Drops Carousel */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {soldOutDrops.map((drop, index) => (
              <div
                key={index}
                className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] rounded-xl sm:rounded-2xl overflow-hidden relative group flex-shrink-0"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Product Image */}
                <div className="relative h-[260px] sm:h-[280px] md:h-[300px]">
                  <Image
                    src={drop.image}
                    alt={drop.name}
                    fill
                    className="object-cover"
                  />
                  {/* SOLD OUT Badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#DC2626] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                    SOLD OUT
                  </div>
                  {/* Sold Out Time */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-black/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3">
                    <p className="text-[#FFD23F] text-xs sm:text-sm font-semibold">Sold out in {drop.soldOutIn} minutes</p>
                  </div>
                </div>

                {/* Drop Info */}
                <div className="p-3 sm:p-4">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{drop.name}</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-xs sm:text-sm">Price</p>
                      <p className="text-[#FFD23F] text-xl sm:text-2xl font-bold">${drop.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/60 text-xs sm:text-sm">Earned</p>
                      <p className="text-[#FF4E8C] text-xl sm:text-2xl font-bold">${drop.earnings.toLocaleString()}</p>
                    </div>
                  </div>
                  <p className="text-white/40 text-xs mt-2">{drop.quantity} units</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Killer Stat */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-2">
          <div
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-3 sm:mb-4 leading-tight max-w-4xl mx-auto"
            style={{
              textShadow: '0 0 40px rgba(255, 210, 63, 0.6)'
            }}
          >
            $2.4M paid out to creators
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white/80">
            Zero inventory left behind.
          </div>
        </div>

        {/* CTA Button - Bigger & Pulsing */}
        <div className="text-center">
          <Link
            href="#signup"
            className="inline-flex items-center justify-center w-full max-w-md mx-auto px-8 sm:px-12 md:px-16 py-5 sm:py-6 md:py-8 text-lg sm:text-xl md:text-2xl font-extrabold text-white rounded-full hover:scale-105 transition-all duration-300 animate-pulse-scale"
            style={{
              background: 'linear-gradient(135deg, #FF4E8C 0%, #FF6B35 50%, #FFD23F 100%)',
              boxShadow: '0 20px 60px rgba(255, 210, 63, 0.5)'
            }}
          >
            <span>Launch Your Drop Free</span>
            <svg
              className="ml-2 sm:ml-3 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform flex-shrink-0"
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

      {/* Styles */}
      <style jsx>{`
        @keyframes float-slow {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-120vh);
          }
        }

        .animate-float-slow {
          animation: float-slow 12s linear infinite;
        }

        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
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
