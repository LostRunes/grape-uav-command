const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Logo */}
          <div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              GRAPE<span className="text-primary">UAV</span>
            </span>
            <p className="text-sm text-muted-foreground mt-2">
              Autonomous infrastructure for continuous drone operations
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <a href="#dock" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Technology
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Careers
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Grape UAV. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Engineered in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
