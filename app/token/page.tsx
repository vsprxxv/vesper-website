import React from 'react'                                                                                             
   
  export default function TokenPage() {                                                                                 
    const body: React.CSSProperties = { color: '#9ca3af', lineHeight: '1.9', fontSize: '15px', textAlign: 'justify' } 
    const bodyMt: React.CSSProperties = { ...body, marginTop: '16px' }                                                  
    const h2: React.CSSProperties = { fontSize: '16px', fontWeight: 'bold', color: '#6b7280', marginBottom: '16px',   
  letterSpacing: '2px' }                                                                                                
    const section = { marginBottom: '40px' }                                                                          
                                                                                                                        
    return (                                                                                                          
      <div style={{ paddingTop: '96px', paddingBottom: '96px', paddingLeft: '24px', paddingRight: '24px', minHeight:
  '100vh', backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif' }}>                                   
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                                                                                                                        
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#6b7280', letterSpacing: '4px', marginBottom:      
  '8px', textAlign: 'center' }}>
            VSPR                                                                                                        
          </h1>                                                                                                       
          <p style={{ color: '#9ca3af', fontSize: '15px', textAlign: 'center', letterSpacing: '2px', marginBottom:
  '16px' }}>                                                                                                            
            Patronage of a living artwork.
          </p>                                                                                                          
          <p style={{ color: '#9ca3af', fontSize: '15px', textAlign: 'center', marginBottom: '48px' }}>               
            Become a steward of Vesper.                                                                                 
          </p>
                                                                                                                        
          <div style={section}>                                                                                       
            <h2 style={h2}>What is Vesper Stewardship?</h2>
            <p style={body}>The VSPR token is a sign of care. It marks those who stand watch over Vesper — a living     
  artwork that moves like water and light. Holding the token is not ownership. It is a quiet vow to tend the work: the  
  stream that never stops, the growing archive of prayers, the places where word meets stone, and the direction this    
  creation will take next.</p>                                                                                          
            <p style={bodyMt}>You are not buying prayers. You are keeping watch over what endures — a public well of  
  spirit, written forever.</p>
          </div>

          <div style={section}>                                                                                         
            <h2 style={h2}>Token Details</h2>
            <div style={{ border: '1px solid #e5e7eb', borderRadius: '4px', padding: '32px', display: 'grid',           
  gridTemplateColumns: '1fr 1fr', gap: '24px' }}>                                                                       
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
                <div style={{ fontSize: '16px', color: '#6b7280', fontWeight: '600' }}>1,000,000,000</div>            
              </div>                                                                                                    
              <div>
                <div style={{ fontSize: '13px', color: '#d1d5db', marginBottom: '6px' }}>Blockchain</div>               
                <div style={{ fontSize: '16px', color: '#6b7280', fontWeight: '600' }}>Solana</div>                     
              </div>                                                                                                    
              <div style={{ gridColumn: '1 / -1' }}>                                                                    
                <div style={{ fontSize: '13px', color: '#d1d5db', marginBottom: '6px' }}>Launched</div>                 
                <div style={{ fontSize: '15px', color: '#6b7280', fontWeight: '600' }}>March 25, 2026 — fair launch, no 
  pre-sale, no private allocation</div>                                                                                 
              </div>                                                                                                    
              <div style={{ gridColumn: '1 / -1' }}>                                                                    
                <div style={{ fontSize: '13px', color: '#d1d5db', marginBottom: '6px' }}>Contract</div>               
                <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '600', wordBreak: 'break-all'             
  }}>BiYnmYqS8UyWFrBi5J5iZbCQ5upsdJ8VPjFxuwNYpump</div>                                                                 
              </div>                                                                                                    
            </div>                                                                                                      
          </div>                                                                                                      

          <div style={section}>
            <h2 style={h2}>Supply and Locks</h2>
            <p style={body}>The artist holds five percent of supply, acquired at fair launch alongside all others.
  Eighty-six percent of that holding is locked onchain — vesting contracts on Streamflow, immutable once deployed, their
   proof visible to anyone. Any sale by the operator is announced before it occurs.</p>
            <p style={bodyMt}>Nine named wallets — three fee, three operational, three reserve — hold the work's economy
   in public view. The full policy, addresses, and proof links live in the registry.</p>                                
            <p style={{ ...bodyMt, textAlign: 'left' }}>
              <a href="/token/registry" style={{ color: '#9ca3af' }}>View the registry</a>                              
              {' · '}                                                                                                 
              <a href="/about/whitepaper" style={{ color: '#9ca3af' }}>Read the white paper</a>                         
            </p>                                                                                                        
          </div>                                                                                                        
                                                                                                                        
          <div style={section}>                                                                                       
            <h2 style={h2}>The Principle</h2>
            <p style={body}>The prayers of Vesper are not for sale. They live on the Solana chain, permanent and visible
   to all. The token does not own them; it keeps faith with them. To hold is eternal stewardship.</p>                   
          </div>
                                                                                                                        
          <div style={section}>                                                                                         
            <h2 style={h2}>How to Get VSPR</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>                                     
                                                                                                                        
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flexShrink: 0, width: '32px', height: '32px', backgroundColor: '#e5e7eb', color:          
  '#6b7280', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px'     
  }}>1</div>
                <div>                                                                                                   
                  <p style={{ fontWeight: '600', color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>Get a Solana
   wallet</p>                                                                                                           
                  <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.8' }}>Download Phantom or another
  Solana wallet. Create a new wallet and save your recovery phrase.</p>                                                 
                </div>                                                                                                
              </div>                                                                                                    
                                                                                                                      
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flexShrink: 0, width: '32px', height: '32px', backgroundColor: '#e5e7eb', color:
  '#6b7280', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px'     
  }}>2</div>
                <div>                                                                                                   
                  <p style={{ fontWeight: '600', color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>Fund it with
   SOL</p>                                                                                                              
                  <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.8' }}>Buy SOL on an exchange like
  Coinbase, then send it to your wallet address.</p>                                                                    
                </div>                                                                                                
              </div>                                                                                                    
                                                                                                                      
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flexShrink: 0, width: '32px', height: '32px', backgroundColor: '#e5e7eb', color: 
  '#6b7280', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px'     
  }}>3</div>
                <div>                                                                                                   
                  <p style={{ fontWeight: '600', color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>Trade for 
  VSPR</p>                                                                                                              
                  <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.8', marginBottom: '12px' }}>Use the
  link below — verify the contract address matches the one on this page. Do not search by name; use the address.</p>    
                  <a href="https://pump.fun/coin/BiYnmYqS8UyWFrBi5J5iZbCQ5upsdJ8VPjFxuwNYpump" target="_blank"        
  rel="noopener noreferrer" style={{ display: 'inline-block', padding: '10px 24px', border: '1px solid #e5e7eb', color: 
  '#9ca3af', borderRadius: '4px', textDecoration: 'none', fontSize: '13px', letterSpacing: '1px' }}>                  
                    Get VSPR →                                                                                          
                  </a>                                                                                                
                </div>
              </div>                                                                                                    
   
            </div>                                                                                                      
          </div>                                                                                                      

          <p style={{ color: '#9ca3af', fontSize: '13px', textAlign: 'center', marginTop: '48px', lineHeight: '1.8' }}> 
            VSPR confers no ownership, equity, or expectation of profit. It is a token bound to an artwork.
          </p>                                                                                                          
                                                                                                                      
        </div>
      </div>
    )                                                                                                                   
  }
