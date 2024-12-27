'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Shield, Globe, Rocket, Brain, Cloud } from 'lucide-react'

export default function Partners() {
  const partners = [
    { 
      name: 'VANTIQ',
      shortName: 'VANTIQ',
      description: 'World-leading AI platform with advanced real-time event-driven architecture, specializing in high-speed data orchestration and edge computing',
      logo: '/images/partners/vantiq.png',
      link: 'https://vantiq.com/',
      icon: Cloud
    },
    { 
      name: 'Office of the Secretary of Defense',
      shortName: 'OSD',
      description: 'Strategic partnership with OSD Policy Executive Secretariat, delivering over 130 innovative technology solutions',
      logo: '/images/partners/dod.png',
      link: 'https://www.defense.gov/',
      icon: Shield
    },
    { 
      name: 'Defense Innovation Unit',
      shortName: 'DIU',
      description: 'Accelerating the adoption of commercial technology throughout the military and growing the national security innovation base',
      logo: '/images/partners/diu.png',
      link: 'https://www.diu.mil/',
      icon: Rocket
    },
    { 
      name: 'DARPA',
      shortName: 'DARPA',
      description: 'Collaborating on breakthrough technologies for national security through advanced research projects',
      logo: '/images/partners/darpa.jpeg',
      link: 'https://www.darpa.mil/',
      icon: Brain
    },
    { 
      name: 'Office of Naval Research',
      shortName: 'ONR',
      description: 'Partnering to advance naval science and technology innovations through strategic research initiatives',
      logo: '/images/partners/onr.png',
      link: 'https://www.onr.navy.mil/',
      icon: Globe
    }
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
          <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-yellow-500/20 px-6 py-2 text-sm font-semibold text-yellow-400 backdrop-blur-sm border border-yellow-400/20">
            <Shield className="w-4 h-4" />
            Strategic Alliances
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 md:text-5xl">
            Powerful Partnerships
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Through strategic collaborations with industry leaders and defense organizations,
            we're transforming the defense innovation ecosystem and delivering revolutionary
            capabilities to enhance national security.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => {
            const Icon = partner.icon
            return (
              <motion.a 
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-white/5 p-8 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative flex flex-col h-full">
                  {/* Logo */}
                  <div className="mb-6 relative h-16 w-full">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-full w-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {partner.shortName}
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-white/40 group-hover:text-yellow-400 transition-colors" />
                        <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-yellow-400 transition-colors" />
                      </div>
                    </div>
                    
                    <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Our network extends across 155+ Defense Department programs, connecting innovators
            with over 1300 senior leaders in the DoD, Federal IC, and Allied Community of Interest.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
