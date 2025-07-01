'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wifi, Play, Calendar, Users, ArrowRight, X, Check } from 'lucide-react'

export default function DigitalProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    jobTitle: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false)
  const [showScheduleModal, setShowScheduleModal] = useState(false)
  const [subscriptionData, setSubscriptionData] = useState({
    name: '',
    email: '',
    organization: '',
    interests: [] as string[]
  })
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [showSubscriptionSuccess, setShowSubscriptionSuccess] = useState(false)

  const handleProgramJoin = (program: any) => {
    setSelectedProgram(program)
    setIsModalOpen(true)
  }

  const handleWatchContent = (content: any) => {
    // Create a more professional "coming soon" or demo message
    const message = `This feature will open the video player for:\n\n"${content.title}"\n\nDuration: ${content.duration}\nViews: ${content.views}\n\nVideo content will be available in the full platform release.`
    alert(message)
  }

  const handleSubscribeAll = () => {
    setShowSubscriptionModal(true)
  }

  const handleViewSchedule = () => {
    setShowScheduleModal(true)
  }

  const handleSubscriptionInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubscriptionData({
      ...subscriptionData,
      [e.target.name]: e.target.value
    })
  }

  const handleInterestChange = (interest: string) => {
    setSubscriptionData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSubscriptionSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubscribing(false)
    setShowSubscriptionSuccess(true)
    
    setTimeout(() => {
      setShowSubscriptionModal(false)
      setShowSubscriptionSuccess(false)
      setSubscriptionData({
        name: '',
        email: '',
        organization: '',
        interests: []
      })
    }, 2000)
  }

  const closeSubscriptionModal = () => {
    if (!isSubscribing && !showSubscriptionSuccess) {
      setShowSubscriptionModal(false)
      setSubscriptionData({
        name: '',
        email: '',
        organization: '',
        interests: []
      })
    }
  }

  const handleAddToCalendar = (event: any) => {
    // Create a calendar event URL (Google Calendar format)
    const eventDate = new Date(event.date + ' ' + event.time)
    const startDate = eventDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    const endDate = new Date(eventDate.getTime() + 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.program + ': ' + event.topic)}&dates=${startDate}/${endDate}&details=${encodeURIComponent('Speaker: ' + event.speaker + '\n\nJoin our digital program to learn about ' + event.topic)}&location=${encodeURIComponent('Virtual Event - Marcantonio Global Digital Programs')}`
    
    window.open(calendarUrl, '_blank')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setShowSuccess(true)
    
    setTimeout(() => {
      setIsModalOpen(false)
      setShowSuccess(false)
      setFormData({
        name: '',
        email: '',
        organization: '',
        jobTitle: '',
        phone: ''
      })
      setSelectedProgram(null)
    }, 2000)
  }

  const closeModal = () => {
    if (!isSubmitting && !showSuccess) {
      setIsModalOpen(false)
      setSelectedProgram(null)
      setFormData({
        name: '',
        email: '',
        organization: '',
        jobTitle: '',
        phone: ''
      })
    }
  }
  const programs = [
    {
      title: 'Defense Tech Weekly Webinar Series',
      type: 'Webinar Series',
      schedule: 'Every Thursday, 2:00 PM EST',
      duration: '60 minutes',
      audience: 'Open to all',
      description: 'Weekly insights on emerging defense technologies and market trends.',
      nextEpisode: 'Quantum Computing in Defense - March 21, 2024'
    },
    {
      title: 'Virtual Innovation Showcase',
      type: 'Monthly Event',
      schedule: 'First Friday of each month',
      duration: '2 hours',
      audience: 'Technology companies',
      description: 'Platform for companies to demonstrate technologies to defense stakeholders.',
      nextEpisode: 'AI Solutions Demo Day - April 5, 2024'
    },
    {
      title: 'Defense Leaders Roundtable',
      type: 'Quarterly Forum',
      schedule: 'Quarterly',
      duration: '90 minutes',
      audience: 'Invitation only',
      description: 'High-level discussions between defense officials and industry leaders.',
      nextEpisode: 'Future of Defense Acquisition - May 15, 2024'
    }
  ]

  const onDemandContent = [
    { title: 'Navigating SBIR/STTR Programs', views: 2340, duration: '45 min' },
    { title: 'Defense Cybersecurity Requirements', views: 1876, duration: '35 min' },
    { title: 'AI Ethics in Defense Applications', views: 1543, duration: '50 min' }
  ]

  const scheduleData = [
    {
      date: 'March 21, 2024',
      time: '2:00 PM EST',
      program: 'Defense Tech Weekly Webinar',
      topic: 'Quantum Computing in Defense',
      speaker: 'Dr. Michael Chen, Quantum Technologies Expert',
      type: 'Weekly Series'
    },
    {
      date: 'March 28, 2024',
      time: '2:00 PM EST',
      program: 'Defense Tech Weekly Webinar',
      topic: 'Advanced Materials for Defense Applications',
      speaker: 'Prof. Sarah Williams, Materials Science',
      type: 'Weekly Series'
    },
    {
      date: 'April 5, 2024',
      time: '1:00 PM EST',
      program: 'Virtual Innovation Showcase',
      topic: 'AI Solutions Demo Day',
      speaker: 'Multiple Technology Companies',
      type: 'Monthly Event'
    },
    {
      date: 'April 11, 2024',
      time: '2:00 PM EST',
      program: 'Defense Tech Weekly Webinar',
      topic: 'Autonomous Systems in Defense',
      speaker: 'Lt. Col. James Rodriguez, USAF',
      type: 'Weekly Series'
    },
    {
      date: 'May 3, 2024',
      time: '1:00 PM EST',
      program: 'Virtual Innovation Showcase',
      topic: 'Cybersecurity Innovation Forum',
      speaker: 'Leading Cybersecurity Companies',
      type: 'Monthly Event'
    },
    {
      date: 'May 15, 2024',
      time: '3:00 PM EST',
      program: 'Defense Leaders Roundtable',
      topic: 'Future of Defense Acquisition',
      speaker: 'Senior Defense Officials & Industry Leaders',
      type: 'Quarterly Forum'
    }
  ]

  const interestOptions = [
    'Defense Technology Weekly',
    'Virtual Innovation Showcase',
    'Defense Leaders Roundtable',
    'AI & Machine Learning',
    'Cybersecurity',
    'Quantum Technologies',
    'Defense Acquisition',
    'Innovation Programs'
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
            <h1 className="text-4xl font-bold text-white mb-8">Digital Programs</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Virtual engagement opportunities connecting global defense technology communities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Live Programs</h2>
            <p className="text-lg text-gray-600">
              Regular virtual events designed to keep you connected with the defense technology community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Wifi className="w-6 h-6 text-blue-600" />
                </div>
                
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-4">
                  {program.type}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {program.schedule}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    {program.audience}
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg mb-6">
                  <p className="text-sm text-blue-800 font-medium">Next Episode:</p>
                  <p className="text-sm text-blue-700">{program.nextEpisode}</p>
                </div>

                <button 
                  onClick={() => handleProgramJoin(program)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Join Program
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">On-Demand Content</h2>
            <p className="text-lg text-gray-600">
              Access previous sessions and expert presentations at your convenience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {onDemandContent.map((content, index) => (
              <motion.div
                key={content.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Play className="w-6 h-6 text-green-600" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">{content.title}</h3>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{content.views} views</span>
                  <span>{content.duration}</span>
                </div>

                <button 
                  onClick={() => handleWatchContent(content)}
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Watch Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Stay Connected</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our digital programs and never miss important defense technology insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleSubscribeAll}
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Subscribe to All Programs
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button 
                onClick={handleViewSchedule}
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                View Schedule
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Join Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full mx-4"
            >
              {!showSuccess ? (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Join Program</h3>
                    <button
                      onClick={closeModal}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {selectedProgram && (
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-1">{selectedProgram.title}</h4>
                      <p className="text-sm text-blue-700">{selectedProgram.schedule}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Organization <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Job Title
                      </label>
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-blue-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Joining Program...
                        </div>
                      ) : (
                        'Join Program'
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Check className="w-8 h-8 text-green-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Successfully Joined!</h3>
                  <p className="text-gray-600 mb-4">
                    You'll receive a confirmation email with program details and access instructions.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Subscription Modal */}
      <AnimatePresence>
        {showSubscriptionModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto"
            >
              {!showSubscriptionSuccess ? (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Subscribe to Digital Programs</h3>
                    <button
                      onClick={closeSubscriptionModal}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Stay informed about all our digital programs and never miss important defense technology insights.
                  </p>

                  <form onSubmit={handleSubscriptionSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={subscriptionData.name}
                        onChange={handleSubscriptionInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={subscriptionData.email}
                        onChange={handleSubscriptionInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={subscriptionData.organization}
                        onChange={handleSubscriptionInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Areas of Interest (select all that apply)
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {interestOptions.map((interest) => (
                          <label key={interest} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={subscriptionData.interests.includes(interest)}
                              onChange={() => handleInterestChange(interest)}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2"
                            />
                            <span className="text-sm text-gray-700">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubscribing}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-blue-400 disabled:cursor-not-allowed"
                    >
                      {isSubscribing ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Subscribing...
                        </div>
                      ) : (
                        'Subscribe to Programs'
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Check className="w-8 h-8 text-green-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Successfully Subscribed!</h3>
                  <p className="text-gray-600 mb-4">
                    You'll receive email updates about our digital programs and upcoming events.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Schedule Modal */}
      <AnimatePresence>
        {showScheduleModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Program Schedule</h3>
                <button
                  onClick={() => setShowScheduleModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-gray-600 mb-8">
                View all upcoming digital programs and mark your calendar for the sessions that interest you.
              </p>

              <div className="space-y-4">
                {scheduleData.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-3">
                            {event.type}
                          </span>
                          <div className="flex items-center text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {event.date} at {event.time}
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{event.program}</h4>
                        <p className="text-blue-600 font-medium mb-2">{event.topic}</p>
                        <div className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          {event.speaker}
                        </div>
                      </div>
                                             <div className="mt-4 lg:mt-0 lg:ml-6">
                         <button 
                           onClick={() => handleAddToCalendar(event)}
                           className="w-full lg:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                         >
                           Add to Calendar
                         </button>
                       </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Need to join a program?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Click "Join Program" on any of the program cards above to register for individual programs.
                </p>
                <button
                  onClick={() => {
                    setShowScheduleModal(false)
                    setShowSubscriptionModal(true)
                  }}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                >
                  Subscribe to All Programs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  )
} 