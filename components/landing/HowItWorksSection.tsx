'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HowItWorksSection() {
  const [timer, setTimer] = useState(58);

  // Ticking timer animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev >= 62) return 56;
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      number: '1',
      text: 'Pick your vibe or let AI design it',
      backgroundColor: '#FF4E8C',
      textColor: 'white',
      image: '/images/steps/step1-ai-painting.png',
      imageAlt: 'AI robot painting on hoodie'
    },
    {
      number: '2',
      text: 'Drop it. Your community votes & pre-orders',
      backgroundColor: '#FF6B35',
      textColor: 'white',
      image: '/images/steps/step2-voting-poll.png',
      imageAlt: 'Phone voting poll'
    },
    {
      number: '3',
      text: 'It sells out → we print & ship globally',
      backgroundColor: '#FFD23F',
      textColor: 'black',
      image: '/images/steps/step3-conveyor-belt.png',
      imageAlt: 'Conveyor belt with hoodies'
    },
    {
      number: '4',
      text: 'You keep 100%. Money hits your wallet',
      backgroundColor: '#0F0F0F',
      textColor: 'white',
      image: '/images/steps/step4-money-wallet.png',
      imageAlt: 'Money rain into wallet'
    }
  ];

  return (
    <section className="relative bg-white overflow-hidden py-20">
      {/* Timer Badge - Top Right */}
      <div className="absolute top-8 right-8 z-20 bg-black text-white px-6 py-3 rounded-full text-sm font-bold border-2 border-[#FFD23F]">
        <span className="text-[#FFD23F]">⏱️ Average launch time:</span> 00:{timer < 10 ? `0${timer}` : timer}
      </div>

      {/* Header Section */}
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-black mb-6 leading-tight">
          Launch a drop in 60 seconds.<br />
          Seriously.
        </h2>
        <p className="text-2xl sm:text-3xl text-gray-600">
          No inventory. No waiting. No upfront cost.
        </p>
      </div>

      {/* 4-Step Flow - Full Width Panels */}
      <div className="w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className="w-full relative overflow-hidden"
            style={{
              background: step.backgroundColor,
              minHeight: '650px'
            }}
          >
            <div className="container mx-auto px-4 h-full">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 h-full py-12">
                {/* Giant Number - Left Side */}
                <div className="md:col-span-3 flex items-center justify-center">
                  <div
                    className="font-extrabold"
                    style={{
                      fontSize: '300px',
                      lineHeight: '1',
                      color: step.textColor === 'white' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)',
                      textShadow: step.textColor === 'white'
                        ? '0 0 80px rgba(255, 255, 255, 0.3)'
                        : '0 0 80px rgba(0, 0, 0, 0.2)',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Illustration - Center */}
                <div className="md:col-span-4 flex items-center justify-center">
                  <div className="relative w-full h-[400px] md:h-[500px]">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-contain drop-shadow-2xl"
                      style={{
                        filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
                      }}
                    />
                  </div>
                </div>

                {/* Text - Right Side */}
                <div className="md:col-span-5 flex items-center">
                  <h3
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
                    style={{
                      color: step.textColor,
                      textShadow: step.textColor === 'white'
                        ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                        : 'none'
                    }}
                  >
                    {step.text}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Closer Section */}
      <div className="container mx-auto px-4 text-center py-20">
        <p className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black mb-4">
          That's it.
        </p>
        <p className="text-3xl sm:text-4xl text-gray-700 mb-12">
          No samples. No minimums. No excuses.
        </p>

        {/* CTA Button - Huge Gradient */}
        <Link
          href="#signup"
          className="inline-flex items-center justify-center px-16 py-8 text-2xl sm:text-3xl font-extrabold text-white rounded-full hover:scale-105 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #FF4E8C 0%, #FF6B35 50%, #FFD23F 100%)',
            boxShadow: '0 20px 60px rgba(255, 78, 140, 0.4)'
          }}
        >
          Launch Your Drop in 60 Seconds
          <svg
            className="ml-4 w-9 h-9 group-hover:translate-x-2 transition-transform"
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
    </section>
  );
}
