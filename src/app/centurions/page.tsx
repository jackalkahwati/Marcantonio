'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Target, Rocket, Users, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function CenturionsPage() {
  const benefits = [
    {
      icon: Shield,
      title: 'Global Partnership',
      description: 'Part of a public-private partnership with OSD Policy spanning 180 DoD, FED, IC, and ALLIED Nations.',
    },
    {
      icon: Target,
      title: 'Trusted Network',
      description: 'Access to over 1,400 trusted SES and Flag Officers driving bold actions since 2017.',
    },
    {
      icon: Rocket,
      title: 'Full Integration',
      description: 'Fully integrated into supporting OSD Acquisition and Sustainment.',
    },
  ]

  const programSteps = [
    {
      title: 'Company Intake Form',
      description: 'Deep dive into capabilities, goals, challenges, and identification of strategic priorities.',
    },
    {
      title: 'AI-Driven Evaluation',
      description: 'Analysis of market position, competitive landscape, and technology readiness level.',
    },
    {
      title: 'Capability Assessment',
      description: '30-60 minute consultation based on intake findings and articulation of acceleration pathways.',
    },
    {
      title: 'Refinement & Interaction',
      description: 'Iterative discussions to tailor support and align on strategic objectives.',
    },
  ]

  const engagementTiers = [
    {
      title: 'Major Level Engagement',
      subtitle: 'Entry-Level Acceleration',
      price: '$15K per 6-month engagement',
      features: [
        'Tactical advisory support for product-market fit and DoD procurement strategy',
        'Entry into DoD Scouting Program via Marcantonio Global Alliance and 9-HI platform',
        'Review of government funding opportunities (SBIR/STTR, TACFI, STRATFI)',
        'Basic SES and Flag Officer deck preparation for Disruptive Technology Forums',
        'Weekly check-ins',
      ],
    },
    {
      title: 'Lieutenant Colonel Level',
      subtitle: 'Operational Advisory',
      price: '$30K per 6-month engagement',
      features: [
        'Everything in Major level, plus:',
        'Development of agency engagement plan and initial introduction to government stakeholders',
        'Deep-dive capability brief refinement for senior leaders',
        'Targeted engagement with innovation hubs (e.g., AFWERX, DIU, NSIC, NavalX)',
        'Bi-weekly strategy sessions',
      ],
    },
    {
      title: 'Colonel Level',
      subtitle: 'Strategic Partnership & Growth',
      price: '$50K per 6-month engagement',
      features: [
        'Everything in Lt Col level, plus:',
        'High-level relationship building with DoD primes and key integrators',
        'Introduction to potential end-users and PEOs',
        'Support in initial white paper submissions for DoD funding',
        'Digital twin & MBSE support for AI-enabled proposal development',
        'Weekly strategy sessions and executive coaching w ret MG Senior Advisors',
      ],
    },
    {
      title: 'Brigadier General Level',
      subtitle: 'Advanced Defense Strategy',
      price: '$75K per 6-month engagement',
      features: [
        'Everything in Colonel level, plus:',
        'Strategic integration into multi-year defense programs',
        'Active advocacy with senior DoD leadership',
        'Dedicated AI-powered data analytics support for contract positioning',
        'Tailored acquisition strategy refinement with senior policy advisors',
        'Bi-weekly executive strategy calls and in-person defense forums participation',
        'On-boarding/Integration of strategic advisors at the ret SES and Flag Officer level',
      ],
    },
    {
      title: 'Major General Level',
      subtitle: 'Elite Advisory & DoD Integration',
      price: '$100K+ per 6-month engagement',
      features: [
        'Everything in Brigadier General level, plus:',
        'Hands-on guidance in multi-million-dollar defense contracts',
        'Custom-built DoD ecosystem mapping with end-to-end execution support',
        'Direct engagement with high-ranking military and civilian leaders',
        'Full-scale partnership acceleration, including co-development opportunities',
        'Dedicated support team for proposal development, contract structuring, and introduction to lobbying groups',
      ],
    },
  ]

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
              <Shield className="w-4 h-4" />
              Elite Program
            </div>
            <h1 className="text-4xl font-bold text-white mb-8">MG Disruptive Acceleration Program</h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Marcantonio Global's elite program driving innovation and acceleration in defense technology through powerful partnerships and strategic engagement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-navy-900 bg-yellow-400 hover:bg-yellow-500 transition-colors"
            >
              Apply for Membership
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
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
                  Join our minimum 6-month engagement program designed to accelerate your success in the defense sector. Through our extensive network and proven methodology, we help innovative companies navigate and succeed in the complex defense technology landscape.
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

      {/* Program Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Program Steps</h2>
            <p className="text-xl text-gray-600">
              Our structured approach ensures maximum value and success for your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {programSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="inline-flex items-center justify-center rounded-full bg-blue-100 w-10 h-10 mb-6">
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Tiers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Engagement Tiers</h2>
            <p className="text-xl text-gray-600">
              Choose the engagement level that best suits your organization's needs and ambitions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {engagementTiers.map((tier, index) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg flex flex-col"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{tier.subtitle}</p>
                <p className="text-xl text-blue-600 font-semibold mb-6">{tier.price}</p>
                <ul className="space-y-4 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors w-full"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Accelerate Your Defense Innovation?
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Join the MG Disruptive Acceleration Program and transform your defense technology initiatives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-navy-900 bg-yellow-400 hover:bg-yellow-500 transition-colors"
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
