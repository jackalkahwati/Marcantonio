'use client'

import Hero from '@/components/Hero'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield, Rocket, Users, Brain, ChevronRight } from 'lucide-react'

export default function Home() {
  const valueProps = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Defense Innovation",
      description: "Pioneering disruptive solutions in defense technology through cutting-edge research and development, focusing on AI, quantum computing, and advanced systems integration."
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Rapid Development",
      description: "Accelerating the deployment of innovative defense solutions through agile methodologies and state-of-the-art development practices."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Strategic Partnerships",
      description: "Fostering powerful collaborations between government agencies, defense contractors, and innovative technology providers to enhance national security capabilities."
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Advanced Research",
      description: "Leading breakthrough research in quantum computing, autonomous systems, and next-generation warfare technologies to shape the future of defense."
    }
  ]

  const achievements = [
    { number: "200+", label: "Defense Projects", description: "Successfully delivered innovative solutions" },
    { number: "50+", label: "Government Partners", description: "Trusted by leading agencies" },
    { number: "95%", label: "Success Rate", description: "In project implementation" },
    { number: "24/7", label: "Support", description: "Round-the-clock assistance" }
  ]

  const testimonials = [
    {
      quote: "Marcantonio Global has revolutionized our approach to defense technology integration, delivering exceptional results that exceed expectations.",
      author: "Col. James Anderson",
      role: "Director of Defense Innovation",
      organization: "U.S. Department of Defense"
    },
    {
      quote: "Their expertise in emerging technologies and commitment to excellence has been invaluable to our strategic operations and future planning.",
      author: "Dr. Sarah Mitchell",
      role: "Chief Technology Officer",
      organization: "Leading Defense Contractor"
    }
  ]

  const partners = [
    { name: "Vantiq", logo: "/partners/vantiq.png" },
    { name: "Department of Defense", logo: "/partners/dod.png" },
    { name: "DARPA", logo: "/partners/darpa.jpeg" },
    { name: "Defense Innovation Unit", logo: "/partners/diu.png" },
    { name: "Office of Naval Research", logo: "/partners/onr.png" }
  ]

  return (
    <main className="min-h-screen">
      <Hero />

      {/* Mission Statement Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-200">
              At Marcantonio Global, we are dedicated to providing disruptive and innovative solutions within the defense, 
              space, science, and technology innovation ecosystems. We bridge the gap between cutting-edge technology 
              and critical defense needs, ensuring a more secure future through strategic innovation and unwavering commitment 
              to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Advancing Defense Innovation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Marcantonio Global leads the way in defense technology innovation, delivering cutting-edge solutions 
              that enhance national security capabilities and drive the future of defense.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{prop.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
                <p className="text-muted-foreground">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Delivering measurable results and driving innovation in defense technology
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2 text-gold">{achievement.number}</div>
                <div className="text-xl font-semibold mb-2">{achievement.label}</div>
                <p className="text-gray-200">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by leading organizations in the defense sector to deliver innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="text-4xl text-primary mb-4">&ldquo;</div>
                <p className="text-lg mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                  <p className="text-primary">{testimonial.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Strategic Partners</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Collaborating with industry leaders to deliver innovative defense solutions and drive technological advancement
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full flex items-center justify-center"
              >
                <div className="relative w-40 h-24 grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'contain' }}
                    className="transition-opacity duration-300 hover:opacity-80"
                    priority={true}
                    onError={(e) => {
                      console.error(`Error loading image for ${partner.name}:`, e);
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Defense Capabilities?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to discuss how our innovative solutions can enhance your defense strategy and drive technological advancement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-3 rounded-md border border-primary hover:bg-primary/5 transition-colors"
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
