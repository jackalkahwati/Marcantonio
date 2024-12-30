'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Rocket, Brain, Database, Cloud, Lock, ArrowRight, Building2, Users, Zap, Globe, Cpu, LucideIcon } from 'lucide-react'

type ColorVariant = 'blue' | 'purple' | 'green' | 'yellow' | 'red'

interface BaseSection {
  title: string
  description: string
  icon: LucideIcon
  color: ColorVariant
}

interface EntitySection extends BaseSection {
  entities: string[]
}

interface BranchSection extends BaseSection {
  branches: {
    'Air Force': string[]
    'Army': string[]
    'Navy': string[]
  }
}

type Section = EntitySection | BranchSection

export default function ServicesPage() {
  const innovationEcosystem: Section[] = [
    {
      title: 'OUSD(R&E)',
      description: 'Office of the Under Secretary of Defense for Research and Engineering',
      icon: Shield,
      color: 'blue',
      entities: [
        'Defense Advanced Research Projects Agency (DARPA)',
        'Missile Defense Agency (MDA)',
        'Defense Technical Information Center (DTIC)',
        'Defense Science Board (DSB)',
        'Test Resource Management Center (TRMC)',
        'NDSEG Fellowship Program',
        'SBIR/STTR Programs'
      ]
    },
    {
      title: 'Service Innovation',
      description: 'Service-Specific Innovation Offices',
      icon: Building2,
      color: 'purple',
      branches: {
        'Air Force': [
          'AFWERX',
          'Air Force Research Laboratory (AFRL)',
          'Kessel Run',
          'Platform One',
          'SpaceWERX'
        ],
        'Army': [
          'Army Futures Command (AFC)',
          'Army Rapid Capabilities and Critical Technologies Office',
          'Army Applications Laboratory (AAL)',
          'Army Research Laboratory (ARL)',
          'Ground Vehicle Systems Center (GVSC)'
        ],
        'Navy': [
          'Office of Naval Research (ONR)',
          'Naval Research Laboratory (NRL)',
          'NavalX',
          'Naval Surface Warfare Centers (NSWC)',
          'SeaPort Next Generation'
        ]
      }
    },
    {
      title: 'Joint Entities',
      description: 'Joint and Other Defense Innovation Entities',
      icon: Users,
      color: 'green',
      entities: [
        'Strategic Capabilities Office (SCO)',
        'National Security Innovation Network (NSIN)',
        'Defense Innovation Board (DIB)',
        'Defense Threat Reduction Agency (DTRA)',
        'Joint Artificial Intelligence Center (JAIC)',
        'Cyber Command (USCYBERCOM)',
        'Defense Digital Service (DDS)',
        'Advanced Battle Management System (ABMS)'
      ]
    },
    {
      title: 'Partnerships',
      description: 'Partnerships and Collaboration Nodes',
      icon: Globe,
      color: 'yellow',
      entities: [
        'Defense Manufacturing Institutes',
        'Academic Partnership Engagement Experiment (APEX)',
        'Defense Experimentation Using Commercial Space Internet',
        'Industry Collaboration Programs',
        'International Partnerships',
        'University Affiliated Research Centers (UARCs)'
      ]
    },
    {
      title: 'Technology Focus',
      description: 'Emerging Technology Focus Areas',
      icon: Cpu,
      color: 'red',
      entities: [
        'Hypersonics',
        'Artificial Intelligence (AI) and Machine Learning (ML)',
        'Directed Energy',
        'Advanced Materials',
        'Cybersecurity',
        'Quantum Technologies',
        'Space Technologies'
      ]
    }
  ]

  const colorVariants: Record<ColorVariant, string> = {
    blue: 'from-blue-400 to-blue-500',
    purple: 'from-purple-400 to-purple-500',
    green: 'from-green-400 to-green-500',
    yellow: 'from-yellow-400 to-yellow-500',
    red: 'from-red-400 to-red-500'
  }

  const isBranchSection = (section: Section): section is BranchSection => {
    return 'branches' in section
  }

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
            <h1 className="text-4xl font-bold text-white mb-8">DoD Innovation Ecosystem</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Explore the comprehensive U.S. Department of Defense Innovation Ecosystem and its interconnected network of organizations driving defense technology innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Innovation Ecosystem Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {innovationEcosystem.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all"
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colorVariants[section.color]} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${colorVariants[section.color]} bg-opacity-10 p-3 mb-6`}>
                    <section.icon className="h-6 w-6 text-gray-900" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {section.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">{section.description}</p>
                  
                  {isBranchSection(section) ? (
                    Object.entries(section.branches).map(([branch, items]) => (
                      <div key={branch} className="mb-6 last:mb-0">
                        <h4 className="font-semibold text-gray-800 mb-2">{branch}</h4>
                        <ul className="space-y-2">
                          {items.map((item) => (
                            <li key={item} className="flex items-center text-gray-600">
                              <span className={`mr-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${colorVariants[section.color]}`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <ul className="space-y-2">
                      {section.entities.map((entity) => (
                        <li key={entity} className="flex items-center text-gray-600">
                          <span className={`mr-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${colorVariants[section.color]}`} />
                          {entity}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
