import { sql } from '@vercel/postgres'

async function getPrayers() {
  try {
    const { rows } = await sql`
      SELECT id, transformed_text, created_at 
      FROM prayers 
      ORDER BY created_at DESC 
      LIMIT 100
    `
    return rows
  } catch (error) {
    console.error('Failed to fetch prayers:', error)
    return []
  }
}

export default async function ArchivePage() {
  const prayers = await getPrayers()

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen bg-gradient-to-b from-vesper-white to-vesper-mist">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl text-vesper-navy mb-4">
            The Archive
          </h1>
          <p className="text-vesper-grey">
            {prayers.length} prayers preserved forever on Solana
          </p>
        </div>

        <div className="space-y-6">
          {prayers.length === 0 ? (
            <div className="text-center py-12 bg-white/40 backdrop-blur-sm border border-vesper-pale rounded-lg">
              <p className="text-vesper-grey">No prayers yet. Be the first to submit one.</p>
              <a 
                href="/pray" 
                className="inline-block mt-4 text-vesper-blue hover:text-vesper-navy"
              >
                → Submit a Prayer
              </a>
            </div>
          ) : (
            prayers.map((prayer) => (
              <div 
                key={prayer.id}
                className="bg-white/60 backdrop-blur-sm border border-vesper-pale rounded-lg p-6 hover:border-vesper-blue transition-colors"
              >
                <p className="font-display italic text-xl text-vesper-dark leading-relaxed mb-4">
                  {prayer.transformed_text}
                </p>
                <div className="flex justify-between items-center text-sm text-vesper-grey">
                  <span>Prayer #{prayer.id}</span>
                  <span>{new Date(prayer.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
