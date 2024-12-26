'use client'

import Image from 'next/image'
import { Brain, Rocket, Shield } from 'lucide-react'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-navy-blue text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">About Marcantonio Global</h1>
        
        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg mb-8">
            At Marcantonio Global, we are dedicated to revolutionizing defense technology through innovative solutions 
            and strategic partnerships. Our mission is to enhance global security by delivering cutting-edge 
            technological solutions that address today&apos;s complex challenges in the defense landscape.
          </p>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <Brain className="w-12 h-12 mb-4 text-gold" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>Pushing boundaries and embracing cutting-edge technologies to solve complex challenges.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Shield className="w-12 h-12 mb-4 text-gold" />
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p>Maintaining the highest standards of ethics and transparency in all our operations.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Rocket className="w-12 h-12 mb-4 text-gold" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p>Striving for excellence in every project and delivering exceptional results.</p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg flex items-start space-x-4">
              <div className="relative w-24 h-24">
                <Image
                  src="/team/ceo.jpg"
                  alt="CEO"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">John Marcantonio</h3>
                <p className="text-gold mb-2">CEO & Founder</p>
                <p className="text-sm">
                  With over 20 years of experience in defense technology, John leads our vision for 
                  innovative defense solutions.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex items-start space-x-4">
              <div className="relative w-24 h-24">
                <Image
                  src="/team/cto.jpg"
                  alt="CTO"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Sarah Chen</h3>
                <p className="text-gold mb-2">Chief Technology Officer</p>
                <p className="text-sm">
                  A pioneer in AI and cybersecurity, Sarah drives our technological innovation and 
                  strategic development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Our History</h2>
          <div className="bg-gray-800 p-8 rounded-lg">
            <p className="text-lg mb-4">
              Founded in 2015, Marcantonio Global has grown from a small defense consulting firm to a 
              leading provider of advanced defense technology solutions. Our journey has been marked by 
              significant achievements and breakthrough innovations in military technology, cybersecurity, 
              and strategic defense systems.
            </p>
            <p className="text-lg">
              Today, we continue to expand our capabilities and partnerships, serving defense organizations 
              and government agencies worldwide with state-of-the-art solutions that address evolving 
              security challenges.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

