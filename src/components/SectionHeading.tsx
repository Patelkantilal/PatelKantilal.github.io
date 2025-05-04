
import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  decorative?: ReactNode;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  decorative,
  className = '',
}: SectionHeadingProps) => {
  return (
    <div className={`space-y-2 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {decorative && <div className="mb-4">{decorative}</div>}
      <div className="relative inline-block">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-gradient">
          {title}
        </h2>
        <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
          {subtitle}
        </p>
      )}
      <div className="section-divider"></div>
    </div>
  );
};

export default SectionHeading;
