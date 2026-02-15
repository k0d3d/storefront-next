import {
  HeaderMinimal,
  HeroSection,
  HowItWorksSection,
  OnboardingSection,
  PathSelectionSection,
  LiveActivitySection,
  FooterSection
} from '@/components/landing';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeaderMinimal logo="MerchPaddie" />

      <main>
        <HeroSection />
        
        <HowItWorksSection />

        <OnboardingSection />
        
        <PathSelectionSection />

        <LiveActivitySection />
      </main>

      <FooterSection />
    </div>
  );
}
