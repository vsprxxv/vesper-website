'use client'

import { useState } from 'react'

export default function PrayPage() {
  const [prayer, setPrayer] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async () => {
    if (!prayer.trim()) return
    
    try {
      const res = await fetch('/api/pray', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prayer })
      })
      
      const data = await res.json()
      
      if (data.success) {
        setSubmitted(true)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (err) {
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <div style={{ paddingTop: '96px', paddingBottom: '96px', paddingLeft: '24px', paddingRight: '24px', minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>

        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#6b7280', letterSpacing: '4px', marginBottom: '16px', textAlign: 'center' }}>
          PRAY
        </h1>

        <p style={{ color: '#9ca3af', fontSize: '15px', textAlign: 'center', lineHeight: '1.9', marginBottom: '48px' }}>
          Send your prayer into the stream. The current will take it. Water will give it form, and the chain will remember. What vanishes will stay written there, quiet and shining.
        </p>

        {!submitted ? (
          <div>
            <textarea
              value={prayer}
              onChange={(e) => setPrayer(e.target.value)}
              placeholder="Write your prayer here..."
              style={{
                width: '100%',
                height: '160px',
                padding: '16px',
                fontSize: '15px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                color: '#6b7280',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                resize: 'none',
                outline: 'none',
                lineHeight: '1.9',
                backgroundColor: '#f9fafb'
              }}
            />
            <button
              onClick={handleSubmit}
              style={{
                marginTop: '16px',
                width: '100%',
                padding: '14px',
                backgroundColor: '#9ca3af',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                letterSpacing: '2px',
                cursor: 'pointer',
                fontFamily: 'Helvetica, Arial, sans-serif'
              }}
            >
              SEND PRAYER
            </button>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: '1.9' }}>
              Your prayer has been received. It will rise.
            </p>
            <button
              onClick={() => { setPrayer(''); setSubmitted(false) }}
              style={{
                marginTop: '24px',
                padding: '12px 32px',
                backgroundColor: 'transparent',
                color: '#9ca3af',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                fontSize: '13px',
                letterSpacing: '2px',
                cursor: 'pointer',
                fontFamily: 'Helvetica, Arial, sans-serif'
              }}
            >
              SEND ANOTHER
            </button>
          </div>
        )}

      </div>
    </div>
  )
}