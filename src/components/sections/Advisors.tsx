import ScrollReveal from '../ScrollReveal';

const Advisors = () => {
const advisors = [
  {
    name: 'Dr. Suman Bhattacharya',
    role: 'AI SYSTEMS ADVISOR',
    description:
      'Advising on AI-driven autonomy, intelligent perception systems, and integration of advanced analytics into UAV platforms.',
    linkedin: 'https://www.linkedin.com/in/sumanity/',
  },
  {
    name: 'Brig. Kshirod Kumar Nayak',
    role: 'DEFENCE ADVISOR',
    description:
      'Providing strategic guidance on defence operations, military requirements, and alignment with national security objectives.',
    linkedin: 'https://www.linkedin.com/in/kshirod-kumar-nayak',
  },
  {
    name: 'Dr. Nitin Sharma',
    role: 'MECHANICAL SYSTEMS ADVISOR',
    description:
      'Guiding mechanical design, structural integrity, and system-level optimization for reliable UAV performance.',
    linkedin: 'https://www.linkedin.com/in/nitin-sharma-38191349/',
  },
  {
    name: 'Dr. Upali Aparajita Dash',
    role: 'WIRELESS SYSTEM ADVISOR',
    description:
      'Advising on wireless communication systems, secure data links, and robust connectivity for mission-critical operations.',
    linkedin: 'https://www.linkedin.com/in/upali-aparajita-dash-a8ab2a356/',
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
                  <h3 className="text-xl font-semibold transition-colors duration-300">
  <a
    href={advisor.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground hover:text-primary inline-flex items-center gap-2"
  >
    {advisor.name}
    <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
      ↗
    </span>
  </a>
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
