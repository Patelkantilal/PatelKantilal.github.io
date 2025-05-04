
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, User, Code, Briefcase, FolderKanban, Mails, Menu as MenuIcon } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home', icon: <Home className="w-4 h-4" /> },
  { name: 'About', href: '#about', icon: <User className="w-4 h-4" /> },
  { name: 'Skills', href: '#skills', icon: <Code className="w-4 h-4" /> },
  { name: 'Resume', href: '#resume', icon: <Briefcase className="w-4 h-4" /> },
  { name: 'Services', href: '#services', icon: <MenuIcon className="w-4 h-4" /> },
  { name: 'Projects', href: '#projects', icon: <FolderKanban className="w-4 h-4" /> },
  { name: 'Contact', href: '#contact', icon: <Mails className="w-4 h-4" /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScrolled = scrollY > 20;
      
      if (newScrolled !== scrolled) {
        setScrolled(newScrolled);
      }
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close menu when a nav item is clicked
  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header 
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass-morphism shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold tracking-tighter text-gradient">
          KP<span className="text-white">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-1 py-2 flex items-center space-x-1 transition-colors hover:text-white ${
                activeSection === link.href.substring(1) ? 'text-white' : 'text-gray-400'
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
              {activeSection === link.href.substring(1) && (
                <span className="nav-indicator w-full" />
              )}
            </a>
          ))}
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden z-50 text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        
        {/* Mobile Navigation Menu - Added a solid background color to prevent content showing through */}
        <div 
          className={`fixed inset-0 z-40 bg-background backdrop-blur-xl flex flex-col justify-center transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col items-center space-y-6 p-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xl flex items-center space-x-2 p-2 transition-all hover:text-white hover:scale-105 ${
                  activeSection === link.href.substring(1) ? 'text-white font-medium' : 'text-gray-400'
                }`}
                onClick={handleNavClick}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
