import React from 'react'                                                                                             
                                                                                                                        
  export default function WhitepaperPage() {                                                                            
    const body: React.CSSProperties = { color: '#9ca3af', lineHeight: '1.9', fontSize: '15px', textAlign: 'justify',  
  marginTop: '16px' }                                                                                                   
    const h2style: React.CSSProperties = { fontSize: '16px', fontWeight: 'bold', color: '#6b7280', marginBottom: '16px',
   letterSpacing: '2px' }                                                                                               
    const h3style: React.CSSProperties = { fontSize: '14px', fontWeight: 'bold', color: '#6b7280', marginBottom: '12px',
   marginTop: '24px', letterSpacing: '1px' }                                                                            
    const section = { marginBottom: '40px' }                                                                          
                                                                                                                        
    return (                                                                                                          
      <div style={{ paddingTop: '96px', paddingBottom: '96px', paddingLeft: '24px', paddingRight: '24px', minHeight: 
  '100vh', backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif' }}>                                   
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                                                                                                                        
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#6b7280', letterSpacing: '4px', marginBottom:      
  '48px', textAlign: 'center' }}>                                                                                       
            VESPER WHITE PAPER                                                                                          
          </h1>                                                                                                         
  
          <div style={section}>                                                                                         
            <h2 style={h2style}>Executive Summary</h2>                                                                
            <p style={{ ...body, marginTop: '0' }}>Vesper is a living artwork on the Solana blockchain—an installation
  that binds spirit, light, and human connection. It has run without interruption since March 25, 2026, the Feast of the
   Annunciation. It begins simply: a person sends a prayer. Through a website or a brief message on X, the prayer
  travels to an AI that rewrites it, curving it toward hope. These prayers—stripped of despair, bound in quiet          
  strength—are cast onto water and light, projected into the air as mist and motion. They rise, drift, and fade.</p>  
            <p style={body}>Each prayer is written onto the Solana blockchain, fixed in its purity, immune to decay.
  What was once fleeting becomes eternal. This act turns a private word into a shared blessing, shaping an open sky of  
  intention.</p>
            <p style={body}>The VSPR token anchors this shared creation. It marks each holder's place in the work—and,  
  when the structure is built, a voice in its direction and its charity. Vesper stands in the balance of evening—the    
  hour when light meets the fall of night. This paper sets out the vision, the technical bones, and the spirit that
  moves behind them.</p>                                                                                                
          </div>                                                                                                      
                                                                                                                        
          <div style={section}>
            <h2 style={h2style}>Introduction</h2>                                                                       
            <p style={{ ...body, marginTop: '0' }}>In a time when faith often dissolves into data, Vesper gathers the 
  two into one gesture. It reimagines prayer as a communal work of art—an old instinct made new. Where once prayer was  
  quiet and solitary, Vesper draws it into public light. Artificial intelligence, the Solana blockchain, and the pulse
  of moving water give it form, movement, permanence.</p>                                                               
            <p style={body}>"Vesper" comes from the Latin word for "evening"—the hour when shadows lengthen and the last
   gold clings to the edge of things. It is the turning point of the day, when light bows toward darkness but does not  
  surrender. In this spirit, Vesper illuminates darkness with human hope. A prayer sent to the chain ascends into mist;
  the words scatter and rise, like breath meeting air.</p>                                                              
            <p style={body}>Here technology becomes a vessel for faith and fellowship. Vesper invites reflection: how 
  might the tools that divide also bind? How might machines become mirrors to the human will for light?</p>             
          </div>
                                                                                                                        
          <div style={section}>                                                                                       
            <h2 style={h2style}>Project Description</h2>                                                                
            <h3 style={h3style}>Core Concept</h3>                                                                     
            <p style={{ ...body, marginTop: '0' }}>At its heart, Vesper transforms the solitary act of prayer into a    
  shared experience of grace. A prayer begins as a human voice—typed, not spoken. It arrives, is softened and shaped by 
  an AI trained to lift its tone, to clear its meaning of bitterness or harm, leaving only affirmation.</p>             
            <p style={body}>The renewed prayer is sent out again, this time to all. It lives on the platform's feed and,
   permanently, upon the Solana blockchain—a record of the collective heart.</p>                                        
            <p style={body}>Then comes the living image: words projected onto mist, fountains, and falling water. The
  light bends over the surface, words flicker in vapor, dissolve, and vanish upward. It is a ritual both ancient and    
  newly born—the human wish set loose in the physical world.</p>                                                      
                                                                                                                        
            <h3 style={h3style}>Symbolic and Thematic Elements</h3>                                                   
            <p style={body}><strong style={{ color: '#6b7280' }}>Light in Darkness:</strong> Each word gleams against
  night, the evening name made visible.</p>                                                                             
            <p style={body}><strong style={{ color: '#6b7280' }}>Water as Medium:</strong> Water cleanses, renews,
  remembers nothing. Its transience mirrors the soul's passage—brief, bright, eternal.</p>                              
            <p style={body}><strong style={{ color: '#6b7280' }}>Collective Unity:</strong> Shared prayer becomes shared
   strength; one person's longing becomes all people's light.</p>                                                       
                                                                                                                      
            <h3 style={h3style}>Essays and Films</h3>                                                                   
            <p style={{ ...body, marginTop: '0' }}>The prayers are followed by reflection. A continuing series of essays
   and films draws the work's threads—light, water, ritual, impermanence, care—through art history, theology, and       
  philosophy. The essays appear at vsprxxv.com; the films on the work's YouTube channel. They are part of the artwork,
  not commentary on it: the office prayed, then the office examined.</p>                                                
                                                                                                                      
            <h3 style={h3style}>Installation Locations</h3>
            <p style={{ ...body, marginTop: '0' }}>Installations will appear in places of history and quiet
  wonder—stone, forest, and fall. Each site is chosen for resonance rather than spectacle, where the natural and digital
   might meet without discord. Sites are announced when secured, not before.</p>
          </div>                                                                                                        
                                                                                                                      
          <div style={section}>
            <h2 style={h2style}>Technology Integration</h2>
            <h3 style={h3style}>AI-Powered Prayer Rewriting</h3>                                                        
            <p style={{ ...body, marginTop: '0' }}>The AI listens without judgment. It reshapes prayers toward calm,    
  courage, and clarity. It returns words that breathe forward. The agent follows strict ethical training to honor origin
   and intent, never to erase but to refine.</p>                                                                        
                                                                                                                        
            <h3 style={h3style}>Blockchain Embedding</h3>                                                             
            <p style={{ ...body, marginTop: '0' }}>Built on Solana—chosen for its speed, low transaction cost, and open
  reach.</p>                                                                                                            
            <p style={body}><strong style={{ color: '#6b7280' }}>Immutability:</strong> The text cannot be changed, only
   remembered.</p>                                                                                                      
            <p style={body}><strong style={{ color: '#6b7280' }}>Transparency:</strong> The chain is open for all to  
  see.</p>                                                                                                              
            <p style={body}><strong style={{ color: '#6b7280' }}>Decentralization:</strong> No single hand holds      
  dominion.</p>                                                                                                         
                                                                                                                      
            <h3 style={h3style}>The Stream</h3>                                                                         
            <p style={{ ...body, marginTop: '0' }}>Vesper's prayers are carried continuously into the world by a 24-hour
   livestream, broadcast on YouTube and pump.fun from a dedicated server. Words appear over moving water, rise, and     
  dissolve—a living installation available to anyone, anywhere, at any hour. The stream has run without interruption
  since the work began.</p>                                                                                             
                                                                                                                      
            <h3 style={h3style}>Projection and Immersive Technology</h3>                                                
            <p style={{ ...body, marginTop: '0' }}>Light and environment merge through high-resolution projection, water
   mist, and sensors tuned to air and shadow. Augmented reality may echo these images far from their origins, creating a
   global field of reflection.</p>                                                                                    
                                                                                                                        
            <h3 style={h3style}>User Interfaces</h3>                                                                  
            <p style={body}><strong style={{ color: '#6b7280' }}>Website (vsprxxv.com):</strong> For prayers, for
  joining, for witness.</p>                                                                                             
            <p style={body}><strong style={{ color: '#6b7280' }}>X Integration (@VSPRXXV):</strong> For rapid connection
   and wide reach.</p>                                                                                                  
          </div>                                                                                                      
                                                                                                                        
          <div style={section}>                                                                                       
            <h2 style={h2style}>Tokenomics: The VSPR Token</h2>                                                         
            <p style={{ ...body, marginTop: '0' }}>The VSPR token holds the communal bond. It is a vessel, a breath   
  shared among makers and witnesses.</p>                                                                                
            <p style={body}>VSPR confers no ownership, no equity, and no expectation of profit. It is a token bound to
  an artwork.</p>                                                                                                       
                                                                                                                      
            <h3 style={h3style}>Token Details</h3>                                                                      
            <p style={{ ...body, marginTop: '0' }}>Name: Vesper. Symbol: VSPR. Blockchain: Solana. Total supply:      
  1,000,000,000 VSPR, fixed at launch. Launched March 25, 2026—a fair launch via Pump.fun. No pre-mine, no pre-sale, no 
  private allocation.</p>                                                                                             
                                                                                                                        
            <h3 style={h3style}>Purpose and Utility</h3>                                                                
            <p style={body}><strong style={{ color: '#6b7280' }}>Community Participation.</strong> Every holder stands
  within the art's body—its pulse, its breath, its motion through the world.</p>                                        
            <p style={body}><strong style={{ color: '#6b7280' }}>Governance.</strong> When the structure is built, the
  people will decide: where the next light will fall, which causes to lift, which paths to widen beneath their common   
  step.</p>                                                                                                           
                                                                                                                        
            <h3 style={h3style}>Supply, Allocation, and Locks</h3>                                                    
            <p style={{ ...body, marginTop: '0' }}>The founding artist holds 50,000,000 VSPR—five percent of
  supply—acquired at fair launch alongside all others. This holding is bound by published policy, allocated across the  
  named wallets:</p>
            <p style={body}><strong style={{ color: '#6b7280' }}>Creator: 20,000,000</strong> — ninety percent locked,  
  vesting monthly across twenty-four months.</p>                                                                        
            <p style={body}><strong style={{ color: '#6b7280' }}>Treasury: 20,000,000</strong> — seventy-five percent
  locked, released in thirds at six, twelve, and eighteen months.</p>                                                   
            <p style={body}><strong style={{ color: '#6b7280' }}>Charities: 10,000,000</strong> — locked in full for one
   year, held until the community can direct it.</p>                                                                    
            <p style={body}>Eighty-six percent of the operator's holdings are locked. The lock contracts are held on  
  Streamflow, immutable once deployed, their proof visible to anyone. Operational wallets hold no VSPR.</p>             
            <p style={body}>Any sale of tokens by the operator will be announced before it occurs. The full policy,   
  wallet addresses, and proof links live in the public registry at vsprxxv.com.</p>                                     
                                                                                                                      
            <h3 style={h3style}>The Work the Fees Fund</h3>                                                             
            <p style={{ ...body, marginTop: '0' }}>Vesper is sustained not by selling tokens but by the creator's fees
  its trading generates. From these fees flow the living work ahead: the stream's endurance, new installations, and a   
  charitable reserve whose direction the community will choose. The division of these fees is set out below, in the   
  wallet architecture.</p>                                                                                              
                                                                                                                      
            <h3 style={h3style}>Wallet Architecture: Nine Intentions</h3>
            <p style={{ ...body, marginTop: '0' }}>Vesper's wallet structure rises without pre-sale or secret favor. It
  is clear from birth—nine wallets, each named, each visible, all carved into the chain.</p>                            
   
            <h3 style={h3style}>Fee Wallets (3)</h3>                                                                    
            <p style={{ ...body, marginTop: '0' }}>These receive the creator's fees generated by the token's trading. 
  The fees—not the token supply—are divided as follows:</p>                                                             
            <p style={body}><strong style={{ color: '#6b7280' }}>Creator (30% of fees):</strong> Held by the founding
  artist. It feeds the ongoing vision.</p>                                                                              
            <p style={body}><strong style={{ color: '#6b7280' }}>Treasury (40% of fees):</strong> The working fund of 
  the artwork—its endurance, its installations, its steady growth.</p>                                                  
            <p style={body}><strong style={{ color: '#6b7280' }}>Charities (30% of fees):</strong> Accumulated        
  untouched, given to causes the community names and upholds.</p>                                                       
            <p style={body}>Token allocation is separate from this division and is set out above, in Supply, Allocation,
   and Locks.</p>                                                                                                       
                                                                                                                      
            <h3 style={h3style}>Operational Wallets (3)</h3>                                                            
            <p style={{ ...body, marginTop: '0' }}>These are the project's working hands. They hold no VSPR—only what 
  operations require:</p>                                                                                               
            <p style={body}><strong style={{ color: '#6b7280' }}>Installation Costs:</strong> Permits, transport, and 
  the material needs of bringing the art to earth.</p>                                                                  
            <p style={body}><strong style={{ color: '#6b7280' }}>Content Production:</strong> The recording of the    
  work—its film, its steps, its breath.</p>                                                                             
            <p style={body}><strong style={{ color: '#6b7280' }}>Community:</strong> The shape of future governance and
  the reward of those who stand with it.</p>                                                                            
                                                                                                                      
            <h3 style={h3style}>Reserve Wallets (3)</h3>                                                                
            <p style={{ ...body, marginTop: '0' }}>These wait, untouched. They only receive; they never sell. Their   
  mandates will be set by the community's first act of governance—the inaugural vote will name what each reserve        
  serves.</p>
            <p style={body}>They are promises made solid—a visible trust, not deferred but living from day one.</p>     
            <p style={body}>Nine wallets. Nine intentions. Open to the light. Written on the chain.</p>                 
          </div>                                                                                                        
                                                                                                                        
          <div style={section}>                                                                                         
            <h2 style={h2style}>Roadmap</h2>                                                                          
            <p style={{ ...body, marginTop: '0' }}><strong style={{ color: '#6b7280' }}>Phase 1 (Q1–Q2 2026):</strong>
  Foundation—AI creation, blockchain weaving, token birth, and community gathering. Complete.</p>                       
            <p style={body}><strong style={{ color: '#6b7280' }}>Phase 2 (Q3–Q4 2026):</strong> Binding and first
  light—the operator's holdings locked onchain; the first physical site installed and streamed globally; the design of  
  governance published for the community's reading.</p>                                                               
            <p style={body}><strong style={{ color: '#6b7280' }}>Phase 3 (2027 and beyond):</strong> Expansion—further  
  sites, the first governance votes, integration with AR/VR, partnerships with artists and seekers, data-driven         
  reflection on impact.</p>
          </div>                                                                                                        
                                                                                                                      
          <div style={section}>
            <h2 style={h2style}>Potential Impact</h2>
            <p style={{ ...body, marginTop: '0' }}>Vesper stands at a threshold: faith meeting fiber optics, breath     
  meeting code. It transforms voiceless fear into shared beauty. In an age split by isolation, Vesper binds strangers   
  with light and water. It does not promise salvation—it offers connection.</p>                                         
            <p style={body}>The act is small, human, steady: a prayer sent forth; a word rising in mist; a trace that   
  does not fade.</p>                                                                                                    
          </div>
                                                                                                                        
          <div style={section}>                                                                                       
            <h2 style={h2style}>Conclusion</h2>
            <p style={{ ...body, marginTop: '0' }}>Vesper is not a monument but a movement—toward clarity, toward one   
  another. It makes visible what is unseen, bringing the weightless into form. Through AI, the Solana blockchain, and   
  the quiet persistence of water, it turns prayer into an art of light and permanence.</p>                              
            <p style={body}>Balance remains its law: light and dark, faith and doubt, code and silence. One prayer at a 
  time, Vesper reminds us what endures.</p>                                                                             
          </div>
                                                                                                                        
        </div>                                                                                                          
      </div>
    )                                                                                                                   
  }                                                                                                                   

