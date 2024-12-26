'use client'

import { Shield, Cpu, Lock, Globe, Database, Bot } from 'lucide-react'

const services = [
  {
    icon: <Shield className="w-12 h-12 text-gold" />,
    title: "Defense Systems Integration",
    description: "Seamlessly integrate cutting-edge defense technologies with existing infrastructure, enhancing operational capabilities and security measures.",
    features: [
      "Advanced weapons systems integration",
      "Command and control systems",
      "Battlefield management solutions",
      "Military communications networks"
    ]
  },
  {
    icon: <Cpu className="w-12 h-12 text-gold" />,
    title: "AI & Machine Learning",
    description: "Leverage artificial intelligence and machine learning to develop intelligent defense solutions that adapt to emerging threats.",
    features: [
      "Threat detection and analysis",
      "Autonomous systems development",
      "Predictive maintenance",
      "Decision support systems"
    ]
  },
  {
    icon: <Lock className="w-12 h-12 text-gold" />,
    title: "Cybersecurity",
    description: "Protect critical infrastructure and sensitive data with advanced cybersecurity solutions designed for defense applications.",
    features: [
      "Network security",
      "Encryption systems",
      "Threat monitoring",
      "Incident response"
    ]
  },
  {
    icon: <Globe className="w-12 h-12 text-gold" />,
    title: "Strategic Consulting",
    description: "Expert guidance on defense technology strategy, implementation, and optimization for maximum operational effectiveness.",
    features: [
      "Technology roadmap development",
      "Risk assessment",
      "Compliance management",
      "Strategic planning"
    ]
  },
  {
    icon: <Database className="w-12 h-12 text-gold" />,
    title: "Data Analytics",
    description: "Transform defense data into actionable intelligence with advanced analytics and visualization tools.",
    features: [
      "Big data processing",
      "Intelligence analysis",
      "Pattern recognition",
      "Predictive analytics"
    ]
  },
  {
    icon: <Bot className="w-12 h-12 text-gold" />,
    title: "Autonomous Systems",
    description: "Develop and deploy autonomous systems for enhanced defense capabilities and reduced human risk.",
    features: [
      "Unmanned aerial vehicles",
      "Autonomous ground systems",
      "Robotic process automation",
      "Smart sensor networks"
    ]
  }
]

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-navy-blue text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="mb-6">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ready to Enhance Your Defense Capabilities?</h2>
          <p className="text-gray-300 mb-8">
            Contact us to discuss how our services can help strengthen your defense technology infrastructure.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold text-navy-blue px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </main>
  )
}

