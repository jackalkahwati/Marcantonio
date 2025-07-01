'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowLeft, Share, FileText, Calendar, BarChart3, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function DefenseInnovationEcosystemReport() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <article className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            {/* Back Navigation */}
            <Link 
              href="/research/reports" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Reports
            </Link>

            {/* Report Header */}
            <header className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Ecosystem Analysis
                    </span>
                    <span className="ml-4 text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      January 15, 2024
                    </span>
                  </div>
                  
                  <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Defense Innovation Ecosystem 2024: Comprehensive Analysis
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    In-depth analysis of the current DoD innovation landscape, key players, emerging opportunities, 
                    and strategic recommendations for technology companies and defense organizations navigating 
                    the evolving defense innovation ecosystem.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      <Download className="w-5 h-5 mr-2" />
                      Download Full Report (PDF)
                    </button>
                    <button className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <Share className="w-5 h-5 mr-2" />
                      Share Report
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Report Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 text-gray-500 mr-3" />
                        <span className="text-gray-600">48 pages</span>
                      </div>
                      <div className="flex items-center">
                        <BarChart3 className="w-4 h-4 text-gray-500 mr-3" />
                        <span className="text-gray-600">25 data visualizations</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-gray-500 mr-3" />
                        <span className="text-gray-600">150+ organizations analyzed</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-gray-500 mr-3" />
                        <span className="text-gray-600">2,340 downloads</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Executive Summary */}
            <section className="mb-12">
              <div className="bg-blue-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Executive Summary</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    The defense innovation ecosystem has undergone dramatic transformation over the past five years, 
                    driven by evolving threat landscapes, technological advancement, and strategic initiatives to 
                    harness commercial innovation for national security. This comprehensive analysis examines the 
                    current state of defense innovation, identifies key trends and challenges, and provides strategic 
                    recommendations for stakeholders across the ecosystem.
                  </p>
                  <p>
                    Our research reveals a maturing ecosystem characterized by increased collaboration between 
                    traditional defense contractors and commercial technology companies, expanded funding mechanisms, 
                    and growing emphasis on dual-use technologies. However, significant challenges remain in scaling 
                    successful innovations, navigating regulatory requirements, and maintaining technological superiority 
                    in an increasingly competitive global environment.
                  </p>
                </div>
              </div>
            </section>

            {/* Key Findings */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Findings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Market Growth</h3>
                  <p className="text-gray-600 mb-4">
                    Defense innovation funding reached $3.8 billion in 2023, representing 23% growth year-over-year. 
                    SBIR/STTR programs show particular strength with 18% increase in awards.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• $3.8B total innovation funding (+23% YoY)</li>
                    <li>• 2,400+ active SBIR/STTR projects</li>
                    <li>• 340 new companies entered defense market</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Ecosystem Expansion</h3>
                  <p className="text-gray-600 mb-4">
                    The defense innovation network expanded to include 1,800+ organizations, with significant growth 
                    in non-traditional defense contractors and commercial technology companies.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 1,800+ ecosystem organizations</li>
                    <li>• 65% are non-traditional contractors</li>
                    <li>• 450 commercial tech companies active</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Technology Focus Areas</h3>
                  <p className="text-gray-600 mb-4">
                    AI/ML, cybersecurity, and autonomous systems dominate innovation investments, accounting for 
                    67% of total funding across all defense innovation programs.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AI/ML: 28% of total investment</li>
                    <li>• Cybersecurity: 22% of funding</li>
                    <li>• Autonomous Systems: 17% share</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Transition Challenges</h3>
                  <p className="text-gray-600 mb-4">
                    Despite increased funding, transition from innovation to operational deployment remains challenging, 
                    with only 34% of successful prototypes achieving program of record status.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 34% transition rate to programs of record</li>
                    <li>• Average 3.2 years prototype to deployment</li>
                    <li>• 58% cite regulatory barriers as primary challenge</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Ecosystem Map */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Defense Innovation Ecosystem Map</h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Government Organizations</h3>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">Defense Innovation Unit (DIU)</h4>
                        <p className="text-sm text-gray-600">Commercial technology acceleration</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">DARPA</h4>
                        <p className="text-sm text-gray-600">Breakthrough technology research</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">AFWERX</h4>
                        <p className="text-sm text-gray-600">Air Force innovation arm</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">Army Futures Command</h4>
                        <p className="text-sm text-gray-600">Future capability development</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Private Sector Partners</h3>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">Traditional Primes</h4>
                        <p className="text-sm text-gray-600">Lockheed Martin, Raytheon, Boeing, Northrop Grumman</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">Tech Companies</h4>
                        <p className="text-sm text-gray-600">Microsoft, Amazon, Google, Palantir</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">Scale-ups</h4>
                        <p className="text-sm text-gray-600">Anduril, Shield AI, Rebellion Defense</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">Startups</h4>
                        <p className="text-sm text-gray-600">2,100+ SBIR/STTR recipients</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Support Organizations</h3>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">National Labs</h4>
                        <p className="text-sm text-gray-600">Sandia, Los Alamos, Lawrence Livermore</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">FFRDCs</h4>
                        <p className="text-sm text-gray-600">MITRE, RAND, Lincoln Laboratory</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">Universities</h4>
                        <p className="text-sm text-gray-600">MIT, Stanford, CMU, Georgia Tech</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">Venture Capital</h4>
                        <p className="text-sm text-gray-600">Andreessen Horowitz, Founders Fund, 8VC</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technology Trends */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Emerging Technology Trends</h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-3"></div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Artificial Intelligence & Machine Learning</h3>
                      <p className="text-gray-600 mb-4">
                        AI/ML continues to dominate defense innovation investments, with particular focus on autonomous systems, 
                        predictive maintenance, and intelligence analysis. The DoD AI Strategy 2022 has accelerated adoption 
                        across all service branches.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Computer Vision</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Natural Language Processing</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Autonomous Systems</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Predictive Analytics</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 rounded-full bg-red-600 mt-3"></div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Cybersecurity & Zero Trust</h3>
                      <p className="text-gray-600 mb-4">
                        The DoD Zero Trust Strategy has created significant market opportunities for cybersecurity solutions. 
                        Focus areas include identity management, network segmentation, and continuous monitoring capabilities.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Zero Trust Architecture</span>
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Identity Management</span>
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Endpoint Security</span>
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Threat Intelligence</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 rounded-full bg-green-600 mt-3"></div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Quantum Technologies</h3>
                      <p className="text-gray-600 mb-4">
                        Quantum computing and communications represent emerging opportunities with potential for significant 
                        defense applications. Current focus on quantum-safe cryptography and early-stage quantum computing research.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Quantum Computing</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Quantum Communications</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Post-Quantum Cryptography</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Quantum Sensing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Recommendations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Strategic Recommendations</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">For Technology Companies</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Start with SBIR/STTR</h4>
                      <p className="text-blue-800 text-sm">
                        Use Small Business Innovation Research programs as entry point to understand DoD requirements and build relationships.
                      </p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Invest in Compliance Early</h4>
                      <p className="text-blue-800 text-sm">
                        Build cybersecurity and regulatory compliance capabilities before they become requirements for larger contracts.
                      </p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Focus on Dual-Use Technologies</h4>
                      <p className="text-blue-800 text-sm">
                        Develop technologies with both commercial and defense applications to maximize market potential and reduce risk.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">For Defense Organizations</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">Accelerate Transition Processes</h4>
                      <p className="text-green-800 text-sm">
                        Streamline pathways from successful prototypes to operational deployment to improve innovation ROI.
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">Expand Commercial Partnerships</h4>
                      <p className="text-green-800 text-sm">
                        Increase collaboration with commercial technology companies through flexible acquisition mechanisms.
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">Invest in Talent Development</h4>
                      <p className="text-green-800 text-sm">
                        Build internal capabilities to evaluate and integrate emerging technologies effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Download Section */}
            <section className="bg-gray-50 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Download the Complete Report</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Access the full 48-page report including detailed market analysis, case studies, data visualizations, 
                and comprehensive appendices with organization profiles and funding data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF (2.3 MB)
                </button>
                <button className="flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Request Executive Briefing
                </button>
              </div>
            </section>
          </motion.div>
        </div>
      </article>
    </main>
  )
} 