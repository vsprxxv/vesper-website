'use client'
import { useState, useEffect } from 'react'

export default function ArchivePage() {
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
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#6b7280', letterSpacing: '4px', marginBottom: '16px', textAlign: 'center' }}>
          THE ARCHIVE
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '15px', textAlign: 'center', lineHeight: '1.9', marginBottom: '64px' }}>
          Prayers preserved forever on Solana.
        </p>
        {loading ? (
          <p style={{ color: '#d1d5db', fontSize: '14px', textAlign: 'center' }}>Loading prayers...</p>
        ) : (
          <div>
            {prayers.map((prayer, index) => (
              <div key={prayer.tweet_id} style={{ borderTop: '1px solid #e5e7eb', padding: '20px 0', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '12px', color: '#d1d5db', letterSpacing: '1px', minWidth: '48px', paddingTop: '3px' }}>
                  #{index + 1}
                </div>
                <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: '1.9', fontStyle: 'italic', margin: '0' }}>
                  {prayer.text}
                </p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid #e5e7eb' }} />
          </div>
        )}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="/pray" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none', letterSpacing: '1px' }}>
            → Submit a Prayer
          </a>
        </div>
      </div>
    </div>
  )
}