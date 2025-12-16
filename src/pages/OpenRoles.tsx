import ScrollReveal from '../components/ScrollReveal';

const roles = [
  {
    title: 'Robotics Engineer',
    location: 'Bhubaneswar / Remote',
    type: 'Full-time',
    description:
      'Work on autonomous docking systems, embedded control, and real-world robotic deployments.',
  },
  {
    title: 'Computer Vision Engineer',
    location: 'Remote',
    type: 'Intern / Full-time',
    description:
      'Develop perception pipelines for precision landing, tracking, and low-light environments.',
  },
  {
    title: 'Full Stack Engineer',
    location: 'Remote',
    type: 'Intern',
    description:
      'Build internal tools, dashboards, and mission control interfaces for autonomous systems.',
  },
];

const OpenRoles = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <ScrollReveal>
            <span className="text-caption text-primary mb-4 block">
              Careers at Grape UAV
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-headline text-foreground mb-6">
              Open Roles
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-body text-muted-foreground">
              Join us in building autonomous ground infrastructure that enables
              persistent aerial operations across critical environments.
            </p>
          </ScrollReveal>
        </div>

        {/* Roles */}
        <div className="grid gap-6 mb-24">
          {roles.map((role, index) => (
            <ScrollReveal key={role.title} delay={index * 100}>
              <div className="border border-border/30 rounded-lg p-6 hover:bg-secondary/20 transition">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {role.title}
                </h3>

                <div className="text-sm text-muted-foreground mb-4">
                  {role.location} • {role.type}
                </div>

                <p className="text-body text-muted-foreground">
                  {role.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Application Form */}
        <ScrollReveal>
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Apply Now
            </h2>

            <form className="grid gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="input"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                className="input"
                required
              />

              <input
                type="text"
                placeholder="Role you're applying for"
                className="input"
                required
              />

              <textarea
                placeholder="Tell us about yourself"
                rows={5}
                className="textarea"
              />

              <input
                type="url"
                placeholder="Portfolio / GitHub / LinkedIn (optional)"
                className="input"
              />

              <button type="submit" className="btn-primary w-fit">
                Submit Application
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OpenRoles;
