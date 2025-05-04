
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Download, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const handleDownloadCV = () => {
    // Create a link to download the sample CV PDF
    const link = document.createElement('a');
    link.href = './src/Resume/Resume.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="ABOUT ME"
          subtitle="Get to know me better"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent z-10"></div>
              <img 
                src="./src/Image/KP.png" 
                alt="Professional portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6 flex flex-col justify-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Who am I?</h3>
              <p className="text-muted-foreground mb-4">
              I’m a passionate software developer and full-stack engineer who loves building end-to-end solutions. From creating smooth user interfaces to optimizing back-end processes, I focus on writing clean, efficient code.
              </p>
              <p className="text-muted-foreground">
              I also have a strong interest in data engineering, working with large datasets to build reliable pipelines and extract meaningful insights. My goal is to create systems that are both scalable and impactful.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium mb-2">Name</h4>
                <p className="text-muted-foreground">Kanti Patel</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Email</h4>
                <p className="text-muted-foreground">kantipatel1422@gmail.com</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Location</h4>
                <p className="text-muted-foreground">Ahmeadabad, Gujrat.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Availability</h4>
                <p className="text-muted-foreground">Available for work</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                icon={<Download className="w-4 h-4" />}
                onClick={handleDownloadCV}
              >
                Download CV
              </Button>
              <Button 
                variant="outline" 
                href="#contact"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
