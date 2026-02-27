'use client'

import { useState } from 'react'

export default function PrayPage() {
  const [prayer, setPrayer] = useState('')
  const [transformedPrayer, setTransformedPrayer] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setTransformedPrayer('')

    try {
      const response = await fetch('/api/pray', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prayer })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit prayer')
      }

      setTransformedPrayer(data.transformedPrayer)
      setPrayer('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen bg-gradient-to-b from-vesper-white to-vesper-mist">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl text-vesper-navy mb-4">
            Submit a Prayer
          </h1>
          <p className="text-vesper-grey max-w-2xl mx-auto">
            Your words will be transformed and cast onto water. They will endure on the blockchain forever.
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-sm border border-vesper-pale rounded-lg p-8 mb-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="prayer" className="block text-sm font-semibold text-vesper-navy mb-2">
                Your Prayer
              </label>
              <textarea
                id="prayer"
                value={prayer}
                onChange={(e) => setPrayer(e.target.value)}
                className="w-full h-48 px-4 py-3 border border-vesper-pale rounded-lg focus:outline-none focus:ring-2 focus:ring-vesper-blue bg-white/80"
                placeholder="Write your prayer here..."
                required
                disabled={isSubmitting}
              />
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || !prayer.trim()}
              className="w-full py-4 bg-vesper-blue text-white rounded-lg hover:bg-vesper-navy transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Transforming...' : 'Submit Prayer'}
            </button>
          </form>
        </div>

        {transformedPrayer && (
          <div className="bg-vesper-blue/10 backdrop-blur-sm border border-vesper-blue/20 rounded-lg p-8">
            <h2 className="text-sm font-semibold text-vesper-navy mb-4">Your Transformed Prayer</h2>
            <p className="font-display italic text-2xl text-vesper-dark leading-relaxed">
              {transformedPrayer}
            </p>
            <p className="text-sm text-vesper-grey mt-6">
              This prayer has been archived and will appear on the livestream.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="/archive"
            className="text-vesper-blue hover:text-vesper-navy transition-colors"
          >
            → View All Prayers
          </a>
        </div>
      </div>
    </div>
  )
}
