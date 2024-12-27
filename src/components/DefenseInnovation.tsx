import React from 'react'
import { Search, FileCheck, Users, Zap, ArrowRight, Shield, Target, Rocket } from 'lucide-react'

export default function DefenseInnovation() {
  const activities = [
    {
      icon: Search,
      title: 'Requirements Discovery',
      description:
        'Identify needs through comprehensive interviews, surveys, and focus groups with key defense stakeholders to ensure solutions align with DoD requirements.',
    },
    {
      icon: Shield,
      title: 'Technology Assessment',
      description:
        'Evaluate and identify groundbreaking technologies with military applications through our Adaptive and Agile Acquisition Framework.',
    },
    {
      icon: Target,
      title: 'Strategic Positioning',
      description:
        'Position innovations effectively within the defense ecosystem through our network of over 1300 senior leaders and decision-makers.',
    },
    {
      icon: FileCheck,
      title: 'Market Research',
      description:
        'Conduct extensive research to understand defense industry trends, emerging threats, and opportunities in the national security landscape.',
    },
    {
      icon: Users,
      title: 'Stakeholder Engagement',
      description:
        'Foster collaboration between innovators, defense leaders, and key stakeholders to ensure solutions meet critical defense needs.',
    },
    {
      icon: Rocket,
      title: 'Innovation Acceleration',
      description:
        'Fast-track development through our six-month accelerator program, providing strategic consulting and direct access to decision-makers.',
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description:
        'Utilize agile methodologies and our extensive network of facilities for quick validation and refinement of defense technologies.',
    },
    {
      icon: Shield,
      title: 'Strategic Integration',
      description:
        'Facilitate seamless integration of innovative solutions into defense operations through established channels and partnerships.',
    },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-black">
            Defense Technology Innovation as a Service
          </h2>
          <p className="mb-8 text-xl text-black">
            Our comprehensive DTIAAS program empowers defense technology startups through strategic
            consulting, training, and direct access to key defense and federal leaders.
          </p>
          <p className="mb-16 text-lg text-gray-700">
            Through our unique approach, we scout, assess, identify, and deliver revolutionary
            capabilities to the Department of Defense, solving national security challenges through
            our extensive network of over 1300 senior leaders.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <div
                key={activity.title}
                className="group rounded-lg bg-white p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-gray-200"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10">
                  <Icon className="h-6 w-6 text-yellow-500" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-black">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/services"
            className="inline-flex items-center rounded-lg bg-yellow-500 px-8 py-3 text-lg font-semibold text-black transition-colors hover:bg-yellow-600"
          >
            Learn More About Our Process
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
