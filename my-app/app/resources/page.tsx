'use client'

import { FileText, BookOpen, FileCode2 } from 'lucide-react'
import DownloadableResource from '@/components/DownloadableResource'
import ExportControlNotice from '@/components/ExportControlNotice'

const resources = [
  {
    category: "Defense Innovation Forums",
    icon: <FileText className="w-12 h-12 text-gold" />,
    items: [
      {
        title: "CUAS Presentation Nov1 Forum",
        filename: "CUAS Presentation Nov1 Forum (final).pdf",
        description: "Comprehensive presentation on Counter Unmanned Aircraft Systems strategies and implementations."
      },
      {
        title: "CUAS Forum Guide Final",
        filename: "CUAS Forum Guide Final_followup.pdf",
        description: "Detailed follow-up guide for Counter UAS Forum participants and stakeholders."
      }
    ]
  },
  {
    category: "Strategic Partnerships",
    icon: <BookOpen className="w-12 h-12 text-gold" />,
    items: [
      {
        title: "HI AI Strategy Strategic Alliance",
        filename: "9-HI AI Strategy Strategic Alliance and Partne.pdf",
        description: "Strategic framework for AI implementation and partnership development in defense."
      }
    ]
  },
  {
    category: "Defense Technology Programs",
    icon: <FileCode2 className="w-12 h-12 text-gold" />,
    items: [
      {
        title: "DLIF NAVSEA Defense Future",
        filename: "Marcantonio Global (DLIF) NAVSEA Defense Futur.pdf",
        description: "Naval Sea Systems Command defense technology future initiatives and programs."
      },
      {
        title: "DTIP FTF Value Proposition",
        filename: "Marcantonio Global (DTIP) FTF Value Propositio.pdf",
        description: "Defense Technology Innovation Program - Future Technology Forum value proposition."
      },
      {
        title: "DLIF Presentation Overview",
        filename: "Marcantonio GLobal DLIF_Presentation_Overview_.pdf",
        description: "Comprehensive overview of the Defense Logistics Innovation Forum initiatives."
      }
    ]
  }
]

export default function Resources() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-navy-blue text-white">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-12 text-center">Defense Technology Resources</h1>
        
        {/* Export Control Notice */}
        <div className="mb-12">
          <ExportControlNotice />
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {resources.map((section, index) => (
            <div key={index} className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center mb-6">
                {section.icon}
                <h2 className="text-2xl font-semibold ml-4">{section.category}</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {section.items.map((item, itemIndex) => (
                  <DownloadableResource
                    key={itemIndex}
                    title={item.title}
                    filename={item.filename}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Access Instructions */}
        <div className="mt-12 bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg">
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

