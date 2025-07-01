'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Tag, Clock } from 'lucide-react'
import Link from 'next/link'

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const featuredNews = {
    title: 'Pentagon to Test Generative AI Performance in China Conflict Scenarios',
    excerpt: 'U.S. Indo-Pacific Command will test ChatGPT-like programs to help commanders make battlefield decisions more quickly against high-tech adversaries like China over the next 90 days.',
    date: '2025-01-15',
    category: 'AI & Technology',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1200&auto=format&fit=crop',
    source: 'Defense One',
    url: 'https://www.defenseone.com/technology/2025/01/pentagon-test-how-generative-ai-would-perform-fight-china/402234/'
  }

  const news = [
    {
      title: 'US Successfully Tests Dark Eagle Hypersonic Missile to Counter Russian and Chinese Advancements',
      excerpt: 'The U.S. Army successfully conducted a critical end-to-end flight test of the "Dark Eagle" hypersonic missile, achieving speeds exceeding Mach 5 with operational range over 2,775 kilometers.',
      date: '2024-12-14',
      category: 'Weapons Systems',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=800&auto=format&fit=crop',
      source: 'Army Recognition',
      url: 'https://armyrecognition.com/news/army-news/army-news-2024/breaking-news-us-successfully-tests-dark-eagle-hypersonic-missile-to-counter-russian-and-chinese-advancements'
    },
    {
      title: 'China Completes Final Test of Secretive Hypersonic Air-to-Air Missile',
      excerpt: 'China has reportedly completed the final test of its highly classified hypersonic air-to-air missile, which poses an unprecedented threat to America\'s B-21 stealth bomber.',
      date: '2025-01-20',
      category: 'Global Defense',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop',
      source: 'The Defense Post',
      url: 'https://thedefensepost.com/2025/01/20/china-test-hypersonic-missile/'
    },
    {
      title: 'Pentagon Budget Allocates $13.4 Billion for Autonomous Systems in 2026',
      excerpt: 'The Defense Department\'s FY26 budget prioritizes major investments in uncrewed systems and counter-drone capabilities, with $13.4 billion specifically for autonomy and autonomous systems.',
      date: '2025-06-26',
      category: 'Budget & Policy',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1473862750882-3dd5c7e562b4?q=80&w=800&auto=format&fit=crop',
      source: 'DefenseScoop',
      url: 'https://defensescoop.com/2025/06/26/dod-fy26-budget-request-autonomy-unmanned-systems/'
    },
    {
      title: 'Agencies Explore Post-Quantum Cryptography in Defense Acquisitions',
      excerpt: 'Federal agencies are being encouraged to factor post-quantum encryption requirements into acquisition processes as CISA works on developing comprehensive products lists.',
      date: '2025-05-14',
      category: 'Cybersecurity',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop',
      source: 'Federal News Network',
      url: 'https://federalnewsnetwork.com/cybersecurity/2025/05/agencies-explore-post-quantum-cryptography-in-acquisitions/'
    },
    {
      title: 'Defense Innovation Hubs Reinvent Security with AI, Cyber, Space & Autonomy',
      excerpt: 'Defense innovation hubs worldwide are accelerating technological advancement by fostering collaboration between governments, defense contractors, startups, and academic institutions.',
      date: '2025-06-04',
      category: 'Innovation',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
      source: 'E-SPIN',
      url: 'https://www.e-spincorp.com/defense-innovation-hubs-ai-cyber-space/'
    },
    {
      title: 'CMU Software Engineering Institute Leads National Security Software Innovation',
      excerpt: 'The U.S. Department of Defense has renewed its contract with Carnegie Mellon University to operate the Software Engineering Institute for an additional five years.',
      date: '2025-06-24',
      category: 'Research & Development',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      source: 'Carnegie Mellon University',
      url: 'https://www.cmu.edu/news/stories/archives/2025/june/renewed-mission-cmu-software-engineering-institute-leads-national-security-software-innovation'
    },
    {
      title: 'Navy Searches for Advanced Technologies in AI, Hypersonics, and Cyber Security',
      excerpt: 'Navy researchers are surveying industry for enabling technologies in artificial intelligence, hypersonics, cyber security, quantum sensing, and secure communications.',
      date: '2025-06-27',
      category: 'Naval Technology',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=800&auto=format&fit=crop',
      source: 'Military Aerospace',
      url: 'https://www.militaryaerospace.com/trusted-computing/article/55299762/navy-searches-for-technologies-in-ai-hypersonics-and-cyber-security'
    },
    {
      title: 'PEO Enterprise Names AI as Hot Technology of 2025',
      excerpt: 'The Army\'s Program Executive Office Enterprise identifies artificial intelligence as one of the most important ascending technologies for the upcoming year.',
      date: '2024-12-13',
      category: 'AI & Technology',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop',
      source: 'U.S. Army',
      url: 'https://www.army.mil/article/282021/peo_enterprise_hot_technology_of_2025_artificial_intelligence'
    },
    {
      title: 'Defense Tech Boom: Autonomous Drones, Lasers, and Hypersonic Missiles',
      excerpt: 'Global defense stocks have rocketed higher in 2025, particularly those focusing on AI applications and cutting-edge defense technology that\'s changing modern warfare.',
      date: '2025-06-09',
      category: 'Industry Analysis',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=800&auto=format&fit=crop',
      source: 'Forbes',
      url: 'https://www.forbes.com/sites/garthfriesen/2025/06/09/defense-tech-boom-autonomous-drones-lasers-and-hypersonic-missiles/'
    },
    {
      title: 'U.S. Defense Intelligence Flags Quantum Technology Military Applications',
      excerpt: 'The 2025 DIA threat assessment warns that quantum technologies are nearing operational military use, with rival nations investing in sensing and secure communications.',
      date: '2025-05-27',
      category: 'Quantum Technology',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=800&auto=format&fit=crop',
      source: 'The Quantum Insider',
      url: 'https://thequantuminsider.com/2025/05/27/u-s-defense-intelligence-flags-rivals-growing-military-use-of-quantum-tech/'
    }
  ]

  const categories = [
    'All',
    'AI & Technology',
    'Weapons Systems',
    'Global Defense',
    'Budget & Policy',
    'Cybersecurity',
    'Innovation',
    'Research & Development',
    'Naval Technology',
    'Industry Analysis',
    'Quantum Technology'
  ]

  const filteredNews = selectedCategory === 'All' 
    ? news 
    : news.filter(article => article.category === selectedCategory)

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-8">Defense Technology News</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Stay informed with the latest developments in defense innovation, emerging technologies, and strategic analysis from leading industry sources.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-full bg-cover bg-center" 
                     style={{ backgroundImage: `url(${featuredNews.image})` }}>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {featuredNews.category}
                    </span>
                    <span className="ml-4 text-gray-500 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredNews.date).toLocaleDateString()}
                    </span>
                    <span className="ml-4 text-gray-500 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredNews.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{featuredNews.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredNews.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Source: {featuredNews.source}</span>
                    <Link href={featuredNews.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      Read Full Analysis
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    category === selectedCategory 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredNews.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all border"
              >
                <div className="h-48 bg-cover bg-center" 
                     style={{ backgroundImage: `url(${article.image})` }}>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <Tag className="w-3 h-3 mr-1" />
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                      <span className="text-xs text-gray-400 mt-1">Source: {article.source}</span>
                    </div>
                    <Link href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Stay Ahead of Defense Technology</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for exclusive defense innovation insights, strategic analysis, and emerging technology updates.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 