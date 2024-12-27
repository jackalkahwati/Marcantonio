'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Globe, Shield, Zap, Database, Lock, Cloud, Network, Rocket, Brain } from 'lucide-react'

export default function Innovation() {
  const innovations = [
    {
      icon: Cloud,
      title: "Advanced AI Architecture",
      description: "Real-time event-driven architecture with Vantiq, specializing in high-speed data orchestration and edge computing"
    },
    {
      icon: Network,
      title: "Resilient Networking",
      description: "Enhanced bandwidth utilization and efficient data processing under constrained connectivity conditions"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamless integration of diverse data streams enabling real-time analytics and decision-making"
    },
    {
      icon: Shield,
      title: "Defense Enterprise Solutions",
      description: "Comprehensive solutions addressing critical national security challenges through innovative technology"
    },
    {
      icon: Brain,
      title: "AI/ML Capabilities",
      description: "Dynamic data fusion and automated anomaly detection ensuring unparalleled security and reliability"
    },
    {
      icon: Rocket,
      title: "Rapid Innovation",
      description: "Swift development and deployment of breakthrough technologies for defense applications"
    },
    {
      icon: Globe,
      title: "Global Security",
      description: "International defense solutions through partnerships with allies and strategic stakeholders"
    },
    {
      icon: Lock,
      title: "Secure Systems",
      description: "Advanced protection mechanisms for sensitive defense operations and data"
    },
    {
      icon: Zap,
      title: "Real-Time Response",
      description: "Immediate situational awareness and rapid response capabilities for critical scenarios"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Advanced processing capabilities at the tactical edge for enhanced operational effectiveness"
    }
  ]

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-4xl font-bold text-black mb-6 relative">
            Revolutionary Defense Innovation
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-2 left-0 h-1 w-full bg-yellow-400/30 transform origin-left"
            />
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-700 leading-relaxed">
            Through strategic partnerships and cutting-edge technology, we're transforming defense capabilities
            with innovative solutions that address today's most critical security challenges. Our collaboration
            with industry leaders like Vantiq enables us to deliver revolutionary capabilities that enhance
            national security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {innovations.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl p-8 border border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="bg-yellow-500/10 rounded-lg w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <Icon className="h-7 w-7 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
