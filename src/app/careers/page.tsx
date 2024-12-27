'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Users, Star, Rocket, ArrowRight } from 'lucide-react'

export default function CareersPage() {
  const positions = [
    {
      title: 'Senior Defense Systems Engineer',
      department: 'Engineering',
      location: 'Washington, DC',
      type: 'Full-time',
      description: 'Lead the development and integration of advanced defense systems, working with cutting-edge military technology.',
    },
    {
      title: 'AI/ML Research Scientist',
      department: 'Research & Development',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop innovative AI solutions for defense applications, focusing on autonomous systems and decision support.',
    },
    {
      title: 'Cybersecurity Architect',
      department: 'Security',
      location: 'Arlington, VA',
      type: 'Full-time',
      description: 'Design and implement robust security architectures for critical defense infrastructure and applications.',
    },
    {
      title: 'Defense Technology Consultant',
      department: 'Consulting',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Provide strategic guidance to defense organizations on technology adoption and innovation initiatives.',
    },
  ]

  const benefits = [
    {
      icon: Star,
      title: 'Competitive Compensation',
      description: 'Industry-leading salary packages with performance bonuses and equity options.',
    },
    {
      icon: Users,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs.',
    },
    {
      icon: Rocket,
      title: 'Growth & Development',
      description: 'Continuous learning opportunities, mentorship, and career advancement paths.',
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
            <h1 className="text-4xl font-bold text-white mb-8">Join Our Mission</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Build your career at the forefront of defense technology innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-yellow-500/20 px-6 py-2 text-sm font-semibold text-yellow-600 backdrop-blur-sm border border-yellow-400/20">
              <Briefcase className="w-4 h-4" />
              Open Positions
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Current Opportunities
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                    <p className="text-gray-600">{position.description}</p>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                      Apply Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits & Perks</h2>
            <p className="text-xl text-gray-600">
              We offer comprehensive benefits to support your growth, health, and work-life balance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <div className="inline-flex items-center justify-center rounded-xl bg-blue-100 p-3 mb-6">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
