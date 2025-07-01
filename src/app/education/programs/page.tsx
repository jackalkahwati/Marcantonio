'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Users, Wrench, Calendar, ArrowRight, CheckCircle, Clock, MapPin, X, Send, User, Mail, Building, Phone } from 'lucide-react'
import Link from 'next/link'

interface Program {
  program: string
  startDate: string
  applicationDeadline: string
  spotsAvailable: number
  totalSpots: number
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  jobTitle: string
  experience: string
  motivation: string
}

export default function ProgramsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null)
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    experience: '',
    motivation: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleApplyClick = (program: Program) => {
    setSelectedProgram(program)
    setIsModalOpen(true)
    setIsSubmitted(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsModalOpen(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        experience: '',
        motivation: ''
      })
      setSelectedProgram(null)
    }, 3000)
  }

  const programs = [
    {
      id: 'centurions',
      icon: Star,
      title: 'Centurions Program',
      subtitle: 'Elite Defense Technology Partnership',
      description: 'Our flagship program for top-tier companies seeking strategic DoD collaborations and accelerated partnership pathways.',
      href: '/centurions',
      duration: '6 months',
      participants: '15-20 companies per cohort',
      nextCohort: '2024-04-01',
      isElite: true,
      features: [
        'Direct access to senior DoD decision makers',
        'Strategic positioning for major defense contracts',
        'Exclusive networking with defense industry leaders', 
        'Accelerated pathway through defense acquisition process',
        'One-on-one mentorship with defense industry veterans',
        'Priority access to classified briefings and opportunities'
      ],
      outcomes: [
        '95% of graduates secure DoD partnerships within 12 months',
        'Average contract value increase of 300%',
        '$2.1B in collective contracts awarded to alumni'
      ],
      investment: 'Premium Investment Required',
      applicationDeadline: '2024-03-15'
    },
    {
      id: 'dlif',
      icon: Users,
      title: 'DLIF Program',
      subtitle: 'Defense Leadership Innovation Forum',
      description: 'Comprehensive program connecting technology leaders with defense stakeholders through structured engagement and partnership facilitation.',
      href: '/dlif',
      duration: '3 months',
      participants: '50+ companies per cohort',
      nextCohort: '2024-05-01',
      features: [
        'Technology showcase and demonstration opportunities',
        'Defense ecosystem navigation and orientation',
        'Partnership facilitation with relevant DoD offices',
        'Market intelligence and competitive landscape analysis',
        'Access to defense technology roadmaps',
        'Networking events with defense professionals'
      ],
      outcomes: [
        '78% establish meaningful DoD connections',
        'Average time to first meeting reduced by 60%',
        '150+ partnerships facilitated since 2022'
      ],
      investment: 'Moderate Investment',
      applicationDeadline: '2024-04-15'
    },
    {
      id: 'workshops',
      icon: Wrench,
      title: 'Innovation Workshops',
      subtitle: 'Focused Technology Deep Dives',
      description: 'Intensive sessions on specific technology areas, defense requirements, and partnership strategies with hands-on learning.',
      href: '/innovation-forum',
      duration: '1-2 days',
      participants: 'Varies by topic (20-100)',
      nextCohort: 'Multiple dates available',
      features: [
        'Technology-specific deep dive sessions',
        'Expert-led technical presentations',
        'Interactive demonstrations and prototyping',
        'Direct feedback from defense end-users',
        'Collaborative problem-solving exercises',
        'Follow-up partnership matching services'
      ],
      outcomes: [
        '90% report improved understanding of defense needs',
        'Average 5+ new industry connections per participant',
        '25+ pilot programs initiated from workshop connections'
      ],
      investment: 'Accessible Investment',
      applicationDeadline: 'Ongoing enrollment'
    }
  ]

  const upcomingPrograms = [
    {
      program: 'Centurions Cohort 4',
      startDate: '2024-04-01',
      applicationDeadline: '2024-03-15',
      spotsAvailable: 8,
      totalSpots: 20
    },
    {
      program: 'DLIF Spring 2024',
      startDate: '2024-05-01', 
      applicationDeadline: '2024-04-15',
      spotsAvailable: 25,
      totalSpots: 50
    },
    {
      program: 'AI in Defense Workshop',
      startDate: '2024-03-20',
      applicationDeadline: '2024-03-15',
      spotsAvailable: 15,
      totalSpots: 30
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
            <h1 className="text-4xl font-bold text-white mb-8">Programs & Seminars</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Comprehensive educational programs designed to accelerate your defense technology partnerships and strategic market positioning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`max-w-6xl mx-auto ${program.isElite ? 'ring-2 ring-yellow-400 rounded-3xl p-1' : ''}`}
              >
                <div className={`bg-white rounded-2xl shadow-lg p-8 ${program.isElite ? 'bg-gradient-to-br from-yellow-50 to-white' : ''}`}>
                  {program.isElite && (
                    <div className="text-center mb-6">
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-yellow-500 text-white">
                        <Star className="w-4 h-4 mr-2" />
                        Elite Program
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Program Details */}
                    <div>
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4 ${
                          program.isElite ? 'bg-yellow-100' : 'bg-blue-100'
                        }`}>
                          <program.icon className={`w-8 h-8 ${
                            program.isElite ? 'text-yellow-600' : 'text-blue-600'
                          }`} />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900">{program.title}</h2>
                          <p className="text-lg text-gray-600">{program.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">{program.description}</p>

                      {/* Program Stats */}
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                          <div className="flex items-center text-gray-500 mb-2">
                            <Clock className="w-4 h-4 mr-2" />
                            Duration
                          </div>
                          <p className="font-semibold">{program.duration}</p>
                        </div>
                        <div>
                          <div className="flex items-center text-gray-500 mb-2">
                            <Users className="w-4 h-4 mr-2" />
                            Participants
                          </div>
                          <p className="font-semibold">{program.participants}</p>
                        </div>
                        <div>
                          <div className="flex items-center text-gray-500 mb-2">
                            <Calendar className="w-4 h-4 mr-2" />
                            Next Cohort
                          </div>
                          <p className="font-semibold">{program.nextCohort}</p>
                        </div>
                        <div>
                          <div className="flex items-center text-gray-500 mb-2">
                            <MapPin className="w-4 h-4 mr-2" />
                            Investment
                          </div>
                          <p className="font-semibold">{program.investment}</p>
                        </div>
                      </div>

                      <Link
                        href={program.href}
                        className={`inline-flex items-center px-8 py-3 rounded-lg font-medium transition-colors ${
                          program.isElite 
                            ? 'bg-yellow-500 text-white hover:bg-yellow-600' 
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        Learn More About {program.title}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>

                    {/* Features & Outcomes */}
                    <div className="space-y-8">
                      {/* Features */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Program Features</h3>
                        <ul className="space-y-3">
                          {program.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <CheckCircle className={`w-5 h-5 mr-3 mt-0.5 ${
                                program.isElite ? 'text-yellow-500' : 'text-blue-500'
                              }`} />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Outcomes */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Program Outcomes</h3>
                        <ul className="space-y-3">
                          {program.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start">
                              <div className={`w-2 h-2 rounded-full mr-3 mt-2 ${
                                program.isElite ? 'bg-yellow-500' : 'bg-blue-500'
                              }`} />
                              <span className="text-gray-600">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Application Deadline */}
                      <div className={`p-4 rounded-lg ${
                        program.isElite ? 'bg-yellow-50 border border-yellow-200' : 'bg-blue-50 border border-blue-200'
                      }`}>
                        <p className="text-sm font-medium text-gray-700">
                          Application Deadline: <span className="font-bold">{program.applicationDeadline}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Programs Quick View */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Program Schedules</h2>
            <p className="text-lg text-gray-600">
              Secure your spot in our next program cohorts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {upcomingPrograms.map((program, index) => (
              <motion.div
                key={program.program}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{program.program}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    Starts: {new Date(program.startDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    Apply by: {program.applicationDeadline}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Spots Available</span>
                    <span>{program.spotsAvailable}/{program.totalSpots}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${((program.totalSpots - program.spotsAvailable) / program.totalSpots) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <button 
                  onClick={() => handleApplyClick(program)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsModalOpen(false)}
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
                    <h2 className="text-2xl font-bold text-gray-900">Apply for Program</h2>
                    <p className="text-gray-600">{selectedProgram?.program}</p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                            value={formData.firstName}
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
                            value={formData.lastName}
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
                          value={formData.email}
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
                          value={formData.phone}
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
                            value={formData.company}
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
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          placeholder="Enter your job title"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Defense Industry Experience
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      >
                        <option value="">Select your experience level</option>
                        <option value="none">No prior defense experience</option>
                        <option value="limited">Limited defense experience (1-2 years)</option>
                        <option value="moderate">Moderate defense experience (3-5 years)</option>
                        <option value="extensive">Extensive defense experience (5+ years)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Why are you interested in this program? *
                      </label>
                      <textarea
                        name="motivation"
                        required
                        value={formData.motivation}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                        placeholder="Tell us about your goals and what you hope to achieve through this program..."
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
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
                            Submit Application
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for your interest in {selectedProgram?.program}. Our team will review your application and contact you within 2-3 business days.
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Accelerate Your Defense Partnerships?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join hundreds of technology companies that have successfully navigated the defense market through our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Download Program Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 