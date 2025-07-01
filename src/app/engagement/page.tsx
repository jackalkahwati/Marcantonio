'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, Wifi, ArrowRight, MapPin, Clock, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function EngagementPage() {
  const engagementAreas = [
    {
      icon: Calendar,
      title: 'Events & Conferences',
      description: 'Industry-leading events that bring together defense and technology stakeholders for meaningful collaboration.',
      href: '/engagement/events',
      features: [
        'Defense Technology Summits',
        'Innovation Showcases',
        'Strategic Networking Events',
        'Expert Panel Discussions'
      ]
    },
    {
      icon: Wifi,
      title: 'Digital Programs',
      description: 'Virtual engagement opportunities that connect global defense technology communities.',
      href: '/engagement/digital-programs',
      features: [
        'Virtual Conferences',
        'Webinar Series',
        'Online Workshops',
        'Digital Networking Platforms'
      ]
    },
    {
      icon: Users,
      title: 'Strategic Partnerships',
      description: 'Facilitating long-term strategic relationships between technology companies and defense organizations.',
      href: '/engagement/partnerships',
      features: [
        'Partnership Facilitation',
        'Strategic Alliance Development',
        'Joint Venture Support',
        'Collaboration Framework Design'
      ]
    }
  ]

  const upcomingEvents = [
    {
      title: 'Defense Innovation Summit 2024',
      date: '2024-04-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Pentagon City, Arlington, VA',
      type: 'Conference',
      attendees: '500+',
      description: 'Annual summit bringing together top defense officials and technology innovators.',
      registrationOpen: true
    },
    {
      title: 'Quantum Defense Technologies Workshop',
      date: '2024-04-22',
      time: '2:00 PM - 4:00 PM',
      location: 'Virtual Event',
      type: 'Workshop',
      attendees: '150',
      description: 'Deep dive into quantum computing applications for defense and security.',
      registrationOpen: true
    },
    {
      title: 'DLIF Quarterly Network Meeting',
      date: '2024-05-10',
      time: '6:00 PM - 8:00 PM',
      location: 'Washington, DC',
      type: 'Networking',
      attendees: '100',
      description: 'Exclusive networking for DLIF program participants and defense partners.',
      registrationOpen: false
    }
  ]

  const pastEvents = [
    {
      title: 'AI in Defense Symposium 2023',
      date: 'December 2023',
      attendees: '400+',
      highlights: [
        '25 technology demonstrations',
        '15 DoD decision makers',
        '3 major partnerships announced'
      ]
    },
    {
      title: 'Cybersecurity Innovation Forum',
      date: 'October 2023',
      attendees: '300+',
      highlights: [
        '12 cybersecurity startups featured',
        '8 defense agencies represented',
        '2 pilot programs initiated'
      ]
    },
    {
      title: 'Space Technology Convergence',
      date: 'August 2023',
      attendees: '250+',
      highlights: [
        '18 space tech companies',
        '6 Space Force representatives',
        '4 collaboration agreements signed'
      ]
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
            <h1 className="text-4xl font-bold text-white mb-8">Strategic Engagement</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Connecting defense and technology communities through meaningful events, partnerships, and collaborative programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Engagement Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Engagement Opportunities</h2>
            <p className="text-lg text-gray-600">
              Multiple pathways for meaningful engagement between defense and technology stakeholders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {engagementAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <area.icon className="w-6 h-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {area.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={area.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-all"
                >
                  Explore {area.title.split(' ')[0]}
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
              Join our upcoming events to connect with defense and technology leaders
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-3">
                        {event.type}
                      </span>
                      <span className="text-gray-500 text-sm">{event.attendees} attendees</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <button 
                      className={`w-full py-3 rounded-lg font-medium transition-colors ${
                        event.registrationOpen 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!event.registrationOpen}
                    >
                      {event.registrationOpen ? 'Register Now' : 'Registration Closed'}
                    </button>
                    {event.registrationOpen && (
                      <p className="text-xs text-gray-500 mt-2 text-center">
                        Limited spots available
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Event Impact</h2>
            <p className="text-lg text-gray-600">
              Highlights from our recent successful events and their outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500 text-sm">{event.date}</span>
                  <span className="text-blue-600 font-medium text-sm">{event.attendees}</span>
                </div>
                
                <div className="space-y-2">
                  {event.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center text-gray-600">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-green-500" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Partner With Us</h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Ready to engage with the defense technology community? Let's explore partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/education"
                className="inline-flex items-center px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
              >
                Explore Programs
                <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 