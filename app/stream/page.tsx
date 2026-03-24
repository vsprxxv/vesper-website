'use client'
import { useState, useEffect } from 'react'

export default function StreamPage() {
  const [prayers, setPrayers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/prayers')
      .then(res => res.json())
      .then(data => {
        setPrayers(data.prayers || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div style={{ paddingTop: '96px', paddingBottom: '96px', paddingLeft: '24px', paddingRight: '24px', minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#6b7280', letterSpacing: '4px', marginBottom: '16px', textAlign: 'center' }}>
          THE STREAM
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '15px', textAlign: 'center', lineHeight: '1.9', marginBottom: '48px' }}>
          Prayers dissolving into water, 24 hours a day.
        </p>
        <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#000', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px' }}>
          <iframe
            src="https://www.youtube.com/embed/t1uDiwwIy10?autoplay=1&mute=0"
            style={{ width: '100%', height: '100%', border: 'none' }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <div style={{ display: 'flex', gap: '24px', marginBottom: '64px' }}>
          <a href="https://youtube.com/live/t1uDiwwIy10" target="_blank" rel="noopener noreferrer"
            style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }}>
            → Watch on YouTube
          </a>
          <a href="https://pump.fun" target="_blank" rel="noopener noreferrer"
            style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }}>
            → Watch on pump.fun
          </a>
        </div>
        <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#6b7280', letterSpacing: '2px', marginBottom: '24px' }}>
          RECENT PRAYERS
        </h2>
        {loading ? (
          <p style={{ color: '#d1d5db', fontSize: '14px', textAlign: 'center' }}>Loading prayers...</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {prayers.slice(0, 5).map((prayer, index) => (
              <div key={prayer.tweet_id} style={{ borderTop: '1px solid #e5e7eb', padding: '20px 0' }}>
                <div style={{ fontSize: '12px', color: '#d1d5db', marginBottom: '8px', letterSpacing: '1px' }}>
                  #{index + 1}
                </div>
                <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: '1.9', fontStyle: 'italic' }}>
                  {prayer.text}
                </p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid #e5e7eb' }} />
          </div>
        )}
      </div>
    </div>
  )
}