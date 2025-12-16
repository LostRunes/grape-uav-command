import ScrollReveal from '../ScrollReveal';

const IncubationBanner = () => {
  return (
    <section className="py-12 md:py-16 border-y border-border/30 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-4">
            {/* Text */}
            <span className="text-caption text-muted-foreground">
              Incubated at
            </span>

            {/* Logo */}
            <img
              src="https://i.ibb.co/kVrWw5nz/IIT-REP-LOGO-sm.png"
              alt="IIT Bhubaneswar"
              className="h-20 opacity-80 -translate-x-2"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IncubationBanner;
