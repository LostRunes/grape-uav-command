import ScrollReveal from '../ScrollReveal';

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
     <video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover opacity-30"
>
  <source src="/grapelogo.mp4" type="video/mp4" />
</video>

<div className="absolute inset-0 bg-black/35" />

        {/* <div className="video-overlay-subtle" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <ScrollReveal>
            <span className="text-caption text-primary mb-4 block">About Grape UAV</span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="text-headline text-foreground mb-8">
              Building autonomous infrastructure for India's aerial future
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-body leading-relaxed">
                Grape UAV is pioneering autonomous drone infrastructure with a focus on 
                continuous aerial operations. Our technology eliminates the limitations 
                of traditional drone deployment – battery constraints, manual intervention, 
                and operational gaps.
              </p>
              <p className="text-body leading-relaxed">
                Founded by engineers and researchers from IIT Bhubaneswar, we combine 
                deep expertise in robotics, computer vision, and aerospace engineering 
                to build systems that operate reliably in the most demanding conditions.
              </p>
              <p className="text-body leading-relaxed">
                Our mission is to provide India with world-class autonomous systems 
                that enhance security, enable rapid response, and deliver persistent 
                situational awareness across critical infrastructure, borders, and 
                strategic assets.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="mt-12 pt-8 border-t border-border/30">
              <div className="flex flex-wrap gap-12 md:gap-20">
                <div>
                  <span className="text-3xl md:text-4xl font-bold text-primary">2023</span>
                  <p className="text-sm text-muted-foreground mt-1">Founded</p>
                </div>
                <div>
                  <span className="text-3xl md:text-4xl font-bold text-primary">IIT</span>
                  <p className="text-sm text-muted-foreground mt-1">Incubated</p>
                </div>
                <div>
                  <span className="text-3xl md:text-4xl font-bold text-primary">24/7</span>
                  <p className="text-sm text-muted-foreground mt-1">Operations</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
