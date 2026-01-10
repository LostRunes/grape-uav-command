import { useState } from "react";

const FooterGroup = ({ title, links }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full md:w-auto">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between md:cursor-default md:pointer-events-none"
        aria-expanded={open}
      >
        <p className="text-sm font-medium text-foreground">{title}</p>
        <span className="md:hidden text-muted-foreground">
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        className={`mt-4 space-y-3 text-sm transition-all ${
          open ? "block" : "hidden"
        } md:block`}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="block text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="text-xl font-bold tracking-tight text-foreground">
              GRAPE<span className="text-primary">UAV</span>
            </span>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Autonomous infrastructure for continuous drone operations.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <FooterGroup
              title="Company"
              links={[
                { label: "Mission", href: "/about" },
                { label: "Technology", href: "#index" },
                { label: "Leadership", href: "/team" },
                // { label: "Newsroom", href: "#news" },
              ]}
            />

            <FooterGroup
              title="Work with us"
              links={[
                { label: "Careers", href: "/careers" },
                // { label: "Internships", href: "#internships" },
                { label: "Open Roles", href: "/careers/open-roles" },
              ]}
            />

            <FooterGroup
              title="Social"
              links={[
                { label: "LinkedIn", href: "https://www.linkedin.com/company/grape-uav" },
                // { label: "X (Twitter)", href: "#" },
                // { label: "Instagram", href: "#" },
                // { label: "YouTube", href: "#" },
              ]}
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between gap-6 text-xs text-muted-foreground">
          <div className="flex flex-wrap gap-6">
            <p>© {new Date().getFullYear()} Grape UAV</p>
            <a href="#privacy" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-foreground">
              Terms of Use
            </a>
          </div>

          <div>
            <p className="font-medium text-foreground">Contact</p>
            <a
              href="mailto:contact@grapeuav.com"
              className="hover:text-foreground transition-colors"
            >
              contact@grapeuav.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
