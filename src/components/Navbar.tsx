'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Star, ChevronDown, ShieldCheck } from 'lucide-react'
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
    {
      label: 'About',
      subLinks: [
        { href: '/about', label: 'About Marcantonio Global' },
        { href: '/about/leadership', label: 'Leadership Team' },
        { href: '/about/fact-sheet', label: 'Fact Sheet & Timeline' },
        { href: '/about/contact', label: 'Contact Us' }
      ],
    },
    {
      label: 'Education',
      subLinks: [
        { href: '/education/programs', label: 'Programs & Seminars' },
        { href: '/education/fellowships', label: 'Fellowships' },
        { href: '/education/workshops', label: 'Workshops' }
      ],
    },
    {
      label: 'Research',
      subLinks: [
        { href: '/research/reports', label: 'Reports and Papers' },
        { href: '/research/journal', label: 'Industry Journal' },
        { href: '/research/operational-analyses', label: 'Operational Analyses' }
      ],
    },
    {
      label: 'Engagement',
      subLinks: [
        { href: '/engagement/events', label: 'Events' },
        { href: '/engagement/digital-programs', label: 'Digital Programs' },
        { href: '/engagement/partnerships', label: 'Strategic Partnerships' }
      ],
    },
    { href: '/news', label: 'News' },
    { href: '/resources', label: 'Resources' },
    { href: '/careers', label: 'Careers' },
    { href: '/pricing', label: 'Pricing' },
  ]

  const DesktopNav = () => (
    <div className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) => {
        if (link.subLinks) {
          return (
            <div key={link.label} className="relative group">
              <button className="flex items-center text-gray-600 hover:text-navy-900 transition-colors">
                {link.label}
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {link.subLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {s.label === 'Centurions Program' && <Star className="w-3 h-3 text-yellow-500 inline mr-1" />} {s.label}
                  </Link>
                ))}
              </div>
            </div>
          )
        }
        return <NavLink key={link.href} href={link.href!} label={link.label} />
      })}
      <Link
        href="/about/contact"
        className="bg-navy-900 text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
      >
        Get Started
      </Link>
    </div>
  )

  // mobile helper for sublinks toggle
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null)

  const MobileNav = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="md:hidden bg-white py-4"
    >
      <div className="flex flex-col space-y-4">
        {navLinks.map((link) => {
          if (link.subLinks) {
            const isOpenSub = openSubMenu === link.label
            return (
              <div key={link.label} className="px-4">
                <button
                  onClick={() => setOpenSubMenu(isOpenSub ? null : link.label)}
                  className="w-full flex items-center justify-between text-gray-600 hover:text-navy-900"
                >
                  <span>{link.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isOpenSub ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpenSub && (
                  <div className="mt-2 pl-4 space-y-2">
                    {link.subLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block text-gray-600 hover:text-navy-900"
                        onClick={() => {
                          setIsOpen(false)
                          setOpenSubMenu(null)
                        }}
                      >
                        {s.label === 'Centurions Program' && <Star className="w-3 h-3 text-yellow-500 inline mr-1" />} {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          }
          return (
            <div key={link.href} className="px-4">
              <NavLink {...link} />
            </div>
          )
        })}
        <Link
          href="/about/contact"
          className="bg-navy-900 text-white px-6 py-2 mx-4 rounded-lg hover:bg-opacity-90 transition-colors text-center"
          onClick={() => setIsOpen(false)}
        >
          Get Started
        </Link>
      </div>
    </motion.div>
  )

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center text-2xl font-bold text-navy-900">
            <ShieldCheck className="w-8 h-8 text-blue-600 mr-3" />
            Marcantonio Global
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <MobileNav />}
      </div>
    </nav>
  )
}
