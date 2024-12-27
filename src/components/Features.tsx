'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Target, Rocket, Zap, Users, Lock, Globe, Database, Cloud, Brain } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Defense Technology Forums',
      description: 'High-level forums connecting innovators with 1300+ SES and Flag Officers across DoD, Federal IC, and Allied Community'
    },
    {
      icon: Cloud,
      title: 'Advanced AI Solutions',
      description: 'Real-time event-driven architecture with Vantiq, enabling high-speed data orchestration and edge computing'
    },
    {
      icon: Target,
      title: 'Strategic Assessment',
      description: 'Comprehensive evaluation of technologies through our Adaptive and Agile Acquisition Framework'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamless integration of diverse data streams with robust AI/ML capabilities for dynamic data fusion'
    },
    {
      icon: Brain,
      title: 'Innovation Acceleration',
      description: 'Six-month accelerator program providing strategic consulting and direct access to decision-makers'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive connections across government, contractors, US allies, NGOs, and research institutions'
    },
    {
      icon: Rocket,
      title: 'Rapid Prototyping',
      description: 'Swift development and validation through our network of research labs and prototyping facilities'
    },
    {
      icon: Users,
      title: 'Strategic Partnerships',
      description: 'Fostering collaboration between innovators, defense leaders, and key stakeholders'
    },
    {
      icon: Lock,
      title: 'Secure Operations',
      description: 'Advanced protection mechanisms ensuring data security and operational reliability'
    },
    {
      icon: Zap,
      title: 'Agile Integration',
      description: 'Streamlined path from innovation to implementation through established channels'
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-4xl font-bold text-gray-900 mb-6 relative"
          >
            Revolutionary Defense Capabilities
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-2 left-0 h-1 w-full bg-yellow-400/30 transform origin-left"
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our comprehensive suite of defense technology solutions combines strategic partnerships,
            cutting-edge innovation, and deep industry expertise to enhance national security capabilities.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-100"
              >
                <div className="bg-yellow-50 rounded-lg w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-yellow-100 transition-colors">
                  <Icon className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
