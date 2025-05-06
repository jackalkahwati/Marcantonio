'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function DLIF2Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Defense Logistics Innovation Forum (DLIF) 2.0
          </h1>
          <p className="text-white/80 text-lg mb-2">
            <em>Under MOU with NAVSEA PEO USC PMS&nbsp;420</em>
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Marcantonio&nbsp;Global proudly leads DLIF&nbsp;2.0, continuing the legacy of Mr.&nbsp;Moretto's efforts and forming a strategic alliance with NAVSEA PEO&nbsp;USC&nbsp;PMS&nbsp;420. DLIF&nbsp;2.0 is set to launch in <strong>May&nbsp;2025</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Primary Goal</h2>
            <p className="text-gray-700 leading-relaxed">
              Advancing defense logistics through strategic collaboration among DoD leaders, industry innovators and academia to achieve logistics superiority and acquisition agility.
            </p>
          </div>

          {/* LOEs */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Lines of Effort (LOEs)&nbsp;— Key Highlights</h2>
            <div className="space-y-6">
              <LOE
                title="Naval Condition-Based Maintenance (CBM) with Replenishment at Sea (RAS)"
                points={[
                  'Improve predictive maintenance and asset reliability.',
                  'Optimize logistics flow with real-time diagnostics.'
                ]}
              />
              <LOE
                title="Naval Additive Manufacturing for 10–20-Foot Containers"
                points={[
                  'Containerized, on-demand parts manufacturing.',
                  'Forward-deployed production, standardized digital twin integration.'
                ]}
              />
              <LOE
                title="Naval Logistics AI with Joint Computing Facilities"
                points={[
                  'AI-driven logistics optimization and accelerated TRL.',
                  'Fleet-wide predictive analytics and resource allocation.'
                ]}
              />
            </div>
          </div>

          {/* Additional capabilities */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Additional Capabilities per PMS&nbsp;420 Guidance (Priority)</h2>
            <div className="space-y-6">
              <Capability title="Configuration Management" description="Digital tracking for asset lifecycle visibility/interoperability." />
              <Capability title="Remote Maintenance Support for Casualties (CASREPs)" description="AR and secure communications for real-time troubleshooting." />
              <Capability title="Condition-Based Maintenance Plus (CBM+)" description="Advanced machine learning for wear analytics/lifecycle planning." />
              <Capability title="Obsolescence Management" description="AI-driven forecasting to mitigate aging system vulnerabilities." />
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  )
}

function LOE({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

function Capability({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
      <h4 className="font-medium text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </div>
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