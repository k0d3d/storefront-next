import Link from 'next/link'
import { Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold">MerchPaddie</h3>
            <p className="mt-2 text-gray-400">Where Creativity Meets Cash</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/about" className="hover:text-indigo-400 transition-colors">About</Link>
            <Link href="/faq" className="hover:text-indigo-400 transition-colors">FAQ</Link>
            <Link href="/docs" className="hover:text-indigo-400 transition-colors">Docs</Link>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-2">
              <Twitter size={20} /> Twitter
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MerchPaddie. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
