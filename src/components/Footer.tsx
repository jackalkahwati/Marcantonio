'use client'

import React from 'react'
import Link from 'next/link'
import { NewsletterForm } from './NewsletterForm'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Marcantonio Global</h3>
            <p className="text-gray-400">
              Advancing defense innovation through strategic partnerships and cutting-edge technology solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Defense Innovation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Technology Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Strategic Consulting
                </Link>
              </li>
              <li>
                <Link href="/engagement/events" className="text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/engagement/partnerships" className="text-gray-400 hover:text-white">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/engagement/digital-programs" className="text-gray-400 hover:text-white">
                  Digital Programs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: nino@marcantonioglobal.com</li>
              <li>Phone: 202-631-8710</li>
              <li>Location: Alexandria, VA</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Stay updated with the latest in defense technology and innovation.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Marcantonio Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
