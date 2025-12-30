import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import IncubationBanner from '@/components/sections/IncubationBanner';
import WhyMatters from '@/components/sections/WhyMatters';
import AutonomousDock from '@/components/sections/AutonomousDock';
import HowItWorks from '@/components/sections/HowItWorks';
import KeyAdvantages from '@/components/sections/KeyAdvantages';

// ⛔ These are now separate pages
// import About from '@/components/sections/About';
// import VisionMissionAim from '@/components/sections/VisionMissionAim';
// import CoreTeam from '@/components/sections/CoreTeam';
// import Advisors from '@/components/sections/Advisors';
// import Careers from '@/components/sections/Careers';
// import Contact from '@/components/sections/Contact';

import Footer from '@/components/Footer';
import PageTransition from "@/components/PageTransition";
const Index = () => {
  return (
    <main className="min-h-screen bg-background">
       
      <Navigation />
<PageTransition>
      {/* Home-only sections */}
      <Hero />
      <IncubationBanner />
      <WhyMatters />
      <AutonomousDock />
      <HowItWorks />
      <KeyAdvantages />
      </PageTransition> 

      {/* ⛔ Moved to /about */}
      {/*
      <About />
      <VisionMissionAim />
      */}

      {/* ⛔ Moved to /team */}
      {/*
      <CoreTeam />
      <Advisors />
      */}

      {/* ⛔ Moved to /careers */}
      {/*
      <Careers />
      */}

      {/* ⛔ Moved to /contact (optional page later) */}
      {/*
      <Contact />
      */}

      {/* <Footer /> */}
    </main>
  );
};

export default Index;
