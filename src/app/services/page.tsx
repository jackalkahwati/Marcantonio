'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Rocket, Brain, Database, Cloud, Lock, ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Shield,
      title: 'Defense Systems Integration',
      description:
        'Seamlessly integrate cutting-edge defense technologies with existing military infrastructure, enhancing operational capabilities and readiness.',
      features: [
        'Advanced weapons systems integration',
        'Command and control systems',
        'Battlefield management solutions',
        'Military communications networks',
      ],
      gradient: 'from-blue-400 to-blue-500',
      id: 'defense',
    },
    {
      icon: Rocket,
      title: 'Space Technology',
      description:
        'Develop and implement advanced space-based solutions for defense and intelligence applications, leveraging cutting-edge satellite and communications technology.',
      features: [
        'Satellite communications systems',
        'Space-based surveillance',
        'Orbital defense platforms',
        'Space situational awareness',
      ],
      gradient: 'from-purple-400 to-purple-500',
      id: 'space',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description:
        'Harness the power of artificial intelligence and machine learning to enhance defense capabilities through intelligent automation and decision support.',
      features: [
        'Autonomous systems development',
        'Predictive analytics',
        'Pattern recognition',
        'Decision support systems',
      ],
      gradient: 'from-green-400 to-green-500',
      id: 'ai',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description:
        'Transform defense data into actionable intelligence through advanced analytics and visualization tools.',
      features: [
        'Big data processing',
        'Real-time analytics',
        'Intelligence gathering',
        'Threat assessment',
      ],
      gradient: 'from-yellow-400 to-yellow-500',
      id: 'data',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description:
        'Build and maintain secure, scalable cloud infrastructure tailored for defense applications and sensitive operations.',
      features: [
        'Secure cloud deployment',
        'Hybrid architecture',
        'Containerization',
        'DevSecOps implementation',
      ],
      gradient: 'from-cyan-400 to-cyan-500',
      id: 'cloud',
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description:
        'Protect critical defense assets with advanced cybersecurity solutions and threat detection systems.',
      features: [
        'Zero trust architecture',
        'Threat detection & response',
        'Security compliance',
        'Penetration testing',
      ],
      gradient: 'from-red-400 to-red-500',
      id: 'security',
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
            <h1 className="text-4xl font-bold text-white mb-8">Defense Technology Innovation as a Service</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Experience transformative defense technology solutions with Marcantonio Global's comprehensive service offerings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  id={service.id}
                  className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  {/* Gradient Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
                  
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${service.gradient} bg-opacity-10 p-3 mb-6`}>
                      <Icon className="h-6 w-6 text-gray-900" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors flex items-center">
                      {service.title}
                      <ArrowRight className="ml-2 h-5 w-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </h3>
                    
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600">
                          <span className={`mr-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
