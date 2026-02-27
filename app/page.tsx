export default function TokenPage() {
  return (
    <div className="relative">
  {/* Hero Image */}
  <div className="w-full h-[600px] relative overflow-hidden">
    <img 
      src="/vesper-hero.jpg" 
      alt="Vesper livestream" 
      className="w-full h-full object-cover"
    />
  </div>
  
  {/* Text Below Image */}
  <div className="text-center py-16 px-4 bg-vesper-mist">
    <p className="font-display text-2xl md:text-3xl text-vesper-navy max-w-4xl mx-auto leading-relaxed">
      <strong>VSPR:</strong> An onchain artwork. Prayers transformed by AI, set adrift on water, rising like breath. It runs without end. It endures on Solana—light caught in the chain.
    </p>
  </div>
</div>
```
        <p className="text-vesper-grey">
          VSPR token details coming soon.
        </p>
      </div>
    </div>
  )
}