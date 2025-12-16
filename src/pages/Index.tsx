import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import IncubationBanner from '@/components/sections/IncubationBanner';
import WhyMatters from '@/components/sections/WhyMatters';
import AutonomousDock from '@/components/sections/AutonomousDock';
import HowItWorks from '@/components/sections/HowItWorks';
import KeyAdvantages from '@/components/sections/KeyAdvantages';
import About from '@/components/sections/About';
import VisionMissionAim from '@/components/sections/VisionMissionAim';
import CoreTeam from '@/components/sections/CoreTeam';
import Advisors from '@/components/sections/Advisors';
import Careers from '@/components/sections/Careers';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <IncubationBanner />
      <WhyMatters />
      <AutonomousDock />
      <HowItWorks />
      <KeyAdvantages />
      <About />
      <VisionMissionAim />
      <CoreTeam />
      <Advisors />
      <Careers />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
