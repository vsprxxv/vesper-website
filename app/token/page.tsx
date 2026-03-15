import React from 'react'

export default function TokenPage() {
  return (
    <div style={{ paddingTop: '96px', paddingBottom: '96px', paddingLeft: '24px', paddingRight: '24px', minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#6b7280', letterSpacing: '4px', marginBottom: '8px', textAlign: 'center' }}>
          VSPR
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '15px', textAlign: 'center', letterSpacing: '2px', marginBottom: '16px' }}>
          A Community Token
        </p>
        <p style={{ color: '#9ca3af', fontSize: '15px', textAlign: 'center', marginBottom: '48px' }}>
          Become a steward of Vesper.
        </p>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#6b7280', marginBottom: '16px', letterSpacing: '2px' }}>What is Vesper Stewardship?</h2>
          <p style={{ color: '#9ca3af', lineHeight: '1.9', fontSize: '15px', textAlign: 'justify' }}>The VSPR token is a sign of care. It marks those who stand watch over Vesper — a living artwork that moves like water and light. Holding the token is not ownership. It is a quiet vow to tend the work: the stream that never stops, the growing archive of prayers, the places where word meets stone, and the direction this creation will take next.</p>
          <p style={{ color: '#9ca3af', lineHeight: '1.9', fontSize: '15px', textAlign: 'justify', marginTop: '16px' }}>You are not buying prayers. You are keeping watch over what endures — a public well of spirit, written forever.</p>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#6b7280', marginBottom: '16px', letterSpacing: '2px' }}>Token Details</h2>
          <div style={{ border: '1px solid #e5e7eb', borderRadius: '4px', padding: '32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              <div style={{ fontSize: '13px', color: '#d1d5db', marginBottom: '6px' }}>Name</div>
              <div style={{ fontSize: '16px', color: '#6b7280', fontWeight: '600' }}>VESPER</div>
            </div>
            <div>
              <div style={{ fontSize: '13px', color: '#d1d5db', marginBottom: '6px' }}>Symbol</div>
              <div style={{ fontSize: '16px', color: '#6b7280', fontWeight: '600' }}>VSPR</div>
            </div>
            <div>
              <div style={{ fontSize: '13px', color: '#d1d5db', marginBottom: '6px' }}>Total Supply</div>
              <div style={{ fontSize: '16px', color: '#6b7280', fontWeight: '600' }}>1,000,000.000</div>
            </div>
            <div>
              <div style={{ fontSize: '13px', color: '#d1d5db', marginBottom: '6px' }}>Blockchain</div>
              <div style={{ fontSize: '16px', color: '#6b7280', fontWeight: '600' }}>Solana</div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#6b7280', marginBottom: '16px', letterSpacing: '2px' }}>The Principle</h2>
          <p style={{ color: '#9ca3af', lineHeight: '1.9', fontSize: '15px', textAlign: 'justify' }}>The prayers of Vesper are not for sale. They live on the Solana chain, permanent and visible to all. The token does not own them; it keeps faith with them. To hold is eternal stewardship.</p>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#6b7280', marginBottom: '16px', letterSpacing: '2px' }}>How to Get VSPR</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flexShrink: 0, width: '32px', height: '32px', backgroundColor: '#e5e7eb', color: '#6b7280', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px' }}>1</div>
              <div>
                <p style={{ fontWeight: '600', color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>Get a Solana Wallet</p>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.8' }}>Download Phantom or another Solana wallet. Create a new wallet and save your recovery phrase.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flexShrink: 0, width: '32px', height: '32px', backgroundColor: '#e5e7eb', color: '#6b7280', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px' }}>2</div>
              <div>
                <p style={{ fontWeight: '600', color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>Fund Your Wallet with SOL</p>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.8' }}>Buy SOL on an exchange like Coinbase, then send it to your Phantom wallet address.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flexShrink: 0, width: '32px', height: '32px', backgroundColor: '#e5e7eb', color: '#6b7280', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px' }}>3</div>
              <div>
                <p style={{ fontWeight: '600', color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>Go to pump.fun</p>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.8', marginBottom: '12px' }}>Visit pump.fun and connect your wallet. Search for VESPER or paste the contract address.</p>
                <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '10px 24px', border: '1px solid #e5e7eb', color: '#9ca3af', borderRadius: '4px', textDecoration: 'none', fontSize: '13px', letterSpacing: '1px' }}>
                  Buy VSPR on pump.fun →
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}