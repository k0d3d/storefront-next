"use client"
import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [userType, setUserType] = useState('both')
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, type: userType })
      })
      setFormStatus('success')
    } catch (err) {
      setFormStatus('idle')
      alert('Something went wrong.')
    }
  }

  return (
    <section id="waitlist-form" className="section-screen bg-white py-24">
      <div className="container mx-auto px-6 max-w-2xl text-center fade-in">
        <h2 className="text-5xl md:text-6xl font-bold mb-12">Ready to begin?</h2>
        
        {formStatus === 'success' ? (
          <div className="bg-green-50 p-12 rounded-3xl border border-green-100 fade-in visible">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} strokeWidth={3} />
            </div>
            <h3 className="text-3xl font-bold text-green-900 mb-4">You're in.</h3>
            <p className="text-xl text-green-800">
              Check your email in the next 5 minutes. We just sent you everything you need to get started.
            </p>
          </div>
        ) : (
          <form onSubmit={handleJoin} className="space-y-8 text-left">
            <div>
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-2xl px-8 py-6 rounded-2xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-gray-300 bg-gray-50"
              />
            </div>

            <div className="space-y-4">
              <label className="text-lg font-medium text-muted ml-2">I want to:</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['vendor', 'creator', 'both'].map((type) => (
                  <label 
                    key={type}
                    className={`
                      cursor-pointer rounded-xl border-2 p-4 text-center transition-all
                      ${userType === type ? 'border-primary bg-indigo-50 text-primary font-bold' : 'border-gray-200 hover:border-gray-300'}
                    `}
                  >
                    <input 
                      type="radio" 
                      name="type" 
                      value={type} 
                      checked={userType === type}
                      onChange={(e) => setUserType(e.target.value)}
                      className="sr-only"
                    />
                    <span className="capitalize">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full text-xl py-8 rounded-2xl shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/30"
              disabled={formStatus === 'loading'}
            >
              {formStatus === 'loading' ? 'Joining...' : 'Begin'}
            </Button>

            <p className="text-center text-muted font-medium">
              <span className="counter" data-target="1847">0</span> people ahead of you. Launch in 4 weeks. Waitlist closes at 5,000.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
