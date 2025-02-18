'use client'

import React from 'react'
import { motion } from 'framer-motion'
import MindMap from '@/components/MindMap'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NetworkPage() {
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
            <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-yellow-500/20 px-6 py-2 text-sm font-semibold text-yellow-400 backdrop-blur-sm border border-yellow-400/20">
              Global Network
            </div>
            <h1 className="text-4xl font-bold text-white mb-8">Defense Innovation Network</h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Explore our extensive network of military connections, strategic partnerships, and innovative technologies
              that position us at the forefront of defense innovation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-navy-900 bg-yellow-400 hover:bg-yellow-500 transition-colors"
            >
              Join Our Network
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mind Map Section */}
      <MindMap />

      {/* Additional Context Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Partner With Us?
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Extensive Military Network</h3>
                <p className="text-gray-600">
                  Our deep connections within the defense sector, including relationships with key
                  decision-makers across all military branches, provide unparalleled access and
                  opportunities for our partners.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovative Technologies</h3>
                <p className="text-gray-600">
                  From AI-driven defense solutions to cutting-edge unmanned systems, we're at the
                  forefront of military technology innovation, constantly pushing boundaries and
                  creating new possibilities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Reach</h3>
                <p className="text-gray-600">
                  Our presence spans multiple continents, with strong connections in North America,
                  Europe, the Middle East, and the Asia-Pacific region, enabling truly global
                  defense solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
                <p className="text-gray-600">
                  With numerous successful military presentations, program participations, and
                  strategic partnerships, we have demonstrated our ability to deliver results in
                  the defense sector.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 