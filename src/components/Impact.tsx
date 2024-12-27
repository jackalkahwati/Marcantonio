'use client'

import React from 'react'
import { Trophy, Users, Target, Zap, Globe, Shield } from 'lucide-react'

export default function Impact() {
  const stats = [
    {
      icon: Users,
      value: '1300+',
      label: 'Senior Leaders',
      description: 'SES and Flag Officers in our network'
    },
    {
      icon: Shield,
      value: '130+',
      label: 'Technology Solutions',
      description: 'Delivered to the Office of Secretary of Defense'
    },
    {
      icon: Globe,
      value: '155+',
      label: 'Defense Programs',
      description: 'Collaborating across DoD and IC'
    },
    {
      icon: Target,
      value: '6',
      label: 'Month Program',
      description: 'Accelerated innovation pathway'
    },
    {
      icon: Trophy,
      value: '140+',
      label: 'DoD Organizations',
      description: 'Active partnerships and engagements'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'Strategic Support',
      description: 'Continuous guidance and assistance'
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proven Impact
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto font-medium">
            Through our Defense Technology Innovation Program and strategic partnerships, we've
            created a powerful ecosystem that connects innovators with defense leaders,
            delivering measurable results in national security enhancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-yellow-50 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-yellow-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-800 font-medium">
                  {stat.description}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our unique approach combines strategic consulting, technology assessment, and direct
            access to key decision-makers, enabling us to accelerate the integration of
            innovative solutions into defense operations.
          </p>
        </div>
      </div>
    </section>
  )
}
