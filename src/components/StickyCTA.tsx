'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { track } from '@/lib/analytics'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrolledPast = window.scrollY > 240
      const onContact = window.location.pathname.startsWith('/contact')
      setIsVisible(scrolledPast && !onContact)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-24 right-4 sm:bottom-6 sm:right-24 z-[40]">
      <Link
        href="/contact"
        className="group inline-flex items-center justify-center px-5 py-3 rounded-full shadow-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all"
        onClick={() => track({ name: 'cta_click', meta: { location: 'sticky', label: 'Book a Call' } })}
      >
        Book a Call
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}


