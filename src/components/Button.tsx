
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  icon,
  iconPosition = 'right',
  href,
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none relative group overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-white text-black hover:bg-gray-200 shadow-sm',
    outline: 'bg-transparent border border-white/20 text-white hover:bg-white/10',
    ghost: 'bg-transparent text-white hover:bg-white/10'
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-2 rounded-lg',
    md: 'text-base px-6 py-2.5 rounded-lg',
    lg: 'text-lg px-8 py-3 rounded-xl'
  };
  
  const iconClasses = icon ? 'inline-flex items-center gap-2' : '';
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${iconClasses} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && <span className="relative z-10">{icon}</span>}
      <span className="absolute inset-0 w-full transform scale-x-0 origin-right transition-transform duration-500 bg-gray-300/50 group-hover:scale-x-100 group-hover:origin-left"></span>
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={allClasses}>
        {content}
      </a>
    );
  }
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={allClasses} 
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
