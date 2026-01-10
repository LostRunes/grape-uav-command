import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/* 🔹 NEW: import glass-nav components */
import NavItem from './navigation/NavItem';
import CompanyDropdown from './navigation/CompanyDropdown';
import TeamDropdown from './navigation/TeamDropdown';
import CareersDropdown from './navigation/CareersDropdown';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Grape UAV"
              className="h-20 md:h-13 w-auto"
            />
          </a>

          {/* ===================== DESKTOP NAV ===================== */}
          <div className="hidden md:flex items-center gap-8">
           
 <NavItem label="Technology" href="/" />


            {/* 🔹 CHANGED: About → glass dropdown */}
            <NavItem label="About">
              <CompanyDropdown />
            </NavItem>

            {/* 🔹 CHANGED: Team → glass dropdown */}
            <NavItem label="Team">
              <TeamDropdown />
            </NavItem>

             <NavItem label="Careers">
              <CareersDropdown />
            </NavItem>

            {/* 🔹 NORMAL links stay simple */}
           
            {/* <NavItem label="Careers" href="/careers" /> */}
            <NavItem label="Contact" href="/contact" />

          </div>

          {/* ===================== MOBILE BUTTON ===================== */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ===================== MOBILE MENU (UNCHANGED) ===================== */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-sm border-b border-border/30 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          <a href="/" onClick={() => setIsMobileMenuOpen(false)}>Technology</a>
          <a href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="/team" onClick={() => setIsMobileMenuOpen(false)}>Team</a>
          <a href="/careers" onClick={() => setIsMobileMenuOpen(false)}>Careers</a>
          <a href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
