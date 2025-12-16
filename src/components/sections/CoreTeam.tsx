import ScrollReveal from '../ScrollReveal';

const CoreTeam = () => {
  const team = [
    {
      name: 'Santrupta Mishra',
      role: 'Co-Founder',
      bio: 'Leading hardware and systems integration.',
    },
   
    {
      name: 'Shreyansh Ray',
      role: 'Head of Corporate Relations and Operations',
      bio: 'Building strategic partnerships and business development.',
    },
  ];

  return (
    <section id="team" className="py-24 md:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <span className="text-caption text-primary mb-4 block">Core Team</span>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h2 className="text-headline text-foreground mb-16">
            The people building the future
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {team.map((member, index) => (
            <ScrollReveal key={member.name} delay={200 + index * 100}>
              <div className="group">
                {/* Portrait Placeholder */}
                <div className="aspect-[3/4] bg-card border border-border/30 mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-card flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                    <span className="text-6xl font-bold text-border/30">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                {/* Info */}
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
