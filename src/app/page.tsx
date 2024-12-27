'use client'

import React from 'react'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Features from '../components/Features'
import Services from '../components/Services'
import DefenseInnovation from '../components/DefenseInnovation'
import Impact from '../components/Impact'
import Testimonials from '../components/Testimonials'
import Partners from '../components/Partners'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <Features />
      <Services />
      <DefenseInnovation />
      <Impact />
      <Testimonials />
      <Partners />
      <CTA />
    </main>
  )
}
