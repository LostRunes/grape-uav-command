import ScrollReveal from '../ScrollReveal';

const KeyAdvantages = () => {
  const advantages = [
    {
      title: 'Continuous Operation',
      description: 'Eliminate downtime with automated battery swapping that keeps your drones airborne 24/7, 365 days a year.',
    },
    {
      title: 'Lower Operational Cost',
      description: 'Reduce personnel requirements and manual intervention, cutting operational expenses by up to 70%.',
    },
    {
      title: 'Consistent Performance',
      description: 'Automated systems maintain precision and reliability that exceeds human operator capabilities.',
    },
    {
      title: 'Rugged Construction',
      description: 'Military-grade materials and IP65 rating ensure reliable operation in extreme conditions.',
    },
    {
      title: 'Faster Incident Response',
      description: 'Rapid dispatch capability enables sub-5-minute response to security events and emergencies.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <span className="text-caption text-primary mb-4 block">Key Advantages</span>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h2 className="text-headline text-foreground mb-16 max-w-2xl">
            Operational superiority through automation
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {advantages.map((advantage, index) => (
            <ScrollReveal key={advantage.title} delay={150 + index * 50}>
              <div className="group border-t border-border/30 py-8 md:py-10 flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                <div className="md:w-1/3">
                  <span className="text-xs text-muted-foreground/50 font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {advantage.title}
                  </h3>
                </div>
                <p className="md:w-2/3 text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAdvantages;
