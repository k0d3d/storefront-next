import {
  Header,
  HeroMerch,
  ProblemSection,
  SolutionSection,
  LiveProofSection,
  HowItWorksSection,
  FinalCTASection,
  Footer
} from '@/components/landing';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header logo="MerchPaddie" />

      <main>
        <HeroMerch />

        <ProblemSection />

        <SolutionSection />

        <LiveProofSection />

        <HowItWorksSection />

        <FinalCTASection />
      </main>

      <Footer
        companyName="MerchPaddie"
        description="Launch merch that sells out. Zero risk, all profit. AI-powered merch launchpad for creators. Powered by x402 blockchain trust."
      />
    </div>
  );
}
