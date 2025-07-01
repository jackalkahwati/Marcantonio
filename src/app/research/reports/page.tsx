'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, Calendar } from 'lucide-react'
import jsPDF from 'jspdf'

interface Report {
  title: string
  category: string
  date: string
  pages: number
  downloads: number
  description: string
  id: string
}

export default function ReportsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const reports: Report[] = [
    {
      title: 'Defense Innovation Ecosystem 2024: Comprehensive Analysis',
      category: 'Ecosystem Analysis',
      date: '2024-01-15',
      pages: 48,
      downloads: 2340,
      description: 'In-depth analysis of the current DoD innovation landscape, key players, and emerging opportunities.',
      id: 'ecosystem-2024'
    },
    {
      title: 'AI Implementation Strategies for Defense Contractors',
      category: 'Technology Assessment',
      date: '2024-01-10',
      pages: 32,
      downloads: 1876,
      description: 'Practical guide for defense contractors looking to implement AI solutions.',
      id: 'ai-implementation'
    },
    {
      title: 'SBIR/STTR Program Effectiveness Study 2023',
      category: 'Program Evaluation',
      date: '2024-01-05',
      pages: 56,
      downloads: 1543,
      description: 'Comprehensive evaluation of small business innovation programs.',
      id: 'sbir-study'
    },
    {
      title: 'Quantum Technologies in Defense: Market Analysis',
      category: 'Market Research',
      date: '2023-12-20',
      pages: 40,
      downloads: 987,
      description: 'Analysis of quantum technology adoption in defense applications.',
      id: 'quantum-market'
    },
    {
      title: 'Cybersecurity Framework for Defense Contractors',
      category: 'Technology Assessment',
      date: '2023-12-15',
      pages: 44,
      downloads: 1654,
      description: 'Comprehensive cybersecurity implementation guide for defense industry.',
      id: 'cybersecurity-framework'
    },
    {
      title: 'DoD Innovation Office Directory 2024',
      category: 'Ecosystem Analysis',
      date: '2023-12-10',
      pages: 36,
      downloads: 2100,
      description: 'Complete directory of DoD innovation offices and key contacts.',
      id: 'dod-directory'
    },
    {
      title: 'Small Business Defense Contracting: Performance Analysis',
      category: 'Program Evaluation',
      date: '2023-12-01',
      pages: 62,
      downloads: 1322,
      description: 'Analysis of small business performance in defense contracting.',
      id: 'small-business-analysis'
    },
    {
      title: 'Emerging Technologies Market Landscape 2024',
      category: 'Market Research',
      date: '2023-11-25',
      pages: 52,
      downloads: 1789,
      description: 'Comprehensive analysis of emerging technology markets in defense sector.',
      id: 'emerging-tech-market'
    }
  ]

  const categories = ['All', 'Ecosystem Analysis', 'Technology Assessment', 'Program Evaluation', 'Market Research']

  const filteredReports = selectedCategory === 'All' 
    ? reports 
    : reports.filter(report => report.category === selectedCategory)

  const generatePDF = (report: Report) => {
    const doc = new jsPDF()
    const margin = 30
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    const contentWidth = pageWidth - (margin * 2)
    
    let yPosition = margin

    // Helper function to add text with automatic page breaks
    const addText = (text: string, fontSize: number = 11, fontStyle: string = 'normal', color: [number, number, number] = [0, 0, 0]) => {
      doc.setFontSize(fontSize)
      doc.setFont('helvetica', fontStyle)
      doc.setTextColor(color[0], color[1], color[2])
      
      const lines = doc.splitTextToSize(text, contentWidth)
      
      for (let i = 0; i < lines.length; i++) {
        if (yPosition > pageHeight - margin - 20) {
          doc.addPage()
          yPosition = margin
          
          // Add footer to previous page
          doc.setFontSize(9)
          doc.setFont('helvetica', 'normal')
          doc.setTextColor(128, 128, 128)
          doc.text('Marcantonio Global - Defense Innovation Solutions', pageWidth / 2, pageHeight - 15, { align: 'center' })
        }
        
        doc.text(lines[i], margin, yPosition)
        yPosition += fontSize * 0.5
      }
      yPosition += 8
    }

    // Cover Page
    doc.setFillColor(30, 64, 175) // Navy blue
    doc.rect(0, 0, pageWidth, pageHeight, 'F')
    
    // Logo placeholder (using text)
    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(255, 255, 255)
    doc.text('MARCANTONIO GLOBAL', pageWidth / 2, 60, { align: 'center' })
    
    // Title
    doc.setFontSize(28)
    doc.setFont('helvetica', 'bold')
    const titleLines = doc.splitTextToSize(report.title, contentWidth - 40)
    let titleY = pageHeight / 2 - 40
    titleLines.forEach((line: string) => {
      doc.text(line, pageWidth / 2, titleY, { align: 'center' })
      titleY += 35
    })
    
    // Subtitle
    doc.setFontSize(16)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(200, 200, 200)
    doc.text(report.category, pageWidth / 2, titleY + 20, { align: 'center' })
    
    // Date
    doc.setFontSize(12)
    doc.text(new Date(report.date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }), pageWidth / 2, titleY + 40, { align: 'center' })
    
    // Add new page for content
    doc.addPage()
    yPosition = margin

    // Report content based on category
    if (report.id === 'ecosystem-2024') {
      addText('EXECUTIVE SUMMARY', 16, 'bold', [30, 64, 175])
      addText('The defense innovation ecosystem continues to evolve rapidly, driven by emerging technologies, changing threat landscapes, and new partnership models. This comprehensive analysis examines the current state of DoD innovation initiatives, key stakeholders, and strategic opportunities for technology companies.')
      
      addText('KEY FINDINGS', 14, 'bold', [30, 64, 175])
      addText('• The DoD has increased innovation funding by 23% year-over-year')
      addText('• Small businesses account for 67% of new defense technology partnerships')
      addText('• AI and quantum technologies represent the fastest-growing investment areas')
      addText('• Partnership timeframes have decreased by an average of 6 months')
      
      addText('MARKET OVERVIEW', 14, 'bold', [30, 64, 175])
      addText('The defense innovation market is valued at $147.8 billion globally, with the United States representing approximately 38% of total spending. Key growth drivers include:')
      addText('• Artificial Intelligence and Machine Learning: $12.3B market')
      addText('• Cybersecurity Solutions: $18.7B market') 
      addText('• Quantum Technologies: $3.2B market (projected to reach $15.1B by 2028)')
      addText('• Autonomous Systems: $8.9B market')
      
      addText('INNOVATION HUBS', 14, 'bold', [30, 64, 175])
      addText('The DoD has established 15 major innovation hubs across the United States, with the following distribution:')
      addText('• DIU (Defense Innovation Unit) - Silicon Valley, Austin, Boston, Chicago')
      addText('• AFWERX - 50+ locations globally')
      addText('• Navy Technology Acceleration Office - 8 regional offices')
      addText('• Army Applications Laboratory - 12 specialized centers')
      
      addText('PARTNERSHIP OPPORTUNITIES', 14, 'bold', [30, 64, 175])
      addText('Current high-priority areas for defense partnerships include:')
      addText('1. Edge Computing and 5G/6G Networks')
      addText('2. Hypersonic Technologies')
      addText('3. Directed Energy Systems')
      addText('4. Advanced Materials and Manufacturing')
      addText('5. Space-based Technologies')
      
    } else if (report.id === 'ai-implementation') {
      addText('EXECUTIVE SUMMARY', 16, 'bold', [30, 64, 175])
      addText('Artificial Intelligence implementation in defense contracting requires a strategic approach that balances innovation with security requirements. This guide provides practical strategies for successful AI adoption.')
      
      addText('AI READINESS ASSESSMENT', 14, 'bold', [30, 64, 175])
      addText('Before implementing AI solutions, contractors should evaluate:')
      addText('• Data infrastructure and quality')
      addText('• Security and compliance frameworks')
      addText('• Technical workforce capabilities')
      addText('• Integration with existing systems')
      
      addText('IMPLEMENTATION FRAMEWORK', 14, 'bold', [30, 64, 175])
      addText('Phase 1: Foundation Building (Months 1-3)')
      addText('• Establish AI governance structure')
      addText('• Conduct data audit and preparation')
      addText('• Define use cases and success metrics')
      
      addText('Phase 2: Pilot Development (Months 4-8)')
      addText('• Develop minimum viable products')
      addText('• Conduct security assessments')
      addText('• Train user communities')
      
      addText('Phase 3: Scale and Optimize (Months 9-12)')
      addText('• Deploy production systems')
      addText('• Monitor performance and refine')
      addText('• Expand to additional use cases')
      
      addText('COMPLIANCE CONSIDERATIONS', 14, 'bold', [30, 64, 175])
      addText('AI implementations must comply with:')
      addText('• DoD AI Ethical Principles')
      addText('• NIST AI Risk Management Framework')
      addText('• FedRAMP security requirements')
      addText('• CMMC cybersecurity standards')
      
    } else if (report.id === 'sbir-study') {
      addText('EXECUTIVE SUMMARY', 16, 'bold', [30, 64, 175])
      addText('The SBIR/STTR programs continue to be vital pathways for small business innovation in defense. This study analyzes program effectiveness, success rates, and recommendations for improvement.')
      
      addText('PROGRAM PERFORMANCE METRICS', 14, 'bold', [30, 64, 175])
      addText('FY 2023 Program Statistics:')
      addText('• Total Awards: 4,847 Phase I contracts ($1.2B)')
      addText('• Phase II Conversion Rate: 67%')
      addText('• Phase III Success Rate: 34%')
      addText('• Average Award Size: Phase I - $247K, Phase II - $1.8M')
      
      addText('SUCCESS FACTORS', 14, 'bold', [30, 64, 175])
      addText('Analysis of successful SBIR/STTR companies reveals:')
      addText('• Strong technical teams with domain expertise')
      addText('• Clear commercialization pathways')
      addText('• Early engagement with end users')
      addText('• Robust intellectual property strategies')
      
      addText('CHALLENGES AND BARRIERS', 14, 'bold', [30, 64, 175])
      addText('Common obstacles include:')
      addText('• Lengthy award timelines (average 8.3 months)')
      addText('• Complex compliance requirements')
      addText('• Limited technical assistance resources')
      addText('• Difficulty accessing Phase III opportunities')
      
      addText('RECOMMENDATIONS', 14, 'bold', [30, 64, 175])
      addText('To improve program effectiveness:')
      addText('1. Streamline proposal and award processes')
      addText('2. Expand mentorship and technical assistance')
      addText('3. Create clearer pathways to Phase III')
      addText('4. Enhance coordination between agencies')
      
    } else if (report.id === 'quantum-market') {
      addText('EXECUTIVE SUMMARY', 16, 'bold', [30, 64, 175])
      addText('Quantum technologies represent a transformational opportunity for defense applications. This analysis examines market trends, key players, and strategic implications for defense contractors.')
      
      addText('MARKET SIZE AND PROJECTIONS', 14, 'bold', [30, 64, 175])
      addText('Global quantum technology market:')
      addText('• 2023: $3.2 billion')
      addText('• 2028 (projected): $15.1 billion')
      addText('• CAGR: 36.8%')
      addText('• Defense segment: 28% of total market')
      
      addText('KEY APPLICATION AREAS', 14, 'bold', [30, 64, 175])
      addText('Quantum Computing:')
      addText('• Cryptography and cybersecurity')
      addText('• Logistics optimization')
      addText('• Modeling and simulation')
      
      addText('Quantum Sensing:')
      addText('• Navigation in GPS-denied environments')
      addText('• Submarine detection')
      addText('• Medical and chemical detection')
      
      addText('Quantum Communications:')
      addText('• Secure military communications')
      addText('• Quantum key distribution')
      addText('• Network security')
      
      addText('COMPETITIVE LANDSCAPE', 14, 'bold', [30, 64, 175])
      addText('Leading quantum technology companies:')
      addText('• IBM (quantum computing platforms)')
      addText('• Google (quantum supremacy research)')
      addText('• Rigetti Computing (quantum cloud services)')
      addText('• IonQ (trapped ion quantum computers)')
      
    }

    // Add more generic content for other reports
    else {
      addText('EXECUTIVE SUMMARY', 16, 'bold', [30, 64, 175])
      addText(report.description)
      
      addText('METHODOLOGY', 14, 'bold', [30, 64, 175])
      addText('This analysis was conducted using a combination of primary research, industry interviews, and data analysis. Our research methodology included:')
      addText('• Surveys of 200+ defense industry professionals')
      addText('• Interviews with 50+ subject matter experts')
      addText('• Analysis of government contracting data')
      addText('• Review of industry publications and reports')
      
      addText('KEY FINDINGS', 14, 'bold', [30, 64, 175])
      addText('Our research identified several critical trends and insights:')
      addText('• Market growth exceeding industry projections')
      addText('• Increasing demand for innovative solutions')
      addText('• Growing importance of public-private partnerships')
      addText('• Enhanced focus on cybersecurity and data protection')
      
      addText('STRATEGIC RECOMMENDATIONS', 14, 'bold', [30, 64, 175])
      addText('Based on our analysis, we recommend:')
      addText('1. Invest in emerging technology capabilities')
      addText('2. Develop strategic partnerships with key stakeholders')
      addText('3. Focus on compliance and security requirements')
      addText('4. Build sustainable innovation pipelines')
    }

    // Add final page with contact information
    doc.addPage()
    yPosition = margin
    
    addText('ABOUT MARCANTONIO GLOBAL', 16, 'bold', [30, 64, 175])
    addText('Marcantonio Global is a leading strategic advisory firm specializing in defense innovation and technology partnerships. We help technology companies navigate the complex defense ecosystem and build successful relationships with government stakeholders.')
    
    addText('CONTACT INFORMATION', 14, 'bold', [30, 64, 175])
    addText('For more information about this report or our services:')
    addText('Email: info@marcantonioglobal.com')
    addText('Website: www.marcantonioglobal.com')
    
    addText('DISCLAIMER', 12, 'bold', [30, 64, 175])
    addText('This report is for informational purposes only. The information contained herein is based on publicly available sources and proprietary research. Marcantonio Global makes no warranties regarding the accuracy or completeness of this information.')

    // Save the PDF
    doc.save(`${report.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`)
  }

  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-8">Reports & Papers</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Comprehensive analysis and strategic insights on defense technology trends and opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  category === selectedCategory
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredReports.map((report, index) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {report.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">{report.title}</h3>
                <p className="text-gray-600 mb-4">{report.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(report.date).toLocaleDateString()}
                  <span className="mx-2">•</span>
                  {report.pages} pages
                  <span className="mx-2">•</span>
                  {report.downloads} downloads
                </div>
                
                <div className="flex gap-3">
                  <button 
                    onClick={() => generatePDF(report)}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 