
import { useEffect, useState, useRef } from 'react';

interface ProgressBarProps {
  label: string;
  percentage: number;
  animationDelay?: number;
}

const ProgressBar = ({ label, percentage, animationDelay = 0 }: ProgressBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setWidth(percentage);
          }, animationDelay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [percentage, animationDelay]);

  return (
    <div ref={progressRef} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium">{width}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
