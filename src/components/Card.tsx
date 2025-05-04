
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'glass';
  hover?: boolean;
}

const Card = ({ 
  children, 
  className = '', 
  variant = 'default', 
  hover = false 
}: CardProps) => {
  const variantClasses = {
    default: 'bg-secondary',
    outline: 'bg-transparent border border-white/10',
    glass: 'glass-morphism'
  };
  
  const hoverClasses = hover ? 'transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg' : '';
  
  return (
    <div className={`rounded-xl p-6 ${variantClasses[variant]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
