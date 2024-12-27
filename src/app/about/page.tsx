'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-8">About Marcantonio Global</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Leading the way in defense technology innovation and strategic partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-yellow-500/20 px-6 py-2 text-sm font-semibold text-yellow-600 backdrop-blur-sm border border-yellow-400/20">
              <Shield className="w-4 h-4" />
              Our Mission
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Advancing Defense Through Innovation
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Marcantonio Global, we are dedicated to bridging the gap between cutting-edge technology 
              and critical defense needs. Our mission is to accelerate innovation in the defense sector 
              by fostering collaboration between innovative technology companies and defense organizations.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Through our Defense Technology Innovation as a Service (DTIAAS) platform, we connect 
              promising startups and established technology companies with key decision-makers in the 
              defense sector, facilitating partnerships that drive technological advancement and enhance 
              national security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Continuously pushing boundaries and exploring new technological frontiers to solve complex defense challenges.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                Maintaining the highest standards of ethics and transparency in all our partnerships and operations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Impact</h3>
              <p className="text-gray-600">
                Focusing on solutions that create meaningful improvements in defense capabilities and national security.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
