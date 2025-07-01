'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Target, Trophy, Rocket } from 'lucide-react'

export default function FactSheetPage() {
  const facts = [
    {
      icon: Calendar,
      label: 'Founded',
      value: '2020',
      description: 'Established to bridge defense and technology innovation'
    },
    {
      icon: MapPin,
      label: 'Headquarters',
      value: 'Alexandria, VA',
      description: 'Strategic location near Pentagon and defense contractors'
    },
    {
      icon: Users,
      label: 'Network Partners',
      value: '500+',
      description: 'Active connections across defense and tech sectors'
    },
    {
      icon: Target,
      label: 'Mission Focus',
      value: 'DTIAAS',
      description: 'Defense Technology Innovation as a Service'
    }
  ]

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Marcantonio Global established with mission to accelerate defense innovation through strategic partnerships.',
      icon: Rocket
    },
    {
      year: '2021',
      title: 'First Major Partnerships',
      description: 'Established key relationships with DoD entities and technology companies, launching our network approach.',
      icon: Users
    },
    {
      year: '2022',
      title: 'DLIF Program Launch',
      description: 'Launched Defense Leadership Innovation Forum, creating structured pathways for tech-defense collaboration.',
      icon: Target
    },
    {
      year: '2023',
      title: 'Centurions Program',
      description: 'Introduced elite Centurions Program for top-tier defense technology partnerships and accelerated innovation.',
      icon: Trophy
    },
    {
      year: '2024',
      title: 'Network Expansion',
      description: 'Expanded to 500+ network partners and launched comprehensive DTIAAS platform for systematic innovation delivery.',
      icon: Rocket
    }
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
            <h1 className="text-4xl font-bold text-white mb-8">Fact Sheet & Timeline</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Key metrics, milestones, and the evolution of Marcantonio Global's impact in defense innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Facts</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {facts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <fact.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">{fact.label}</h3>
                <p className="text-2xl font-bold text-gray-900 mb-2">{fact.value}</p>
                <p className="text-sm text-gray-500">{fact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Company Timeline</h2>
            <p className="text-lg text-gray-600">
              Our journey from startup to leading defense innovation facilitator
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline marker */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div className={`bg-white p-6 rounded-xl shadow-lg ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                  } md:w-5/12`}>
                    <div className={`flex items-center mb-3 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <item.icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-bold text-blue-600">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              To accelerate defense innovation by connecting cutting-edge technology companies 
              with defense organizations, fostering partnerships that enhance national security 
              and technological advancement.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-6 py-2 text-sm font-semibold text-blue-600 backdrop-blur-sm border border-blue-400/20">
              <Target className="w-4 h-4" />
              Defense Technology Innovation as a Service (DTIAAS)
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 