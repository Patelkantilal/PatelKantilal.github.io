
import { ReactNode } from 'react';
import Card from './Card';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Card 
      variant="glass" 
      hover 
      className="h-full flex flex-col items-center text-center p-8 group"
    >
      <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
};

export default ServiceCard;
