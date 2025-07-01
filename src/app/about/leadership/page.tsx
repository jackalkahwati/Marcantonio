'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Building2 } from 'lucide-react'

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-8">Leadership</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Our organizational structure and leadership approach to defense innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-12"
            >
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Building2 className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Leadership Philosophy</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Marcantonio Global operates with a lean, agile leadership structure focused on delivering exceptional results for our clients. Our approach emphasizes strategic thinking, deep industry expertise, and collaborative partnership development in the defense technology sector.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaborative</h3>
                  <p className="text-gray-600">Cross-functional expertise driving innovation</p>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic</h3>
                  <p className="text-gray-600">Long-term vision with tactical execution</p>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Results-Driven</h3>
                  <p className="text-gray-600">Measurable outcomes for our partners</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organizational Excellence Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Organizational Excellence</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our organizational structure is designed to maximize efficiency and results for our clients. We combine deep defense industry knowledge with agile operational capabilities to deliver exceptional outcomes in complex technology partnerships.
            </p>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Core Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Strategic Advisory</h4>
                  <p className="text-gray-600 mb-4">Comprehensive guidance on defense market entry and partnership development strategies.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technology Integration</h4>
                  <p className="text-gray-600 mb-4">Expert support for aligning innovative technologies with defense requirements.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Partnership Facilitation</h4>
                  <p className="text-gray-600 mb-4">Structured approach to building meaningful relationships within the defense ecosystem.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Market Intelligence</h4>
                  <p className="text-gray-600 mb-4">Deep insights into defense technology trends and acquisition priorities.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 