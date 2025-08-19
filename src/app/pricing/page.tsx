'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

type Tier = {
  id: string
  name: string
  price?: number
  features: string[]
  limits?: { messages?: number }
}

type ServicesConfig = { tiers: Tier[] }

export default function PricingPage() {
  const [config, setConfig] = useState<ServicesConfig | null>(null)

  useEffect(() => {
    fetch('/chatbot/config/services.json')
      .then(r => r.json())
      .then(setConfig)
      .catch(() => setConfig({ tiers: [] }))
  }, [])

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Pricing</h1>
          <p className="text-gray-600">Start free. Upgrade for detailed assessments, tailored pipelines, and priority support.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config?.tiers.map(tier => (
            <div key={tier.id} className="border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{tier.name}</h2>
              <div className="text-3xl font-bold mb-4">
                {tier.price ? `$${tier.price}/mo` : 'Free'}
              </div>
              {tier.limits?.messages && (
                <div className="text-sm text-gray-500 mb-2">Includes {tier.limits.messages} chat messages</div>
              )}
              <ul className="space-y-2 mb-6">
                {tier.features.map((f, i) => (
                  <li key={i} className="text-gray-700 flex items-start gap-2">
                    <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {tier.id === 'free' ? (
                <Link href="/about/contact" className="block text-center w-full px-4 py-2 border rounded-lg hover:bg-gray-50">Get Started</Link>
              ) : (
                <button
                  onClick={async () => {
                    try {
                      await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ plan: tier.id }) })
                      // reload to pick up entitlement cookie
                      window.location.href = '/'
                    } catch {
                      // ignore
                    }
                  }}
                  className="block text-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Upgrade
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}


