'use client'

import { Calendar, User, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const blogPosts = [
  {
    title: "The Future of AI in Defense Systems",
    excerpt: "Exploring how artificial intelligence is revolutionizing military technology and defense strategies.",
    date: "December 15, 2023",
    author: "Dr. Sarah Chen",
    category: "Technology",
    image: "/blog/ai-defense.jpg"
  },
  {
    title: "Cybersecurity Trends in Defense",
    excerpt: "Analysis of emerging cybersecurity threats and defense mechanisms in the military sector.",
    date: "December 10, 2023",
    author: "John Marcantonio",
    category: "Cybersecurity",
    image: "/blog/cyber-defense.jpg"
  },
  {
    title: "Autonomous Systems in Modern Warfare",
    excerpt: "Understanding the role of autonomous systems in shaping the future of military operations.",
    date: "December 5, 2023",
    author: "Dr. Michael Roberts",
    category: "Innovation",
    image: "/blog/autonomous-systems.jpg"
  },
  {
    title: "Defense Technology Integration",
    excerpt: "Best practices for integrating new technologies into existing defense infrastructure.",
    date: "November 30, 2023",
    author: "Emily Thompson",
    category: "Strategy",
    image: "/blog/tech-integration.jpg"
  },
  {
    title: "The Evolution of Military Communications",
    excerpt: "How advanced communication systems are transforming military operations and strategy.",
    date: "November 25, 2023",
    author: "James Wilson",
    category: "Communications",
    image: "/blog/military-comms.jpg"
  },
  {
    title: "Quantum Computing in Defense",
    excerpt: "Exploring the potential applications of quantum computing in military technology.",
    date: "November 20, 2023",
    author: "Dr. Lisa Chen",
    category: "Research",
    image: "/blog/quantum-computing.jpg"
  }
]

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-navy-blue text-white">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-12 text-center">Defense Technology Insights</h1>
        
        {/* Featured Post */}
        <div className="mb-16 bg-gray-800 rounded-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-gold text-navy-blue px-3 py-1 rounded text-sm font-medium">
                {blogPosts[0].category}
              </span>
              <div className="flex items-center text-gray-300 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {blogPosts[0].date}
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <User className="w-4 h-4 mr-2" />
                {blogPosts[0].author}
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h2>
            <p className="text-gray-300 mb-6">{blogPosts[0].excerpt}</p>
            <a
              href={`/blog/${blogPosts[0].title.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-flex items-center text-gold hover:text-gold/90 transition-colors"
            >
              Read More <ChevronRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-gold text-navy-blue px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-300 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-300 text-xs">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </div>
                  <a
                    href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gold hover:text-gold/90 transition-colors text-sm flex items-center"
                  >
                    Read More <ChevronRight className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 