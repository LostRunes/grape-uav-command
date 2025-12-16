import ScrollReveal from '../ScrollReveal';
import HoverCard from '../HoverCard';

const AutonomousDock = () => {
  const features = [
    {
      title: 'Precision Landing',
      description: 'AI-guided landing system ensures accurate docking in adverse weather conditions and low visibility.',
    },
    {
      title: 'Instant Battery Swap',
      description: 'Automated mechanism replaces depleted batteries with fully charged units in under 90 seconds.',
    },
    {
      title: 'Autonomous Launch',
      description: 'Pre-programmed mission execution with adaptive route planning based on real-time conditions.',
    },
    {
      title: 'All-Weather Housing',
      description: 'Military-grade enclosure protects drone and equipment from dust, rain, and extreme temperatures.',
    },
  ];

  return (
    <section id="dock" className="py-24 md:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left - Text */}
          <div className="lg:sticky lg:top-32">
            <ScrollReveal>
              <span className="text-caption text-primary mb-4 block">The Autonomous Dock</span>
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

          {/* Right - Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={200 + index * 100}>
                <HoverCard
                  title={feature.title}
                  description={feature.description}
                  className="bg-card border border-border/30"
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
