'use client'

export default function StreamPage() {
  const recentPrayers = [
    { id: 1, text: 'Let those we love be held by forces beyond our reach.', number: 1234 },
    { id: 2, text: 'May what is broken find its way to wholeness.', number: 1233 },
    { id: 3, text: 'Let fear become the quiet companion of devotion.', number: 1232 },
    { id: 4, text: 'May the unseen hands guide what we cannot control.', number: 1231 },
    { id: 5, text: 'Let suffering be met with steadiness and grace.', number: 1230 },
  ]

  return (
    <div style={{ paddingTop: '96px', paddingBottom: '96px', paddingLeft: '24px', paddingRight: '24px', minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#6b7280', letterSpacing: '4px', marginBottom: '16px', textAlign: 'center' }}>
          THE STREAM
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '15px', textAlign: 'center', lineHeight: '1.9', marginBottom: '48px' }}>
          Prayers dissolving into water, 24 hours a day.
        </p>

        {/* Video */}
        <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#000', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px' }}>
          <iframe
            src="https://www.youtube.com/embed/NhNTLJG_qYg?autoplay=1&mute=0"
            style={{ width: '100%', height: '100%', border: 'none' }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        {/* Watch links */}
        <div style={{ display: 'flex', gap: '24px', marginBottom: '64px' }}>
          <a href="https://youtube.com/live/NhNTLJG_qYg" target="_blank" rel="noopener noreferrer"
            style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }}>
            → Watch on YouTube
          </a>
          <a href="https://pump.fun" target="_blank" rel="noopener noreferrer"
            style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }}>
            → Watch on pump.fun
          </a>
        </div>

        {/* Recent Prayers */}
        <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#6b7280', letterSpacing: '2px', marginBottom: '24px' }}>
          RECENT PRAYERS
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {recentPrayers.map((prayer) => (
            <div key={prayer.id} style={{ borderTop: '1px solid #e5e7eb', padding: '20px 0' }}>
              <div style={{ fontSize: '12px', color: '#d1d5db', marginBottom: '8px', letterSpacing: '1px' }}>
                #{prayer.number}
              </div>
              <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: '1.9', fontStyle: 'italic' }}>
                {prayer.text}
              </p>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #e5e7eb' }} />
        </div>

      </div>
    </div>
  )
}