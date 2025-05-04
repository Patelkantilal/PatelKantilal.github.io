
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const ProjectCard = ({
  id,
  title,
  description,
  image,
  tags,
  demoUrl,
  repoUrl,
}: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="relative overflow-hidden rounded-xl group h-full">
      {/* Image with blur up animation */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <div className={`absolute inset-0 bg-secondary animate-pulse ${isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity`}></div>
        <img
          src={image}
          alt={title}
          className={`object-cover w-full h-full transition-all duration-700 scale-105 group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      {/* Hover overlay */}
      <div className="project-card-hover group-hover:opacity-100">
        <div className="p-6 text-center max-w-xs">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-300 mb-4 line-clamp-3">{description}</p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 bg-white/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
