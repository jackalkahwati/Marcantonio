'use client'
import React from 'react'
import { Shield, Rocket, Lock, Target, Globe, Zap } from 'lucide-react'

export default function Mission() {
  const pillars = [
    {
      icon: Shield,
      title: "Defense Innovation Ecosystem",
      description: "Transforming defense capabilities through our Adaptive and Agile Acquisition Framework",
      gradient: "from-blue-400 to-blue-500"
    },
    {
      icon: Rocket,
      title: "Revolutionary Technology",
      description: "Scouting and delivering groundbreaking technologies to enhance national security",
      gradient: "from-purple-400 to-purple-500"
    },
    {
      icon: Lock,
      title: "Strategic Partnerships",
      description: "Fostering collaboration between innovators, scientists, and defense leaders",
      gradient: "from-red-400 to-red-500"
    },
    {
      icon: Target,
      title: "Accelerated Integration",
      description: "Streamlining the path from innovation to operational deployment",
      gradient: "from-green-400 to-green-500"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connecting over 1300 senior leaders with transformative technologies",
      gradient: "from-cyan-400 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Rapid Assessment",
      description: "Swift evaluation and strategic positioning of defense technologies",
      gradient: "from-yellow-400 to-yellow-500"
    }
  ]

  return (
    <section className="relative bg-navy-900 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>

      <div className="container relative mx-auto px-4">
        <div
          className="text-center mb-16 animate-fade-in"
        >
          <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-yellow-500/20 px-6 py-2 text-sm font-semibold text-yellow-400 backdrop-blur-sm border border-yellow-400/20">
            <Shield className="w-4 h-4" />
            Our Purpose
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 md:text-5xl">
            Advancing Defense Through Innovation
          </h2>
          <p className="mx-auto max-w-4xl text-xl text-white/80 leading-relaxed">
            At Marcantonio Global, our vision is to transform the landscape of defense innovation through our Adaptive and Agile Acquisition Framework. We scout, assess, identify, and deliver revolutionary capabilities to the Department of Defense, connecting over 1300 senior leaders with groundbreaking technologies. Our mission extends beyond traditional consulting - we are dedicated to solving national security challenges by fostering collaboration between innovative technologies and partnerships with scientists, visionaries, engineers, and inventors who uphold our shared democratic values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="group relative rounded-2xl bg-white/5 p-8 backdrop-blur-sm hover:bg-white/10 transition-all animate-fade-in"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transitionDuration: '700ms',
                  transitionProperty: 'all',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${pillar.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-20`} />
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-white/10 to-white/5 p-4 group-hover:from-white/20 group-hover:to-white/10 transition-all mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                    {pillar.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
