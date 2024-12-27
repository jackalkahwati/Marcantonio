'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Shield, ArrowRight } from 'lucide-react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <div className="relative h-screen text-white">
      {/* Background Image (fallback) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-military.jpg)' }}
      />

      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/hero-military.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900"></div>

      <div className="container mx-auto px-4 relative h-full flex items-center">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-yellow-500/20 px-6 py-2 text-sm font-semibold text-yellow-400 backdrop-blur-sm border border-yellow-400/20">
            <Shield className="w-4 h-4" />
            Powering Defense Innovation
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transforming{' '}
            <span className="block">Defense Technology</span>
            <span className="text-yellow-400">Through Innovation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Experience our revolutionary "Defense Technology Innovation as a Service" approach. 
            Through our Adaptive and Agile Framework, we connect innovators with over 1300 senior 
            defense leaders, accelerating the path from concept to deployment.
          </p>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-black bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 transition-all hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-lg font-semibold rounded-xl text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105"
              >
                Explore Our Process
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-8 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <span>130+ Technology Solutions Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <span>155+ Defense Programs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <span>6-Month Accelerator Program</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
