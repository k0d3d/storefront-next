export default function RealizationSection() {
  return (
    <section className="section-screen bg-white py-24">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="stagger-children">
          <p className="fade-in text-2xl md:text-4xl text-muted mb-4 leading-relaxed font-medium">
            Most platforms make you choose: <br/>
            Risk money or risk time.
          </p>
          
          <p className="fade-in text-3xl md:text-5xl font-bold text-foreground mb-16">
            MerchPaddie lets you start rich.
          </p>

          <div className="fade-in space-y-4">
            <span className="text-sm font-bold uppercase tracking-widest text-muted">Your starting balance</span>
            <div className="text-8xl md:text-9xl font-mono font-bold text-secondary tracking-tighter">
              {/* STAT-1: Starting Balance */}
              $<span className="counter" data-target="10000">0</span>
            </div>
            <span className="text-lg text-muted font-medium">Free. No catch. No credit card.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
