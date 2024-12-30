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
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 via-yellow-400/5 to-transparent" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFFFFF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-navy-900/50 to-navy-900" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div 
            className="inline-flex items-center gap-2 mb-6 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 px-6 py-2 text-sm font-semibold text-yellow-400 backdrop-blur-sm border border-yellow-400/20 shadow-lg shadow-yellow-400/5"
            role="presentation"
          >
            <Shield className="w-4 h-4" aria-hidden="true" />
            <span>Strategic Alliances</span>
          </div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/90 mb-6 md:text-5xl lg:text-6xl tracking-tight">
            Powerful Partnerships
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            Through strategic collaborations with industry leaders and defense organizations,
            we're transforming the defense innovation ecosystem and delivering revolutionary
            capabilities to enhance national security.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {partners.map((partner, index) => {
            const Icon = partner.icon
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a 
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative rounded-2xl bg-white/5 p-6 lg:p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full"
                  aria-label={`Learn more about our partnership with ${partner.name}`}
                >
                  {/* Gradient Border */}
                  <div 
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 via-yellow-500/20 to-yellow-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
                    aria-hidden="true"
                  />
                  
                  <div className="relative flex flex-col h-full">
                    {/* Logo */}
                    <div className="mb-6 relative h-16">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-full w-auto max-w-[200px] object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                          {partner.shortName}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-white/40 group-hover:text-yellow-400 transition-colors duration-300" aria-hidden="true" />
                          <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-yellow-400 transition-colors duration-300" aria-hidden="true" />
                        </div>
                      </div>
                      
                      <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 px-8 py-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10">
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 mb-2">
                155+
              </div>
              <div className="text-sm text-white/60 font-medium">
                Defense Department Programs
              </div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-white/5 via-white/10 to-white/5" aria-hidden="true" />
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 mb-2">
                1,300+
              </div>
              <div className="text-sm text-white/60 font-medium">
                Senior Leaders Connected
              </div>
            </div>
          </div>
          <p className="mt-8 text-base text-white/40 max-w-2xl mx-auto">
            Connecting innovators across the DoD, Federal IC, and Allied Community of Interest
          </p>
        </motion.div>
      </div>
    </section>
  )
}
