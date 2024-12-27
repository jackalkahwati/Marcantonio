'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star, Shield, Award, Users, Globe } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I offer my highest recommendation for you to consider including Nino Marcantonio on your strategic innovations, team building, and problem-solving teams. Nino is one of the most creative, energetic, and passionate rainmakers I've encountered in my career. Senior defense leaders and others rely on him for delivering keen insights into complex systems. He is fearless in attacking wicked problems and connecting myriad people and ideas to advance the organization's objectives. He's the driving force behind many game changing innovations, large and small.",
      author: 'Major General Edward "Hertz" Vaughan',
      role: "Executive Director, OSD JRAC",
      organization: "Office of the Secretary of Defense",
      rating: 5,
      tags: ['Innovation', 'Leadership', 'Strategy']
    },
    {
      quote: "Marcantonio Global's innovative approach to defense technology integration has revolutionized how we connect emerging technologies with defense requirements. Their Defense Logistics Innovation Forum has been instrumental in advancing our capabilities.",
      author: "Senior Defense Executive",
      role: "Technology Integration Director",
      organization: "Department of Defense",
      rating: 5,
      tags: ['Technology', 'Innovation']
    },
    {
      quote: "The team's ability to scout and assess revolutionary technologies, combined with their extensive network of defense leaders, makes them an invaluable partner in advancing our national defense strategy.",
      author: "Defense Technology Leader",
      role: "Strategic Innovation Director",
      organization: "Federal IC Community",
      rating: 5,
      tags: ['Strategy', 'Partnership']
    }
  ]

  const stats = [
    { icon: Users, value: '1300+', label: 'Senior Leaders Network' },
    { icon: Shield, value: '130+', label: 'Technology Solutions' },
    { icon: Globe, value: '155+', label: 'Defense Programs' },
    { icon: Award, value: '15+', label: 'Years Experience' },
  ]

  return (
    <section className="relative py-24 bg-navy-900">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-4xl font-bold text-white mb-6 relative md:text-5xl">
            Trusted Leadership
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-yellow-400 to-yellow-500 transform origin-left"
            />
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Endorsed by senior defense leaders and trusted by organizations across the DoD and Federal IC community
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm"
            >
              <stat.icon className="w-8 h-8 text-yellow-400 mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-white/5 p-8 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative">
                <div className="absolute -top-4 -left-2">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-end mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-white/80 mb-6 mt-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {testimonial.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4">
                  <div className="font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {testimonial.author}
                  </div>
                  <div className="text-white/60 text-sm">
                    {testimonial.role}
                  </div>
                  <div className="text-white/40 text-sm mt-1">
                    {testimonial.organization}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
