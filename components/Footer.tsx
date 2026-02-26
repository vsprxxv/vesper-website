import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-vesper-mist border-t border-vesper-pale py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Wordmark and tagline */}
          <div>
            <div className="font-display text-2xl font-semibold text-vesper-navy mb-2">
              VESPER
            </div>
            <p className="text-sm text-vesper-grey">
              Prayers collected, transformed, and returned to the world through water and light.
            </p>
          </div>

          {/* Center: Links */}
          <div>
            <h3 className="font-semibold text-vesper-dark mb-3">Pages</h3>
            <div className="space-y-2 text-sm">
              <Link href="/pray" className="block text-vesper-grey hover:text-vesper-blue transition-colors">
                Submit a Prayer
              </Link>
              <Link href="/archive" className="block text-vesper-grey hover:text-vesper-blue transition-colors">
                Prayer Archive
              </Link>
              <Link href="/stream" className="block text-vesper-grey hover:text-vesper-blue transition-colors">
                The Stream
              </Link>
              <Link href="/token" className="block text-vesper-grey hover:text-vesper-blue transition-colors">
                Community Token
              </Link>
              <Link href="/about" className="block text-vesper-grey hover:text-vesper-blue transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* Right: Contract and social */}
          <div>
            <h3 className="font-semibold text-vesper-dark mb-3">Connect</h3>
            <div className="space-y-2 text-sm">
              <a
                href="https://x.com/vesper"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-vesper-grey hover:text-vesper-blue transition-colors"
              >
                X.com / Twitter
              </a>
              <a
                href={process.env.NEXT_PUBLIC_PUMPFUN_URL || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-vesper-grey hover:text-vesper-blue transition-colors"
              >
                pump.fun
              </a>
              <div className="text-vesper-grey text-xs mt-4">
                <p className="mb-1">Contract:</p>
                <code className="bg-vesper-pale px-2 py-1 rounded text-xs">
                  {process.env.NEXT_PUBLIC_TOKEN_ADDRESS?.slice(0, 8)}...
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-8 border-t border-vesper-pale text-center text-sm text-vesper-grey">
          Prayers are not for sale.
        </div>
      </div>
    </footer>
  )
}
