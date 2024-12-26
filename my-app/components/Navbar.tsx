'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Homepage has a dark background, all other pages have light backgrounds
  const isDarkBackground = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navBackground = scrolled
    ? isDarkBackground
      ? 'bg-navy-blue shadow-lg'
      : 'bg-white shadow-lg'
    : 'bg-transparent'

  const textColor = isDarkBackground
    ? 'text-white'
    : scrolled
    ? 'text-gray-900'
    : 'text-navy-blue'

  const linkColor = isDarkBackground
    ? 'text-white hover:text-gold'
    : scrolled
    ? 'text-gray-800 hover:text-navy-blue'
    : 'text-navy-blue hover:text-gold'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className={`font-bold text-2xl ${textColor} transition-colors duration-300`}>
              Marcantonio Global
            </Link>
          </motion.div>
          <div className="hidden md:block">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              {['About', 'Services', 'Success Stories', 'Future Tech Forums', 'Resources', 'Tech Newsletter', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase().replace(/ /g, '-')}`} 
                  className={`${linkColor} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${linkColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-300`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden ${scrolled ? (isDarkBackground ? 'bg-navy-blue' : 'bg-white') : 'bg-transparent backdrop-blur-md'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['About', 'Services', 'Success Stories', 'Future Tech Forums', 'Resources', 'Tech Newsletter', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase().replace(/ /g, '-')}`} 
                className={`${linkColor} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300`}
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
