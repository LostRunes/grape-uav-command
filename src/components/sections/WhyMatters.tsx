import ScrollReveal from '../ScrollReveal';

const WhyMatters = () => {
  const points = [
    {
      stat: '24/7',
      label: 'Continuous Surveillance',
      description: 'Uninterrupted aerial coverage without human intervention or downtime.',
    },
    {
      stat: '<90s',
      label: 'Battery Swap Time',
      description: 'Rapid automated battery exchange to minimize operational gaps.',
    },
    {
      stat: '100%',
      label: 'Autonomous Operation',
      description: 'Fully automated launch, land, and recharge cycles.',
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <span className="text-caption text-primary mb-4 block">Why 24/7 Matters</span>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h2 className="text-headline text-foreground mb-6 max-w-3xl">
            Traditional drone operations are limited by battery life
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="text-body text-muted-foreground max-w-2xl mb-16">
            Manual battery swaps, pilot fatigue, and operational gaps create blind spots 
            in critical surveillance. The Grape Dock eliminates these limitations.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {points.map((point, index) => (
            <ScrollReveal key={point.label} delay={300 + index * 100}>
              <div className="border-t border-border/50 pt-8">
                <span className="text-4xl md:text-5xl font-bold text-primary mb-2 block">
                  {point.stat}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {point.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMatters;
