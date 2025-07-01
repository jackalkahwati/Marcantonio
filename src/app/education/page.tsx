'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Users, Workshop, Star, ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function EducationPage() {
  const programs = [
    {
      icon: Star,
      title: 'Centurions Program',
      description: 'Elite defense technology partnership program for top-tier companies seeking strategic DoD collaborations.',
      href: '/centurions',
      features: [
        'Executive-level access to DoD decision makers',
        'Accelerated partnership pathways',
        'Strategic positioning for major contracts',
        'Exclusive networking opportunities'
      ],
      duration: '6 months',
      participants: '15-20 companies',
      isElite: true
    },
    {
      icon: Users,
      title: 'DLIF Program',
      description: 'Defense Leadership Innovation Forum - comprehensive program connecting technology leaders with defense stakeholders.',
      href: '/dlif',
      features: [
        'Technology showcase opportunities',
        'Defense ecosystem navigation',
        'Partnership facilitation',
        'Market intelligence access'
      ],
      duration: '3 months',
      participants: '50+ companies'
    },
    {
      icon: Workshop,
      title: 'Innovation Workshops',
      description: 'Focused sessions on specific technology areas, defense requirements, and partnership strategies.',
      href: '/innovation-forum',
      features: [
        'Technology-specific deep dives',
        'Expert-led sessions',
        'Interactive demonstrations',
        'Direct feedback from defense professionals'
      ],
      duration: '1-2 days',
      participants: 'Varies by topic'
    }
  ]

  const upcomingEvents = [
    {
      title: 'Defense AI Summit 2024',
      date: '2024-03-15',
      location: 'Arlington, VA',
      type: 'Conference',
      description: 'Leading AI technology companies meet with DoD AI implementation teams.'
    },
    {
      title: 'Cybersecurity Innovation Workshop',
      date: '2024-03-22',
      location: 'Virtual',
      type: 'Workshop',
      description: 'Interactive session on emerging cybersecurity technologies for defense applications.'
    },
    {
      title: 'DLIF Quarterly Networking Event',
      date: '2024-04-10',
      location: 'Washington, DC',
      type: 'Networking',
      description: 'Exclusive networking opportunity for DLIF program participants and defense partners.'
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
            <h1 className="text-4xl font-bold text-white mb-8">Education & Programs</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Comprehensive educational programs designed to accelerate defense technology partnerships and innovation collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Programs</h2>
            <p className="text-lg text-gray-600">
              Structured pathways to defense technology partnerships, from foundational education to elite strategic collaborations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all relative ${
                  program.isElite ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                {program.isElite && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500 text-white">
                      Elite Program
                    </span>
                  </div>
                )}

                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <program.icon className={`w-6 h-6 ${program.isElite ? 'text-yellow-600' : 'text-blue-600'}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Participants:</span>
                    <span className="font-medium">{program.participants}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-8">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={program.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-all"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
            <p className="text-lg text-gray-600">
              Join our upcoming educational events and networking opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {event.type}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <p className="text-sm text-gray-500 mb-4">{event.location}</p>
                
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Register
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Application Process</h2>
            <p className="text-lg text-gray-600">
              Ready to accelerate your defense technology partnerships? Start your journey with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Initial Assessment', description: 'Technology evaluation and defense market fit analysis' },
              { step: '2', title: 'Program Selection', description: 'Customized program recommendation based on goals' },
              { step: '3', title: 'Application Review', description: 'Comprehensive review process with expert evaluation' },
              { step: '4', title: 'Program Launch', description: 'Begin your accelerated path to defense partnerships' }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/about/contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Start Application Process
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 