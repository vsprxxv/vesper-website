'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 50, 
      backgroundColor: 'white', 
      borderBottom: '1px solid #e5e7eb',
      fontFamily: 'Helvetica, Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
  <p style={{
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '18px',
    letterSpacing: '6px',
    color: '#9ca3af',
    textShadow: '0 0 8px rgba(150, 150, 150, 0.8), 0 0 20px rgba(150, 150, 150, 0.4)',
  }}>
    VESPER
  </p>
</Link>

          {/* Nav Links */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            
            {/* About Dropdown */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button style={{ color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px' }}>
                About
              </button>
              {aboutOpen && (
                <div style={{ position: 'absolute', right: 0, top: '100%', backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', width: '160px', zIndex: 100 }}>
                  <Link href="/about/whitepaper" style={{ display: 'block', padding: '8px 16px', color: '#6b7280', textDecoration: 'none', fontSize: '12px' }}>
                    White Paper
                  </Link>
                  <Link href="/archive" style={{ display: 'block', padding: '8px 16px', color: '#6b7280', textDecoration: 'none', fontSize: '12px' }}>
                    Archive
                  </Link>
                  <Link href="/about/information" style={{ display: 'block', padding: '8px 16px', color: '#6b7280', textDecoration: 'none', fontSize: '12px' }}>
                    Information
                  </Link>
                </div>
              )}
            </div>

            <Link href="/pray" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '13px' }}>Pray</Link>
<Link href="/stream" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '13px' }}>Stream</Link>
<Link href="/token" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '13px' }}>Token</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}