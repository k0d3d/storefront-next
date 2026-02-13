import {
  HeaderMinimal,
  HeroMerch,
  ProblemSection,
  SolutionSection,
  LiveProofSection,
  HowItWorksSection,
  FinalCTASection,
  FooterMinimal
} from '@/components/landing';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeaderMinimal logo="MerchPaddie" />

      <main>
        <HeroMerch />

        <ProblemSection />

        <SolutionSection />

        <LiveProofSection />

        <HowItWorksSection />

        <FinalCTASection />
      </main>

      <FooterMinimal
        companyName="MerchPaddie"
        email="hello@merchpaddie.com"
      />
    </div>
  );
}
