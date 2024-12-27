'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Rocket, Target, Users, Globe } from 'lucide-react'

export default function CTA() {
  const benefits = [
    {
      icon: Shield,
      title: "Defense Innovation Forums",
      description: "Connect with 1300+ SES and Flag Officers across DoD and Federal IC"
    },
    {
      icon: Rocket,
      title: "6-Month Accelerator",
      description: "Strategic consulting and direct access to key defense leaders"
    },
    {
      icon: Target,
      title: "Rapid Assessment",
      description: "Swift evaluation through our Adaptive and Agile Framework"
    },
    {
      icon: Users,
      title: "Strategic Network",
      description: "Access to experienced Subject Matter Experts and Flag Officers"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Partnerships across government, contractors, and research institutions"
    }
  ]

  return (
    <section className="relative py-32 bg-navy-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>

      {/* Animated Background Gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5 blur-3xl"
      />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-yellow-500/20 px-6 py-2 text-sm font-semibold text-yellow-400 backdrop-blur-sm border border-yellow-400/20">
              <Shield className="w-4 h-4" />
              Join Our Defense Innovation Ecosystem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Defense Technology Vision
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Experience our unique "Defense Technology Innovation as a Service" approach. Through strategic partnerships and our extensive network, we'll help you navigate the defense innovation landscape and accelerate your path to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-4 text-lg font-semibold text-black transition-all hover:from-yellow-500 hover:to-yellow-600 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="group flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Our Process
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative flex items-start gap-4">
                  <div className="rounded-lg bg-gradient-to-r from-white/10 to-white/5 p-3 group-hover:from-white/20 group-hover:to-white/10 transition-all">
                    <benefit.icon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-white/60 group-hover:text-white/80 transition-colors">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
