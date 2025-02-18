'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isCenturions = label === 'Centurions Program'
    return (
      <Link
        href={href}
        className={`relative group ${isCenturions ? 'flex items-center' : ''}`}
        onClick={() => setIsOpen(false)}
      >
        <div className="flex items-center">
          {isCenturions && (
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
          )}
          <span className={`${isCenturions ? 'text-navy-900 font-bold' : 'text-gray-600'} hover:text-navy-900 transition-colors`}>
            {label}
          </span>
          {isCenturions && (
            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-500 text-white">
              Elite
            </span>
          )}
        </div>
      </Link>
    )
  }

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/centurions', label: 'Centurions Program' },
    { href: '/network', label: 'Network' },
    { href: '/innovation-forum', label: 'Innovation Forum' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-navy-900">
            Marcantonio Global
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
            <Link
              href="/contact"
              className="bg-navy-900 text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white py-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.href} className="px-4">
                  <NavLink {...link} />
                </div>
              ))}
              <Link
                href="/contact"
                className="bg-navy-900 text-white px-6 py-2 mx-4 rounded-lg hover:bg-opacity-90 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
