import ScrollReveal from '../ScrollReveal';

const Contact = () => {
  const contacts = [
    {
      label: 'Email',
      value: 'contact@grapeuav.com',
      href: 'mailto:contact@grapeuav.com',
    },
    {
      label: 'LinkedIn',
      value: 'Grape UAV',
      href: 'https://linkedin.com/company/grapeuav',
    },
    {
      label: 'Location',
      value: 'IIT Bhubaneswar Research and Entrepreneurship Park, Odisha, India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <span className="text-caption text-primary mb-4 block">Contact</span>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h2 className="text-headline text-foreground mb-16">
            Get in touch
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {contacts.map((contact, index) => (
            <ScrollReveal key={contact.label} delay={200 + index * 100}>
              <div className="border-t border-border/30 pt-6">
                <span className="text-caption text-muted-foreground block mb-3">
                  {contact.label}
                </span>
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-foreground hover:text-primary transition-colors duration-300 leading-relaxed"
                >
                  {contact.value}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
