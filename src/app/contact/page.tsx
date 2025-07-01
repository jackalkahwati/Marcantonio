'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the new about/contact page
    router.replace('/about/contact')
  }, [router])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Redirecting...</h1>
        <p className="text-gray-600">
          Contact us has moved to About {'>'}Contact Us.
        </p>
      </div>
    </div>
  )
}
