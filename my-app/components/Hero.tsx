'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const playVideo = async () => {
        try {
          await video.play()
        } catch (error) {
          console.error('Video playback error:', error)
        }
      }

      // Play video when it's loaded
      if (video.readyState >= 3) {
        playVideo()
      } else {
        video.addEventListener('loadeddata', playVideo)
      }

      // Cleanup
      return () => {
        video.removeEventListener('loadeddata', playVideo)
        video.pause()
      }
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <video 
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay 
          playsInline
          muted 
          loop
          preload="auto"
          poster="/videos/hero-poster.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative container mx-auto px-4 h-screen flex flex-col justify-center items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-primary font-semibold text-lg mb-4 bg-primary/10 px-4 py-1 rounded-full"
          >
            Leading Defense Innovation
          </motion.span>
          
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Advancing National Defense Strategy
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Transforming the defense innovation ecosystem with an adaptive and agile Disruptive Innovation Forum
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-md hover:bg-primary/90 transition-colors text-lg font-semibold group"
            >
              Explore Our Services
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-white/10 text-white border border-white/20 px-8 py-4 rounded-md hover:bg-white/20 transition-colors text-lg font-semibold backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce flex flex-col items-center text-white/70">
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

