'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Wrench, Calendar, Clock, Users, ArrowRight, Target, X, Mail, User, Building } from 'lucide-react'
import Link from 'next/link'

export default function WorkshopsPage() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    title: '',
    phone: ''
  })

  const handleRegister = (workshop) => {
    setSelectedWorkshop(workshop)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedWorkshop(null)
    setFormData({
      name: '',
      email: '',
      organization: '',
      title: '',
      phone: ''
    })
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the registration data to your backend
    console.log('Registration submitted:', { workshop: selectedWorkshop, registrant: formData })
    alert(`Thank you! Your registration for "${selectedWorkshop.title}" has been submitted. We'll contact you with confirmation details.`)
    handleCloseModal()
  }
  const workshops = [
    {
      title: 'AI in Defense Applications',
      date: '2024-03-20',
      duration: '2 days',
      participants: 30,
      level: 'Intermediate',
      description: 'Deep dive into practical AI applications for defense systems.',
      topics: ['Machine Learning for Threat Detection', 'AI Ethics in Defense', 'Implementation Strategies']
    },
    {
      title: 'Cybersecurity for Defense Contractors',
      date: '2024-04-15',
      duration: '1 day',
      participants: 50,
      level: 'All Levels',
      description: 'Essential cybersecurity requirements and best practices.',
      topics: ['NIST Framework', 'CMMC Compliance', 'Incident Response']
    },
    {
      title: 'Quantum Technologies Workshop',
      date: '2024-05-10',
      duration: '1.5 days',
      participants: 25,
      level: 'Advanced',
      description: 'Exploring quantum computing applications in defense.',
      topics: ['Quantum Cryptography', 'Quantum Sensing', 'Future Applications']
    }
  ]

  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-8">Innovation Workshops</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Intensive technical workshops focusing on specific defense technology areas and applications.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{workshop.title}</h3>
                <p className="text-gray-600 mb-6">{workshop.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(workshop.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {workshop.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {workshop.participants} participants
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Target className="w-4 h-4 mr-2" />
                    {workshop.level}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Topics:</h4>
                  <ul className="space-y-1">
                    {workshop.topics.map((topic) => (
                      <li key={topic} className="text-sm text-gray-600">• {topic}</li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => handleRegister(workshop)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Custom Workshop Development</h2>
            <p className="text-xl text-white/80 mb-8">
              Need a workshop tailored to your specific technology or defense application?
            </p>
            <Link
              href="/about/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Request Custom Workshop
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Workshop Registration</h3>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {selectedWorkshop && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">{selectedWorkshop.title}</h4>
                <div className="text-sm text-blue-700 space-y-1">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(selectedWorkshop.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {selectedWorkshop.duration}
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    {selectedWorkshop.level}
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                  Organization *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Enter your organization"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Enter your job title"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Register
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              * Required fields. We'll contact you with workshop details and confirmation.
            </p>
          </motion.div>
        </div>
      )}
    </main>
  )
} 