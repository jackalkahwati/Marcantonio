'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Handshake, Target, Users, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function PartnershipsPage() {
  const partnershipTypes = [
    {
      title: 'Strategic Technology Partnerships',
      description: 'Long-term collaborations between technology companies and defense organizations.',
      benefits: ['Joint R&D initiatives', 'Technology roadmap alignment', 'Shared intellectual property', 'Market access expansion'],
      timeline: '6-18 months development'
    },
    {
      title: 'Prime-Sub Contractor Relationships', 
      description: 'Facilitated partnerships between prime contractors and innovative technology companies.',
      benefits: ['Subcontractor positioning', 'Capability complementarity', 'Risk mitigation', 'Proposal strength enhancement'],
      timeline: '3-6 months establishment'
    },
    {
      title: 'Government-Industry Collaborations',
      description: 'Direct partnerships between technology companies and government agencies.',
      benefits: ['Direct market access', 'Regulatory compliance support', 'Pilot program participation', 'Strategic advisory roles'],
      timeline: '9-24 months development'
    }
  ]

  const successStories = [
    {
      title: 'AI Defense Partnership',
      partners: 'TechCorp & DARPA',
      value: '$25M contract',
      outcome: 'Revolutionary AI threat detection system deployed across multiple defense platforms.'
    },
    {
      title: 'Cybersecurity Alliance',
      partners: 'CyberSecure Inc. & Lockheed Martin',
      value: '$15M subcontract',
      outcome: 'Integrated cybersecurity solution for next-generation fighter aircraft systems.'
    },
    {
      title: 'Quantum Technology Collaboration',
      partners: 'QuantumTech & Navy Research Lab',
      value: '$8M research agreement',
      outcome: 'Breakthrough quantum communication technology for secure naval operations.'
    }
  ]

  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-8">Strategic Partnerships</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Facilitating long-term strategic relationships between technology companies and defense organizations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Partnership Development Services</h2>
            <p className="text-lg text-gray-600">
              We facilitate meaningful partnerships that drive innovation and create lasting value for all stakeholders.
            </p>
          </motion.div>

          <div className="space-y-12">
            {partnershipTypes.map((partnership, index) => (
              <motion.div
                key={partnership.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <Handshake className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{partnership.title}</h3>
                    <p className="text-gray-600 mb-6">{partnership.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {partnership.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <Target className="w-6 h-6 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-900">Development Timeline</span>
                      </div>
                      <p className="text-blue-700">{partnership.timeline}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Partnership Success Stories</h2>
            <p className="text-lg text-gray-600">
              Real partnerships that have created significant value and advanced defense capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{story.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{story.partners}</p>
                <p className="text-green-600 font-bold mb-4">{story.value}</p>
                <p className="text-gray-600 text-sm">{story.outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Build Strategic Partnerships?</h2>
            <p className="text-xl text-white/80 mb-8">
              Let us help you identify and develop the right partnerships for your defense technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Start Partnership Discussion
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
              >
                Partnership Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 