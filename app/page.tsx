export default function Home() {
  return (
    <main>
      {/* Hero Image */}
      <div style={{ width: '100%', height: '600px', overflow: 'hidden' }}>
        <img 
          src="/vesper-hero.png"
          alt="Vesper livestream" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      
      {/* VSPR + Description */}
      <div style={{ 
        textAlign: 'center', 
        padding: '64px 24px', 
        backgroundColor: '#f9fafb',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
       <p style={{
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontSize: '14px',
  letterSpacing: '8px',
  color: '#9ca3af',
  marginBottom: '24px',
  textShadow: '0 0 8px rgba(150, 150, 150, 0.8), 0 0 20px rgba(150, 150, 150, 0.4)',
}}>
  VSPR
</p>
        <p style={{ 
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontSize: '14px',
          color: '#6b7280',
          maxWidth: '1200px',
          lineHeight: '1.8'
        }}>
          An onchain artwork. Prayers transformed by AI, set adrift on water, rising like breath. It runs without end. It endures on Solana—light caught in the chain.
        </p>
      </div>
    </main>
  )
}