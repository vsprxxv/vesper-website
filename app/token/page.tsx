export default function TokenPage() {
  return (
    <div className="pt-32 pb-24 px-4 min-h-screen bg-gradient-to-b from-vesper-white to-vesper-mist">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl text-vesper-navy mb-6">
            Community Token
          </h1>
          <p className="text-xl text-vesper-grey max-w-2xl mx-auto">
            Become a steward of Vesper
          </p>
        </div>

        <section className="mb-16">
          <h2 className="font-display text-3xl text-vesper-navy mb-6">
            What is Vesper Stewardship?
          </h2>
          <div className="space-y-4 text-vesper-dark leading-relaxed">
            <p>
              The VSPR token represents collective stewardship of Vesper as a living artwork. 
              Token holders do not own individual prayers. Instead, token holders hold a stake 
              in the artwork itself: the 24-hour stream, the growing prayer archive, the physical 
              installations, and the ongoing creative direction of the project.
            </p>
            <p>
              You are not buying prayers. You are becoming a guardian of a permanent, public, 
              spiritual archive.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white/40 backdrop-blur-sm border border-vesper-pale rounded-lg p-8">
            <h3 className="font-display text-2xl text-vesper-navy mb-6">Token Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-vesper-grey mb-1">Name</div>
                <div className="text-lg font-semibold text-vesper-dark">VESPER</div>
              </div>
              <div>
                <div className="text-sm text-vesper-grey mb-1">Symbol</div>
                <div className="text-lg font-semibold text-vesper-dark">VSPR</div>
              </div>
              <div>
                <div className="text-sm text-vesper-grey mb-1">Total Supply</div>
                <div className="text-lg font-semibold text-vesper-dark">999,999</div>
                <div className="text-xs text-vesper-grey mt-1">Angel number — fixed supply</div>
              </div>
              <div>
                <div className="text-sm text-vesper-grey mb-1">Blockchain</div>
                <div className="text-lg font-semibold text-vesper-dark">Solana</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-vesper-blue/10 border-l-4 border-vesper-blue rounded-r-lg p-8">
            <h3 className="font-display text-2xl text-vesper-navy mb-4">The Principle</h3>
            <p className="font-display italic text-xl text-vesper-dark leading-relaxed">
              The prayers of Vesper are not for sale. They are stored permanently on the Solana 
              blockchain as a public archive. The community token represents stewardship of the 
              artwork, not ownership of its prayers.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-vesper-navy mb-6">
            How to Get VSPR
          </h2>
          <div className="space-y-6">
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-vesper-blue text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-vesper-dark mb-2">Get a Solana Wallet</h4>
                <p className="text-vesper-grey">
                  Download Phantom or another Solana wallet. Create a new wallet and save your recovery phrase.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-vesper-blue text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-vesper-dark mb-2">Fund Your Wallet with SOL</h4>
                <p className="text-vesper-grey">
                  Buy SOL on an exchange like Coinbase, then send it to your Phantom wallet address.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-vesper-blue text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-vesper-dark mb-2">Go to pump.fun</h4>
                <p className="text-vesper-grey mb-3">
                  Visit pump.fun and connect your wallet. Search for VESPER or paste the contract address.
                </p>
                
                <a
                  href="https://pump.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-vesper-blue text-white rounded-lg hover:bg-vesper-navy transition-colors"
                >
                  Buy VSPR on pump.fun
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  )
}