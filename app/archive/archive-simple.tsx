export default function ArchivePage() {
  return (
    <div className="pt-24 pb-12 px-4 min-h-screen bg-gradient-to-b from-vesper-white to-vesper-mist">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl text-vesper-navy mb-4">
            The Archive
          </h1>
          <p className="text-vesper-grey">
            Prayers preserved forever on Solana
          </p>
        </div>

        <div className="text-center py-12 bg-white/40 backdrop-blur-sm border border-vesper-pale rounded-lg">
          <p className="text-vesper-grey mb-4">Archive coming soon.</p>
          <p className="text-sm text-vesper-grey">Prayers will be stored on the Solana blockchain and displayed here.</p>
          <a 
            href="/pray" 
            className="inline-block mt-4 text-vesper-blue hover:text-vesper-navy"
          >
            → Submit a Prayer
          </a>
        </div>
      </div>
    </div>
  )
}
