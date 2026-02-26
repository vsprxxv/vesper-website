'use client'

import { useState } from 'react'

export default function PrayPage() {
  const [prayer, setPrayer] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [transformedPrayer, setTransformedPrayer] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // For now, just show a confirmation
    // Later we'll call the API here
    setTransformedPrayer(prayer)
    setSubmitted(true)
    
    // Reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
      setPrayer('')
    }, 5000)
  }

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen bg-gradient-to-b from-vesper-white to-vesper-mist">
      <div className="max-w-2xl mx-auto">
        {!submitted ? (
          <>
            <h1 className="font-display text-5xl md:text-6xl text-vesper-navy mb-6 text-center">
              Submit a Prayer
            </h1>
            <p className="text-vesper-grey text-center mb-12 max-w-xl mx-auto">
              Write your prayer here. It may be in any language. The AI will transform it 
              into a stoic tone before it is offered to the world.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <textarea
                value={prayer}
                onChange={(e) => setPrayer(e.target.value)}
                placeholder="Write your prayer here..."
                className="w-full h-64 p-6 bg-white/50 backdrop-blur-sm border border-vesper-pale rounded-lg 
                         text-vesper-dark placeholder:text-vesper-grey/50 
                         focus:outline-none focus:ring-2 focus:ring-vesper-blue
                         font-display text-lg resize-none"
                maxLength={500}
                required
              />
              
              <div className="text-right text-sm text-vesper-grey">
                {prayer.length} / 500 characters
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={prayer.length < 5}
                  className="px-12 py-4 bg-vesper-blue text-white rounded-lg 
                           hover:bg-vesper-navy transition-colors text-lg
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Offer this prayer
                </button>
              </div>

              <p className="text-xs text-vesper-grey text-center italic mt-8">
                Your prayer will be transformed before it is posted. The original text is not stored.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-24">
            <h2 className="font-display text-4xl text-vesper-navy mb-6">
              Your prayer has been received
            </h2>
            <div className="bg-vesper-mist/50 backdrop-blur-sm border border-vesper-pale rounded-lg p-8 mb-8">
              <p className="font-display italic text-2xl text-vesper-dark">
                {transformedPrayer}
              </p>
            </div>
            <p className="text-vesper-grey">
              It will be transformed and added to the archive.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}