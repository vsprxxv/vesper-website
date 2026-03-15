export default function ArchivePage() {
  const prayers = [
    { id: 1234, text: 'Let those we love be held by forces beyond our reach.' },
    { id: 1233, text: 'May what is broken find its way to wholeness.' },
    { id: 1232, text: 'Let fear become the quiet companion of devotion.' },
    { id: 1231, text: 'May the unseen hands guide what we cannot control.' },
    { id: 1230, text: 'Let suffering be met with steadiness and grace.' },
    { id: 1229, text: 'May the lost find their way home through the dark.' },
    { id: 1228, text: 'Let the grieving know they are not alone in the night.' },
    { id: 1227, text: 'May courage rise where fear has made its home.' },
  ]

  return (
    <div style={{ paddingTop: '96px', paddingBottom: '96px', paddingLeft: '24px', paddingRight: '24px', minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#6b7280', letterSpacing: '4px', marginBottom: '16px', textAlign: 'center' }}>
          THE ARCHIVE
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '15px', textAlign: 'center', lineHeight: '1.9', marginBottom: '64px' }}>
          Prayers preserved forever on Solana.
        </p>

        <div>
          {prayers.map((prayer) => (
            <div key={prayer.id} style={{ borderTop: '1px solid #e5e7eb', padding: '20px 0', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '12px', color: '#d1d5db', letterSpacing: '1px', minWidth: '48px', paddingTop: '3px' }}>
                #{prayer.id}
              </div>
              <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: '1.9', fontStyle: 'italic', margin: '0' }}>
                {prayer.text}
              </p>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #e5e7eb' }} />
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="/pray" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none', letterSpacing: '1px' }}>
            → Submit a Prayer
          </a>
        </div>

      </div>
    </div>
  )
}