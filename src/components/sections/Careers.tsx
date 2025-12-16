import ScrollReveal from '../ScrollReveal';

const Careers = () => {
  return (
    <section id="careers" className="py-24 md:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-caption text-primary mb-4 block">Careers</span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="text-headline text-foreground mb-6">
              Build the ground layer for 24/7 autonomous drones
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-body text-muted-foreground mb-12">
              We're looking for engineers, researchers, and operators who want to 
              build critical infrastructure for India's autonomous future. Join us 
              in solving hard problems that matter.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
         <a href="/careers/open-roles" className="btn-primary inline-flex">
  View Open Roles
</a>

          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Careers;
