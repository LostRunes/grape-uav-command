import About from '../components/sections/About';
import IncubationBanner from '../components/sections/IncubationBanner';
import VisionMissionAim from "@/components/sections/VisionMissionAim";
import PageTransition from "@/components/PageTransition";

const AboutPage = () => {
  return (
    <>
    <PageTransition>
      <About />
      <IncubationBanner />
       <VisionMissionAim />
      </PageTransition>
    </>
  );
};

export default AboutPage;
