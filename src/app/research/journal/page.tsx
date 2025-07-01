'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Calendar, User, ArrowRight, X, Mail, CheckCircle, Send } from 'lucide-react'
import Link from 'next/link'

interface SubscriptionData {
  email: string
  firstName: string
  lastName: string
  company: string
  interests: string[]
}

export default function JournalPage() {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false)
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData>({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    interests: []
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const interestOptions = [
    'AI & Machine Learning',
    'Cybersecurity',
    'Defense Acquisition',
    'Technology Trends',
    'Policy & Strategy',
    'Innovation Research'
  ]

  const handleSubscriptionInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSubscriptionData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleInterestChange = (interest: string) => {
    setSubscriptionData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSubscriptionSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubscribed(true)
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubscriptionModalOpen(false)
      setSubscriptionData({
        email: '',
        firstName: '',
        lastName: '',
        company: '',
        interests: []
      })
      setIsSubscribed(false)
    }, 3000)
  }

  const handleQuickSubscribe = (email: string) => {
    if (email) {
      setSubscriptionData(prev => ({ ...prev, email }))
      setIsSubscriptionModalOpen(true)
    }
  }

  const articles = [
    {
      title: 'The Future of AI in Defense: Strategic Implications',
      author: 'Marcantonio Global Research Team',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Technology Trends',
      excerpt: 'Exploring how artificial intelligence will reshape defense capabilities over the next decade.',
      featured: true,
      slug: 'ai-defense-strategic-implications'
    },
    {
      title: 'Breaking Down Defense Acquisition Barriers',
      author: 'Marcantonio Global Research Team',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Acquisition',
      excerpt: 'Key strategies for technology companies to successfully navigate DoD procurement processes.',
      slug: 'defense-acquisition-barriers'
    },
    {
      title: 'Cybersecurity Innovation in Defense: A Market Analysis',
      author: 'Marcantonio Global Research Team',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Cybersecurity',
      excerpt: 'Current state and future trends in defense cybersecurity solutions and market opportunities.',
      slug: 'cybersecurity-innovation-defense'
    }
  ]

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
            <h1 className="text-4xl font-bold text-white mb-8">Industry Journal</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              In-depth articles exploring emerging defense technologies and strategic insights.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Featured Article */}
          {articles.filter(article => article.featured).map((article) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto mb-16"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
                    Featured Article
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{article.excerpt}</p>
                  
                  <div className="flex items-center text-gray-500 mb-6">
                    <User className="w-4 h-4 mr-2" />
                    {article.author}
                    <span className="mx-3">•</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(article.date).toLocaleDateString()}
                    <span className="mx-3">•</span>
                    {article.readTime}
                  </div>

                  <Link
                    href={`/research/journal/${article.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Other Articles */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Latest Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.filter(article => !article.featured).map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-3">
                    {article.category}
                  </span>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{article.author}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <Link href={`/research/journal/${article.slug}`} className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Read More
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Subscribe to Our Journal</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest defense technology insights delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleQuickSubscribe((e.target as HTMLInputElement).value)
                    }
                  }}
                />
                <button 
                  onClick={() => {
                    const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement
                    handleQuickSubscribe(emailInput?.value || '')
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subscription Modal */}
      <AnimatePresence>
        {isSubscriptionModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsSubscriptionModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Subscribe to Industry Journal</h2>
                    <p className="text-gray-600">Stay updated with defense technology insights</p>
                  </div>
                  <button
                    onClick={() => setIsSubscriptionModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {!isSubscribed ? (
                  <form onSubmit={handleSubscriptionSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={subscriptionData.email}
                          onChange={handleSubscriptionInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={subscriptionData.firstName}
                          onChange={handleSubscriptionInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          placeholder="Enter your first name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={subscriptionData.lastName}
                          onChange={handleSubscriptionInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={subscriptionData.company}
                        onChange={handleSubscriptionInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Topics of Interest (Select all that apply)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {interestOptions.map((interest) => (
                          <label key={interest} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={subscriptionData.interests.includes(interest)}
                              onChange={() => handleInterestChange(interest)}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setIsSubscriptionModalOpen(false)}
                        className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                        ) : (
                          <>
                            Subscribe Now
                            <Send className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Successfully Subscribed!</h3>
                    <p className="text-gray-600 mb-4">
                      Welcome to the Marcantonio Global Industry Journal. You'll receive our latest defense technology insights directly in your inbox.
                    </p>
                    <p className="text-sm text-gray-500">
                      This window will close automatically in a few seconds.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
} 