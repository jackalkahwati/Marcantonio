import React from 'react'
import { Shield, Rocket, Brain, Database, Cloud, Lock, ArrowRight, Users, Target, Globe } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Defense Logistics Innovation Forums',
      description:
        'Facilitate high-level forums connecting 1300+ SES and Flag Officers, CIOs across the DoD, Federal IC, and Allied Community of Interest.',
      features: [
        'Strategic technology presentations',
        'Senior leadership engagement',
        'Innovation ecosystem access',
        'Requirements discovery sessions',
      ],
      gradient: 'from-blue-400 to-blue-500',
      link: '/services#forums',
    },
    {
      icon: Target,
      title: 'Strategic Consulting',
      description:
        'Comprehensive consulting services to help defense technology startups navigate the complex DoD landscape and acquisition processes.',
      features: [
        'Market research & due diligence',
        'Stakeholder engagement',
        'Rapid prototyping strategy',
        'Transition planning',
      ],
      gradient: 'from-purple-400 to-purple-500',
      link: '/services#consulting',
    },
    {
      icon: Brain,
      title: 'Technology Assessment',
      description:
        'Expert evaluation and positioning of innovative technologies for defense applications, ensuring alignment with DoD requirements.',
      features: [
        'Capability assessment',
        'Technology readiness evaluation',
        'Integration feasibility analysis',
        'Market fit determination',
      ],
      gradient: 'from-green-400 to-green-500',
      link: '/services#assessment',
    },
    {
      icon: Users,
      title: 'Strategic Partnerships',
      description:
        'Foster valuable connections between innovators and key defense stakeholders, creating opportunities for collaboration and growth.',
      features: [
        'Pentagon visibility enhancement',
        'Industry sector positioning',
        'Alliance building',
        'Network expansion',
      ],
      gradient: 'from-yellow-400 to-yellow-500',
      link: '/services#partnerships',
    },
    {
      icon: Globe,
      title: 'Innovation Acceleration',
      description:
        'Accelerate the development and deployment of breakthrough technologies through our comprehensive support ecosystem.',
      features: [
        'Technology showcasing',
        'Rapid capability assessment',
        'Strategic positioning',
        'Growth acceleration',
      ],
      gradient: 'from-cyan-400 to-cyan-500',
      link: '/services#acceleration',
    },
    {
      icon: Lock,
      title: 'Long-Term Support',
      description:
        'Sustained guidance and assistance through multi-month and multi-year retainers, ensuring continuous growth and success.',
      features: [
        'Ongoing strategic guidance',
        'Technology evolution support',
        'Market adaptation assistance',
        'Continuous improvement',
      ],
      gradient: 'from-red-400 to-red-500',
      link: '/services#support',
    },
  ]

  return (
    <section className="bg-navy-900 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Strategic Services
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-white/80">
            Comprehensive defense technology solutions designed to enhance military
            capabilities and national security through innovation and expertise.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link 
                href={service.link}
                key={service.title} 
                className="group relative rounded-2xl bg-white/5 p-6 transition-all hover:bg-white/10"
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-20`} />
                
                <div className="relative">
                  <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-white/10 to-white/5 p-3 group-hover:from-white/20 group-hover:to-white/10 transition-all">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="mb-4 flex items-center text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {service.title}
                    <ArrowRight className="ml-2 h-5 w-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </h3>
                  
                  <p className="mb-6 text-white/80">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-white/70">
                        <span className={`mr-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
