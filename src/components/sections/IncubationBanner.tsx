import ScrollReveal from '../ScrollReveal';

const IncubationBanner = () => {
  return (
    <section className="py-12 md:py-16 border-y border-border/30 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="text-caption text-muted-foreground text-center">
            Incubated at{' '}
            <span className="text-foreground">
              IIT Bhubaneswar Research and Entrepreneurship Park
            </span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IncubationBanner;
