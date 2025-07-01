'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Users, Clock, ArrowRight, CheckCircle, Target, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function FellowshipsPage() {
  const fellowships = [
    {
      title: 'Defense Innovation Leadership Fellowship',
      duration: '12 months',
      commitment: 'Part-time (10-15 hrs/week)',
      nextCohort: 'September 2024',
      applicationDeadline: 'June 30, 2024',
      description: 'Intensive fellowship program for technology leaders seeking deep expertise in defense innovation, strategic partnerships, and market navigation.',
      benefits: [
        'Personal mentorship from defense industry executives',
        'Exclusive access to classified defense technology briefings',
        'Direct engagement with senior DoD officials and decision makers',
        'Strategic advisory role on active defense technology initiatives',
        'Alumni network of 200+ defense technology leaders',
        'Certificate in Defense Technology Strategy from Georgetown University'
      ],
      requirements: [
        'C-level or VP-level position at technology company',
        'Minimum 10 years technology leadership experience',
        'Active security clearance or ability to obtain one',
        'Demonstrated commitment to defense technology innovation'
      ],
      outcomes: [
        '95% secure strategic defense partnerships within 18 months',
        'Average 250% increase in defense-related revenue',
        'Alumni hold senior positions at major defense contractors'
      ]
    },
    {
      title: 'Emerging Defense Technologies Fellowship', 
      duration: '6 months',
      commitment: 'Part-time (8-10 hrs/week)',
      nextCohort: 'March 2024',
      applicationDeadline: 'February 15, 2024',
      description: 'Focused fellowship for mid-level professionals developing expertise in specific defense technology areas including AI, cybersecurity, and autonomous systems.',
      benefits: [
        'Technology-specific mentorship with leading defense experts',
        'Hands-on project work with real defense challenges',
        'Access to DoD research laboratories and testing facilities',
        'Professional development workshops and training sessions',
        'Networking with peers in emerging technology sectors',
        'Professional certificate in Defense Technology Applications'
      ],
      requirements: [
        'Director or Senior Manager level position',
        'Minimum 5 years relevant technology experience',
        'Background in AI, cybersecurity, autonomy, or related fields',
        'Commitment to full program participation'
      ],
      outcomes: [
        '87% advance to senior roles within 2 years',
        'Average 40% salary increase post-fellowship',
        '150+ patents filed by alumni'
      ]
    },
    {
      title: 'Defense Acquisition Professional Fellowship',
      duration: '9 months', 
      commitment: 'Part-time (6-8 hrs/week)',
      nextCohort: 'June 2024',
      applicationDeadline: 'April 15, 2024',
      description: 'Specialized fellowship for professionals transitioning into defense acquisition roles or seeking to understand the defense procurement process from the industry perspective.',
      benefits: [
        'Comprehensive training in defense acquisition processes',
        'Mentorship from former DoD acquisition professionals',
        'Simulation exercises using real defense procurement scenarios',
        'Direct exposure to active acquisition programs',
        'Professional development in contract negotiation and management',
        'DAU (Defense Acquisition University) continuing education credits'
      ],
      requirements: [
        'Professional experience in business development or program management',
        'Interest in defense acquisition and procurement',
        'Strong analytical and communication skills',
        'Availability for occasional travel to defense facilities'
      ],
      outcomes: [
        '78% transition to defense acquisition roles',
        'Average 35% compensation increase',
        'Alumni manage $2.8B in defense contracts'
      ]
    }
  ]

  const applicationProcess = [
    {
      step: 1,
      title: 'Application Submission',
      description: 'Complete comprehensive application including essays, professional experience, and career objectives.',
      timeline: '30 minutes'
    },
    {
      step: 2, 
      title: 'Initial Review',
      description: 'Applications reviewed by fellowship committee for basic qualifications and fit.',
      timeline: '2 weeks'
    },
    {
      step: 3,
      title: 'Interview Process',
      description: 'Video interviews with program directors and industry mentors.',
      timeline: '1 hour'
    },
    {
      step: 4,
      title: 'Background Check',
      description: 'Security clearance verification and professional reference checks.',
      timeline: '3-4 weeks'
    },
    {
      step: 5,
      title: 'Fellowship Matching',
      description: 'Matched with appropriate fellowship program and mentor based on experience and goals.',
      timeline: '1 week'
    },
    {
      step: 6,
      title: 'Program Commencement',
      description: 'Begin fellowship with orientation, goal setting, and mentor introduction.',
      timeline: 'Program start'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'VP of Defense Strategy, TechCorp',
      fellowship: 'Defense Innovation Leadership Fellowship 2023',
      quote: 'This fellowship transformed my understanding of the defense ecosystem. Within 6 months of completion, we secured our first major DoD contract worth $15M.',
      outcome: '$15M DoD contract secured'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Director of AI Programs, CyberDyne Systems', 
      fellowship: 'Emerging Defense Technologies Fellowship 2023',
      quote: 'The hands-on projects and mentor guidance gave me practical skills I use daily. The network alone has been worth the investment.',
      outcome: 'Promoted to VP within 18 months'
    },
    {
      name: 'Jennifer Park',
      title: 'Senior Business Development Manager, AeroTech',
      fellowship: 'Defense Acquisition Professional Fellowship 2022',
      quote: 'Understanding the acquisition process from the inside has been a game-changer for our business development efforts.',
      outcome: '300% increase in proposal win rate'
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
            <h1 className="text-4xl font-bold text-white mb-8">Professional Fellowships</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Intensive professional development programs for technology leaders seeking expertise in defense innovation and strategic partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fellowship Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Fellowship Programs</h2>
            <p className="text-lg text-gray-600">
              Comprehensive professional development designed for technology leaders at different career stages.
            </p>
          </motion.div>

          <div className="space-y-12">
            {fellowships.map((fellowship, index) => (
              <motion.div
                key={fellowship.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Program Overview */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                      </div>
                      <Award className="w-6 h-6 text-yellow-500" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{fellowship.title}</h3>
                    <p className="text-gray-600 mb-6">{fellowship.description}</p>

                    {/* Program Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="font-medium">{fellowship.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Target className="w-4 h-4 mr-2" />
                        <span className="font-medium">{fellowship.commitment}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="font-medium">Next Cohort: {fellowship.nextCohort}</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-blue-800">
                        Application Deadline: {fellowship.applicationDeadline}
                      </p>
                    </div>
                  </div>

                  {/* Benefits & Requirements */}
                  <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Benefits */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Fellowship Benefits</h4>
                      <ul className="space-y-3">
                        {fellowship.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements & Outcomes */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Requirements</h4>
                        <ul className="space-y-2">
                          {fellowship.requirements.map((requirement) => (
                            <li key={requirement} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Alumni Outcomes</h4>
                        <ul className="space-y-2">
                          {fellowship.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start">
                              <Briefcase className="w-4 h-4 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href="/about/contact"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Apply for {fellowship.title}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Application Process</h2>
            <p className="text-lg text-gray-600">
              Our comprehensive selection process ensures the best fit between fellows and programs.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Line */}
              <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-blue-200 hidden md:block"></div>

              <div className="space-y-8">
                {applicationProcess.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex items-start"
                  >
                    {/* Step Number */}
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 relative z-10">
                      {step.step}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-blue-600 font-medium">{step.timeline}</span>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Fellow Success Stories</h2>
            <p className="text-lg text-gray-600">
              Hear from alumni about their fellowship experience and career impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-4 h-4 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{testimonial.title}</p>
                  <p className="text-xs text-blue-600 mb-2">{testimonial.fellowship}</p>
                  <div className="bg-green-50 text-green-800 text-xs px-2 py-1 rounded-full inline-block">
                    {testimonial.outcome}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Invest in Your Defense Technology Career</h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Join an elite network of defense technology leaders and accelerate your career impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
              >
                Download Fellowship Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 