import React from 'react'

export default function AboutPage() {
  const body: React.CSSProperties = { color: '#9ca3af', lineHeight: '1.9', fontSize: '15px', textAlign: 'justify', marginTop: '16px' }
  const h2style: React.CSSProperties = { fontSize: '16px', fontWeight: 'bold', color: '#6b7280', marginBottom: '16px', letterSpacing: '2px' }
  const section = { marginBottom: '40px' }

  return (
    <div style={{ paddingTop: '96px', paddingBottom: '96px', paddingLeft: '24px', paddingRight: '24px', minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#6b7280', letterSpacing: '4px', marginBottom: '48px', textAlign: 'center' }}>
          ABOUT VESPER
        </h1>

        <section style={section}>
          <p style={{ ...body, marginTop: '0' }}>The work is called Vesper. It lives on the chain. It takes the oldest gesture of humankind—the prayer—and fixes it in light.</p>
          <p style={body}>People send their words from a site or a feed. An intelligence receives them, pares them down, makes them bare and unafraid. What remains feels ancient, close to silence. These words are cast upon water—rain, mist, snow. They drift, they vanish. All night they rise on the stream like breath leaving the world.</p>
          <p style={body}>Each prayer is written into the ledger, forever. Not for profit or praise, but as a record of wanting. No one owns them. Everyone may see them. The VSPR token marks not possession, but care. It belongs to those who keep the light moving, who tend the water where words dissolve.</p>
          <p style={body}>Vesper imagines a planet whispering: prayers falling over Angel Falls, rain across Tokyo, snow in the Arctic dark. Some are of this world. Some are dream-water built by code. All fade as they must. This is the work—not to hold, but to release. To watch light die on the skin of water, and to know it goes on unseen.</p>
        </section>

        <section style={section}>
          <h2 style={h2style}>The Pipeline</h2>
          <p style={{ ...body, marginTop: '0' }}>Prayers arrive from X.com or a small form on the web. They pass through Grok, which translates them into a voice of calm resolve, the kind of voice left when pleading burns away. Each prayer is then posted back to X.com and written to the Solana blockchain.</p>
          <p style={body}>From there, it enters the projection stream. AI renders the words in light and carries them to water—some real, some born of AI. The stream runs day and night on YouTube and pump.fun. The scene changes daily: Angel Falls, mountain mist, rain on Tokyo streets, snow that glows faintly in the dark.</p>
        </section>

        <section style={section}>
          <h2 style={h2style}>Physical Installations</h2>
          <p style={{ ...body, marginTop: '0' }}>Vesper will live beyond the screen. Two to four installations will rise in different parts of the world. Here, prayers are projected with real light onto living water—falling rain, fog, evaporating pools. The words shimmer and fade. They lift into air and are gone, leaving their trace on the sky.</p>
          <p style={body}>Dates and sites will follow.</p>
        </section>

        <section style={section}>
          <h2 style={h2style}>Artist</h2>
          <p style={{ ...body, marginTop: '0' }}>Vesper was created by Megan Murphy, an artist working where memory, spirit, and machine meet. For more than twenty-five years, her work has sought the sacred in the ordinary—shown in Portland, Seattle, and New York, held in museum collections across the country. Murphy weaves medieval light with modern code projected onto vessels of light. Vesper is her meditation on how the unseen endures in a digital world.</p>
        </section>

        <section style={section}>
          <h2 style={h2style}>Contact</h2>
          <p style={{ ...body, marginTop: '0' }}>
            For press or partnership inquiries:{' '}
            <a href="https://x.com/vsprxxv" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af' }}>
              @vsprxxv on X.com
            </a>
          </p>
          <p style={body}>
            For Original Works by Megan Murphy:{' '}
            <a href="https://pdxcontemporaryart.com" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af' }}>
              pdxcontemporaryart.com
            </a>
          </p>
        </section>

      </div>
    </div>
  )
}