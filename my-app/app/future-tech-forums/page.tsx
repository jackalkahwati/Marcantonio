'use client';

import { Calendar, MapPin, Users, Clock } from 'lucide-react'
import Image from 'next/image'

const upcomingForums = [
  {
    title: "AI in Defense Symposium",
    date: "March 15-16, 2024",
    location: "Washington, DC",
    description: "Join leading experts in artificial intelligence and defense technology for a comprehensive exploration of AI applications in military operations.",
    topics: [
      "Machine Learning in Threat Detection",
      "Autonomous Systems Integration",
      "AI-Powered Cybersecurity",
      "Ethical AI in Defense"
    ],
    capacity: "250 Attendees",
    duration: "2 Days"
  },
  {
    title: "Cybersecurity Innovation Forum",
    date: "April 22-23, 2024",
    location: "Arlington, VA",
    description: "A focused discussion on emerging cybersecurity challenges and innovative solutions in the defense sector.",
    topics: [
      "Zero Trust Architecture",
      "Quantum-Safe Cryptography",
      "Supply Chain Security",
      "Threat Intelligence"
    ],
    capacity: "200 Attendees",
    duration: "2 Days"
  },
  {
    title: "Future Defense Tech Summit",
    date: "May 10-12, 2024",
    location: "San Diego, CA",
    description: "Explore groundbreaking technologies shaping the future of defense and military operations.",
    topics: [
      "Next-Gen Communications",
      "Advanced Materials",
      "Space Defense Systems",
      "Quantum Computing Applications"
    ],
    capacity: "300 Attendees",
    duration: "3 Days"
  }
]

export default function FutureTechForums() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-32 pb-16 px-4 bg-navy-blue text-white">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-12 text-center">Future Tech Forums</h1>
        
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-xl text-white max-w-3xl mx-auto">
            Join us at our upcoming technology forums where industry leaders, defense experts, 
            and innovators gather to discuss the future of defense technology.
          </p>
        </div>

        {/* Forums Grid */}
        <div className="space-y-12">
          {upcomingForums.map((forum, index) => (
            <div key={index} className="bg-gray-800/90 backdrop-blur-sm rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">{forum.title}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-white font-medium mb-6">{forum.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center text-white">
                        <Calendar className="w-5 h-5 text-gold mr-3" />
                        <span className="font-medium">{forum.date}</span>
                      </div>
                      <div className="flex items-center text-white">
                        <MapPin className="w-5 h-5 text-gold mr-3" />
                        <span className="font-medium">{forum.location}</span>
                      </div>
                      <div className="flex items-center text-white">
                        <Users className="w-5 h-5 text-gold mr-3" />
                        <span className="font-medium">{forum.capacity}</span>
                      </div>
                      <div className="flex items-center text-white">
                        <Clock className="w-5 h-5 text-gold mr-3" />
                        <span className="font-medium">{forum.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Key Topics</h3>
                    <ul className="space-y-3">
                      {forum.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2"></span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <a
                    href="/contact"
                    className="inline-block bg-gold text-navy-blue px-6 py-2 rounded font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    Register Interest
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="mt-16 mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-center">Our Strategic Partners</h2>
          <p className="text-gray-200 text-center mb-12 max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver innovative defense solutions and drive technological advancement
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[
              { name: "Vantiq", logo: "/partners/vantiq.png" },
              { name: "Department of Defense", logo: "/partners/dod.png" },
              { name: "DARPA", logo: "/partners/darpa.png" },
              { name: "Defense Innovation Unit", logo: "/partners/diu.png" },
              { name: "AI Strategy Corporation", logo: "/partners/ai-strategy.png" }
            ].map((partner) => (
              <div key={partner.name} className="flex justify-center">
                <div className="w-40 h-20 relative [&_img]:grayscale [&_img]:contrast-125 hover:[&_img]:grayscale-0 hover:[&_img]:contrast-100 [&_img]:transition-all [&_img]:duration-300 hover:[&_img]:scale-105 bg-white/5 hover:bg-white/15 backdrop-blur-sm rounded-lg">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="160px"
                    style={{ objectFit: 'contain' }}
                    className="p-3"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Want to Stay Updated?</h2>
          <p className="text-gray-200 mb-8">
            Subscribe to our newsletter to receive updates about upcoming forums and exclusive content 
            from past events.
          </p>
          <a
            href="/tech-newsletter"
            className="inline-block bg-gold text-navy-blue px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </main>
  )
}
