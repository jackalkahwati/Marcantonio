'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const successStories = [
  {
    title: "Advanced Cybersecurity Implementation",
    client: "Major Defense Contractor",
    description: "Implemented state-of-the-art cybersecurity solutions that enhanced threat detection by 300% and reduced response time to potential threats by 75%.",
    results: [
      "Enhanced threat detection capabilities",
      "Reduced incident response time",
      "Improved system resilience",
      "Achieved compliance with highest security standards"
    ],
    image: "/success-stories/cyber-defense.jpg"
  },
  {
    title: "AI-Powered Defense Systems Integration",
    client: "National Defense Agency",
    description: "Developed and integrated AI-powered defense systems that significantly improved operational efficiency and decision-making capabilities.",
    results: [
      "40% improvement in threat assessment accuracy",
      "60% reduction in false positives",
      "Enhanced real-time decision making",
      "Streamlined operations workflow"
    ],
    image: "/success-stories/ai-defense.jpg"
  },
  {
    title: "Strategic Communications Network",
    client: "Military Technology Division",
    description: "Designed and implemented a secure communications network that revolutionized military communications while maintaining the highest security standards.",
    results: [
      "99.99% network uptime",
      "Enhanced data encryption",
      "Improved cross-platform compatibility",
      "Reduced latency by 65%"
    ],
    image: "/success-stories/communications.jpg"
  }
]

export default function SuccessStories() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-navy-blue text-white">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-12 text-center">Success Stories</h1>
        
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover how Marcantonio Global has helped defense organizations enhance their 
            technological capabilities and achieve operational excellence through innovative solutions.
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="space-y-16">
          {successStories.map((story, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 bg-gray-800 rounded-lg overflow-hidden`}
            >
              <div className="md:w-1/2 relative h-[300px] md:h-auto">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="text-gold text-sm font-medium mb-2">{story.client}</div>
                <h2 className="text-2xl font-bold mb-4">{story.title}</h2>
                <p className="text-gray-200 mb-6">{story.description}</p>
                <h3 className="text-lg font-semibold mb-4">Key Results:</h3>
                <ul className="space-y-3">
                  {story.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-start text-gray-200">
                      <ArrowRight className="w-5 h-5 text-gold mr-3 mt-1" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-gray-200 mb-8">
            Contact us to discuss how our innovative defense technology solutions can help your organization 
            achieve its strategic objectives.
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

