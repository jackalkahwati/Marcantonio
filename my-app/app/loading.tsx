'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="inline-flex items-center justify-center w-16 h-16 text-primary"
        >
          <Loader2 className="w-8 h-8" />
        </motion.div>
        <h2 className="text-xl font-semibold mt-4">Loading...</h2>
      </motion.div>
    </main>
  )
} 