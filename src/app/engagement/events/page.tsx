'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Users, Clock, ArrowRight, X, User, Mail, Building, Phone, CheckCircle, Send } from 'lucide-react'

export default function EventsPage() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    dietaryRestrictions: '',
    hearAbout: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)

  const handleRegisterClick = (event) => {
    setSelectedEvent(event)
    setIsRegistrationModalOpen(true)
    setIsRegistered(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setRegistrationData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsRegistered(true)
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsRegistrationModalOpen(false)
      setRegistrationData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        dietaryRestrictions: '',
        hearAbout: ''
      })
      setSelectedEvent(null)
      setIsRegistered(false)
    }, 3000)
  }

  const events = [
    {
      title: 'Defense Innovation Summit 2025',
      date: '2025-04-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Pentagon City, Arlington, VA',
      attendees: '500+',
      type: 'Conference',
      description: 'Annual summit bringing together top defense officials and technology innovators.',
      highlights: ['Keynote by Deputy Secretary of Defense', '60+ Technology Demonstrations', 'Networking Reception'],
      registration: 'Open'
    },
    {
      title: 'AI Defense Technology Forum 2025',
      date: '2025-05-20',
      time: '1:00 PM - 6:00 PM',
      location: 'Washington, DC',
      attendees: '200',
      type: 'Forum',
      description: 'Focused discussion on AI applications in defense systems and emerging technologies.',
      highlights: ['Expert Panel Discussions', 'Live AI Demonstrations', 'Q&A with DoD Officials'],
      registration: 'Open'
    },
    {
      title: 'Cybersecurity Partnership Expo 2025',
      date: '2025-06-10',
      time: '10:00 AM - 4:00 PM',
      location: 'McLean, VA',
      attendees: '300',
      type: 'Expo',
      description: 'Showcasing cybersecurity solutions for defense applications and partnership opportunities.',
      highlights: ['Technology Showcase', 'Partnership Meetings', 'Solution Demos'],
      registration: 'Open'
    },
    {
      title: 'Quantum Technologies in Defense Workshop',
      date: '2025-07-18',
      time: '9:00 AM - 3:00 PM',
      location: 'Arlington, VA',
      attendees: '150',
      type: 'Workshop',
      description: 'Deep dive into quantum computing applications for defense and national security.',
      highlights: ['Quantum Computing Demonstrations', 'Technical Workshops', 'Industry Roundtables'],
      registration: 'Open'
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
            <h1 className="text-4xl font-bold text-white mb-8">Events & Conferences</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Industry-leading events connecting defense and technology stakeholders for meaningful collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
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
                    
                    <div className="space-y-2 mb-6">
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

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Event Highlights:</h4>
                      <ul className="space-y-1">
                        {event.highlights.map((highlight) => (
                          <li key={highlight} className="text-gray-600">• {highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="text-sm text-gray-600 mb-2">Registration Status:</p>
                      <p className="font-semibold text-green-600">{event.registration}</p>
                    </div>
                    
                    <button 
                      onClick={() => handleRegisterClick(event)}
                      className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <AnimatePresence>
        {isRegistrationModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsRegistrationModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Event Registration</h2>
                    <p className="text-gray-600">{selectedEvent?.title}</p>
                  </div>
                  <button
                    onClick={() => setIsRegistrationModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {!isRegistered ? (
                  <form onSubmit={handleRegistrationSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            name="firstName"
                            required
                            value={registrationData.firstName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Enter your first name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            name="lastName"
                            required
                            value={registrationData.lastName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={registrationData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="tel"
                          name="phone"
                          value={registrationData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company *
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            name="company"
                            required
                            value={registrationData.company}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            placeholder="Enter your company name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          name="jobTitle"
                          required
                          value={registrationData.jobTitle}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          placeholder="Enter your job title"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dietary Restrictions/Accommodations
                      </label>
                      <input
                        type="text"
                        name="dietaryRestrictions"
                        value={registrationData.dietaryRestrictions}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="Any dietary restrictions or special accommodations needed"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        How did you hear about this event?
                      </label>
                      <select
                        name="hearAbout"
                        value={registrationData.hearAbout}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      >
                        <option value="">Select an option</option>
                        <option value="website">Marcantonio Global Website</option>
                        <option value="email">Email Newsletter</option>
                        <option value="social">Social Media</option>
                        <option value="colleague">Colleague/Partner</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setIsRegistrationModalOpen(false)}
                        className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                        ) : (
                          <>
                            Register for Event
                            <Send className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Registration Confirmed!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for registering for {selectedEvent?.title}. You'll receive a confirmation email with event details and agenda shortly.
                    </p>
                    <p className="text-sm text-gray-500">
                      This window will close automatically in a few seconds.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Host an Event with Us</h2>
            <p className="text-xl text-white/80 mb-8">
              Partner with us to host custom events tailored to your organization's needs.
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Discuss Event Partnership
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 