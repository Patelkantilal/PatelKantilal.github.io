import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Button from '../components/Button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: 'Location',
      value: 'Ahmedabad, Gujrat.',
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: 'Phone Number',
      value: '(+91) 95108 33402',
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: 'Email Address',
      value: 'kantipatel1422@gmail.com',
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: 'Working Hours',
      value: 'Monday - Friday: 9AM - 6PM',
    },
  ];
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="CONTACT US"
          subtitle="Get in touch with Me to discuss your next project or schedule a consultation."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              variant="glass" 
              hover
              className="p-6 text-center group transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  {info.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{info.title}</h3>
              <p className="text-muted-foreground">{info.value}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Button 
            variant="primary"
            size="lg"
            className="px-12"
            href="mailto:kantipatel1422@gmail.com"
          >
            Say Hello..!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
