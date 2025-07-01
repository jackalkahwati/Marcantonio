'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, BookOpen, BarChart3, ArrowRight, Download, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function ResearchPage() {
  const researchAreas = [
    {
      icon: FileText,
      title: 'Reports and Papers',
      description: 'Comprehensive analysis and insights on defense technology trends, innovation pathways, and strategic recommendations.',
      href: '/research/reports',
      items: [
        'Executive Briefs',
        'Technology Assessment Reports',
        'Market Analysis Papers',
        'Strategic Recommendations'
      ]
    },
    {
      icon: BookOpen,
      title: 'Industry Journal',
      description: 'In-depth articles exploring emerging defense technologies, innovation case studies, and thought leadership perspectives.',
      href: '/research/journal',
      items: [
        'Quarterly Defense Innovation Review',
        'Technology Spotlight Articles',
        'Expert Commentary',
        'Industry Interviews'
      ]
    },
    {
      icon: BarChart3,
      title: 'Operational Analyses',
      description: 'Detailed examination of DoD innovation ecosystem, partnership structures, and technology transition pathways.',
      href: '/research/operational-analyses',
      items: [
        'DoD Innovation Ecosystem Mapping',
        'Partnership Effectiveness Studies',
        'Technology Transition Analysis',
        'Program Impact Assessments'
      ]
    }
  ]

  const featuredResearch = [
    {
      title: 'DoD Innovation Ecosystem 2024: Comprehensive Analysis',
      type: 'Report',
      date: '2024-01-15',
      description: 'An in-depth analysis of the current DoD innovation landscape, key players, and emerging opportunities.',
      downloadUrl: '#'
    },
    {
      title: 'AI in Defense: Strategic Implementation Framework',
      type: 'Journal Article',
      date: '2024-01-10',
      description: 'Exploring practical approaches to AI adoption in defense applications with case studies and best practices.',
      downloadUrl: '#'
    },
    {
      title: 'SBIR/STTR Program Effectiveness Study',
      type: 'Operational Analysis',
      date: '2024-01-05',
      description: 'Comprehensive evaluation of small business innovation programs and their impact on defense technology development.',
      downloadUrl: '#'
    }
  ]

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-8">Research & Analysis</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Strategic insights, comprehensive analysis, and thought leadership in defense technology innovation and ecosystem development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Focus Areas</h2>
            <p className="text-lg text-gray-600">
              Our research initiatives provide critical insights into defense innovation, technology trends, and strategic partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <area.icon className="w-6 h-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-600">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={area.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-all"
                >
                  Explore {area.title.split(' ')[0]}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Research</h2>
            <p className="text-lg text-gray-600">
              Latest insights and analysis from our research team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredResearch.map((research, index) => (
              <motion.div
                key={research.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {research.type}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(research.date).toLocaleDateString()}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{research.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{research.description}</p>
                
                <a
                  href={research.downloadUrl}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Research Methodology</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Data-Driven Analysis</h3>
                <p className="text-gray-600 mb-6">
                  Our research leverages comprehensive data collection from government sources, industry reports, 
                  and direct engagement with defense and technology stakeholders to provide accurate and actionable insights.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Network</h3>
                <p className="text-gray-600">
                  We collaborate with a network of defense experts, technology leaders, and academic researchers 
                  to ensure our analysis reflects real-world experiences and emerging trends.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Practical Focus</h3>
                <p className="text-gray-600 mb-6">
                  All research is designed to provide practical, implementable recommendations that organizations 
                  can use to improve their defense innovation strategies and partnerships.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Updates</h3>
                <p className="text-gray-600">
                  Our research is continuously updated to reflect the rapidly evolving defense technology landscape 
                  and emerging opportunities for innovation and collaboration.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 