'use client'

import { useEffect, useState } from 'react'

// Sample recent prayers for the ticker
const recentPrayers = [
  { id: 1, text: 'Let those we love be held by forces beyond our reach.', number: 1234 },
  { id: 2, text: 'May what is broken find its way to wholeness.', number: 1233 },
  { id: 3, text: 'Let fear become the quiet companion of devotion.', number: 1232 },
  { id: 4, text: 'May the unseen hands guide what we cannot control.', number: 1231 },
  { id: 5, text: 'Let suffering be met with steadiness and grace.', number: 1230 },
]

export default function StreamPage() {
  const [totalPrayers, setTotalPrayers] = useState(1234)

  // Simulate live prayer counter (in real version, this comes from Solana)
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalPrayers(prev => prev + 1)
    }, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen bg-gradient-to-b from-vesper-white to-vesper-mist">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-display text-5xl md:text-6xl text-vesper-navy mb-4">
            The Stream
          </h1>
          <p className="text-vesper-grey">
            Prayers dissolving into water, 24 hours a day
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Video Player (2/3 width on desktop) */}
          <div className="lg:col-span-2">
            <div className="aspect-video rounded-lg overflow-hidden bg-black">
              <iframe
                src="https://www.youtube.com/embed/NhNTLJG_qYg?autoplay=1&mute=0"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>

            {/* Watch on links */}
            <div className="flex gap-4 mt-4 text-sm">
              <a 
                href="https://youtube.com/live/NhNTLJG_qYg" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-vesper-blue hover:text-vesper-navy transition-colors"
              >
                → Watch on YouTube
              </a>
              <a 
                href="https://pump.fun" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-vesper-blue hover:text-vesper-navy transition-colors"
              >
                → Watch on pump.fun
              </a>
            </div>

            {/* Current Backdrop Info */}
            <div className="mt-8 p-6 bg-white/40 backdrop-blur-sm border border-vesper-pale rounded-lg">
              <h3 className="text-sm font-semibold text-vesper-navy mb-2">Current Backdrop</h3>
              <p className="font-display text-2xl text-vesper-dark">Angel Falls, Venezuela</p>
              <p className="text-sm text-vesper-grey mt-2">Rotates daily at midnight UTC</p>
            </div>
          </div>

          {/* Right: Prayer Ticker & Stats (1/3 width on desktop) */}
          <div className="space-y-6">
            
            {/* Total Prayers Counter */}
            <div className="bg-vesper-blue/10 backdrop-blur-sm border border-vesper-blue/20 rounded-lg p-6 text-center">
              <div className="text-sm text-vesper-grey mb-2">Total Prayers Archived</div>
              <div className="font-display text-4xl text-vesper-blue">{totalPrayers.toLocaleString()}</div>
            </div>

            {/* Live Prayer Ticker */}
            <div className="bg-white/40 backdrop-blur-sm border border-vesper-pale rounded-lg p-6">
              <h3 className="text-sm font-semibold text-vesper-navy mb-4">Recent Prayers</h3>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {recentPrayers.map((prayer) => (
                  <div 
                    key={prayer.id}
                    className="pb-4 border-b border-vesper-pale last:border-0 last:pb-0"
                  >
                    <div className="text-xs text-vesper-blue mb-2">#{prayer.number}</div>
                    <p className="font-display italic text-sm text-vesper-dark leading-relaxed">
                      {prayer.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Backdrops */}
            <div className="bg-white/40 backdrop-blur-sm border border-vesper-pale rounded-lg p-6">
              <h3 className="text-sm font-semibold text-vesper-navy mb-4">Upcoming Backdrops</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-vesper-dark">Misty Mountain Lake</span>
                  <span className="text-vesper-grey">Tomorrow</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-vesper-dark">Rain in Tokyo</span>
                  <span className="text-vesper-grey">Feb 22</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-vesper-dark">Arctic Snowfall</span>
                  <span className="text-vesper-grey">Feb 23</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center text-sm text-vesper-grey italic max-w-2xl mx-auto">
          <p>
            The stream runs continuously, projecting transformed prayers onto AI-generated water environments. 
            Each backdrop rotates daily.
          </p>
        </div>
      </div>
    </div>
  )
}
