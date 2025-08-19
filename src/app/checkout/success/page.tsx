'use client'

import { useEffect, useState } from 'react'

export default function CheckoutSuccess() {
  const [plan, setPlan] = useState<string>('')
  const [status, setStatus] = useState<'pending' | 'done' | 'error'>('pending')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const sessionId = params.get('session_id') || ''
    // If we have a session id, fetch session from Stripe via our API (not implemented) or set plan via fallback
    // For now, we set plan to 'silver' if missing envs
    const inferred = 'silver'
    setPlan(inferred)
    fetch('/api/entitlements', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ plan: inferred }) })
      .then(() => setStatus('done'))
      .catch(() => setStatus('error'))
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-2">Thanks for upgrading</h1>
        <p className="text-gray-600 mb-6">Your plan: {plan}. We set your access and redirected the chat features.</p>
        {status === 'done' ? (
          <a href="/" className="inline-block px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Go to homepage</a>
        ) : status === 'error' ? (
          <div className="text-red-600">Could not set access. Please contact support.</div>
        ) : (
          <div className="text-gray-500">Finalizing…</div>
        )}
      </div>
    </main>
  )
}


