'use client'

import { FileText, BookOpen, FileCode2 } from 'lucide-react'

const resources = [
  {
    category: "Whitepapers",
    icon: <FileText className="w-12 h-12 text-gold" />,
    items: [
      {
        title: "Next-Generation Defense Systems",
        description: "An in-depth analysis of emerging defense technologies and their applications.",
        date: "December 2023"
      },
      {
        title: "AI in Military Operations",
        description: "Comprehensive study on the integration of AI in modern military strategies.",
        date: "November 2023"
      }
    ]
  },
  {
    category: "Case Studies",
    icon: <BookOpen className="w-12 h-12 text-gold" />,
    items: [
      {
        title: "Cybersecurity Enhancement Program",
        description: "How we strengthened a defense organization's security infrastructure.",
        date: "December 2023"
      },
      {
        title: "Command & Control Systems Integration",
        description: "Successful implementation of advanced C2 systems for military operations.",
        date: "November 2023"
      }
    ]
  },
  {
    category: "Technical Documentation",
    icon: <FileCode2 className="w-12 h-12 text-gold" />,
    items: [
      {
        title: "API Documentation",
        description: "Complete technical documentation for our defense technology APIs.",
        date: "December 2023"
      },
      {
        title: "Integration Guidelines",
        description: "Step-by-step guide for integrating our defense solutions.",
        date: "November 2023"
      }
    ]
  }
]

export default function Resources() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-navy-blue text-white">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-12 text-center">Defense Technology Resources</h1>
        
        <div className="grid grid-cols-1 gap-12">
          {resources.map((section, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                {section.icon}
                <h2 className="text-2xl font-semibold ml-4">{section.category}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">{item.date}</span>
                      <a
                        href="#"
                        className="text-gold hover:text-gold/90 transition-colors text-sm"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Access Instructions */}
        <div className="mt-12 bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Accessing Resources</h2>
          <p className="text-gray-300 mb-6">
            Some resources may require authentication or special clearance. Please contact our team
            for access to restricted documents or additional information.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold text-navy-blue px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Request Access
          </a>
        </div>
      </div>
    </main>
  )
}

