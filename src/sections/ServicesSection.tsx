
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { Code, Database, Globe, BarChart, Server, Brain } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: 'Software Development',
      description: 'Creating robust, scalable software solutions tailored to your specific business needs and requirements.',
    },
    {
      icon: <Database className="w-6 h-6 text-white" />,
      title: 'Data Engineering',
      description: 'Building efficient data pipelines and infrastructure to collect, process, and store data securely.',
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: 'Web Development',
      description: 'Building fast, responsive and scalable websites with modern technologies and best practices.',
    },
    {
      icon: <BarChart className="w-6 h-6 text-white" />,
      title: 'Data Analytics',
      description: 'Transforming raw data into meaningful insights to drive better business decisions and strategies.',
    },
    {
      icon: <Server className="w-6 h-6 text-white" />,
      title: 'Big Data',
      description: 'Handling and processing large volumes of data to extract valuable patterns and information.',
    },
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: 'Machine Learning',
      description: 'Creating intelligent systems that learn from data to automate decisions and predict outcomes.',
    },
  ];
  
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="SERVICES"
          subtitle="What I can do for you"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
