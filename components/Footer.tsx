import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#f9fafb', 
      borderTop: '1px solid #e5e7eb', 
      padding: '48px 24px',
      fontFamily: 'Helvetica, Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
        
        {/* Left: Wordmark */}
        <div>
          <div style={{ fontSize: '20px', fontWeight: '600', color: '#6b7280', marginBottom: '8px', letterSpacing: '2px' }}>
            VESPER
          </div>
          <p style={{ fontSize: '14px', color: '#9ca3af' }}>
            Prayers collected, transformed, and returned to the world through water and light.
          </p>
        </div>

        {/* Center: Links */}
        <div>
          <h3 style={{ fontWeight: '600', color: '#6b7280', marginBottom: '12px' }}>Pages</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link href="/pray" style={{ fontSize: '14px', color: '#9ca3af', textDecoration: 'none' }}>Submit a Prayer</Link>
            <Link href="/archive" style={{ fontSize: '14px', color: '#9ca3af', textDecoration: 'none' }}>Prayer Archive</Link>
            <Link href="/stream" style={{ fontSize: '14px', color: '#9ca3af', textDecoration: 'none' }}>The Stream</Link>
            <Link href="/token" style={{ fontSize: '14px', color: '#9ca3af', textDecoration: 'none' }}>Community Token</Link>
            <Link href="/about" style={{ fontSize: '14px', color: '#9ca3af', textDecoration: 'none' }}>About</Link>
          </div>
        </div>

        {/* Right: Connect */}
        <div>
          <h3 style={{ fontWeight: '600', color: '#6b7280', marginBottom: '12px' }}>Connect</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="https://x.com/vesper" target="_blank" rel="noopener noreferrer" 
              style={{ fontSize: '14px', color: '#9ca3af', textDecoration: 'none' }}>
              X.com / Twitter
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '14px', color: '#9ca3af', textDecoration: 'none' }}>
              pump.fun
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ maxWidth: '1280px', margin: '32px auto 0', paddingTop: '32px', borderTop: '1px solid #e5e7eb', textAlign: 'center', fontSize: '14px', color: '#9ca3af' }}>
        Prayers are not for sale.
      </div>
    </footer>
  )
}