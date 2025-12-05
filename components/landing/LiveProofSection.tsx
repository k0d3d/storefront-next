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
    <section className="relative bg-black overflow-hidden py-20">
      {/* Floating $ coins background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-4">
        {/* Headline */}
        <h2
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[120px] font-extrabold text-[#FFD23F] text-center mb-16 leading-tight"
          style={{
            textShadow: '0 0 60px rgba(255, 210, 63, 0.8), 0 0 100px rgba(255, 210, 63, 0.5)'
          }}
        >
          This is happening right now.
        </h2>

        {/* Live Earnings Leaderboard */}
        <div className="mb-12">
          <h3 className="text-4xl sm:text-5xl font-bold text-[#FF4E8C] text-center mb-8">
            Top Creators This Week
          </h3>

          <div
            className="w-full max-w-5xl mx-auto rounded-3xl p-8 backdrop-blur-xl"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              minHeight: '60vh'
            }}
          >
            {/* Leaderboard Header */}
            <div className="grid grid-cols-12 gap-4 mb-6 pb-4 border-b border-white/10 text-white/60 text-sm font-semibold">
              <div className="col-span-1 text-center">Rank</div>
              <div className="col-span-5">Creator</div>
              <div className="col-span-3 text-right">Total Earned</div>
              <div className="col-span-3 text-right">This Week</div>
            </div>

            {/* Leaderboard Rows */}
            <div className="space-y-3">
              {leaderboard.map((creator) => (
                <div
                  key={creator.rank}
                  className={`grid grid-cols-12 gap-4 items-center py-4 px-4 rounded-xl transition-all hover:scale-[1.02] ${
                    creator.rank <= 3 ? 'bg-white/5' : 'bg-transparent'
                  }`}
                  style={{
                    border: creator.rank <= 3 ? `1px solid ${creator.color}40` : 'none'
                  }}
                >
                  {/* Rank */}
                  <div className="col-span-1 text-center">
                    {creator.rank <= 3 ? (
                      <div className="text-3xl">{creator.rank === 1 ? '👑' : creator.rank === 2 ? '🥈' : '🥉'}</div>
                    ) : (
                      <div className="text-2xl font-bold text-white/40">#{creator.rank}</div>
                    )}
                  </div>

                  {/* Avatar + Handle */}
                  <div className="col-span-5 flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                      style={{ background: `${creator.color}20`, border: `2px solid ${creator.color}` }}
                    >
                      {creator.avatar}
                    </div>
                    <span
                      className={`text-lg font-semibold ${
                        creator.rank <= 3 ? 'text-white text-xl' : 'text-white/80'
                      }`}
                    >
                      {creator.handle}
                    </span>
                  </div>

                  {/* Total Earned */}
                  <div className="col-span-3 text-right">
                    <div
                      className={`font-bold ${
                        creator.rank <= 3 ? 'text-2xl text-[#FFD23F]' : 'text-xl text-white'
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
                    <div className={`font-semibold ${creator.rank <= 3 ? 'text-lg' : 'text-base'}`} style={{ color: creator.color }}>
                      +${creator.thisWeek.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Drops Carousel */}
        <div className="mb-16">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {soldOutDrops.map((drop, index) => (
              <div
                key={index}
                className="min-w-[300px] rounded-2xl overflow-hidden relative group"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Product Image */}
                <div className="relative h-[300px]">
                  <Image
                    src={drop.image}
                    alt={drop.name}
                    fill
                    className="object-cover"
                  />
                  {/* SOLD OUT Badge */}
                  <div className="absolute top-4 right-4 bg-[#DC2626] text-white px-4 py-2 rounded-full text-sm font-bold">
                    SOLD OUT
                  </div>
                  {/* Sold Out Time */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-3">
                    <p className="text-[#FFD23F] text-sm font-semibold">Sold out in {drop.soldOutIn} minutes</p>
                  </div>
                </div>

                {/* Drop Info */}
                <div className="p-4">
                  <h4 className="text-xl font-bold text-white mb-2">{drop.name}</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-sm">Price</p>
                      <p className="text-[#FFD23F] text-2xl font-bold">${drop.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/60 text-sm">Earned</p>
                      <p className="text-[#FF4E8C] text-2xl font-bold">${drop.earnings.toLocaleString()}</p>
                    </div>
                  </div>
                  <p className="text-white/40 text-xs mt-2">{drop.quantity} units</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Killer Stat */}
        <div className="text-center mb-12">
          <div
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4"
            style={{
              textShadow: '0 0 40px rgba(255, 210, 63, 0.6)'
            }}
          >
            $2.4M paid out to creators
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/80">
            Zero inventory left behind.
          </div>
        </div>

        {/* CTA Button - Bigger & Pulsing */}
        <div className="text-center">
          <Link
            href="#signup"
            className="inline-flex items-center justify-center px-16 py-8 text-2xl font-extrabold text-white rounded-full hover:scale-105 transition-all duration-300 animate-pulse-scale"
            style={{
              background: 'linear-gradient(135deg, #FF4E8C 0%, #FF6B35 50%, #FFD23F 100%)',
              boxShadow: '0 20px 60px rgba(255, 210, 63, 0.5)'
            }}
          >
            Launch Your Drop Free
            <svg
              className="ml-3 w-8 h-8 group-hover:translate-x-2 transition-transform"
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
