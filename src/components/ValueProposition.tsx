import React from 'react'
import { Shield, Users, Rocket, Target, Award, Clock, Globe, Brain, Wrench, Zap } from 'lucide-react'

export default function ValueProposition() {
  const propositions = [
    {
      icon: Shield,
      title: 'Defense Logistics Innovation Forums',
      description:
        'Connect with 1300+ SES and Flag Officers, CIOs across the DoD, Federal IC, and Allied Community of Interest, shaping capabilities into future DoD requirements.',
    },
    {
      icon: Rocket,
      title: 'Holistic Innovation Acceleration',
      description:
        'Six-month accelerator program providing strategic consulting, training, and platforms to showcase innovations to key defense and federal leaders.',
    },
    {
      icon: Target,
      title: 'Rapid Capability Assessment',
      description:
        'Swift evaluation of technologies through our Adaptive and Agile Acquisition Framework, identifying potential synergies for defense applications.',
    },
    {
      icon: Award,
      title: 'Pentagon Visibility',
      description:
        'Elevate your credibility within the Pentagon through strategic positioning and direct engagement with senior defense leadership.',
    },
    {
      icon: Brain,
      title: 'Expert Guidance',
      description:
        'Access to experienced Subject Matter Experts, Retired SES, and Flag Officer-level professionals in defense and private sectors.',
    },
    {
      icon: Wrench,
      title: 'Comprehensive Resources',
      description:
        'Utilize equipped research labs and prototyping facilities through partnerships with strategic private and public sector partners.',
    },
    {
      icon: Users,
      title: 'Strategic Entry Points',
      description:
        'Create strategic landing zones within industry sectors, positioning your startup for success in the defense innovation ecosystem.',
    },
    {
      icon: Globe,
      title: 'Extensive Network',
      description:
        'Leverage strong connections within government, contractors, US allies, NGOs, and research institutions.',
    },
    {
      icon: Zap,
      title: 'Rapid Integration',
      description:
        'Accelerate the path from innovation to implementation through our established channels and partnerships.',
    },
    {
      icon: Clock,
      title: 'Long-Term Support',
      description:
        'Sustain growth through multi-month and multi-year retainers, ensuring ongoing guidance and assistance at every stage.',
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
          Our Value Propositions
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-800">
          Empowering defense technology startups with comprehensive support and strategic
          connections to thrive in the DoD ecosystem. Our unique approach combines deep industry
          expertise with unparalleled access to decision-makers.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {propositions.map((prop) => {
            const Icon = prop.icon
            return (
              <div
                key={prop.title}
                className="rounded-lg bg-gray-50 p-8 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                  <Icon className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{prop.title}</h3>
                <p className="text-gray-800">{prop.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
