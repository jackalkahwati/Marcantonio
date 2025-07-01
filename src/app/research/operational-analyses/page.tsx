'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Building2, Users, Globe, Cpu, LucideIcon } from 'lucide-react'

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

export default function OperationalAnalysesPage() {
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
            <h1 className="text-4xl font-bold text-white mb-8">DoD Innovation Ecosystem Analysis</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Comprehensive operational analysis of the U.S. Department of Defense Innovation Ecosystem and its interconnected network of organizations driving defense technology innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Executive Summary</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The DoD innovation ecosystem represents a complex network of organizations, programs, and initiatives 
              designed to accelerate the development and deployment of cutting-edge technologies for national defense. 
              This analysis provides a comprehensive mapping of key entities, their roles, and interconnections within 
              this ecosystem.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our operational analysis identifies five primary categories of innovation drivers, each playing 
              a critical role in the technology development and acquisition process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Innovation Ecosystem Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ecosystem Components</h2>
            <p className="text-lg text-gray-600">
              Detailed breakdown of the key organizational components driving defense innovation
            </p>
          </motion.div>

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

      {/* Key Insights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Insights & Recommendations</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Interconnected Networks</h3>
                <p className="text-gray-600">
                  The DoD innovation ecosystem operates as a highly interconnected network where success 
                  depends on effective collaboration between multiple entities across different organizational levels.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service-Specific Approaches</h3>
                <p className="text-gray-600">
                  Each military service has developed unique innovation approaches tailored to their specific 
                  operational requirements, creating diverse pathways for technology development and adoption.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Partnership Opportunities</h3>
                <p className="text-gray-600">
                  Multiple entry points exist for private sector engagement, from SBIR/STTR programs 
                  to direct partnerships with service innovation offices and joint entities.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technology Focus Areas</h3>
                <p className="text-gray-600">
                  Emerging technologies like AI, hypersonics, and quantum computing represent priority 
                  areas with significant investment and multiple pathways for innovation development.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 