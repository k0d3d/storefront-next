import { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'MerchPaddie | Launch merch that sells out. Zero risk, all profit.',
  description: 'AI-powered merch launchpad for creators. No inventory, no upfront cost. Launch your drop in 60 seconds. Powered by x402 blockchain trust.',
};

export default function HomePage() {
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
