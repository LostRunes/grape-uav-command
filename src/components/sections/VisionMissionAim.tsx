import ScrollReveal from '../ScrollReveal';

const VisionMissionAim = () => {
  const items = [
    {
      label: 'Vision',
      content:
        'A world where autonomous aerial systems provide persistent, reliable coverage for security, infrastructure, and emergency response – operating continuously without human limitations.',
    },
    {
      label: 'Mission',
      content:
        'To engineer and manufacture world-class autonomous drone infrastructure in India, enabling organizations to achieve 24/7 aerial operations with unprecedented reliability and efficiency.',
    },
    {
      label: 'Aim',
      content:
        'To become India\'s leading provider of autonomous ground stations and supporting infrastructure for continuous drone operations across defence, enterprise, and public safety sectors.',
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <span className="text-caption text-primary mb-4 block">Our Direction</span>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h2 className="text-headline text-foreground mb-16 max-w-2xl">
            Purpose-driven innovation
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <ScrollReveal key={item.label} delay={200 + index * 100}>
              <div className="group h-full border border-border/30 p-8 md:p-10 hover:border-primary/30 transition-colors duration-500">
                <span className="text-caption text-muted-foreground mb-6 block">
                  {item.label}
                </span>
                <p className="text-foreground leading-relaxed">
                  {item.content}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionAim;
