
import { ArrowRight, ChevronsDown } from 'lucide-react';
import Button from '../components/Button';

const HomeSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full filter blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl animate-pulse-subtle"></div>
      
      <div className="container mx-auto px-6 md:px-12 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm bg-white/10 backdrop-blur-sm border border-white/10">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="mt-6 text-5xl md:text-4xl lg:text-7xl font-display font-bold tracking-tight">
            <span 
              className="block text-gradient animate-fade-in opacity-0" 
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              CRAFTING DIGITAL 
            </span>
            <span 
              className="block text-gradient animate-fade-in opacity-0" 
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
            >
              EXPERIENCES
            </span>
          </h1>
          
          <p 
            className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in opacity-0"
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
          >
            I design and build digital experiences that are intuitive, accessible, 
            and visually stunning. Let's create something amazing together.
          </p>
          
          <div 
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0"
            style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
          >
            <Button 
              href="#projects" 
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              View My Work
            </Button>
            <Button 
              href="#contact" 
              variant="outline"
              size="lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - centered for all screen sizes */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce w-full text-center">
        <a href="#about" className="inline-flex flex-col items-center text-muted-foreground hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronsDown className="w-6 h-6" />
        </a>
      </div> */}
    </section>
  );
};

export default HomeSection;
