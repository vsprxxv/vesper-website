'use client'

import { useState } from 'react'

// Sample prayers - later this will come from Solana
const samplePrayers = [
  {
    id: 1,
    number: 1234,
    text: 'Let those we love be held by forces beyond our reach.',
    timestamp: '2026-02-20',
    source: 'x'
  },
  {
    id: 2,
    number: 1233,
    text: 'May what is broken find its way to wholeness.',
    timestamp: '2026-02-20',
    source: 'web'
  },
  {
    id: 3,
    number: 1232,
    text: 'Let fear become the quiet companion of devotion.',
    timestamp: '2026-02-19',
    source: 'x'
  },
  {
    id: 4,
    number: 1231,
    text: 'May the unseen hands guide what we cannot control.',
    timestamp: '2026-02-19',
    source: 'web'
  },
  {
    id: 5,
    number: 1230,
    text: 'Let suffering be met with steadiness and grace.',
    timestamp: '2026-02-19',
    source: 'x'
  },
  {
    id: 6,
    number: 1229,
    text: 'May time become the healer of what words cannot mend.',
    timestamp: '2026-02-18',
    source: 'web'
  },
]

export default function ArchivePage() {
  const [searchQuery, setSearchQuery] = useState('')

  // Filter prayers by search query
  const filteredPrayers = samplePrayers.filter(prayer =>
    prayer.text.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen bg-gradient-to-b from-vesper-white to-vesper-mist">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl text-vesper-navy mb-4">
            Prayer Archive
          </h1>
          <p className="text-vesper-grey max-w-2xl mx-auto">
            Every prayer that has passed through Vesper, stored permanently on the Solana blockchain.
          </p>
          <div className="mt-4 text-vesper-blue font-display text-2xl">
            {samplePrayers.length} prayers archived
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search prayers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border border-vesper-pale rounded-lg
                     text-vesper-dark placeholder:text-vesper-grey/50
                     focus:outline-none focus:ring-2 focus:ring-vesper-blue"
          />
        </div>

        {/* Prayer Grid */}
        {filteredPrayers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrayers.map((prayer) => (
              <div
                key={prayer.id}
                className="bg-white/40 backdrop-blur-sm border border-vesper-pale rounded-lg p-6 
                         hover:border-vesper-blue transition-colors group"
              >
                {/* Prayer Number */}
                <div className="flex justify-between items-start mb-4">
                  <div className="text-xs font-semibold text-vesper-blue">
                    Prayer #{prayer.number}
                  </div>
                  <div className="text-xs text-vesper-grey">
                    {prayer.source === 'x' ? 'X.com' : 'Web'}
                  </div>
                </div>

                {/* Prayer Text */}
                <p className="font-display italic text-lg text-vesper-dark mb-4 leading-relaxed">
                  {prayer.text}
                </p>

                {/* Date */}
                <div className="text-xs text-vesper-grey">
                  {new Date(prayer.timestamp).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-vesper-grey text-lg">No prayers found matching "{searchQuery}"</p>
          </div>
        )}

        {/* Note about blockchain */}
        <div className="mt-16 text-center text-sm text-vesper-grey italic max-w-2xl mx-auto">
          <p>
            These prayers are stored permanently on the Solana blockchain.
            The prayers are not for sale — they are owned by no one, accessible to everyone.
          </p>
        </div>
      </div>
    </div>
  )
}