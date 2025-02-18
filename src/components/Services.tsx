import React from 'react'
import { Shield, Rocket, Brain, Database, Cloud, Lock, ArrowRight, Users, Target, Globe, Star } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: Star,
      title: 'MG Centurions Program',
      description:
        'Elite acceleration program driving innovation in defense technology through powerful partnerships and strategic engagement.',
      features: [
        'Global DoD partnerships',
        'Access to 1,400+ trusted leaders',
        'Full OSD A&S integration',
        'Strategic advisory support',
      ],
      gradient: 'from-yellow-400 to-yellow-500',
      link: '/centurions',
    },
    {
      icon: Shield,
      title: "Strategic Capabilities Office (SCO)",
      description:
        "OSD office specializing in rapid development and deployment of game-changing military capabilities.",
      features: [
        "Quick tech applications",
        "Strategic military capabilities",
        "Rapid prototyping",
        "Cross-domain solutions",
      ],
      gradient: "from-blue-400 to-blue-500",
      link: "/services#sco",
    },
    {
      icon: Users,
      title: "National Security Innovation Network (NSIN)",
      description:
        "Problem-solving network connecting defense, academia, and venture communities to solve national security challenges.",
      features: [
        "Academic partnerships",
        "Innovation challenges",
        "Startup engagement",
        "Technology scouting",
      ],
      gradient: "from-purple-400 to-purple-500",
      link: "/services#nsin",
    },
    {
      icon: Brain,
      title: "Defense Innovation Board (DIB)",
      description:
        "Advisory committee providing innovative insights and recommendations to senior DoD leadership.",
      features: [
        "Technology advisory",
        "Innovation strategy",
        "Digital transformation",
        "Cultural change",
      ],
      gradient: "from-green-400 to-green-500",
      link: "/services#dib",
    },
    {
      icon: Shield,
      title: "Defense Threat Reduction Agency (DTRA)",
      description:
        "Combat support agency for countering weapons of mass destruction and emerging threats.",
      features: [
        "WMD countermeasures",
        "Threat assessment",
        "International cooperation",
        "Research & development",
      ],
      gradient: "from-red-400 to-red-500",
      link: "/services#dtra",
    },
    {
      icon: Brain,
      title: "Joint Artificial Intelligence Center (JAIC)",
      description:
        "DoD's center for AI innovation, enabling the transformation of U.S. joint warfighting and departmental processes.",
      features: [
        "AI development",
        "Machine learning solutions",
        "Ethical AI frameworks",
        "Joint warfighting applications",
      ],
      gradient: "from-yellow-400 to-yellow-500",
      link: "/services#jaic",
    },
    {
      icon: Lock,
      title: "Cyber Command (USCYBERCOM)",
      description:
        "Unified combatant command for cyberspace operations and military cybersecurity.",
      features: [
        "Cyber operations",
        "Digital defense",
        "Network security",
        "Threat response",
      ],
      gradient: "from-cyan-400 to-cyan-500",
      link: "/services#cybercom",
    },
    {
      icon: Globe,
      title: "DOGE (Department of Government Efficiency)",
      description:
        "Digital service team using design and technology to improve government services.",
      features: [
        "Digital transformation",
        "User experience design",
        "Agile development",
        "Technology modernization",
      ],
      gradient: "from-indigo-400 to-indigo-500",
      link: "/services#doge",
    },
    {
      icon: Target,
      title: "Advanced Battle Management System (ABMS)",
      description:
        "Air Force's contribution to the Pentagon's Joint All-Domain Command and Control (JADC2) effort.",
      features: [
        "Data integration",
        "Command & control",
        "Multi-domain operations",
        "Real-time decision support",
      ],
      gradient: "from-purple-400 to-purple-500",
      link: "/services#abms",
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
