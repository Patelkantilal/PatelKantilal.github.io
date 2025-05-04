import { Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 glass-morphism mt-20">
      <div className="container mx-auto">        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-x-4">
            <a 
              href="https://www.instagram.com/kartik_1422" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/kantipatel14/" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/kanti1422" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              <li>
                <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;