"use client"

import { motion } from 'framer-motion'

const STATS = [
  "12,852 stores launched",
  "$2.3M $MOENY traded",
  "4,501 creators earning",
  "420 drops today",
  "89% satisfaction rate",
  // Duplicate for seamless loop
  "12,852 stores launched",
  "$2.3M $MOENY traded",
  "4,501 creators earning",
  "420 drops today",
  "89% satisfaction rate",
]

export default function StatsTicker() {
  return (
    <div className="w-full bg-gray-900 overflow-hidden py-3">
      <div className="flex w-full whitespace-nowrap">
        <div className="animate-scroll flex w-full justify-around items-center">
          {STATS.map((stat, i) => (
            <span key={i} className="mx-8 text-sm font-mono font-medium text-emerald-400">
              {stat}
            </span>
          ))}
          {/* Duplicate set for smoother CSS animation fallback if needed */}
           {STATS.map((stat, i) => (
            <span key={`dup-${i}`} className="mx-8 text-sm font-mono font-medium text-emerald-400">
              {stat}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
