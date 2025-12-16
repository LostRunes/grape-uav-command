import ScrollReveal from '../ScrollReveal';
import HoverCard from '../HoverCard';

const AutonomousDock = () => {
 const features = [
  {
    title: 'Precision Landing',
    description: 'AI-guided landing system ensures accurate docking in adverse weather conditions and low visibility.',
    video: '/landing.mp4',
  },
  {
    title: 'Instant Battery Swap',
    description: 'Automated mechanism replaces depleted batteries with fully charged units in under 90 seconds.',
    video: '/battery.mp4',
  },
  {
    title: 'Autonomous Launch',
    description: 'Pre-programmed mission execution with adaptive route planning based on real-time conditions.',
    video: '/launch.mp4',
  },
  {
    title: 'All-Weather Housing',
    description: 'Military-grade enclosure protects drone and equipment from dust, rain, and extreme temperatures.',
    video: '/weather.mp4',
  },
];


  return (
    <section id="dock" className="py-24 md:py-32 bg-secondary/20">
<div className="bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
      {/*  <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start content-start"> */}


        
  {/* Top: Text */}
  <div className="max-w-3xl mb-16">
    <ScrollReveal>
      <span className="text-caption text-primary mb-4 block">
        The Autonomous Dock
      </span>
    </ScrollReveal>

    <ScrollReveal delay={100}>
      <h2 className="text-headline text-foreground mb-6">
        Ground infrastructure for persistent aerial presence
      </h2>
    </ScrollReveal>

    <ScrollReveal delay={200}>
      <p className="text-body text-muted-foreground mb-8">
        The Grape Dock is an autonomous ground station that enables continuous drone 
        operations without human intervention. Designed for rugged deployment in remote 
        locations, it serves as the foundation for 24/7 surveillance and rapid response.
      </p>
    </ScrollReveal>

    <ScrollReveal delay={300}>
      <div className="accent-line" />
    </ScrollReveal>
  </div>

  {/* Bottom: Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 auto-rows-fr">

    {features.map((feature, index) => (
      <ScrollReveal key={feature.title} delay={200 + index * 100}>
      <HoverCard
  title={feature.title}
  description={feature.description}
  videoSrc={feature.video} // 🔥 REQUIRED
  className="bg-card border border-border/30 min-h-[380px]"
/>

      </ScrollReveal>
    ))}
  </div>
</div>

      </div>
      
    </section>
  );
};

export default AutonomousDock;
