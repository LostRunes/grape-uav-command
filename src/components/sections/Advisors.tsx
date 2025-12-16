import ScrollReveal from '../ScrollReveal';

const Advisors = () => {
  const advisors = [
    {
      name: 'Advisory Board Member',
      role: 'Strategic Advisor',
      description: 'Providing guidance on defence sector partnerships and government relations.',
    },
    {
      name: 'Advisory Board Member',
      role: 'Technical Advisor',
      description: 'Supporting R&D strategy and technology roadmap development.',
    },
    {
      name: 'Advisory Board Member',
      role: 'Industry Advisor',
      description: 'Advising on market entry and enterprise sales strategy.',
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <span className="text-caption text-primary mb-4 block">Board of Advisors</span>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h2 className="text-headline text-foreground mb-16 max-w-2xl">
            Guided by experience
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {advisors.map((advisor, index) => (
            <ScrollReveal key={index} delay={200 + index * 100}>
              <div className="group border-t border-border/30 py-8 md:py-10">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {advisor.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{advisor.role}</p>
                  </div>
                  <p className="md:w-2/3 text-muted-foreground">
                    {advisor.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advisors;
