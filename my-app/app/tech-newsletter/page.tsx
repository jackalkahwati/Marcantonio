'use client'

import { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

export default function TechNewsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the newsletter subscription
    console.log('Newsletter subscription:', email)
    setStatus('success')
    setEmail('')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-navy-blue text-white">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-12 text-center">Defense Tech Newsletter</h1>
        
        {/* Newsletter Description */}
        <div className="text-center mb-12">
          <p className="text-xl text-white font-medium max-w-3xl mx-auto">
            Stay informed about the latest developments in defense technology, cybersecurity, 
            and strategic innovations. Our monthly newsletter delivers expert insights directly 
            to your inbox.
          </p>
        </div>

        {/* Subscription Form */}
        <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">Subscribe to Our Newsletter</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-gold focus:outline-none font-medium"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            
            {status === 'success' && (
              <div className="flex items-center text-green-400 text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Successfully subscribed to the newsletter!
              </div>
            )}
            
            {status === 'error' && (
              <div className="flex items-center text-red-400 text-sm font-medium">
                <AlertCircle className="w-4 h-4 mr-2" />
                An error occurred. Please try again.
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-gold text-navy-blue py-3 px-6 rounded font-semibold hover:bg-opacity-90 transition-colors"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        {/* Featured Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">What You&apos;ll Receive</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-gold mr-3 mt-1" />
                <span className="text-white font-medium">Monthly analysis of emerging defense technologies</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-gold mr-3 mt-1" />
                <span className="text-white font-medium">Expert insights on cybersecurity trends</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-gold mr-3 mt-1" />
                <span className="text-white font-medium">Updates on strategic defense innovations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-gold mr-3 mt-1" />
                <span className="text-white font-medium">Exclusive interviews with industry leaders</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">Previous Topics</h2>
            <ul className="space-y-4">
              <li className="border-b border-gray-700 pb-4">
                <h3 className="font-medium text-white">AI in Military Operations</h3>
                <p className="text-gray-300 text-sm font-medium">December 2023</p>
              </li>
              <li className="border-b border-gray-700 pb-4">
                <h3 className="font-medium text-white">Next-Gen Cybersecurity Solutions</h3>
                <p className="text-gray-300 text-sm font-medium">November 2023</p>
              </li>
              <li className="border-b border-gray-700 pb-4">
                <h3 className="font-medium text-white">Quantum Computing in Defense</h3>
                <p className="text-gray-300 text-sm font-medium">October 2023</p>
              </li>
              <li>
                <h3 className="font-medium text-white">Future of Autonomous Systems</h3>
                <p className="text-gray-300 text-sm font-medium">September 2023</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

