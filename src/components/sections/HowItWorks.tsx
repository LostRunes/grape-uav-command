import { useState } from 'react';
import ScrollReveal from '../ScrollReveal';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Land',
      description:
        'Drone returns to dock using precision GPS and computer vision for centimeter-accurate landing on the charging pad.',
      detail: 'Multi-sensor fusion ensures reliable landing in low visibility, high winds, and adverse weather conditions.',
    },
    {
      number: '02',
      title: 'Swap',
      description:
        'Automated mechanism removes depleted battery and installs a fully charged unit in under 90 seconds.',
      detail: 'Hot-swap capability maintains system power throughout the exchange, preserving flight logs and mission data.',
    },
    {
      number: '03',
      title: 'Launch',
      description:
        'Drone executes pre-programmed mission or awaits rapid-dispatch commands from the command center.',
      detail: 'Adaptive mission planning adjusts routes based on weather, airspace restrictions, and priority targets.',
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <span className="text-caption text-primary mb-4 block">How It Works</span>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h2 className="text-headline text-foreground mb-16 max-w-2xl">
            Seamless cycle for continuous operation
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={200 + index * 100}>
              <div
                className={`group cursor-pointer transition-all duration-500 ${
                  activeStep === index ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                }`}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl md:text-6xl font-bold text-border/60 group-hover:text-primary/30 transition-colors duration-500">
                    {step.number}
                  </span>
                  <div className={`h-[1px] flex-1 transition-all duration-500 ${
                    activeStep === index ? 'bg-primary' : 'bg-border/30'
                  }`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Detail - shows on active */}
                <p className={`text-sm text-muted-foreground/70 leading-relaxed transition-all duration-500 ${
                  activeStep === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  {step.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
