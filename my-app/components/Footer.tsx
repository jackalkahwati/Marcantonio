'use client'

import Link from 'next/link'
import { Linkedin, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Marcantonio Global</h3>
            <p className="text-gray-400">Empowering Defense Innovation</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gold transition duration-300">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gold transition duration-300">Services</Link></li>
              <li><Link href="/success-stories" className="hover:text-gold transition duration-300">Success Stories</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/future-tech-forums" className="hover:text-gold transition duration-300">Future Tech Forums</Link></li>
              <li><Link href="/resources" className="hover:text-gold transition duration-300">Downloads</Link></li>
              <li><Link href="/tech-newsletter" className="hover:text-gold transition duration-300">Tech Newsletter</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition duration-300">
                <Linkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition duration-300">
                <Twitter />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition duration-300">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Marcantonio Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

