
import { ReactNode } from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  icon?: ReactNode;
}

export const TimelineItem = ({ date, title, subtitle, children, icon }: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-8 group">
      {/* Line */}
      <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-white/20 to-white/5 group-last:bg-gradient-to-b group-last:from-white/20 group-last:to-transparent"></div>
      
      {/* Dot */}
      <div className="absolute top-0 left-0 w-5 h-5 -translate-x-1/2 rounded-full bg-background border border-white/20 z-10 overflow-hidden">
        {icon ? (
          <div className="flex items-center justify-center h-full w-full">
            {icon}
          </div>
        ) : (
          <div className="absolute inset-[3px] rounded-full bg-white"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground">{date}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        {subtitle && <div className="text-md text-muted-foreground">{subtitle}</div>}
        <div className="mt-2 text-muted-foreground">{children}</div>
      </div>
    </div>
  );
};

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

const Timeline = ({ children, className = '' }: TimelineProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {children}
    </div>
  );
};

export default Timeline;
