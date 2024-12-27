'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Target, Rocket, Users, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

export default function CenturionsPage() {
  const benefits = [
    {
      icon: Shield,
      title: 'Elite Network',
      description: 'Join an exclusive network of defense technology leaders and innovators.',
    },
    {
      icon: Target,
      title: 'Strategic Access',
      description: 'Get priority access to defense technology initiatives and programs.',
    },
    {
      icon: Rocket,
      title: 'Innovation Pipeline',
      description: 'Fast-track your defense technology solutions to key decision makers.',
    },
  ]

  const features = [
    {
      title: 'Executive Briefings',
      description: 'Monthly briefings with senior defense officials and technology experts.',
      icon: Users,
    },
    {
      title: 'Innovation Labs',
      description: 'Access to state-of-the-art facilities for technology development and testing.',
      icon: Rocket,
    },
    {
      title: 'Strategic Advisory',
      description: 'One-on-one consultation with defense technology experts.',
      icon: Target,
    },
    {
      title: 'Priority Access',
      description: 'First access to defense technology contracts and opportunities.',
      icon: Star,
    },
  ]

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
            <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-yellow-500/20 px-6 py-2 text-sm font-semibold text-yellow-400 backdrop-blur-sm border border-yellow-400/20">
              <Shield className="w-4 h-4" />
              Elite Program
            </div>
            <h1 className="text-4xl font-bold text-white mb-8">The Centurions Program</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              An elite network of defense technology innovators shaping the future of military capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Accelerate Your Defense Innovation
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  The Centurions Program is designed for elite defense technology companies and innovators 
                  who are ready to make a significant impact in military capabilities. Our program provides 
                  unparalleled access to defense decision-makers, advanced resources, and strategic opportunities.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className={`p-6 rounded-xl bg-white shadow-lg ${
                        index === benefits.length - 1 ? 'col-span-2' : ''
                      }`}
                    >
                      <div className="inline-flex items-center justify-center rounded-xl bg-blue-100 p-3 mb-4">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Program Features</h2>
            <p className="text-xl text-gray-600">
              Exclusive benefits designed to accelerate your defense technology initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <div className="inline-flex items-center justify-center rounded-xl bg-blue-100 p-3 mb-6">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Ready to Join the Elite?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Apply now to become part of the Centurions Program and accelerate your defense technology initiatives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Apply for Membership
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
