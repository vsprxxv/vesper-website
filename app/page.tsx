'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const samplePrayers = [
  "Let those we love be held by forces beyond our reach.",
  "May what is broken find its way to wholeness.",
  "Let fear become the quiet companion of devotion.",
  "May the unseen hands guide what we cannot control.",
]

export default function Home() {
  const [currentPrayer, setCurrentPrayer] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrayer(prev => (prev + 1) % samplePrayers.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main>
      <div className="relative">
        <div className="w-full h-[600px] relative overflow-hidden">
          <img 
            src="/vesper-hero.jpg" 
            alt="Vesper livestream" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-center py-16 px-4 bg-vesper-mist">
          <p className="font-display text-2xl md:text-3xl text-vesper-navy max-w-4xl mx-auto leading-relaxed">
            <strong>VSPR:</strong> An onchain artwork. Prayers transformed by AI, set adrift on water, rising like breath. It runs without end. It endures on Solana—light caught in the chain.
          </p>
        </div>
      </div>

      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            key={currentPrayer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <p className="font-display italic text-3xl md:text-4xl text-vesper-dark leading-relaxed max-w-4xl mx-auto">
              {samplePrayers[currentPrayer]}
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="/pray"
              className="px-8 py-4 bg-vesper-blue text-white rounded-lg hover:bg-vesper-navy transition-colors text-lg font-semibold"
            >
              Submit a Prayer
            </a>
            <a
              href="/stream"
              className="px-8 py-4 bg-white border-2 border-vesper-blue text-vesper-blue rounded-lg hover:bg-vesper-blue hover:text-white transition-colors text-lg font-semibold"
            >
              Watch the Stream
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}