'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, ArrowRight, Shield, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function InnovationForumPage() {
  const upcomingEvents = [
    {
      title: 'Defense Technology Summit 2024',
      date: 'March 15-17, 2024',
      location: 'Washington, DC',
      description: 'Join industry leaders and defense experts for three days of intensive discussions on emerging defense technologies.',
      topics: [
        'AI in Military Operations',
        'Cybersecurity Resilience',
        'Space Defense Systems',
        'Autonomous Weapons',
      ],
      image: '/images/events/summit.jpg',
    },
    {
      title: 'Innovation Workshop Series',
      date: 'April 5-6, 2024',
      location: 'Virtual Event',
      description: 'Interactive workshops focused on practical applications of emerging technologies in defense.',
      topics: [
        'Quantum Computing',
        'Blockchain Security',
        'IoT in Defense',
        'Advanced Analytics',
      ],
      image: '/images/events/workshop.jpg',
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Network with Leaders',
      description: 'Connect with senior defense officials, technology innovators, and industry experts.',
    },
    {
      icon: Rocket,
      title: 'Access Innovation',
      description: 'Get early insights into emerging defense technologies and innovation trends.',
    },
    {
      icon: Shield,
      title: 'Shape the Future',
      description: 'Contribute to discussions that shape the future of defense technology.',
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
            <h1 className="text-4xl font-bold text-white mb-8">Defense Innovation Forum</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Join the conversation shaping the future of defense technology innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-yellow-500/20 px-6 py-2 text-sm font-semibold text-yellow-600 backdrop-blur-sm border border-yellow-400/20">
              <Calendar className="w-4 h-4" />
              Upcoming Events
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Join Our Next Events
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Topics:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {event.topics.map((topic) => (
                        <li key={topic} className="flex items-center text-sm text-gray-600">
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Attend Our Forums</h2>
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
