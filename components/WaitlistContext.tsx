"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Check, Loader2 } from 'lucide-react'
import { Button } from './ui/Button'
import { cn } from './ui/Button' // Reusing cn utility

interface WaitlistContextType {
  isOpen: boolean
  openWaitlist: (preselectType?: 'vendor' | 'creator' | 'both') => void
  closeWaitlist: () => void
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined)

export function useWaitlist() {
  const context = useContext(WaitlistContext)
  if (!context) {
    throw new Error('useWaitlist must be used within a WaitlistProvider')
  }
  return context
}

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [userType, setUserType] = useState<'vendor' | 'creator' | 'both'>('both')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const openWaitlist = (type: 'vendor' | 'creator' | 'both' = 'both') => {
    setUserType(type)
    setIsOpen(true)
    setStatus('idle')
    setEmail('')
  }

  const closeWaitlist = () => setIsOpen(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, type: userType }),
      })

      if (!res.ok) throw new Error('Failed to join waitlist')
      
      setStatus('success')
      // Auto close after 2 seconds
      setTimeout(() => {
        closeWaitlist()
      }, 3000)
    } catch (err) {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <WaitlistContext.Provider value={{ isOpen, openWaitlist, closeWaitlist }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeWaitlist}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                <button 
                  onClick={closeWaitlist}
                  className="absolute top-4 right-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors"
                >
                  <X size={20} />
                </button>
                <h2 className="text-2xl font-bold">Join the Beta</h2>
                <p className="mt-2 text-indigo-100">Get early access + $10k $MOENY free to start.</p>
              </div>

              <div className="p-8">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="mb-4 rounded-full bg-green-100 p-4 text-green-600">
                      <Check size={48} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">You're on the list!</h3>
                    <p className="mt-2 text-gray-600">Check your email for your beta invite code.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="you@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">I want to</label>
                      <select
                        value={userType}
                        onChange={(e) => setUserType(e.target.value as any)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500"
                      >
                        <option value="vendor">Sell Products (Vendor)</option>
                        <option value="creator">Promote Stores (Creator)</option>
                        <option value="both">Both</option>
                      </select>
                    </div>

                    <div className="flex items-start">
                      <input
                        id="updates"
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor="updates" className="ml-2 text-sm text-gray-600">
                        Send me product updates and earning tips.
                      </label>
                    </div>

                    {status === 'error' && (
                      <p className="text-sm text-red-600">{errorMessage}</p>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" /> Joining...
                        </>
                      ) : (
                        'Join Waitlist'
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </WaitlistContext.Provider>
  )
}
