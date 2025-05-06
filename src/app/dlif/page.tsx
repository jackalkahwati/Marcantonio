'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function DLIFPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Defense Logistics Innovation Forum (DLIF)
          </h1>
          <p className="text-white/80 text-lg mb-2">
            <em>Under partnership with NAVSEA PEO USC PMS&nbsp;501</em>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-10">
          {/* Intro */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Mr. Steve Moretto's final act as NAVSEA Innovation&nbsp;S&amp;T leader was partnering with
              Marcantonio&nbsp;Global, an OUSD Policy Executive Secretariat public-private partnership,
              establishing and co-directing DLIF.
            </p>
          </div>

          {/* Purpose & Scope */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Purpose &amp; Scope</h2>
            <p className="text-gray-700 leading-relaxed">
              A collaborative forum connecting <strong>1500+</strong> industry leaders, defense officials and logisticians from <strong>180&nbsp;DoD, Federal, IC and Allied Nations</strong>.
            </p>
          </div>

          {/* Primary Focus */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Primary Focus</h2>
            <p className="text-gray-700 leading-relaxed">
              Innovation and advanced solutions to enhance logistics efficiency supporting Naval defense objectives.
            </p>
          </div>

          {/* Key Areas */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Key Areas of Interest</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Artificial Intelligence (AI)</li>
              <li>Robotics &amp; Autonomous Systems</li>
              <li>Advanced Manufacturing</li>
              <li>Operational Energy Resilience</li>
              <li>Quantum Sensing</li>
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Benefits to Participants</h2>
            <p className="text-gray-700 leading-relaxed">
              Networking, collaboration and actionable insights for defense logistics, innovation and supply-chain management.
            </p>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Achievements (2024)</h2>
            <p className="text-gray-700 leading-relaxed">
              Successfully delivered <strong>17 innovative capabilities</strong> to the National Armaments Directors Innovation Working Group — specifically supporting the Ukrainian Contracting Working Group. Supported by <strong>Major&nbsp;General&nbsp;Vaughan, Executive Director of the OSD Joint Rapid Acquisition Cell</strong>.
            </p>
          </div>

          {/* Steve Moretto Quals */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Mr. Steve Moretto's Qualifications</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>BS in Industrial Engineering, University at Buffalo</li>
              <li>MS in Engineering Administration, Virginia Polytechnical Institute</li>
              <li>MS in National Resource Strategy, National Defense University</li>
              <li>Stanford Executive Program Graduate</li>
              <li>DAWIA Level 3 Certification in:
                <ul className="mt-1 ml-6 list-disc space-y-1">
                  <li>Program Management</li>
                  <li>Systems Engineering</li>
                  <li>Production Management</li>
                  <li>Science &amp; Technology Management</li>
                  <li>Business, Cost Estimating &amp; Financial Management</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact & Quote */}
      <CallToAction />
    </main>
  )
}

function CallToAction() {
  return (
    <section className="bg-navy-900 py-16 text-white">
      <div className="container mx-auto px-4 max-w-5xl space-y-10 text-center">
        {/* Contact */}
        <div className="space-y-2">
          <h3 className="text-3xl font-bold">Contact</h3>
          <p className="text-lg font-semibold">Mr. Nino "Typhoon" Marcantonio</p>
          <p>Founder, Marcantonio Global</p>
          <p>DoD Senior Strategic Tech Advisor</p>
          <p>Director, Defense Logistics Innovation Forum</p>
          <p className="italic">Phone: 202-631-8710 • Email: <a className="underline" href="mailto:nino@marcantonioglobal.com">nino@marcantonioglobal.com</a></p>
          <Link href="/contact" className="inline-flex items-center mt-4 gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-black font-semibold hover:bg-yellow-500 transition-colors">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Quote */}
        <blockquote className="border-l-4 border-yellow-400 pl-6 text-white/80 italic max-w-4xl mx-auto">
          "The integration of disruptive technologies into national defense strategies is a pivotal aspect of maintaining a competitive edge in modern warfare and security. Marcantonio Global's collaboration with the U.S. Department of Defense exemplifies a proactive approach to innovation, focusing on key technological areas vital for national security. The Defense Logistics Innovation Forums and the DoD Centurions Program underscore the commitment to fostering a culture of innovation to yield transformative solutions for defense and security challenges. The involvement of senior Pentagon leadership further emphasizes the strategic significance of these initiatives, aiming to create a robust pipeline of advanced technologies effectively integrated into defense strategies."
          <footer className="mt-4">— NIN_AI plus Co-Pilot, AI</footer>
        </blockquote>
      </div>
    </section>
  )
} 